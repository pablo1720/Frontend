import Card from '../../FeaturedRecipes/Card/Card';
import style from './RecipesContainer.module.css';

const RecipesContainer = ({ user, recipes, idRecipe }) => {

    const obtenerId = (idReceta) => {
        idRecipe(idReceta);
    };

    return (
        <div className={`${style.cardsContainer}`}>
            {
                recipes.map(recipe => (
                    <Card key={recipe._id} user={user} id={recipe._id} name={recipe.nombre} description={recipe.descripcion} time={recipe.tiempo_preparación} idRecipe={() => obtenerId(recipe._id)} />
                ))
            }
        </div>
    );
};

export default RecipesContainer;