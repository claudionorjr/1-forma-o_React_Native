export default class Table {
    constructor(id, textData, beginDate, finalDate) {
        this.id = id
        this.textData = textData
        this.beginDate = beginDate
        this.finalDate = finalDate
        this.btn = this.createBtn()
    }

    createBtn() {
        /* 
        * Descrição: Este método é usado para criar um botão de delete em cada linha individualmente
        */
        const btn = document.createElement('button')
        btn.classList.add("btn")
        btn.classList.add("btn-danger")
        btn.type = "button"
        btn.id = "btnRemove"
        btn.innerHTML = "<i class='fa fa-trash'></i> Tarefa"
        btn.addEventListener('click', (e) => {
            const element = (e.target.parentNode).parentNode
            element.remove()
        })

        return btn
    }

    init() {
        /* 
        * Descrição: Inicia o TableController com o 'this' no index.js
        */
        return this
    }
}