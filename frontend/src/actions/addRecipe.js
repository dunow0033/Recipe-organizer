export const addRecipe = (data) => {
    return (dispatch) => {
        return fetch('http://localhost:3001/recipes', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(recipe => {
            dispatch({type: 'ADD_RECIPE', payload: recipe})
            return recipe.id
        })
    }
}