import React from 'react';
import ReactDOM from 'react-dom/client'

const parent = React.createElement("div" , {id : "parent"} , React.createElement("div" , {id : "child"} , [ React.createElement("h1" , {} , "hello world 1 hello cello") , React.createElement("h1" , {} , "hello world 2"), ]))

// const heading = React.createElement("h1" , {style : ""} , "hello world")


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);