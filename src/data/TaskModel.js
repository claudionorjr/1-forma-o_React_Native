import Database from './DB.js'


/**
 * class TaskModel
 * 
 * @description: Classe modelo para cada Row!
 * 
 * @version 2.0.0
 * @author Claudionor Junior <claudionor.junior1994@gmail.com>
 */
export default class TaskModel {

    /**
     * @description: Método usado para criar uma nova tarefa no banco de dados
     */
    create(task, beginDate, finalDate){
        return new Promise((resolve) => {var database = new Database()
            database.open((db) => {
                var transaction = db.transaction('taskDB', "readwrite")
                var store = transaction.objectStore('taskDB')
                var add = store.add({task: task, beginDate: beginDate, finalDate: finalDate})
                add.onsuccess = (event) => resolve(event.target.result)
                add.onerror = () => console.log(`Error To Create In DB.`)
            })
        })
    }

    /**
     * @description: Método consultar o banco e retornar uma lista de tarefas
     * 
     * @param {callback} callback
     * @returns {callback} request.result
     */
    getAll() {
        return new Promise((resolve) => {
            var database = new Database()
                database.open((db) => {
                var transaction = db.transaction('taskDB', "readonly")
                var store = transaction.objectStore('taskDB')
                var request = store.getAll()
                request.onsuccess = () => resolve(request.result)
                request.onerror = () => console.log(`Error in get All Tasks.`)
            })

        })
        
    }

    /**
     * @description: Método recebe um "id" existente no banco de dados e o deleta
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
            request.onerror = () => console.log(`Error to delete Task.`)
        })
    }
}
