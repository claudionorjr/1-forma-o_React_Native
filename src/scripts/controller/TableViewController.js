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
        this.task
        this.beginDate
        this.finalDate
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
     * @returns {HTMLTableRowElement} line
     */
    createNewRow() {
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
    countTrForIndex() {
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

            const linies = this.createNewRow()
            const indexRow = this.countTrForIndex()
            this.task = document.getElementById('task').value
            this.beginDate = document.getElementById('beginDate').value
            this.finalDate = document.getElementById('finalDate').value
            if (this.task == "") {
                validatorFields(this.task, "Campo Tarefa não pode ser nulo!")
                return
            }
            if (this.beginDate == "") {
                validatorFields(this.beginDate, "Campo Data de Inicio não pode ser nulo!")
                return
            }
            if (this.finalDate == "") {
                validatorFields(this.finalDate, "Campo Data de Entrega não pode ser nulo!")
                return
            }
            new TableController(this.task, this.beginDate, this.finalDate, indexRow, linies)
        })
    }
    init(){
        return this
    }
}