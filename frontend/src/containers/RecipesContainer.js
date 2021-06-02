import React from 'react';
import { connect } from 'react-redux';
import { Route, Link, Switch } from 'react-router-dom'
import { fetchRecipes } from '../actions/fetchRecipes';
import Recipes from '../components/Recipes';
import RecipeInput from '../components/RecipeInput';
import RecipeConfirm from '../components/RecipeConfirm';
import IngredientsInput from '../components/IngredientsInput';


class RecipesContainer extends React.Component {
    componentDidMount(){
        this.props.fetchRecipes();
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/recipes/new' component={RecipeInput} />
                    <Route exact path='/recipes/:id' component={IngredientsInput} />
                    <Route exact path='/recipes/:id/confirm' component={RecipeConfirm} />
                    <Link to="/recipes/new" class="new">Make a New Recipe</Link>
                </Switch>
                <Switch>
                    <Route exact path='/' render={() => <Recipes recipes={this.props.recipes}/>}/>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        recipes: state.recipes
    }
}

export default connect(mapStateToProps, {fetchRecipes})(RecipesContainer);