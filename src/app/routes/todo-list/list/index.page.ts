import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core'
import { IAppState, ITodoItem } from '../../../store/app/model'
import { Store } from '@ngrx/store'
import { DateUtils } from '../../../utils/date/date.utils'
import { AppActions } from '../../../store/app/actions'

@Component({
    selector: 'app-todo-list',
    templateUrl: './index.page.html',
    styleUrls: ['./index.page.scss']
})
export class TodoListPageComponent implements OnInit, OnDestroy {
    @ViewChild('taskNameInput') taskNameInput
    taskName = ''

    todoList$: any
    subscriberArray: any[] = []

    constructor(private store: Store<IAppState>, private appActions: AppActions) {
    }

    ngOnInit() {
        this.todoList$ = this.store.select(state => (<any>state).app.todoList)
    }

    ngOnDestroy(): void {
        this.subscriberArray.forEach(item => item.unsubscribe())
    }

    onNameEnter() {
        const todoItem: ITodoItem = {
            name: this.taskName,
            isCompleted: false,
            memo: '',
            createDate: DateUtils.format(new Date(), 'YYYY-MM-DD'),
            completedDate: ''
        }
        this.appActions.addTodoItem(todoItem)
        this.taskName = ''
        this.taskNameInput.nativeElement.blur()
    }
}
