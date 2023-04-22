export interface IItems {
    mealId: string;
    count: number;
}
export interface ICreatedOrder {
    items: IItems[];
}
export declare class CreatedOrderDto implements ICreatedOrder {
    items: IItems[];
}
