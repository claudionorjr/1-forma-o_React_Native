import Table from './model/Table.js'

/**
 * class TableController
 * 
 * Descrição: Classe para controlar informações da Table.model.js!
 * 
 * @version 1.0.0
 * @author Claudionor Junior <claudionor.junior1994@gmail.com>
 */
export default class TableController {
    constructor(task, beginDate, finalDate, indexRow, line) {
        this.task = task
        this.beginDate = beginDate
        this.finalDate = finalDate
        this.indexRow = indexRow
        this.line = line
        this.addTask()
    }

    /**
     * Descrição: Envia os dados para o Model Table, depois cria as celulas
     * da coluna e por fim seta os dados da Table.x
     */
    addTask() {
        const colId = this.line.insertCell(0)
        const colTask = this.line.insertCell(1)
        const colBeginDate = this.line.insertCell(2)
        const colFinalDate = this.line.insertCell(3)
        const colBtn = this.line.insertCell(4)

        const table = new Table(this.indexRow, this.task, this.beginDate, this.finalDate)
    
        colId.innerHTML = table.id
        colTask.innerHTML = table.textData
        colBeginDate.innerHTML = table.beginDate
        colFinalDate.innerHTML = table.finalDate
        colBtn.append(table.btn)
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
