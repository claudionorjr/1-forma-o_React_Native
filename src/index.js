import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css'
import NavBar from './components/NavBar.js'
import TableComponent from './components/TableComponent.js'
import reducer from './reducer'
import * as serviceWorker from './serviceWorker'


const store = createStore(reducer)

ReactDOM.render(
    <React.StrictMode >
        <Provider store={store}>
            <header>
                <NavBar />
            </header>
            <main className="container-lg mt-5">
                <div className="mt-5">
                    <TableComponent />
                </div>
            </main>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)


serviceWorker.unregister()
