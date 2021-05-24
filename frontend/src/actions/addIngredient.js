export const addIngredient = (ingredient, recipeId) => {
    return (dispatch) => {
        fetch(`http://localhost:3001/recipes/${recipeId}/ingredients`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ingredient)
        })
        .then(res => res.json())
        .then(recipe => dispatch({
            type: 'ADD_INGREDIENT', payload: recipe
        }))
    }
}