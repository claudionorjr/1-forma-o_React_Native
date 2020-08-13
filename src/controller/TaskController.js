import React from 'react'
import TaskModel from './model/TaskModel.js'
import ReactDOM from 'react-dom'
import NavBar from '../components/NavBar.js'
import TableComponent from '../components/TableComponent.js'


/**
 * @class TaskController.
 * 
 * @description: Classe para controlar informações da View.
 * 
 * @version 1.0.0
 * @author Claudionor Junior <claudionor.junior1994@gmail.com>
 */
export default class TaskController {

    constructor() {
        this.taskModel = new TaskModel()
        this.getAllTasks((list) => this.addAllTasks(list))
    }

    /**
     * @description: Método recebe um callback de uma lista de Tarefa do banco de dados.
     * 
     * @param {callback} callback 
     */
    getAllTasks(callback) {
        this.taskModel.getAll(callback)
    }

    /**
     * @description: Método cria a NavBar e a TableComponent.
     * 
     * @param {Array} list 
     */
    addAllTasks(list) {
        ReactDOM.render(
            <React.StrictMode >
                <header>
                    <NavBar />
                </header>
                <main className="container-lg mt-5">
                    <div className="mt-5">
                        <TableComponent item={list}/>
                    </div>
                </main>
            </React.StrictMode>,
            document.getElementById('root')
        )
    }
}
