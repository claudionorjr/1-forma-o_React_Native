import TaskModel from './data/TaskModel.js'
const taskModel = new TaskModel()

export default function reducer (state = { list: [] }, action){
    
    switch (action.type) {
        case 'CREATE':
            var stateList = action.listData
            stateList.push(action.data)
            return {
                ...state,
                list: stateList
            }
        case 'DELETE':
            return {
                ...state,
                list : taskModel.delete(['id'])
            }
        default:
            return state;
    }
  }