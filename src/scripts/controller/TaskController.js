import TaskModel from './model/TaskModel.js'

/**
 * class TableController
 * 
 * Descrição: Classe para controlar informações da Table.model.js!
 * 
 * @version 1.0.0
 * @author Claudionor Junior <claudionor.junior1994@gmail.com>
 */
export default class TableController {
    constructor(task, beginDate, finalDate) {
        this.taskModel = new TaskModel(task, beginDate, finalDate)
    }

    sendTaskToModel() {
        this.taskModel.create()
    }

    getAllTasks(callback) {
       this.taskModel.getAll(callback)
    }

    deleteTask(id){
        this.taskModel.delete(id)
    }
}
