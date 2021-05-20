export function fetchRecipes() {
    return (dispatch) => {
        fetch('http://localhost:3001/recipes')
        .then(res => res.json())
        .then(recipes => dispatch({
            type: 'FETCH_RECIPES',
            payload: recipes
        }))
    }
}