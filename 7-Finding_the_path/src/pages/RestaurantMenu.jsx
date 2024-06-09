import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom";
import Shimmer from "../components/Shimmer";

export const RestaurantMenu = () => {


    const  [resData , setResData] = useState(null);

    const { resId } = useParams();
    console.log(resId)


    useEffect(()=>{
        fetchData()
    },[])

    async function  fetchData() {
       try{
        const res_data = await axios.request(`http://localhost:4000/restaurantData?res_id=${resId}`);
        console.log(res_data.data.data);
        setResData(res_data.data.data);
       }catch(error){
        console.log(error)
       }
    }

    if(resData === null){
        return <Shimmer/>
    }

    

    return  (
        

        <div className="menu">
        <center>

        
        <img src={resData.image} alt="" width="50%" style={{borderRadius:"10px"}}/>
        <h1>{resData.name}</h1>
        <p>Rating :{resData.rating}</p>
        <br />
        <h2>Menu</h2>
        <ul>
            {
                resData.dish.map((dish)=>{
                    return <li key={dish}>{dish}</li>
                })
            }
        </ul>
        </center>
    </div>

    )    
        
    
}