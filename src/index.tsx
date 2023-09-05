import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



let dialogsData = [
    {id: 1, name: "Gagulik"},
    {id: 2, name: "Vazgenchik"},
    {id: 3, name: "Serobik"},
    {id: 4, name: "Ghukasik"},
]
let messagesData = [
    {id: 1, message: "Hi!"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "Yo!"}
]


let postsData = [
    {id: 1, message: "Hi, How are you?", likesCount: 0},
    {id: 2, message: "It's my first post", likesCount: 23}
]

ReactDOM.render(
    <App dialogsData={dialogsData} messagesData={messagesData} postsData={postsData}/>,
  document.getElementById('root')
);