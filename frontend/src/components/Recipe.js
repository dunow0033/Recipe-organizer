import { Link } from 'react-router-dom';
import './table.css';

const Recipe = ({recipe}) => {
    return (
        <div class="flexbox-item flexbox-item-1">
            <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
        </div>
    )
}

export default Recipe;