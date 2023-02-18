export type CookType = {
  id: number;
  name: string;
  imageUrl: string;
  thumbnailImageUrl: string;
  rating: number;
  cuisines: string[];
  location: string;
  recipes: {
    id: number;

    isOrderable?: boolean;
    img: string;
    title: string;
    price: string;
    raiting: string;
    desc: string;
    prepTime: string;
    dates: string[];
  }[];
};

export type Delivery = {
  id: number;
  cookId: number;
  numberOfDeliveries: number;
};

export type Recipe = {};

export type TestimonialType = {
  id: number;
  name: string;
  desc: string;
};

// export interface ContextData {
//   cooksData: CookType[] | undefined;

//   // after filter by search
//   filterBySearch: (value: string) => void;
// }
