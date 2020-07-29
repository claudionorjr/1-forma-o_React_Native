import CalcController from "../src/scripts/controller/CalcController.js";

const calcController = new CalcController()
calcController.init()

/**
 * Descrição: Testando setLastNumberToDisplay() se retorna "0" no display no inicio.
 */
function testZeroInDisplay() {
    console.log("testZeroInDisplay")
    const number = calcController.displayCalc
    if (number == 0){
        console.log("Test Passed")
    } else {
        console.log("Test not Passed")
    }
    console.log("------------------")
}

/**
 * Descrição: Checar se os operadores estão sendo reconhecidos na fn.isOperator()
 */
function testOperators(){
    const operator = ['+', '-', '*', '/']
    console.log("testOperators")
    operator.forEach(e => {
        if (calcController.isOperator(e)) {
            console.log(`Test Passed "${e}" is a operator`)
        } else{
            console.log(`Operator: "${e}" not passed or not a operator .`)
        }
    })
    console.log("------------------")
}

/**
 * Descrição: Testa se esta encontrando os botões.
 */
function testIfHaveBtns() {

    const testBtns = calcController.btns
    testBtns.forEach(e => {
        let Btn = e.id.replace("btn-", "")
        console.log(`btn "${Btn}" Passed`)
    })
    console.log("------------------")
}

/**
 * Descrição: Testa Todo o sistema.
 */
function testIfAllSis(){
    const operator = ['1', '+', '9', '0' ,'3' ,'-' ,'7' ,'5' ,'2' ,'*' ,'6' ,'4' ,'/' ,'8' , '=']
    operator.forEach(e => {
        calcController.execBtn(e)
        console.log(`"${e}" Operated. Test Passed`)
    })
    console.log("Final Test")
    const numberInDisplay = calcController.displayCalc
    if (numberInDisplay) {
        console.log(`Value in display is "${numberInDisplay}"`)
        console.log('Expected Value "1216"')
        if(numberInDisplay == 1216){
            console.log("All Sistem is operated")
        } else {
            console.log("All Sistem not operated")
        }
    }else{
        console.log('Not value in Display')
    }
    console.log("------------------")
}

testZeroInDisplay()
testOperators()
testIfHaveBtns()
testIfAllSis()
