import React from 'react';
import ReactDOM from 'react-dom/client'

const heading = React.createElement(
    "h1", 
    { id: "heading"}, 
    "Welcome to Namaste react"
); 

const heading1 = React.createElement(
    "h2", 
    { id: "heading1"}, 
    "This is OG React!"
); 

const container = React.createElement(
    "div",
    { id: "container"},
    [heading, heading1]
);
//new assign

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);