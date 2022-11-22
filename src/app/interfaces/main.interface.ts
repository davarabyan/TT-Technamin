export interface ILogin {
    userName: string;
    password: string;
}

export interface IFilter {
    filterBy: string,
    sortDir: string,
    sortBy: string

}

export interface ICard {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

