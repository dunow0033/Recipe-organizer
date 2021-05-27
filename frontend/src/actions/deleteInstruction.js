export const deleteInstruction = (instructionId, recipeId) => { 
    return (dispatch) => {
        return fetch(`http://localhost:3001/recipes/${recipeId}/instructions/${instructionId}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(recipe => dispatch({
            type: 'DELETE_INSTRUCTION', payload: recipe
        }))
    }
}