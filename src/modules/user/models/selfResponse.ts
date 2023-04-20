import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";

export class SelfResponse {
    @Expose({ name: "id" })
    @ApiProperty({ name: "id" })
    user_id: string;
  
    @Expose({ name: "userName" })
    @ApiProperty({ name: "userName" })
    user_userName: string;
  
    @Expose({ name: "photo" })
    @ApiProperty({ name: "photo" })
    user_photo: string;
  
    @Expose({ name: "email" })
    @ApiProperty({ name: "email" })
    user_email: string;
  
    @Expose({ name: "adress" })
    @ApiProperty({ name: "adress" })
    user_adress: string;
  
    @ApiProperty()
    favoriteMelas: string[];
  
    constructor(partial: Partial<SelfResponse>) {
      Object.assign(this, partial);
    }
  }