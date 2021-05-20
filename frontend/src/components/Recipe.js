import React from 'react';

const Recipe = (props) => {
    return (
        <li>
            {props.recipe.name}
        </li>
    )
}

export default Recipe