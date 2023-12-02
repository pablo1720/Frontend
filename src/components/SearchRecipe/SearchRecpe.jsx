import Header from '../Home/Header/Header';
import Body from './Body/Body';
import Footer from '../Home/Footer/Footer';
import { useEffect, useState } from 'react';
import { searchRecipesByName } from '@/services/recipes.services';

const SearchRecipe = ({ searchTerm, setSearchTerm }) => {

    const [user, setUser] = useState(false);
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

    return (
        <>
            <Header user={user} setSearchTerm={setSearchTerm} />
            <Body user={user} searchTerm={searchTerm} searchResults={searchResults} />
            <Footer user={user} />
        </>
    );
};

export default SearchRecipe;