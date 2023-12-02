import { useEffect, useState } from "react";
import Header from "../Home/Header/Header";
import Footer from "../Home/Footer/Footer";
import Body from '../Home/Body/Body';
import { getRecipes } from '@/services/recipes.services';

const UserHome = ({ setSearchTerm, loginUserInfo }) => {

    const [render, setRender] = useState(false);
    const [user, setUser] = useState(false);
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

    useEffect(() => {
        setRender(false);
        setUser(true);
    }, []);

    return (
        <>
            <Header render={render} user={user} setSearchTerm={setSearchTerm} loginUserInfo={loginUserInfo} />
            <Body user={user} recipes={allRecipes} loadMoreRecipes={loadMoreRecipes} />
            <Footer user={user} />
        </>
    );
};

export default UserHome;