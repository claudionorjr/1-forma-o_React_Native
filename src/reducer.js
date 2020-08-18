/**
 * @description: Reducer recebe dados do Action do Component e envia um novo estado.
 * 
 * @param {State} state 
 * @param {Action} action 
 */
export default function reducer (state = { list: [] }, action){
    
    switch (action.type) {
        case 'task/add':
            return {
                ...state,
                list: action.list
            }
        case 'task/delete':
            return {
                ...state,
                list : action.list
            }
        default:
            return state;
    }
  }