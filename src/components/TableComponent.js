import React from 'react'
import { connect } from 'react-redux'
import USDateToBRDate from '../validators/USDateToBRDate.js'
import TaskModel from '../data/TaskModel.js'
const taskModel = new TaskModel()


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
class TableComponent extends React.Component {
    constructor(props) {
        super(props)
        this.list = props.list.length ? props.list : props.listaDefault
        this.state = {list: this.list}
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
                            this.list.map((e , index)=>{
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
                                                onClick={() => {
                                                this.props.dispatch.bind(this, {
                                                        type: 'DELETE',
                                                        data: {}
                                                    })
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
                                <button type="button" className="btn btn-success" style={{minWidth:'106px'}}
                                    onClick={async () => {
                                        const task = document.getElementById('task').value
                                        const beginDate = document.getElementById('beginDate').value
                                        const finalDate = document.getElementById('finalDate').value
                                        if(task !== '' && beginDate !== '' && finalDate !== '') {
                                            const id = await taskModel.create(task, beginDate, finalDate)
                                            this.props.dispatch.bind(this, {
                                                type: 'CREATE',
                                                data: {'id': id, 'task': task, 'beginDate': beginDate, 'finalDate': finalDate},
                                                listData: this.list //Todo
                                            })
                                        }
                                        else alert('Verifique se todos os campos estão preenchidos!')
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

const mapStateToProps = (state) => {
    return {
        list: state.list,
    }
};

export default connect(mapStateToProps)(TableComponent);
