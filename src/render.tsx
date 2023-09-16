import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addMessage, addPost, stateType, updateMessageTextareaValue, updatePostTextAreaValue} from "./redux/state"


export const rerenderEntireThree = (state: stateType) => {
    ReactDOM.render(
        <App state={state}
             addPost={addPost}
             updatePostTextAreaValue={updatePostTextAreaValue}
             addMessage={addMessage}
             updateMessageTextareaValue={updateMessageTextareaValue}
        />,
        document.getElementById('root')
    )
}
