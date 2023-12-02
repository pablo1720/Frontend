import style from './LoadRecipesButton.module.css';
import { FaPlus } from "react-icons/fa";

const LoadRecipesButton = ({ loadMoreRecipes }) => {

    return (
        <button className={`${style.button}`} onClick={loadMoreRecipes}>
            <FaPlus className={`${style.icon}`} /> Cargar mas
        </button>
    );
};

export default LoadRecipesButton;