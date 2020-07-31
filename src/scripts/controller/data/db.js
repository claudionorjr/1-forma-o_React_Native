export default class Database {

    open(callback) {
        this.db
        this.request = window.indexedDB.open("taskDB", 1)
        this.request.onerror = (event) => console.log(`Error to Open DB: ${event}`)


        this.request.onupgradeneeded = (event) => {
            console.log("Creating...")
            this.db = event.target.result
            var objectStore = this.db.createObjectStore("taskDB", { keyPath : "id",  autoIncrement: true })
            objectStore.createIndex("textData", "textData", { unique: false })
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
