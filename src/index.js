import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css'
import NavBar from './components/NavBar.js'
import TableComponent from './components/TableComponent.js'
import reducer from './reducer'
import * as serviceWorker from './serviceWorker'
import TaskModel from './data/TaskModel.js'

const taskModel = new TaskModel()
const store = createStore(reducer)

taskModel.getAll().then((array)=> {
    ReactDOM.render(
        <React.StrictMode >
            <Provider store={store}>
                <header>
                    <NavBar />
                </header>
                <main className="container-lg mt-5">
                    <div className="mt-5">
                        <TableComponent listaDefault={array} />
                    </div>
                </main>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    )
})



serviceWorker.unregister()
