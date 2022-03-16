import { useState, useEffect } from 'react';
import Seo from '../components/Seo';

const API_KEY = 'b3e2137ee1398d43588e8551a27763ae';

export default function Home() {
    const [movies, setMovies] = useState();

    useEffect(() => {
        (async () => {
            const { results } = await (
                await fetch(
                    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
                )
            ).json();
            setMovies(results);
        })();
    }, []);

    return (
        <div>
            <Seo title={'Home'} />
            {!movies && <h4>Loading...</h4>}
            {movies?.map((movie) => (
                <div key={movie.id}>
                    <h4>{movie.original_title}</h4>
                </div>
            ))}
        </div>
    );
}
