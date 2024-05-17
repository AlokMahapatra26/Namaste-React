import React from 'react';
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'



//Data


const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
               <img src='https://images-platform.99static.com//NtR_BeUemCzxeM0ufpwE1MOnyRs=/42x0:1856x1814/fit-in/500x500/99designs-contests-attachments/56/56993/attachment_56993352'/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Search</li>
                    <li>Offers</li>
                    <li>Cart</li>
                    <li>Sign in</li>
                </ul>
            </div>
        </div>
    )
}


const RestaurantCard = (props) => {

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


const Body = () => {
    return (
        <div className='body'>
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



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);


