import React from 'react';
import { connect } from 'react-redux';
import { addIngredient } from '../actions/addIngredient';
import { deleteIngredient } from '../actions/deleteIngredient';
import { addInstruction } from '../actions/addInstruction';
import { deleteInstruction } from '../actions/deleteInstruction';
import RecipeName from './RecipeName';
import './IngredientsInput.css'

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
                <RecipeName recipe={recipe} />
                    <form onSubmit={this.submitForm}>
                        <div className="flex-container-top">
                            <div className="column">
                            <input 
                                type="text" 
                                name="name" 
                                value={this.state.name} 
                                onChange={this.changeContent} 
                                placeholder="ingredient" />
                                <input type="button" value="Add Ingredient" onClick={this.addIngredient} />
                            </div>
                            <div className="column">
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
                            </div>
                        </div>
                    </form>

                    <div className="flex-container">
                        <div className="column">
                            <tr>
                                <td>
                                    <h3>List of ingredients: </h3>
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
                    </div>
                    <div className="column">
                        <tr>
                            <td>
                                <h3>List of instructions: </h3>
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
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
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