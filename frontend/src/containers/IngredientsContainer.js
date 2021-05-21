import React from 'react';
import IngredientsInput from '../components/IngredientsInput';

class IngredientsContainer extends React.Component {

    render(){
        return (
            <div>
                <IngredientsInput recipe={this.props.recipes} />
            </div>
        )
    }
}

export default IngredientsContainer;