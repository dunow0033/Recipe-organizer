import React from 'react';
import { Link } from 'react-router-dom';

const Ingredients = (props) => {

    return (
        <div>
            {props.recipes.map(recipe => 
                <li key={recipe.id}>
                    <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
                </li> 
            )}
        </div>
    )
}

export default Ingredients;