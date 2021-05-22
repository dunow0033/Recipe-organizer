export const deleteIngredient = (ingredientId, recipeId) => { 
    return (dispatch) => {
        return fetch(`http://localhost:3001/recipes/${recipeId}/ingredients/${ingredientId}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(recipe => dispatch({
            type: 'DELETE_INGREDIENT', payload: recipe
        }))
    }
}