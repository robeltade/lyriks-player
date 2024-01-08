import { Error, Loader, SongCard } from "../components";
import {genres} from '../assets/constants';

const Discover = () => {
const genresTitle = 'pop';
const Style = {
    
    backgroundColor: 'black',
    borderRadius:'0.5rem',

}
const Style1 = {
gap:'32px'
}


return(
    <div className="flex flex-col">
        <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
            <h2 className="font-bold  text-3xl text-white text-left">Discover {genresTitle}</h2>
            <select style={Style} className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5 ">
                {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.value}</option>)}
            </select>
        </div>
        <div className="flex flex-wrap sm:justify-start justify-center " style={Style1}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((song, i) => (<SongCard
            key={song.key}
            song={song}
            i={i}/>))}
        </div>
    </div>
);
};

export default Discover;
