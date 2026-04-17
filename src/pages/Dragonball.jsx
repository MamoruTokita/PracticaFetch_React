import{useState, useEffect} from 'react';

import DragonBallCard from '../components/DragonballCard.jsx'

const DragonBall = () => {

const apiUrl = 'https://dragonball-api.com/api/characters';
const [characters, setCharacters] = useState([]);
const [loading, setLoading] =useState(true)

const fetchCharacters = async () =>{
    try {
        const response = await fetch(apiUrl)
        const data = await response.json();
        setCharacters(Array.isArray(data.items) ? data.items: []);
    } catch (error) {
        console.error('Error fetching characters: ', error);
    }finally{
        setLoading(false);
    }
}
useEffect(() => {
    fetchCharacters();
},[]);

return(
    <div>
        <h1 className='text-center text-2xl'>Personajes</h1>
        {loading ? (
            <p className='text-center'>Cargando...</p>
        ):(
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
                {characters.map((characters)=>(
                    <DragonBallCard key ={characters.id} characters={characters}/>
                ))}
            </div>
        )}
    </div>
)

}

export default DragonBall;