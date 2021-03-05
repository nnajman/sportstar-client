import { Category } from './category';

export class Product {
    _id!: string;
    name!: string;
    gender!: string;
    brand!: string;
    image!: string;
    price!: number;
    dateAdded!: Date;
    quantity!: number;
    size!: string;
    category!: Category;
    stock!: Array<{ size: string, quantity: number}>;
}     