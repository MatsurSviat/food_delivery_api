import {
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Put,
  UseInterceptors,
} from "@nestjs/common";

import type { IAuthData } from "@models/interfaces";
import { ApiController, AuthenticatedUser } from "@core/decorators";

import type { SelfResponse } from "../models";
import { UserService } from "../services";
import { ApiParam, ApiResponse } from "@nestjs/swagger";

@ApiController("User")
@Controller("user")
export class UserController {
  constructor(private readonly _userService: UserService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get("self")
  self(@AuthenticatedUser() user: IAuthData): Promise<SelfResponse> {
    return this._userService.self(user.id);
  }

  @Get("favorite-meals")
  getFavoriteMeals(@AuthenticatedUser() user: IAuthData) {
    return this._userService.getAllFavoriteMeals(user.id);
  }

  @Put(":mealId/favorite")
  @ApiParam({
    name: "mealId",
    required: true,
    description: "Should be an id of a meal that exists in the database",
    type: String,
  })
  @ApiResponse({
    status: 200,
    description: "added a meal to favorite",
  })
  addToFavoriteMeal(
    @AuthenticatedUser() user: IAuthData,
    @Param("mealId", ParseUUIDPipe) mealId: string
  ) {
    return this._userService.addToFavorite(user.id, mealId);
  }

  @Delete(":mealId/favorite")
  deleteMealFromFavorite(
    @AuthenticatedUser() user: IAuthData,
    @Param("mealId", ParseUUIDPipe) mealId: string
  ) {
    return this._userService.deleteFromFavorite(user.id, mealId);
  }
}
