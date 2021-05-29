import React from 'react';
import './headingStyles.css';

const RecipeConfirmHeading = ({recipe}) => {
    return (
        <h2 id="confirm-heading">
            Confirm recipe for <span>{recipe.name}</span>
        </h2>
    )
}

export default RecipeConfirmHeading