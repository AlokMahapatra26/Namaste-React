import React from 'react';
import ReactDOM from 'react-dom/client'


//using raw react
const heading = React.createElement('h1' , {} , "Hello world heading")

//JSX
const jsxHeading = (<h1>hello</h1>)

//NOTE -> both raw react and JSX return same thing a object


//REACT COMPONENTS
//Class Based Component - OLD


//Functional Baced Component - NEW


const data = 3000;

const Title = () => {
    return <h1>Hello this is a {data} component</h1>
}

const HeadingComponent = () => {
    return (
    <div><Title/> </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);


