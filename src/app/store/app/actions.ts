import { Injectable } from '@angular/core'
import { IAppState, ITodoItem } from './model'
import { Store } from '@ngrx/store'
import { ADD_TODO_ITEM, UPDATE_TODO_LIST } from './types'

@Injectable()
export class AppActions {
    constructor(private store: Store<IAppState>) {
    }

    addTodoItem(todoItem: ITodoItem) {
        this.store.dispatch({
            type: ADD_TODO_ITEM,
            payload: todoItem
        })
    }

    updateTodoList(todoList) {
        this.store.dispatch({
            type: UPDATE_TODO_LIST,
            payload: todoList
        })
    }
}
