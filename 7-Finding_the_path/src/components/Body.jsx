import { RestaurantCard } from './RestaurantCard'
import Shimmer from './Shimmer'
import axios from 'axios'
import { useNavigate } from 'react-router'


import { useState , useEffect} from "react"


export const Body = () => {

   const navigate = useNavigate();

    const [restaurantList , setRestaurantList] = useState([]); 

    
    useEffect(()=>{
        fetchData();
    },[])

    
    const fetchData = async () => {
        try {
            const response = await axios.request("http://localhost:4000/restaurantList?quantity=4");
            setRestaurantList(response?.data?.newRestaurantList);
            console.log(restaurantList.data);
        } catch (error) {
            console.error(error);
        }

    }


    if(restaurantList.length == 0){
        return <Shimmer/>
    }

    return (
    <div className='body'>
            <div className='restaurant-cards'>
                {
                    restaurantList?.map((restaurant)=>{
                        return <RestaurantCard data={restaurant} />
                    })
                }
            </div> 
    </div>
      
   
            
        
    )
}
