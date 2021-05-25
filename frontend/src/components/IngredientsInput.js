import React from 'react';
import { connect } from 'react-redux';
import { addIngredient } from '../actions/addIngredient';
import { deleteIngredient } from '../actions/deleteIngredient';
import { addInstruction } from '../actions/addInstruction';
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
            name: '',
            content: ''
        }
    }

    changeIngredient = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    changeContent = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitForm = (event) => {
        event.preventDefault();
        this.setState({
            name: '',
            content: ''
        })
        //this.props.history('/')
    }

    addIngredient = (event) => {
        let recipe = this.props.recipes.find((recipe) => recipe.id == this.props.match.params.id)

        event.preventDefault();
        this.props.addIngredient(this.state, recipe.id);
        this.setState({
            name: ''
        })
    }

    deleteIngredient = (ingredient) => {
        let recipe = this.props.recipes.find((recipe) => recipe.id == this.props.match.params.id)
        this.props.deleteIngredient(ingredient.id, recipe.id)
    }

    addInstruction = (event) => {
        let recipe = this.props.recipes.find((recipe) => recipe.id == this.props.match.params.id)

        event.preventDefault();
        this.props.addInstruction(this.state, recipe.id);
        this.setState({
            content: ''
        })
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
               <form onSubmit={this.submitForm}>
                    <input 
                        type="text" 
                        name="name" 
                        value={this.state.name} 
                        onChange={this.changeIngredient} 
                        placeholder="ingredient" />
                    <input type="button" value="Add Ingredient" onClick={this.addIngredient} />
                    <textarea 
                        name="content" 
                        value={this.state.content}
                        rows="5"
                        cols="40" 
                        onChange={this.changeContent} 
                        placeholder="instructions"></textarea>
                    <input type="button" value="Add Instruction" onClick={this.addInstruction} />
                    <input type="submit" value="Confirm Recipe" />
                </form>

                {recipe.ingredients && recipe.ingredients.map(ingredient => 
                    <li key={ingredient.id}>
                        {ingredient.name}
                        <button onClick={() => this.deleteIngredient(ingredient)}>Delete</button>
                    </li> 
                )}

                {recipe.instructions && recipe.instructions.map(instruction => 
                    <li key={instruction.id}>
                        {instruction.content}
                        {/*<button onClick={() => this.deleteInstruction(instruction)}>Delete</button>*/}
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

export default connect(mapStateToProps, { addIngredient, deleteIngredient, addInstruction } )(IngredientsInput)