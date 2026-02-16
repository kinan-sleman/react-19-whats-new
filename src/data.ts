import { faker } from "@faker-js/faker"

const Color = {
    Red: "Red",
    Green: "Green",
    Blue: "Blue"
} as const;

type Color = (typeof Color)[keyof typeof Color];

export interface Product {
    id: string;
    name: string;
    description: string;
    material: string;
    price: string;
    department: string;
    quantity: number;
    color: Color;
}

const products: Product[] = new Array(1500).fill(null).map(() => ({
    id: faker.database.mongodbObjectId(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    material: faker.commerce.productMaterial(),
    price: faker.commerce.price(),
    department: faker.commerce.department(),
    quantity: faker.number.int({min: 0, max: 100}),
    color: faker.helpers.enumValue(Color)
}))

export default products