import React from 'react';
import { connect } from 'react-redux';
import { addIngredient } from '../actions/addIngredient';
import { deleteIngredient } from '../actions/deleteIngredient';
import { addInstruction } from '../actions/addInstruction';
import { deleteInstruction } from '../actions/deleteInstruction';
//import { deleteRecipe } from '../actions/deleteRecipe';

import './table.css'

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

    deleteInstruction = (instruction) => {
        let recipe = this.props.recipes.find((recipe) => recipe.id == this.props.match.params.id)
        this.props.deleteInstruction(instruction.id, recipe.id)
    }

    // deleteRecipe = (recipeId) => {
    //     this.props.deleteRecipe(recipeId).then(() => {
    //         this.props.history.push("/");
    //         //<Redirect to="/" />
    //     });
    // }

    submitForm = (event) => {

        event.preventDefault();
        this.setState({
            name: '',
            content: ''
        })
        this.props.history.push(`/recipes/${this.props.match.params.id}/confirm`)
    }

    render() {
        let recipe = this.props.recipes.find((recipe) => recipe.id == this.props.match.params.id)

        return (
            <div>
                <h1>{recipe.name}</h1>
                    <form onSubmit={this.submitForm}>
                        <table>
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
                                placeholder="instructions">
                            </textarea>
                            <input type="button" value="Add Instruction" onClick={this.addInstruction} />
                            <input type="submit" value="Confirm Recipe" />
                        </table>
                    </form>

                    <table className="row">
                        <table className="column">
                            <tr>
                                <td>
                                    <ul>
                                    {recipe.ingredients && recipe.ingredients.map(ingredient => 
                                        <li key={ingredient.id}>
                                                {ingredient.name}
                                                <button onClick={() => this.deleteIngredient(ingredient)}>Delete</button>
                                        </li> 
                                    )}
                                    </ul>
                                </td>
                            </tr>
                    </table>
                    <table className="column">
                        <tr>
                            <td>
                                <ul>
                                {recipe.instructions && recipe.instructions.map(instruction => 
                                    <li key={instruction.id}>
                                            {instruction.content}
                                            <button onClick={() => this.deleteInstruction(instruction)}>Delete</button>
                                    </li> 
                                )}
                                </ul>
                            </td>
                        </tr>
                    </table>
                </table>

                {/*<button onClick={(e) => {e.preventDefault(); this.deleteRecipe(recipe.id)}}>Delete {recipe.name}</button>*/}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        //ingredients: state.ingredients,
        recipes: state.recipes
    }
}

// const mapDispatchToProps = () => {
//     return {
//          addThing: addThing,
//          doAnotherThing: doAnotherThing
//     }
// }

export default connect(mapStateToProps, { addIngredient, deleteIngredient, addInstruction, deleteInstruction } )(IngredientsInput)