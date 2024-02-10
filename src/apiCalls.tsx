import { ApiResponse } from './apiTypes';

export const fetchBreadsForCountry = (countryName: string): Promise<ApiResponse> => {
    console.log('Fetching breads for country:', countryName);
    return fetch(`https://rails-bread-face5cd9a02c.herokuapp.com/api/v1/countries/${countryName}`)
      .then(response => {
        if (!response.ok) {
          if (response.status >= 400 && response.status < 500) {
          throw new Error('Network response was not ok');
          } else if (response.status >= 500) {
          throw new Error("Something went wrong, please try again later.");
          } else {
            throw new Error(`Unexpected error. Status: ${response.status}`);
          }
        }
        return response.json();
      })
      .then(data => {
        console.log('Breads fetched successfully:', data);
        return data;
      })
      .catch(error => {
        console.error("There was a problem with the fetch operation:", error);
        throw error;
      });
};