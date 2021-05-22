import React from 'react';

class RecipeLink extends React.Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/recipes/new' component={RecipeInput} />
                    <Link to="/recipes/new">Make a New Recipe</Link>
                </Switch>
            </div>
        )
    }
}

export default RecipeLink