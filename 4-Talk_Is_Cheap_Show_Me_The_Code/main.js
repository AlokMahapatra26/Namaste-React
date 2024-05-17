

import React from 'react';
import ReactDOM from 'react-dom/client'

/**
 * 
 * Header
 *  -Logo
 *  - nav items
 * Body
 *  - Search bar
 *  - Restaurant container
 *      - card
 *  -Footer
 *      
 * 
 */


//Data
const dataObj = [
    {
      "name": "Spicy Curry",
      "cuisine": "Indian",
      "rating": 4.5,
      "delivery_time": "30-45 mins"
    },
    {
      "name": "Yaki Noodles",
      "cuisine": "Japanese",
      "rating": 4.8,
      "delivery_time": "20-30 mins"
    },
    {
      "name": "Viva Italia",
      "cuisine": "Italian",
      "rating": 4.2,
      "delivery_time": "40-50 mins"
    },
    {
      "name": "Happy Falafel",
      "cuisine": "Mediterranean",
      "rating": 4.7,
      "delivery_time": "25-35 mins"
    },
    {
      "name": "The Poke Bowl",
      "cuisine": "Hawaiian",
      "rating": 4.3,
      "delivery_time": "35-45 mins"
    },
    {
      "name": "Le Croissant Doré",
      "cuisine": "French",
      "rating": 4.9,
      "delivery_time": "20-30 mins"
    },
    {
      "name": "Burger Palace",
      "cuisine": "American",
      "rating": 4.1,
      "delivery_time": "30-40 mins"
    },
    {
      "name": "Crazy Noodles",
      "cuisine": "Thai",
      "rating": 4.6,
      "delivery_time": "25-35 mins"
    },
    {
      "name": "Burrito Fiesta",
      "cuisine": "Mexican",
      "rating": 4.4,
      "delivery_time": "40-50 mins"
    },
    {
      "name": "Heavenly Dumplings",
      "cuisine": "Chinese",
      "rating": 4.8,
      "delivery_time": "20-30 mins"
    },
    {
      "name": "Seoul Food",
      "cuisine": "Korean",
      "rating": 4.2,
      "delivery_time": "35-45 mins"
    },
    {
      "name": "Green Garden",
      "cuisine": "Vegetarian",
      "rating": 4.9,
      "delivery_time": "25-35 mins"
    },
    {
      "name": "Smokehouse BBQ",
      "cuisine": "American",
      "rating": 4.7,
      "delivery_time": "40-50 mins"
    },
    {
      "name": "The Crepe Escape",
      "cuisine": "French",
      "rating": 4.5,
      "delivery_time": "30-40 mins"
    },
    {
      "name": "Pizza Paradise",
      "cuisine": "Italian",
      "rating": 4.3,
      "delivery_time": "20-30 mins"
    },
    {
      "name": "Sushi Mania",
      "cuisine": "Japanese",
      "rating": 4.8,
      "delivery_time": "35-45 mins"
    },
    {
      "name": "Taco Tuesday",
      "cuisine": "Mexican",
      "rating": 4.4,
      "delivery_time": "25-35 mins"
    },
    {
      "name":  "Noodle Nirvana",
      "cuisine": "Asian Fusion",
      "rating": 4.6,
      "delivery_time": "30-40 mins"
    },
    {
      "name": "Royal Curry House",
      "cuisine": "Indian",
      "rating": 4.2,
      "delivery_time": "40-50 mins"
    }
  ]
  

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

const App = () => {
    return (
        <div className='app'>
            <Header/>
            <Body/>
        </div>
    )
}






const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);


