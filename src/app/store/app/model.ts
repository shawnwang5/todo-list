export interface IAppState {
    todoList: ITodoItem[],
}

export interface ITodoItem {
    name: string
    isCompleted: boolean
    memo: string
    createDate: string
    completedDate: string
}

export const initialState: IAppState = {
    todoList: []
}
