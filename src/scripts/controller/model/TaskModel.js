import Database from '../data/db.js'


/**
 * class TaskModel
 * 
 * Descrição: Classe modelo para cada Row!
 * 
 * @version 1.0.0
 * @author Claudionor Junior <claudionor.junior1994@gmail.com>
 */
export default class TaskModel {

    constructor(task, beginDate, finalDate) {
        this.textData = task
        this.beginDate = beginDate
        this.finalDate = finalDate
    }


    /**
     * Descrição: Método usado para criar uma nova tarefa no banco de dados
     */
    create(){
        var database = new Database()
        database.open((db) => {
            var transaction = db.transaction('taskDB', "readwrite")
            var store = transaction.objectStore('taskDB')
            var add = store.add({textData: this.textData, beginDate: this.beginDate, finalDate: this.finalDate})
            add.onsuccess = () => {}
            add.onerror = (event) => console.log(`Error To Save: ${event}`)
        })
    }


    /**
     * Descrição: Método consultar o banco e retornar uma lista de tarefas
     * 
     * @param {callback} callback
     * @returns {callback} request.result
     */
    getAll(callback) {
        var database = new Database()
        database.open((db) => {
            var transaction = db.transaction('taskDB', "readonly")
            var store = transaction.objectStore('taskDB')
            var request = store.getAll()
            request.onsuccess = () => callback(request.result)
            request.onerror = (event) => console.log(`Error in get All Tasks: ${event}`)
        })
    }


    /**
     * Descrição: Método recebe um "id" existente no banco de dados e o deleta
     * 
     * @param {Number} id 
     */
    delete(id){
        var database = new Database()
        database.open((db) => {
            var transaction = db.transaction('taskDB', "readwrite")
            var store = transaction.objectStore('taskDB')
            var request = store.delete(id)
            request.onsuccess = () => {}
            request.onerror = (event) => console.log(`Error to delete Task: ${event}`)
        })
    }
}
