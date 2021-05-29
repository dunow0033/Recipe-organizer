import React from 'react';
import RecipesContainer from './containers/RecipesContainer';
import './styles.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <RecipesContainer />
      </div>
    );
  }
}

export default App;