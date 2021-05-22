import React from 'react';
import IngredientsInput from '../components/IngredientsInput';
import Ingredients from '../containers/Ingredients';

class IngredientsContainer extends React.Component {

    render(){
        return (
            <div>
                <IngredientsInput />
                <Ingredients />
            </div>
        )
    }
}

export default IngredientsContainer;