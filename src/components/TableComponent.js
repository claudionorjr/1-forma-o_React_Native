import React from 'react'
import TaskModel from '../controller/model/TaskModel.js'
import USDateToBRDate from '../validators/USDateToBRDate.js'


/**
 * @class TableComponent
 * @description: Exporta por padrão um TableComponent.
 * 
 * @author Claudionor Silva <claudionor.junior1994@gmail.com>
 * @version 1.0.0
 * 
 * @param {TaskModel} props
 * @returns {NavBar}
 */
export default class TableComponent extends React.Component {
    constructor(props) {
        super(props)
        this.taskModel = new TaskModel()
        this.state = {list: props.item}
    }

    /**
     * @description: Método usado para atualizar o State.
     */
    refreshState() {
        this.taskModel.getAll((newlist) => {
            this.setState({
                list: newlist
            })
        })
    }

    /**
     * @description: Método usado para renderizar a tabela.
     */
    render() {
        return (
            <div className="table-responsive">
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Tarefa</th>
                            <th scope="col">Data Início</th>
                            <th scope="col">Data Final</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.list.map((e , index)=>{
                                var newBeginDate = new USDateToBRDate(e['beginDate'])
                                var newFinalDate = new USDateToBRDate(e['finalDate'])
                                return (
                                    <tr key={index}>
                                        <th scope="row">{e['id']}</th>
                                        <td>{e['task']}</td>
                                        <td>{newBeginDate.date}</td>
                                        <td>{newFinalDate.date}</td>
                                        <td>
                                            <button type="button" className="btn btn-danger"
                                                onClick={()=>{
                                                    this.taskModel.delete(e['id'])
                                                    this.refreshState()
                                                }}
                                                >Excluir
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th scope="row"></th>
                            <td><input id="task" type="text" className="form-control" style={{minWidth:'193px'}} placeholder="Tarefa"></input></td>
                            <td><input id="beginDate" type="date" className="form-control" style={{minWidth:'193px'}}></input></td>
                            <td><input id="finalDate" type="date" className="form-control" style={{minWidth:'193px'}}></input></td>
                            <td>
                                <button type="button" className="btn btn-success" style={{minWidth:'105px'}}
                                    onClick={() => {
                                        let task = document.getElementById('task').value
                                        let beginDate = document.getElementById('beginDate').value
                                        let finalDate = document.getElementById('finalDate').value
                                        if(task !== '' && beginDate !== '' && finalDate !== '') {
                                            this.taskModel.create(task, beginDate, finalDate)
                                        } else {
                                            alert('Verifique se todos os campos estão preenchidos!')
                                        }
                                        this.refreshState()
                                    }}
                                    >Criar Tarefa
                                </button>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}
