import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { addRecipe } from '../actions/addRecipe';

//I want this page to have a text box to add the recipe name at the top,
//with a button right below it to go to the add ingredients and instructions page.
//as soon as the button is hit, the recipe name is added to the recipe store, and 
//the user is redirected to the add ingredients page.

class RecipeInput extends React.Component {
       
    state = { name: '' }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addRecipe(this.state);
        const recipeIndex = this.props.recipes.length - 1;
        this.setState({
            name: ''
        });

        this.props.history.push(`/recipes/${recipeIndex}`);

        {/*<Redirect to={`/recipes/${recipeIndex}`} />*/}
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                        value={this.state.name}
                        onChange={this.handleChange} 
                        placeholder="Recipe Name"
                        name="name"
                    />
                    <input type="submit" value="Add Ingredients and Instructions" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        recipes: state.recipes
    }
}

export default connect(mapStateToProps, {addRecipe})(RecipeInput);