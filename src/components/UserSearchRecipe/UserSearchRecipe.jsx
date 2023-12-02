import Header from '../Home/Header/Header';
import Body from '../SearchRecipe/Body/Body';
import Footer from '../Home/Footer/Footer';
import { useEffect, useState } from 'react';
import { searchRecipesByName } from '@/services/recipes.services';

const UserSearchRecipe = ({ searchTerm, setSearchTerm, loginUserInfo }) => {

    const [user, setUser] = useState(true);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        setUser(false);
    }, []);

    const performSearch = async (searchTerm) => {
        try {
            const results = await searchRecipesByName(searchTerm);
            setSearchResults(results.data);
        } catch (error) {
            console.error('Error durante la búsqueda:', error.message);
        }
    };

    useEffect(() => {
        performSearch(searchTerm);
    }, [searchTerm]);

    useEffect(() => {
        setUser(true);
    }), [];

    return (

        <>
            <Header user={user} setSearchTerm={setSearchTerm} loginUserInfo={loginUserInfo} />
            <Body user={user} searchTerm={searchTerm} searchResults={searchResults} />
            <Footer user={user} />
        </>
    );
};

export default UserSearchRecipe;