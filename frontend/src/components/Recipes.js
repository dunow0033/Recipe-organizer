import React from 'react';
import Recipe from './Recipe';
import './table.css';

const Recipes = (props) => {

    return (
        <div>
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