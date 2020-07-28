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
        btn.addEventListener('click', (e) => {
            const element = (e.target.parentNode).parentNode
            element.remove()
        })
        return btn
    }
}