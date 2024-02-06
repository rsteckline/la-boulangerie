// Define a structure for the attributes of bread and country
export interface BreadAttributes {
    name: string;
    description: string;
    recipe: string;
}
  
export interface CountryAttributes {
    name: string;
    description: string;
}
  
  // Define the main data structure for both bread and country
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
  
  // Define the top-level structure of the API response
export interface ApiResponse {
    country: {
      data: CountryData;
    };
    breads: {
      data: BreadData[];
    };
}