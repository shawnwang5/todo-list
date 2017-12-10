import { Action } from '@ngrx/store'
import { IAppState, initialState } from './model'
import { ADD_TODO_ITEM, UPDATE_TODO_LIST } from './types'
import { autoCloseAlert } from '../../utils/swal/swal.utils'
import { TodoListUtils } from './todo-list.utils'

export function appReducer(state: IAppState = initialState, action: Action) {
    switch (action.type) {
        case ADD_TODO_ITEM:
            if (TodoListUtils.newTodoItemIsExist(state.todoList, (<any>action).payload)) {
                autoCloseAlert('该任务已存在')
                return state
            } else {
                state.todoList = [].concat(state.todoList, [(<any>action).payload])
                TodoListUtils.updateTodoListInLocalStorage(state.todoList)
                return { ...state }
            }
        case UPDATE_TODO_LIST:
            state.todoList = [].concat((<any>action).payload)
            TodoListUtils.updateTodoListInLocalStorage(state.todoList)
            return { ...state }
        default :
            return state
    }
}
