class TableController {
    constructor() {
        this.buttonAdd()
    }

    setTBody(){
        const table = document.getElementById('tbody')

        return table
    }

    table() {
        const table = this.setTBody()
        const amountLines = table.rows.length
        const line = table.insertRow(amountLines);

        return line
    }

    rows() {
        const table = this.setTBody()
        const oRows = table.getElementsByTagName('tr')
        const iRowCount = oRows.length

        return iRowCount
    }

    removeLine(value) {
        const line = document.getElementById('tbody')
        line.removeChild(value)
    }

    buttonAdd() {
        var buttonAdd = document.getElementById("btnAdd")
        buttonAdd.addEventListener('click', () => {

            const linies = this.table()
            const indexRow = this.rows()

            let task = document.getElementById('task').value
            let beginDate = document.getElementById('beginDate').value
            let finalDate = document.getElementById('finalDate').value
            this.addTask(task, beginDate, finalDate, indexRow, linies)
        })
    }

    addTask(task, beginDate, finalDate, indexRow, line) {
        const colId = line.insertCell(0)
        const colTask = line.insertCell(1)
        const colBeginDate = line.insertCell(2)
        const colFinalDate = line.insertCell(3)
        const btn = line.insertCell(4)
        
    
        colId.innerHTML = indexRow
        colTask.innerHTML = task
        colBeginDate.innerHTML = beginDate
        colFinalDate.innerHTML = finalDate
        btn.innerHTML = document.createElement('button')
        btn.classList.add("btn")
        btn.classList.add("btn-danger")
        btn.type = "button"
        btn.id = "btnRemove"
        btn.innerHTML = "<i class='fa fa-trash'></i> Tarefa"
        btn.addEventListener('click', (e) => {
            const element = e.target.parentNode
            this.removeLine(element)
        })
    }
}
