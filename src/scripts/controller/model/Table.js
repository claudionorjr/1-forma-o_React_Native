var db

var request = window.indexedDB.open("taskDB", 1)

request.onerror = (event) => console.log("Erro ao abrir o banco de dados", event)

request.onupgradeneeded = (event) => {
    console.log("Atualizando...")
    db = event.target.result
    var objectStore = db.createObjectStore("taskDB", { keyPath : "id",  autoIncrement: true })
    objectStore.createIndex("id", "id", { unique: false })
    objectStore.createIndex("textData", "textData", { unique: false })
    objectStore.createIndex("beginDate", "beginDate", { unique: false })
    objectStore.createIndex("finalDate", "finalDate", { unique: false })
    objectStore.createIndex("btn", "btn", { unique: false })
}

request.onsuccess  = (event) => {
    console.log("Banco de dados aberto com sucesso.")
    db = event.target.result
}


/**
 * class Table
 * 
 * Descrição: Classe modelo Table.model.js!
 * 
 * @version 1.0.0
 * @author Claudionor Junior <claudionor.junior1994@gmail.com>
 */
export default class Table {
    constructor(id, textData, beginDate, finalDate) {
        this.id = id
        this.textData = textData
        this.beginDate = beginDate
        this.finalDate = finalDate
        this.btn = this.createBtn()
    }
    

    removeLine(e){
        const element = e.parentNode.parentNode
        element.remove()
    }

    /**
     * Descrição: Este método é usado para criar um botão de delete
     * em cada linha individualmente
     * 
     * @returns {HTMLButtonElement} btn
     */
    createBtn() {
        const btn = document.createElement('button')
        btn.classList.add("btn")
        btn.classList.add("btn-danger")
        btn.type = "button"
        btn.id = "btnRemove"
        btn.innerHTML = "<i class='fa fa-trash'></i> Tarefa"
        try {
            var transaction = db.transaction('taskDB', "readwrite")
            var store = transaction.objectStore('taskDB')
            var add = store.add({textData: this.textData, beginDate: this.beginDate, finalDate: this.finalDate, btn: this.btn})
            add.onsuccess = function (event) {
                console.log('Tarefa salva com sucesso.');
            }
        } catch (e) {
            add.onerror = function (event) {
                console.log(`Ocorreu um erro ao salvar o contato. Erro: ${event}`);
            }
        }
        
        btn.addEventListener('click', () => {
            this.removeLine(btn)
        })
        return btn
    }
}