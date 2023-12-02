import Header from './Header/Header';
import Footer from './Footer/Footer';
import Body from './Body/Body';
import { useEffect, useState } from 'react';
import { getRecipes } from '@/services/recipes.services';

const Home = ({ setSearchTerm, idRecipe }) => {

    const [recipes, setRecipes] = useState([]);
    const [allRecipes, setAllRecipes] = useState([]);
    const [page, setPage] = useState(1);

    const fetchRecipes = async () => {
        try {
            const recipesData = await getRecipes(page);
            setRecipes(recipesData.data);
        } catch (error) {
            console.error(error);
        }
    };

    const loadMoreRecipes = () => {
        setPage(prevPage => prevPage + 1);
    };

    useEffect(() => {
        fetchRecipes();
    }, [page]);

    useEffect(() => {
        setAllRecipes(prevAllRecipes => [...prevAllRecipes, ...recipes]);
    }, [recipes]);


    return (
        <>
            <Header setSearchTerm={setSearchTerm} />
            <Body recipes={allRecipes} loadMoreRecipes={loadMoreRecipes} idRecipe={idRecipe} />
            <Footer />
        </>
    );
};

export default Home;