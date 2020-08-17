/**
 * @class Database
 * 
 * @description: Classe modelo para um objeto 'IndexedDB'!
 * 
 * @version 1.0.0
 * @author Claudionor Junior <claudionor.junior1994@gmail.com>
 */
export default class Database {

    /**
     * @description: Método retorna por callback um objeto 'indexedDB'.
     * 
     * @param {Database} callback 
     * 
     */
    open(callback) {
        this.request = window.indexedDB.open("taskDB", 1)
        this.request.onerror = (event) => console.log(`Error to Open DB: ${event}`)

        this.request.onupgradeneeded = (event) => {
            console.log("Creating...")
            this.db = event.target.result
            var objectStore = this.db.createObjectStore("taskDB", { keyPath : "id",  autoIncrement: true })
            objectStore.createIndex("task", "task", { unique: false })
            objectStore.createIndex("beginDate", "beginDate", { unique: false })
            objectStore.createIndex("finalDate", "finalDate", { unique: false })
            console.log("New DataBase Created successfully.")
        }

        this.request.onsuccess  = (event) => {
            this.db = event.target.result
            callback(this.db)
        }
    }
}
