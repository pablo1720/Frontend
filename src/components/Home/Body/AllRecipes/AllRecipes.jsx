import style from './AllRecipes.module.css';
import Title from './Title/Title';
import RecipesContainer from './RecipesContainer/RecipesContainer';
import LoadRecipesButton from './LoadRecipesButton/LoadRecipesButton';

const AllRecipes = ({ user, recipes, loadMoreRecipes, idRecipe }) => {

    return (

        <section className={`${style.section}`}>
            <Title />
            <RecipesContainer user={user} recipes={recipes} idRecipe={idRecipe} />
            <LoadRecipesButton loadMoreRecipes={loadMoreRecipes} />
        </section>
    );
};

export default AllRecipes;