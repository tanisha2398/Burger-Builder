import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";
export const addIngredient = name => {
  return {
    type: actionTypes.ADD_INGREDIENTS,
    ingredientName: name
  };
};

export const removeIngredient = name => {
  return {
    type: actionTypes.REMOVE_INGREDIENTS,
    ingredientName: name
  };
};
export const setIngredients = ingredients => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients
  };
};
export const fetchIngredientFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENT_FAILED
  };
};
export const initIngredients = () => {
  return dispatch => {
    axios
      .get("https://burger-builder-817f0.firebaseio.com/ingredients.json")
      .then(response => {
        //   console.log(response.data);
        dispatch(setIngredients(response.data));
      })
      .catch(error => {
        dispatch(fetchIngredientFailed());
      });
  };
};
