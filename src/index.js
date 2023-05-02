import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from "react-router-dom"
import store from './redux/redux-store'
// import StoreContext from './StoreContext'
import { Provider } from './StoreContext'

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                {/* <StoreContext.Provider value={store}>
                    <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
                </StoreContext.Provider> */}
                <Provider store={store}>
                    <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
}

renderEntireTree();
store.subscribe(renderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();