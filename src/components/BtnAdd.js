import React from 'react'
import { connect } from 'react-redux'
import TaskModel from '../data/TaskModel.js'


/**
 * @class BtnAdd
 * @description: Exporta por padrão um BtnAdd.
 * 
 * @author Claudionor Silva <claudionor.junior1994@gmail.com>
 * @version 1.0.0
 * 
 * @param {Array} props.list
 * @returns {BtnConnectToAdd}
 */
class BtnAdd extends React.Component {

    /**
     * @description: Método usado para renderizar o botão de 'task/add'.
     */
    render() {
        const taskModel = new TaskModel()
        return (
            <button type="button" className="btn btn-success" style={{minWidth:'106px'}} onClick={async () => {
                    const task = document.getElementById('task').value
                    const beginDate = document.getElementById('beginDate').value
                    const finalDate = document.getElementById('finalDate').value

                    if(task !== '' && beginDate !== '' && finalDate !== '') {
                        const id = await taskModel.create(task, beginDate, finalDate)
                        var newList = [...this.props.list]
                        newList.push({'id': id, 'task': task, 'beginDate': beginDate, 'finalDate': finalDate})
                        
                        this.props.dispatch({type: 'task/add', list: newList})
                    }
                    else alert('Verifique se todos os campos estão preenchidos!')
                }}
                >Criar Tarefa
            </button>
        )
    }
}

const mapStateToProps = (state) => { 
    return { list: state.list } 
}

const BtnConnectToAdd = connect(mapStateToProps)(BtnAdd)

export default BtnConnectToAdd