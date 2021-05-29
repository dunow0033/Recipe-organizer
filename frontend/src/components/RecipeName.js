import React from 'react';
import './headingStyles.css';

const RecipeName = ({recipe}) => {
    return (
        <h2 id="heading">
            Add ingredients and instructions for <span>{recipe.name}</span>
        </h2>
    )
}

export default RecipeName