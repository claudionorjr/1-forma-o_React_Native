import React from 'react'
import { connect } from 'react-redux'
import TaskModel from '../data/TaskModel.js'


/**
 * @class BtnDelete
 * @description: Exporta por padrão um BtnDelete.
 * 
 * @author Claudionor Silva <claudionor.junior1994@gmail.com>
 * @version 1.0.0
 * 
 * @param {Array} props.list
 * @param {HTMLElement} props.index
 * @param {Object} props.element
 * @returns {BtnConnectToDelete}
 */
class BtnDelete extends React.Component {

    /**
     * @description: Método usado para renderizar o botão de 'task/delete'.
     */
    render() {
        const taskModel = new TaskModel()
        return (
            <button type="button" className="btn btn-danger"onClick={() => {
                    var newList = [...this.props.list]
                    newList.splice(this.props.index, 1)
                    taskModel.delete(this.props.element['id'])

                    this.props.dispatch({ type: 'task/delete', list: newList })
                }}
                >Excluir
            </button>
        )
    }
}

const mapStateToProps = (state) => {
        return { list: state.list }
}

const BtnConnectToDelete = connect(mapStateToProps)(BtnDelete)

export default BtnConnectToDelete