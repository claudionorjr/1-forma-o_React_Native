import TaskController from './TaskController.js'
import validatorFields from './validators/fields.js'

/**
 * class TaskViewController
 * 
 * Descrição: Classe para controlar informações da View!
 * 
 * @version 1.0.0
 * @author Claudionor Junior <claudionor.junior1994@gmail.com>
 */
export default class TaskViewController {
    constructor() {
        this.task
        this.beginDate
        this.finalDate
        this.newRow
        this.taskController = new TaskController()
        this.buttonAdd()
        this.showAllTasks((list) => this.addAllTasks(list))
    }

    /**
     * Descrição: Método usado para retornar um elemento HTML em outros métodos!
     * 
     * @returns {HTMLElement} table
     */
    setTBody(){
        const table = document.getElementById('tbody')
        return table
    }

    showAllTasks(callback) {
        this.taskController.getAllTasks(callback)
    }

    addAllTasks(list){
        list.forEach(e => {
            this.addTask(e['id'], e['textData'], e['beginDate'], e['finalDate'])
        })
    }

    /**
     * Descrição: Remover uma linha da Tabela
     * 
     * @param {HTMLButtonElement} e
     */
    removeLine(btn, id){
        const element = btn.parentNode.parentNode
        if (btn.id == id){
            console.log(`id que vai ser excluido ${id}`)
            this.taskcontroller = new TaskController()
            this.taskcontroller.deleteTask(id)
            element.remove()
            
        } else {
            console.log(`Erro ao deletar o botão de id ${id}`)
        }
        
    }

    /**
    * Descrição: Método que escuta e pega os dados dos inputs do formulário
    */
    buttonAdd() {
        var buttonAdd = document.getElementById("btnAdd")
        buttonAdd.addEventListener('click', () => {
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
            this.taskcontroller = new TaskController(this.task, this.beginDate, this.finalDate)
            this.taskcontroller.sendTaskToModel()
            document.location.reload(true);
        })
    }

    /**
     * Descrição: Este método cria uma Row
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
     * Descrição: Este método é usado para criar um botão de delete
     * em cada linha individualmente
     * 
     * @returns {HTMLButtonElement} btn
     */
    createBtn(id) {
        const btn = document.createElement('button')
        btn.classList.add("btn")
        btn.classList.add("btn-danger")
        btn.type = "button"
        btn.id = `${id}`
        btn.innerHTML = "<i class='fa fa-trash'></i> Tarefa"
        btn.addEventListener('click', () => {
            this.removeLine(btn, id)
        })
        return btn
    }

    /**
     * Descrição: Método cria as celulas recebe dados do controller e adiciona um botão de deletar
     */
    addTask(id, task, beginDate, FinalDate) {
        this.newRow = this.createNewRow()
        const colId = this.newRow.insertCell(0)
        const colTask = this.newRow.insertCell(1)
        const colBeginDate = this.newRow.insertCell(2)
        const colFinalDate = this.newRow.insertCell(3)
        const colBtn = this.newRow.insertCell(4)
    
        colId.innerHTML = id
        colTask.innerHTML = task
        colBeginDate.innerHTML = beginDate
        colFinalDate.innerHTML = FinalDate
        colBtn.append(this.createBtn(id))
    }

    init(){
        return this
    }
}