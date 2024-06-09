import { useNavigate } from "react-router";
export const RestaurantCard = (props) => {

    const navigate = useNavigate();

    const {id , name , cuisine , rating , duration , vegNonVeg , image} = props.data;

    return (
        <div className='res-card' onClick={()=>{navigate(`/restaurants/${id}`)}}>
            <div className='res-card-img'>
                <img src={image}/>
            </div>
            <div>
                <h3>{name}</h3>
                <p className="cuisine">{cuisine}</p>
                <p className="vegnonveg">{vegNonVeg}</p>
                <p>{`rating : ${rating}`}</p>
                <p>{`delivery time : ${duration}`}</p>
            </div>
        </div>
    )
}
