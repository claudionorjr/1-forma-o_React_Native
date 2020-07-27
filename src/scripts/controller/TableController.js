import Table from './model/Table.model.js'

export default class TableController {
    constructor() {
        this.buttonAdd()
    }

    setTBody(){
        /* 
        * Descrição: Método usado para retornar um elemento em outros métodos!
        */
        const table = document.getElementById('tbody')
        return table
    }

    countLinies() {
        /* 
        * Descrição: Este método conta a linha e depois cria uma Row, posteriomente é usada para setar as Células em this.addTask()
        */
        const table = this.setTBody()
        const amountLines = table.rows.length
        const line = table.insertRow(amountLines);
        return line
    }

    rows() {
        /* 
        * Descrição: Método contador de linhas para gerar o ID posteriomente
        */
        const table = this.setTBody()
        const oRows = table.getElementsByTagName('tr')
        const iRowCount = oRows.length
        return iRowCount
    }

    buttonAdd() {
        /* 
        * Descrição: Método que escuta e pega os dados dos inputs do formulário
        */
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

    addTask(task, beginDate, finalDate, indexRow, line) {
        /* 
        * Descrição: Envia os dados para o Model Table, depois cria as celulas da coluna e por fim seta os dados da Table.x
        */
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

    init() {
        /* 
        * Descrição: Inicia o TableController com o 'this' no index.js
        */
        return this
    }
}
