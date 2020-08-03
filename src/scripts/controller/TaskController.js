import TaskModel from './model/TaskModel.js'


/**
 * class TaskController
 * 
 * Descrição: Classe para controlar informações da TaskViewController e TaskModel.
 * 
 * @version 1.0.0
 * @author Claudionor Junior <claudionor.junior1994@gmail.com>
 */
export default class TaskController {

    constructor(task, beginDate, finalDate) {
        this.taskModel = new TaskModel(task, beginDate, finalDate)
    }


    /**
     * Descrição: Método adicionado em TaskViewController para criar uma tarefa
     * no banco de dados
     */
    sendTaskToModel() {
        this.taskModel.create()
    }


    /**
     * Descrição: Método recebe um callback para retornar para a TaskViewController
     * uma lista de Tarefa no banco de dados
     * 
     * @param {callback} callback 
     */
    getAllTasks(callback) {
        this.taskModel.getAll(callback)
    }


    /**
     * Descrição: Método acionado na TaskViewController recebendo um "id" e envia o dado para a
     * TaskModel e persiste no banco de dados
     * 
     * @param {Number} id 
     */
    deleteTask(id) {
        this.taskModel.delete(id)
    }
}
