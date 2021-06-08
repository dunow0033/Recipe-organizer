export default function recipeReducer(state = { recipes: []}, action) {
    switch(action.type) {
        case 'FETCH_RECIPES':
            return {recipes: action.payload};
        case 'ADD_RECIPE':
            return {...state, recipes: [...state.recipes, action.payload]}
        case 'ADD_INGREDIENT':
            let recipes = state.recipes.map(recipe => {
                if(recipe.id === action.payload.id){
                    return action.payload
                } else {
                    return recipe
                }
            })
            return { recipes }
        case 'DELETE_INGREDIENT':
            let recipes2 = state.recipes.map(recipe => {
                if(recipe.id === action.payload.id){
                    return action.payload
                } else {
                    return recipe
                }
            })
            return {...state, recipes: recipes2}
        case 'ADD_INSTRUCTION':
            let recipes3 = state.recipes.map(recipe => {
                if(recipe.id === action.payload.id){
                    return action.payload
                } else {
                    return recipe
                }
            })
            return {...state, recipes: recipes3}
        case 'DELETE_INSTRUCTION':
                let recipes4 = state.recipes.map(recipe => {
                    if(recipe.id === action.payload.id){
                        return action.payload
                    } else {
                        return recipe
                    }
                })
                return {...state, recipes: recipes4}
        default:
            return state
    }
}