import React from 'react';
import { Link } from 'react-router-dom';
import './table.css';

const Recipes = (props) => {

    return (
        <div>
            <h3>Current Recipe List: </h3>
            <ul>
                {props.recipes && props.recipes.map(recipe => 
                    <li key={recipe.id}>
                        <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
                    </li> 
                )}
            </ul>
        </div>
    )
}

export default Recipes;