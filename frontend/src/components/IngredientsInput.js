import React from 'react';
import { connect } from 'react-redux';
import { addIngredient } from '../actions/addIngredient';

// I want this page to have the recipe name as a header at the top,
// while having a text box and button right below it for adding ingredients,
// and, as the user adds ingredients, they are added to the ingredients store,
// and are populated as a list below the text box, with each list item having a delete
// button right next to it.  And then at the bottom of the page, a button for finished with
// ingredients.

class IngredientsInput extends React.Component {
    
    state = {
        name: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addIngredient(this.state, this.props.id);
        this.setState({
            name: ''
        })
    }

    addIngredient = (event) => {
        event.preventDefault();
        this.setState({
            name: ''
        })
    }

    render() {
        return (
            <div>
                {/*<h1>{`this.props.${recipeId}.name`}</h1>*/}
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="name" 
                        value={this.state.name} 
                        onChange={this.handleChange} 
                        placeholder="ingredient name" />
                    <input type="button" value="Add Ingredient" onClick={this.addIngredient} />
                    <input type="submit" value="Confirm Recipe" />
                </form>
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

export default connect(mapStateToProps, {addIngredient})(IngredientsInput)