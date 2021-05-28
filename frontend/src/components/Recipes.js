import React from 'react';
import Recipe from './Recipe';
import './table.css';

const Recipes = (props) => {

    return (
        <div>
            <h3>Current Recipe List: </h3>
            <ul>
                {props.recipes && props.recipes.map(recipe => 
                    <li key={recipe.id}>
                        <Recipe recipe={recipe} />
                    </li> 
                )}
            </ul>
        </div>
    )
}

export default Recipes;