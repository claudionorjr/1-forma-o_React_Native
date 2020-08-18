import React from 'react'
import { connect } from 'react-redux'
import USDateToBRDate from '../validators/USDateToBRDate.js'
import TaskModel from '../data/TaskModel.js'
import BtnConnectToAdd from './BtnAdd'
import BtnConnectToDelete from './BtnDelete'


/**
 * @class TableComponent
 * @description: Exporta por padrão um TableComponent.
 * 
 * @author Claudionor Silva <claudionor.junior1994@gmail.com>
 * @version 2.0.0
 * 
 * @param {Array} props.list
 * @returns {TableComponent}
 */
class TableComponent extends React.Component {

    /**
     * @description: Monta o component com uma Array do DB.
     */
    async componentDidMount() {
        const taskModel = new TaskModel()
        const getListInDB = await taskModel.getAll()
        
        this.props.dispatch({ type: 'task/add', list: getListInDB })
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
                        this.props.list.map((e , index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{e['id']}</th>
                                    <td>{e['task']}</td>
                                    <td>{new USDateToBRDate(e['beginDate']).date}</td>
                                    <td>{new USDateToBRDate(e['finalDate']).date}</td>
                                    <td><BtnConnectToDelete element={e} index={index}/></td>
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
                            <td><BtnConnectToAdd /></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
        return { list: state.list }
}

export default connect(mapStateToProps)(TableComponent)
