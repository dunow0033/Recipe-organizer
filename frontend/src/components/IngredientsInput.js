import React from 'react';
import { connect } from 'react-redux';
import { addIngredient } from '../actions/addIngredient';
import { deleteIngredient } from '../actions/deleteIngredient';
// import { Ingredients } from './Ingredients'
// import { IngredientsContainer } from '../containers/IngredientsContainer'

// I want this page to have the recipe name as a header at the top,
// while having a text box and button right below it for adding ingredients,
// and, as the user adds ingredients, they are added to the ingredients store,
// and are populated as a list below the text box, with each list item having a delete
// button right next to it.  And then at the bottom of the page, a button for finished with
// ingredients.

class IngredientsInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            ingredient: '',
            instruction: ''
        }
    }

    changeIngredient = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitIngredient = (event) => {
        event.preventDefault();
        this.setState({
            ingredient: ''
        })
        //this.props.history('/')
    }

    addIngredient = (event) => {
        let recipe = this.props.recipes.find((recipe) => recipe.id == this.props.match.params.id)

        event.preventDefault();
        this.props.addIngredient(this.state, recipe.id);
        this.setState({
            ingredient: '',
            instruction: ''
        })
    }

    // addInstruction = (event) => {
    //     let recipe = this.props.recipes.find((recipe) => recipe.id == this.props.match.params.id)

    //     event.preventDefault();
    //     this.props.addInstruction(this.state, recipe.id);
    //     this.setState({
    //         instruction: ''
    //     })
    // }

    deleteIngredient = (ingredient) => {
        let recipe = this.props.recipes.find((recipe) => recipe.id == this.props.match.params.id)
        this.props.deleteIngredient(ingredient.id, recipe.id)
    }

    // deleteInstruction = (ingredient) => {
    //     let recipe = this.props.recipes.find((recipe) => recipe.id == this.props.match.params.id)
    //     this.props.deleteIngredient(ingredient.id, recipe.id)
    // }

    render() {
        let recipe = this.props.recipes.find((recipe) => recipe.id == this.props.match.params.id)

        return (
            <div>
            <h1>{recipe.name}</h1>
               <form onSubmit={this.submitIngredient}>
                    <input 
                        type="text" 
                        name="ingredient" 
                        value={this.state.ingredient} 
                        onChange={this.changeIngredient} 
                        placeholder="ingredient" />
                    <input type="button" value="Add Ingredient" onClick={this.addIngredient} />
                    <input type="submit" value="Confirm Recipe" />
                </form>

                {recipe.ingredients && recipe.ingredients.map(ingredient => 
                    <li key={ingredient.id}>
                        {ingredient.name}
                        <button onClick={() => this.deleteIngredient(ingredient)}>Delete</button>
                    </li> 
                )} 

                {/*<Ingredients recipe={recipe} />*/}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        recipes: state.recipes
    }
}

// const mapDispatchToProps = () => {
//     return {
//          addThing: addThing,
//          doAnotherThing: doAnotherThing
//     }
// }

export default connect(mapStateToProps, { addIngredient, deleteIngredient } )(IngredientsInput)