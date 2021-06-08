import React from 'react';

class Ingredient extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            number: 0
        }
    }

    increment = () => {
        this.setState({ number: this.state.number + 1 })
    }

    render(){
        return(
            <div>
                {this.props.name}<button onClick={() => this.increment()}>{this.state.number}</button>
            </div>
        )
    }
}

export default Ingredient