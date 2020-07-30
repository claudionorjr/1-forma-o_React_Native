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

    create(){
        var database = new Database()
        database.open((db) => {
            var transaction = db.transaction('taskDB', "readwrite")
            var store = transaction.objectStore('taskDB')
            var add = store.add({textData: this.textData, beginDate: this.beginDate, finalDate: this.finalDate})
            add.onsuccess = function (event) {
                console.log('Tarefa salva com sucesso.')
            }
            add.onerror = function (event) {
                console.log(`Ocorreu um erro ao salvar o contato. Erro: ${event}`)
            }
        })
    }

    getAll(callback) {
        var database = new Database()
        database.open((db) => {
            var transaction = db.transaction('taskDB', "readonly")
            var store = transaction.objectStore('taskDB')
            var request = store.getAll()
            request.onsuccess = function(event) {
                callback(request.result)
            }
        })
    }

    delete(id){
        var database = new Database()
        database.open((db) => {
            var transaction = db.transaction('taskDB', "readwrite")
            var store = transaction.objectStore('taskDB')
            var request = store.delete(id)
            request.onsuccess = function (event) {
                console.log('Tarefa excluída com sucesso.')
            }
            request.onerror = function (event) {
                console.log('Ocorreu um erro ao excluir uma Tarefa.')
            }
        })
    }
}