import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

//I want this page to have the recipe name as a header at the top,
//with a list of ingredient names as subheaders below it.  I want
//2 buttons at the bottom.  One to go back to the main page, and
//one to delete the recipe.

const RecipeConfirm = (props) => {
    
    let recipe = props.recipes.find((recipe) => recipe.id == props.match.params.id);

    return (
        <div>
            Recipe for {recipe.name}
            <br>
            </br>
            <br>
            </br>
            <Link to={`/recipes/${props.match.params.id}`}>Edit {recipe.name}</Link>
            <br>
            </br>
            <Link to="/">Recipes Home</Link>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        instructions: state.instructions,
        recipes: state.recipes
    }
}

export default connect ( mapStateToProps)(RecipeConfirm)