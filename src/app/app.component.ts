import { Component, OnInit } from '@angular/core'
import { AppActions } from './store/app/actions'
import { TodoListUtils } from './store/app/todo-list.utils'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(private appActions: AppActions) {
    }

    ngOnInit(): void {
        this.restoreTodoListFromLocalStorage()
    }

    restoreTodoListFromLocalStorage() {
        const todoList = TodoListUtils.readTodoListFromLocalStorage() || []
        this.appActions.updateTodoList(todoList)
    }
}
