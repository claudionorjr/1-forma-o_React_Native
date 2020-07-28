/**
 * class Table
 * 
 * Descrição: Classe para uma calculadora!
 * 
 * @version 1.0.0
 * @author Claudionor Junior <claudionor.junior1994@gmail.com>
 */
export default class CalcController{
    constructor() {
        this._lastOperator = ''
        this._lastNumber = ''
        this._operation = []
        this._locale = 'pt-BR'
        this._displayCalcEl = document.querySelector("#display")
        this.initialize()
        this.initButtonsEvents()
    }

    /**
     * Descrição: Iniciar o display com "0"
     */
    initialize() {
        this.setLastNumberToDisplay()
    }


    /**
     * Descrição: uma versão do addEventListener, porém é para vários
     * @param {HTMLElement} element 
     * @param {MouseEvent} events 
     * @param {any} fn //Por Exemplo colocar style em um button: btn.style.cursor = "pointer"
     */
    addEventListenerAll(element, events, fn) {
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false)
        })
    }


    /**
     * Descrição: Pega no final do array this._operation um operador.
     */
    getLastOperation() {
        return this._operation[this._operation.length - 1]
    }

    /**
     * Descrição: seta no final do array this._operation um operador.
     * @param {String} value 
     */
    setLastOperation(value) {
        this._operation[this._operation.length - 1] = value
    }

    /**
     * Descrição: Método é usado para verificar se é um operador lógico.
     * @param {String} value 
     */
    isOperator(value) {
        return (['+', '-', '*', '/'].indexOf(value) > -1)
    }

    /**
     * Descrição: Método usado para adicionar um value no this._operation e
     * verificar se é maior que 3 se for vai para this.calc()
     * 
     * @param {Array} value 
     */
    pushOperation(value) {
        this._operation.push(value)
        if (this._operation.length > 3) {
            this.calc()
        }
    }

    /**
     * Descrição: ele faz um join, tirando os espaços.
     */
    getResult() {
        try {
            return eval(this._operation.join(""))
        } catch (e) {
            setTimeout(() => this.setError(), 1)
        }
    }

    /**
     * Descrição: Método para calcular.
     */
    calc() {
        let last = ''
        this._lastOperator = this.getLastItem()
        if (this._operation.length < 3) {
            let firstItem = this._operation[0]
            this._operation = [firstItem, this._lastOperator, this._lastNumber]
        }
        if (this._operation.length > 3) {
            last = this._operation.pop()
            this._lastNumber = this.getResult()
        } else if (this._operation.length === 3) {
            this._lastNumber = this.getLastItem(false)
        }
        let result = this.getResult()
        this._operation = [result];
        if (last) {
            this._operation = [result];
            if(last) this._operation.push(last);
        }
        this.setLastNumberToDisplay()
    }

    /**
     * Descrição Verifica se o ultimo item da array é operador ou numero.
     * 
     * @param {String} isOperator 
     */
    getLastItem(isOperator = true) {
        let lastItem
        for (let i = this._operation.length - 1; i >= 0; i--) {
            if (this.isOperator(this._operation[i]) === isOperator) {
                lastItem = this._operation[i]
                break
            }
        }
        if (!lastItem) {
            lastItem = (isOperator) ? this._lastOperator : this._lastNumber
        }
        return lastItem
    }

    /**
     * Descrição: Setar o ultimo número no display, se for nulo será "0"
     */
    setLastNumberToDisplay() {
        let lastNumber = this.getLastItem(false)
        if (!lastNumber) lastNumber = 0
        this.displayCalc = lastNumber
    }

    /**
     * Descrição: conforme a operação vinda do método this.execBtn(),
     * vão ser feitas validações se essa operação é letra ou número.
     * 
     * Primeiro verifica se o this.getLastOperation(Array:this._operation) é um
     * operador "'+' '-' '*' '/'" se for, vai ferificar qual operador é e vai setar no array this._operation,
     * se não se esse operador por um "=" ele vai calcular.
     * 
     * Se não for operador vai acrrescentar um novo valor no this.getLastOperation() e setar no display
     * @param {String} value 
     */
    addOperation(value) {
        if (isNaN(this.getLastOperation())) {
            if (this.isOperator(value)) {
                this.setLastOperation(value)
            } else {
                this.pushOperation(value)
                this.setLastNumberToDisplay()
            }
        } else {
            if (this.isOperator(value)) {
                this.pushOperation(value)
            } else {
                let newValue = this.getLastOperation().toString() + value.toString()
                this.setLastOperation(newValue)
                this.setLastNumberToDisplay()
            }
        }
    }

    /**
     * Descrição: Setar Error no display
     */
    setError() {
        this.displayCalc = "Error"
    }

    /**
     * Descrição: Conforme um dos elementos dentro do this.addEventListenerAll()
     * for clicado vai executar um dos "cases"
     * 
     * @param {String} value 
     */
    execBtn(value) {
        switch (value) {
            case '+':
                this.addOperation('+')
                break
            case '-':
                this.addOperation('-')
                break
            case '/':
                this.addOperation('/')
                break
            case '*':
                this.addOperation('*')
                break
            case '=':
                this.calc()
                break
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value))
                break
            default:
                this.setError()
        }
    }

    /**
     * 
     * Descrição: Iniciar os botões e acrescentar this.addEventListenerAll em todos
     */
    initButtonsEvents() {
        let buttons = document.querySelectorAll("div.tecla")
        buttons.forEach((btn, index) => {
            this.addEventListenerAll(btn, 'click', e => {
                let textBtn = btn.id.replace("btn-", "")
                this.execBtn(textBtn)
            })
            this.addEventListenerAll(btn, 'mouseover mouseup mousedown', e => {
                btn.style.cursor = "pointer"
            })
        })
    }

    /**
     * Descrição: Setar valor no value do display
     * 
     * @returns {HTMLElement} this._displayCalcEl.value
     */
    get displayCalc() {
        return this._displayCalcEl.value
    }

    /**
     * Descrição: Setar valor no value do display
     * 
     * @param {Number} value
     */
    set displayCalc(value) {
        if (value.toString().length > 10) {
            this.setError()
            return false
        }
        this._displayCalcEl.value = value
    }

    /**
     * Descrição: Inicia o CalcController com o 'this'
     * 
     * @returns this
     */
    init(){
        return this
    }
}