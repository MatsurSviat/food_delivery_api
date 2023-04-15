import type { Meal } from "@db/entities";
import { join } from "path";
import type { DeepPartial } from "typeorm";
import { v4 as uuidv4 } from "uuid";

export const FIRST_MEAL_ID = uuidv4();
export const SECOND_MEAL_ID = uuidv4();
export const THIRD_MEAL_ID = uuidv4();
export const FOURTH_MEAL_ID = uuidv4();
export const FIFTH_MEAL_ID = uuidv4();
export const SIXTH_MEAL_ID = uuidv4();

export const MEALS_FIXTURE_DATA: DeepPartial<Meal>[] = [
  {
    id: FIRST_MEAL_ID,
    img: join("meal-images", "fried_chicken.png"),
    title: "Fried chicken",
    description:
      "Spicy fried chicken served over peppers only tastes complicated.",
    price: 5,
    taste: "spicy",
    category: "asian food",
    cookTime: 15,
    rating: 4,
  },
  {
    id: SECOND_MEAL_ID,
    img: join("meal-images", "chickpea.png"),
    title: "Chickpea",
    description:
      "This meatless meal uses canned chickpeas and frozen vegetables, making it extra convenient on weekdays.",
    price: 6,
    taste: "spicy",
    category: "vegetarian",
    cookTime: 12,
    rating: 3,
  },
  {
    id: THIRD_MEAL_ID,
    img: join("meal-images", "burger.png"),
    title: "Big Tasty Burger",
    description: "Tasty, delicious, and has me craving more on the first bite.",
    price: 7,
    taste: "salty",
    category: "fast food",
    cookTime: 13,
    rating: 3,
  },
  {
    id: FOURTH_MEAL_ID,
    img: join("meal-images", "fried_noodle.png"),
    title: "Fried noodle",
    description:
      "These fried noodles are a quick, easy, and delicious recipe that all will enjoy. Try adding cooked, cubed pork or chicken.",
    price: 5,
    taste: "salty",
    category: "asian food",
    cookTime: 15,
    rating: 4,
  },
  {
    id: FIFTH_MEAL_ID,
    img: join("meal-images", "fried_rice.png"),
    title: "Fried rice",
    description:
      "Fried rice is a dish of cooked rice that has been stir-fried in a wok or a frying pan and is usually mixed with other ingredients such as eggs, vegetables, ...",
    price: 7,
    taste: "sour",
    category: "asian food",
    cookTime: 10,
    rating: 4,
  },
  {
    id: SIXTH_MEAL_ID,
    img: join("meal-images", "grilled_fish.png"),
    title: "Grilled fish",
    description:
      "Swordfish is wonderful when prepared on the grill. The firm meat holds together well and it grills a lot like a good steak.",
    price: 15,
    taste: "umami",
    category: "fish",
    cookTime: 25,
    rating: 5,
  },
];
