export default class Database{
    open(callback){
        this.db
        this.request = window.indexedDB.open("taskDB", 1)
        this.request.onerror = (event) => console.log("Erro ao abrir o banco de dados", event)

        this.request.onupgradeneeded = (event) => {
            console.log("Atualizando...")
            this.db = event.target.result
            var objectStore = this.db.createObjectStore("taskDB", { keyPath : "id",  autoIncrement: true })
            objectStore.createIndex("textData", "textData", { unique: false })
            objectStore.createIndex("beginDate", "beginDate", { unique: false })
            objectStore.createIndex("finalDate", "finalDate", { unique: false })
        }

        this.request.onsuccess  = (event) => {
            
            console.log("Banco de dados aberto com sucesso.")
            this.db = event.target.result

            callback(this.db)
        }
    }
}

