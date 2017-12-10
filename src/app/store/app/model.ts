export interface IAppState {
    todoList: ITodoItem[],
    test: number
}

export interface ITodoItem {
    name: string
    isCompleted: boolean
    memo: string
    createDate: string
    completedDate: string
}

export const initialState: IAppState = {
    test: 0,
    todoList: []
}
