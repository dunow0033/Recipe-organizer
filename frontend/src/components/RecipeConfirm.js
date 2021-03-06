import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import RecipeConfirmHeading from './RecipeConfirmHeading';
import './IngredientsInput.css'
import './table.css';

//I want this page to have the recipe name as a header at the top,
//with a list of ingredient names as subheaders below it.  I want
//2 buttons at the bottom.  One to go back to the main page, and
//one to delete the recipe.

const RecipeConfirm = (props) => {
    
    let recipe = props.recipes.find((recipe) => recipe.id == props.match.params.id);

    return (
        <div>
            <RecipeConfirmHeading recipe={recipe} />
            <br>
            </br>
            <div className="flex-container">
                <div className="column">
                            <tr>
                                <td>
                                    <h3>List of ingredients: </h3>
                                    <ul>
                                    {recipe.ingredients && recipe.ingredients.map(ingredient => 
                                        <li key={ingredient.id}>
                                                {ingredient.name}
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
                                    </li> 
                                )}
                                </ul>
                            </td>
                        </tr>
                    </div>
                </div>
            <br>
            </br>
            <div id="links">
                <Link to={`/recipes/${props.match.params.id}`} class="new">Edit {recipe.name}</Link>
                <br>
                </br>
                <Link to="/" class="new">Recipes Home</Link>
            </div>
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