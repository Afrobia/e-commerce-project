export interface NewProduct {
    id: number;
    name: string;
    description: string;
    stock: number;
    price: number;
}

export interface ProductRequest {
    name: string;
    description: string;
    stock: number;
    price: number;
}
