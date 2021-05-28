import { Link } from 'react-router-dom';

const Recipe = ({recipe}) => {
    return (
        <div>
            <table width="20%">
                <tr>
                    <Link to={`/recipes/${recipe.id}`}><td>{recipe.name}</td></Link>
                </tr>
            </table>
        </div>
    )
}

export default Recipe;