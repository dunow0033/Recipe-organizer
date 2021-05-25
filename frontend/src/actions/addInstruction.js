export const addInstruction = (instruction, recipeId) => {
    return (dispatch) => {
        fetch(`http://localhost:3001/recipes/${recipeId}/instructions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(instruction)
        })
        .then(res => res.json())
        .then(recipe => dispatch({
            type: 'ADD_INSTRUCTION', payload: recipe
        }))
    }
}