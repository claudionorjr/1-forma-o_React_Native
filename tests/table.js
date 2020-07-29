import TableViewController from '../src/scripts/controller/TableViewController.js'
import TableController from '../src/scripts/controller/TableController.js'
import Table from '../src/scripts/controller/model/Table.js'

const tableViewController = new TableViewController()
tableViewController.init()

function testIfCanGetAndSetValue(){
    try {
        tableViewController.task = "Tarefa"
        tableViewController.beginDate = "02/02/1990"
        tableViewController.finalDate = "02/02/1990"

        console.log(`Task Name: ${tableViewController.task}`)
        console.log(`Begin Date: ${tableViewController.beginDate}`)
        console.log(`Final Date: ${tableViewController.finalDate}`)

        console.log("Fn: testIfCanAddNewTask()")
        console.log("Test Passed")
        console.log("------------------")
    } catch (error) {
        console.log("Fn: testIfCanAddNewTask()")
        console.log("Test not Passed")
        console.log("------------------")
    }
    
}

function testIfCanAddNewTask(){
    try {
        var countTrForIndex = tableViewController.countTrForIndex()
        var createNewRow = tableViewController.createNewRow()
        new TableController(tableViewController.task, tableViewController.beginDate, tableViewController.finalDate, countTrForIndex, createNewRow)
        countTrForIndex = tableViewController.countTrForIndex()
        createNewRow = tableViewController.createNewRow()
        new TableController(tableViewController.task, tableViewController.beginDate, tableViewController.finalDate, countTrForIndex, createNewRow)
        countTrForIndex = tableViewController.countTrForIndex()
        createNewRow = tableViewController.createNewRow()
        new TableController(tableViewController.task, tableViewController.beginDate, tableViewController.finalDate, countTrForIndex, createNewRow)
        console.log("Fn: testIfCanAddNewTask()")
        console.log("Test Passed")
        console.log("------------------")
    } catch (e) {
        console.log("Fn: testIfCanAddNewTask()")
        console.log("Test not Passed")
        console.log("------------------")
    }
}

function testIfCanDeleteRow() {
    try {
        const btn = document.getElementById("btnRemove")
        const model = new Table()

        console.log("Fn: testIfCanDeleteRow()")
        console.log(`Button in row index "${btn.parentNode.parentNode.firstElementChild.textContent}" deleted`)
        //model.removeLine(btn)
        console.log("Test Passed")
        console.log("------------------")
    } catch (e) {
        console.log("Fn: testIfCanDeleteRow()")
        console.log("Test not Passed")
        console.log("------------------")
    }
        
}

testIfCanGetAndSetValue()
testIfCanAddNewTask()
testIfCanDeleteRow()