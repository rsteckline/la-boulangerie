export interface Recipe {
  ingredients: string[];
  instructions: string[];
}

export interface BreadAttributes {
  name: string;
  description: string;
  imageUrl: string;
  recipe: Recipe;
}
  
export interface CountryAttributes {
    name: string;
    description: string;
}
  
export interface BreadData {
    id: string;
    type: string;
    attributes: BreadAttributes;
}
  
export interface CountryData {
    id: string;
    type: string;
    attributes: CountryAttributes;
  }
  
export interface ApiResponse {
    country: {
      data: CountryData;
    };
    breads: {
      data: BreadData[];
    };
}