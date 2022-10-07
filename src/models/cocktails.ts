
// the response interface for the API endpoint
export interface SearchResponse{
    drinks: Cocktail[];
}

export interface Cocktail{
    strDrink: string,
    strDrinkThumb: string,
    idDrink: string
}