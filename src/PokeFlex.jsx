import poke from  './assets/pokeapi_256.png'
import eevee from './assets/eevee.jpg'
import './PokeFlex.css'
import './PokeGrid.css'
const Home = () => {

return(

    <div className="PokeFlex">
   <img src={poke} />
   <img src={eevee} />
   <img src={poke} />
   <img src={eevee} />
   <img src={poke} />
   <img src={eevee} />
   <img src={poke} />
   <img src={eevee} />
    </div>
)
}

export default PokeFlex