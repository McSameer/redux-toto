import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from 'react-redux';
import store from "./Redux/store";
import "./styles/tailwind.css";
import "./styles/index.css";
import "./styles/font.css";

const container = document.getElementById("root");
const root = createRoot(container);

// let initialState = {
//     todos: []
//   }
// let store = configureStore(initialState)

root.render(
    <Provider store={store}>
        <App />
    </Provider>
        
);
