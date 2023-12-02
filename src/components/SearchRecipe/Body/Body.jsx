import style from './Body.module.css';
import Card from '@/components/Home/Body/FeaturedRecipes/Card/Card';

const Body = ({ user, searchTerm, searchResults }) => {

    console.log(searchResults);

    return (
        <main className={`${style.main}`}>
            <section className={`${style.titleSection}`}>
                <h2 className={`${style.title}`}>
                    Resultados para: {searchTerm}
                </h2>
            </section>
            <section className={`${style.cardsSection}`}>
                {
                    searchResults.length !== 0 ?
                        searchResults.map(recipe => (
                            <Card key={recipe._id} user={user} id={recipe._id} name={recipe.nombre} description={recipe.descripcion} time={recipe.tiempo_preparación} />
                        ))
                        :
                        <h2>NO HY RESULTADOS PARA: {searchTerm}</h2>
                }
            </section>
        </main>
    );
};

export default Body;