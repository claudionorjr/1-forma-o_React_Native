import TableController from './TableController.js'
import validatorFields from './validators/fields.js'

/**
 * class TableViewController
 * 
 * Descrição: Classe para controlar informações da View!
 * 
 * @version 1.0.0
 * @author Claudionor Junior <claudionor.junior1994@gmail.com>
 */
export default class TableViewController {
    constructor() {
        this.buttonAdd()
    }

    /**
     * Descrição: Método usado para retornar um elemento em outros métodos!
     * 
     * @returns {HTMLElement} table
     */
    setTBody(){
        const table = document.getElementById('tbody')
        return table
    }

    /**
     * Descrição: Este método conta a linha e depois cria uma Row,
     * posteriomente é usada para setar as Células em this.addTask()
     * 
     * @returns {Number} line
     */
    countLinies() {
        const table = this.setTBody()
        const amountLines = table.rows.length
        const line = table.insertRow(amountLines);
        return line
    }

    /**
     * Descrição: Método contador de linhas para gerar o ID posteriomente
     * 
     * @returns {Number} iRowCount
     */
    rows() {
        const table = this.setTBody()
        const oRows = table.getElementsByTagName('tr')
        const iRowCount = oRows.length
        return iRowCount
    }

    /**
    * Descrição: Método que escuta e pega os dados dos inputs do formulário
    */
    buttonAdd() {
        var buttonAdd = document.getElementById("btnAdd")
        buttonAdd.addEventListener('click', () => {

            const linies = this.countLinies()
            const indexRow = this.rows()
            let task = document.getElementById('task').value
            let beginDate = document.getElementById('beginDate').value
            let finalDate = document.getElementById('finalDate').value
            if (task == "") {
                validatorFields(task, "Campo Tarefa não pode ser nulo!")
                return
            }
            if (beginDate == "") {
                validatorFields(beginDate, "Campo Data de Inicio não pode ser nulo!")
                return
            }
            if (finalDate == "") {
                validatorFields(finalDate, "Campo Data de Entrega não pode ser nulo!")
                return
            }
            new TableController(task, beginDate, finalDate, indexRow, linies)
        })
    }

    /**
     * Descrição: Inicia o TableViewController com o 'this' no index.js
     * 
     * @returns this
     */
    init() {
        return this
    }
}