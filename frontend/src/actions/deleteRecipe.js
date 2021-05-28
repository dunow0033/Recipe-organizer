export const deleteRecipe = (recipeId) => {
    return (dispatch) => {
        return fetch(`http://localhost:3001/recipes/${recipeId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(recipe => 
            dispatch({type: 'DELETE_RECIPE', payload: recipe})
        )
    }
}