/**
 * @class USDateToBRDate
 * 
 * @description: Recebe uma data US e transforma em BR!
 * 
 * @param {String} value
 * @returns {String} date
 * 
 * @version 2.0.0
 * @author Claudionor Junior <claudionor.junior1994@gmail.com>
 */
export default class USDateToBRDate {
    constructor(value) {
        var dateFormated = value.split('-')
        this.date = dateFormated[2]+"-"+dateFormated[1]+"-"+dateFormated[0]
    }
}
