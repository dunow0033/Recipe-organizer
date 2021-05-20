export const addIngredient = (ingredient, recipeId) => { 
    return (dispatch) => {
        fetch(`http://localhost:3001/${recipeId}/ingredients`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ingredient)
        })
        .then(res => res.json())
        .then(ingredient => dispatch({
            type: 'ADD_INGREDIENT', payload: ingredient
        }))
    }
}