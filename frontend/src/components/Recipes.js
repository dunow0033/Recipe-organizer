import React from 'react';
import Recipe from './Recipe';
import { Link } from 'react-router-dom';
import './table.css';

const Recipes = (props) => {

    return (
        <div>
            <Link to="/recipes/new" class="new">Make a New Recipe</Link>
            <h3 id="list">Current Recipe List: </h3>
                {props.recipes && props.recipes.map(recipe => 
                    <div class="flexbox-container" key={recipe.id}>
                        <Recipe recipe={recipe} />
                    </div> 
                )}
        </div>
    )
}

export default Recipes;