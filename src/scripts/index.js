import CalculatorController from './controller/CalcController.js'
import TableController from './controller/TableController.js'
import initPagination from './controller/pagination.js'

const calculatorController = new CalculatorController()
calculatorController.init()

const tableController = new TableController()
tableController.init()

initPagination()