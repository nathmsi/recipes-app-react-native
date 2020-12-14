import {
    getRecipesByRecipeName,
    getRecipesByCategoryName,
    getRecipesByIngredientName
  } from '../data/MockDataAPI';


export const HANDLE_INPUT_CHANGED = 'handle_input_changed';


export const handleInputChaged = (value) => {
    return (dispatch) => {
        const recipeArray1 = getRecipesByRecipeName(value);
        const recipeArray2 = getRecipesByCategoryName(value);
        const recipeArray3 = getRecipesByIngredientName(value);
        const aux = [...recipeArray1,...recipeArray2,...recipeArray3]
        var recipeArray = [...new Set(aux)];
        dispatch({
            type: HANDLE_INPUT_CHANGED,
            payload: {
                value,
                data: value != '' ? recipeArray : []
            },
        })
    }
};