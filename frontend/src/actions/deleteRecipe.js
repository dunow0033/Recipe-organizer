// export const deleteRecipe = (recipeId, history) => {
//     return (dispatch) => {
//         return fetch(`http://localhost:3001/recipes/${recipeId}`, {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             },
//             method: 'DELETE'
//         })
//         .then(res => res.json())
//         .then(recipe => {
//             history.push('/');
//             dispatch({type: 'DELETE_RECIPE', payload: recipe})
//         });
//     };
//   };