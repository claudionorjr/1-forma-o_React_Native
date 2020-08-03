import TaskController from './TaskController.js'
import validatorFields from './validators/fields.js'


/**
 * class TaskViewController.
 * 
 * Descrição: Classe para controlar informações da View.
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
     * Descrição: Método usado para retornar um elemento HTML em outros métodos.
     * 
     * @returns {HTMLElement} table
     */
    setTBody(){
        const table = document.getElementById('tbody')
        return table
    }


    /**
     * Descrição: Método que recebe um callback para renderizar a lista
     * de tarefas da TaskModel.
     * 
     * @param {callback} callback 
     */
    showAllTasks(callback) {
        this.taskController.getAllTasks(callback)
    }


    /**
     * Descrição: Método recebe uma lista de tarefas e faz um forEach
     * na lista e adiciona as tarefas indidualmente com suas informações.
     * 
     * @param {Array} list 
     */
    addAllTasks(list){
        const table = this.setTBody()
        table.innerHTML = ''
        list.forEach(e => this.addTask(e['id'], e['textData'], e['beginDate'], e['finalDate']))
    }


    /**
     * Descrição: Remover uma linha da Tabela.
     * 
     * @param {HTMLButtonElement} btn
     * @param {number} id
     */
    removeLine(btn, id) {
        const element = btn.parentNode.parentNode

        if (btn.id == id) {
            this.taskcontroller = new TaskController()
            this.taskcontroller.deleteTask(id)
            element.remove()

        } else {
            console.log(`Error to delete button "id": ${id}`)
        }
    }


    /**
    * Descrição: Método que escuta e pega os dados dos inputs do formulário.
    */
    buttonAdd() {
        var buttonAdd = document.getElementById("btnAdd")
        buttonAdd.addEventListener('click', () => {
            this.task = document.getElementById('task').value
            this.beginDate = document.getElementById('beginDate').value
            this.finalDate = document.getElementById('finalDate').value

            if (this.task == '') {
                validatorFields(this.task, 'Campo Tarefa não pode ser nulo!')
                return
            }

            if (this.beginDate == '') {
                validatorFields(this.beginDate, 'Campo Data de Inicio não pode ser nulo!')
                return
            }

            if (this.finalDate == '') {
                validatorFields(this.finalDate, 'Campo Data de Entrega não pode ser nulo!')
                return
            }

            this.taskcontroller = new TaskController(this.task, this.beginDate, this.finalDate)
            this.taskcontroller.sendTaskToModel()
            setTimeout(() => this.showAllTasks((list) => this.addAllTasks(list)), 300)
        })
    }


    /**
     * Descrição: Método cria uma Row.
     * 
     * @returns {HTMLTableRowElement} line
     */
    createNewRow() {
        const table = this.setTBody()
        const amountLines = table.rows.length
        const line = table.insertRow(amountLines)
        return line
    }


    /**
     * Descrição: Este método é usado para criar um botão de delete
     * em cada linha individualmente.
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
        btn.addEventListener('click', () => this.removeLine(btn, id))
        return btn
    }


    /**
     * Descrição: Método cria as celulas recebe dados do controller e adiciona um botão de deletar.
     */
    addTask(id, task, beginDate, finalDate) {
        this.newRow = this.createNewRow()
        const colId = this.newRow.insertCell(0)
        const colTask = this.newRow.insertCell(1)
        const colBeginDate = this.newRow.insertCell(2)
        const colFinalDate = this.newRow.insertCell(3)
        const colBtn = this.newRow.insertCell(4)

        /**
         * Descrição: Função para formatar data pt-BR
         * 
         * @param {String} date //Date String return dd/mm/YYYY
         */
        function toDate(date) {
            var day  = date.split("-")[2]
            var month  = date.split("-")[1]
            var year  = date.split("-")[0]
            return day + '/' + month + '/' + year
        }

        colId.innerHTML = id
        colTask.innerHTML = task
        colBeginDate.innerHTML = toDate(beginDate)
        colFinalDate.innerHTML = toDate(finalDate)
        colBtn.append(this.createBtn(id))
    }


    /**
     * Método para iniciar todo o sistema de tarefas.
     */
    init() {
        return this
    }
}
