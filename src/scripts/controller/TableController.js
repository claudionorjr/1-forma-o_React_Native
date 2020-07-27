import Table from './model/Table.model.js'

export default class TableController {
    constructor() {
        this.buttonAdd()
    }

    /* 
    * Descrição: Método usado para retornar um elemento em outros métodos!
    */
    setTBody(){
        const table = document.getElementById('tbody')
        return table
    }

    /* 
    * Descrição: Este método conta a linha e depois cria uma Row, posteriomente é usada para setar as Células em this.addTask()
    */
    countLinies() {
        const table = this.setTBody()
        const amountLines = table.rows.length
        const line = table.insertRow(amountLines);
        return line
    }

    /* 
    * Descrição: Método contador de linhas para gerar o ID posteriomente
    */
    rows() {
        const table = this.setTBody()
        const oRows = table.getElementsByTagName('tr')
        const iRowCount = oRows.length
        return iRowCount
    }

    /* 
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
            this.addTask(task, beginDate, finalDate, indexRow, linies)
        })
    }

    /* 
    * Descrição: Envia os dados para o Model Table, depois cria as celulas da coluna e por fim seta os dados da Table.x
    */
    addTask(task, beginDate, finalDate, indexRow, line) {
        const table = new Table(indexRow, task, beginDate, finalDate)

        const colId = line.insertCell(0)
        const colTask = line.insertCell(1)
        const colBeginDate = line.insertCell(2)
        const colFinalDate = line.insertCell(3)
        const colBtn = line.insertCell(4)
        
    
        colId.innerHTML = table.id
        colTask.innerHTML = table.textData
        colBeginDate.innerHTML = table.beginDate
        colFinalDate.innerHTML = table.finalDate
        colBtn.append(table.btn)
    }

    /* 
    * Descrição: Inicia o TableController com o 'this' no index.js
    */
    init() {
        return this
    }
}
