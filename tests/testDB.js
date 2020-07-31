import TaskViewController from '../src/scripts/controller/TaskViewController.js'
import TaskController from '../src/scripts/controller/TaskController.js'


/**
 * Descrição: Botar as váriaveis abaixo "false" caso queira desabilitar os testes.
 */
var test1 = false
var test2 = false
var test3 = false
var testOn = false


/**
 * Descrição: Teste para criar uma tarefa no banco de dados.
 */
function testForCreateTask() {
    if(test1) {
        try {
            console.log('Testando o método testForCreateTask()')
            var testList = 
            [
                {'textData':"Teste textData", 'beginDate':'11/11/2222', 'finalDate':'11/11/2222'},
                {'textData':"Teste textData", 'beginDate':'22/22/2222', 'finalDate':'22/22/2222'},
                {'textData':"Teste textData", 'beginDate':'33/33/2222', 'finalDate':'33/33/2222'},
                {'textData':"Teste textData", 'beginDate':'44/44/2222', 'finalDate':'44/44/2222'},
                {'textData':"Teste textData", 'beginDate':'55/55/2222', 'finalDate':'55/55/2222'}
            ]
            
            testList.forEach((e, index) => {
                const taskcontroller = new TaskController(e['textData'], e['beginDate'], e['finalDate'])
                taskcontroller.sendTaskToModel()
                console.log(`Adicionada a tarefa no index ${index + 1}` )
            })
            console.log(`Criando Tarefa - Passou`)
            console.log('---------------')

        } catch (error) {
            console.log(`Erro no teste testForCreateTask(): Error ${error}`)
            console.log('---------------')
        }
        test1 = false
    }
}


/**
 * Descrição: Teste para retornar uma lista de tarefas do banco de dados no console.
 * 
 * @param {callback} callback 
 */
function testForGetAllTasks(callback) {
    if(test2) {
        
        const taskViewController = new TaskViewController()
        taskViewController.showAllTasks((e) => {
            callback(e)
            if(e == ""){
                console.log('Testando o método testForGetAllTasks()')
                console.log("Array está vaziu!")
                console.log('---------------')
            } else {
                console.log('Testando o método testForGetAllTasks()')
                console.log(e)
                console.log(`Pegando as Tarefas - Passou`)
                console.log('---------------')
            }
        })
    }
}


/**
 * Descrição: Teste para deletar todas as tarefas que foram criadas no testForCreateTask()
 * retornando os "ids" das mesmas no console.
 */
function testForDeleteTask() {
    if (test3){
        console.log('Testando o método testForDeleteTask()')
        testForGetAllTasks((e) => {
            for (let index = 0; index < (e.length); index++) {
                const taskcontroller = new TaskController()
                taskcontroller.deleteTask(e[index]['id'])
                console.log(`Deletando "id" ${e[index]['id']}`)
                
            }
            console.log(`Deletando Tarefa - Passou`)
            console.log('---------------')
        })
    }
    test3 = false
}


/**
 * Descrição: Função para retornar mensagem no console durante a execução, apenas se a
 * variável "testOn" for "true".
 */
function testOnOrOff() {
    if(testOn) {
        console.log('BE CAREFUL, YOU ARE IN A TESTING ENVIRONMENT!')
        console.log('---------------')
    }
}


/*executando as funções dos testes.*/
setTimeout(() => {testOnOrOff()}, 2000)
setTimeout(() => {testForCreateTask()}, 3000)
setTimeout(() => {testForDeleteTask()}, 4500)
