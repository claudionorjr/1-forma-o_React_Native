class TableController {
    constructor() {
        this.buttonEvent()
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

    buttonEvent() {
        var button = document.getElementById("btnAdd")
        button.addEventListener('click', () => {

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
    
        colId.innerHTML= indexRow
        colTask.innerHTML = task
        colBeginDate.innerHTML = beginDate
        colFinalDate.innerHTML = finalDate
    }
}
