import React from 'react';
import { connect } from 'react-redux';
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
        this.props.addRecipe(this.state).then((id) => {
            this.props.history.push(`/recipes/${id}`);
        });

        this.setState({
            name: ''
        });
        //<Redirect to={`/recipes/${recipeIndex}`} />
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

// const mapDispatchToProps = (dispatch) => {
//     return {
//       dispatchAddRecipe: (formData) => dispatch(addRecipe(formData))
//     };
// };

export default connect(mapStateToProps, {addRecipe})(RecipeInput);