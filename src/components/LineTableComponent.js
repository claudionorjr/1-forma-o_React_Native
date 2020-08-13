import React from 'react'


/**
 * @description: Exporta por padrão um LineTableComponent.
 * 
 * @author Claudionor Silva <claudionor.junior1994@gmail.com>
 * @version 1.0.0
 * 
 * @returns {LineTableComponent}
 */
export default class TableComponent extends React.Component {
    constructor(props) {
        super(props)
        this.taskModel = new TaskModel()
        this.state = {list: props.item}
        
    }

    render() {
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
    }
}
