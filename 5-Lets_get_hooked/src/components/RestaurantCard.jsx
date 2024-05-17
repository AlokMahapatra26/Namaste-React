export const RestaurantCard = (props) => {

    const {name , cuisine , rating , delivery_time} = props.data;

    return (
        <div className='res-card'>
            <div className='res-card-img'>
                <img src="https://media.istockphoto.com/id/1459715799/photo/pizza-with-ham-and-cheese.jpg?s=612x612&w=0&k=20&c=gpRMVfqy44ag4TkroT8WEerRotlfKheZQu6kQkdhnxQ="/>
            </div>
            <div>
                <h3>{name}</h3>
                <p>{cuisine}</p>
                <p>{`rating : ${rating}`}</p>
                <p>{`delivery time : ${delivery_time}`}</p>
            </div>
        </div>
    )
}
