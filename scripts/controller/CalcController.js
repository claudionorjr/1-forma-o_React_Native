class CalcController{
    constructor() {
        this._lastOperator = ''
        this._lastNumber = ''
        this._operation = []
        this._locale = 'pt-BR'
        this._displayCalcEl = document.querySelector("#display")
        this.initialize()
        this.initButtonsEvents()
    }

    initialize() {
        this.setLastNumberToDisplay()
    }

    addEventListenerAll(element, events, fn) {
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false)
        })
    }

    getLastOperation() {
        return this._operation[this._operation.length - 1]
    }

    setLastOperation(value) {
        this._operation[this._operation.length - 1] = value
    }

    isOperator(value) {
        return (['+', '-', '*', '/'].indexOf(value) > -1)
    }

    pushOperation(value) {
        this._operation.push(value)
        if (this._operation.length > 3) {
            this.calc()
        }
    }

    getResult() {
        try {
            return eval(this._operation.join(""))
        } catch (e) {
            setTimeout(() => this.setError(), 1)
        }
    }

    calc() {
        var last = ''
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
        this._operation = [result]
        this.setLastNumberToDisplay()
    }

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

    setLastNumberToDisplay() {
        let lastNumber = this.getLastItem(false)
        if (!lastNumber) lastNumber = 0
        this.displayCalc = lastNumber
    }

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

    setError() {
        this.displayCalc = "Error"
    }

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
    get displayCalc() {
        return this._displayCalcEl.value
    }
    set displayCalc(value) {
        if (value.toString().length > 10) {
            this.setError()
            return false
        }
        this._displayCalcEl.value = value
    }
}