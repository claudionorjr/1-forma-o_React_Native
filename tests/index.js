import CalcController from "../src/antigo/CalcController.js";

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

testZeroInDisplay()