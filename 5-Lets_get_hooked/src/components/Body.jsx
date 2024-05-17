import { RestaurantCard } from "./RestaurantCard"
import DATA_OBJ from "../utils/mockData";

import { useState , useEffect} from "react"


export const Body = () => {

    

    const [dataObj , setDataObj] = useState(DATA_OBJ);    
 

    return (
        <div className='body'>
            {console.log(dataObj)}
        <div className="filter">
            <center>
            <button className="filter-btn" onClick={()=>{
                
                filteredList = DATA_OBJ.filter( (res) => res.rating >= 4.5);
                
                setDataObj(filteredList)
                
                }}>Top Rated</button>  
            </center>
            <div>
      
    </div>
            
        </div>    

        {/* <>
            
        <center><h2>Filters</h2></center>
            <center>Top rated <input type="checkbox" checked={topRated} onChange={() => setTopRated(!topRated)} /></center>
            {console.log(topRated)}
        </> */}
         
            <div className='restaurant-cards'>


                {
                    dataObj.map(res => (
                         <RestaurantCard data={res}/>
                    ))
                }
                
               
            </div>
        </div>
    )
}
