export default function recipeReducer(state = {recipes: []}, action) {
    switch(action.type) {
        case 'FETCH_RECIPES':
            return {recipes: action.payload};
        case 'ADD_RECIPE':
            return {...state, recipes: [...state.recipes, action.payload]}
        case 'ADD_INGREDIENT':
            return {...state, recipes: state.recipes.map(recipe => {
                
            })}
        default:
            return state
    }
}