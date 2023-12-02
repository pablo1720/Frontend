import style from './Body.module.css';
import IndexView from './IndexView/IndexView';
import FeaturedRecipes from './FeaturedRecipes/FeaturedRecipes';
import AllRecipes from './AllRecipes/AllRecipes';

const Body = ({ user, recipes, loadMoreRecipes, idRecipe }) => {

    return (
        <main className={`${style.main}`}>
            <IndexView user={user} />
            <FeaturedRecipes user={user} recipes={recipes} />
            <AllRecipes user={user} recipes={recipes} loadMoreRecipes={loadMoreRecipes} idRecipe={idRecipe} />
        </main>
    );
};

export default Body;