import { DateUtils } from '../../utils/date/date.utils'
import { ITodoItem } from './model'
import { LocalStorage } from '../../utils/storage/local-storage'

export class TodoListUtils {
    static newTodoItemIsExist(todoList: ITodoItem[], newTodoItem: ITodoItem) {
        const todayDateStr = DateUtils.format(new Date(), 'YYYY-MM-DD')
        return todoList.findIndex(todoItem => {
            return todoItem.createDate === todayDateStr && todoItem.name === newTodoItem.name
        }) !== -1
    }

    static updateTodoListInLocalStorage(todoList) {
        LocalStorage.write('todoList', JSON.stringify(todoList))
    }

    static readTodoListFromLocalStorage() {
        try {
            return JSON.parse(LocalStorage.read('todoList'))
        } catch (e) {
            return []
        }
    }
}