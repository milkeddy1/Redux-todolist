import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "../action/data"

const todoList = []

export const dataReducer = function (state = todoList, action) {
    const newArr = [...state]

    switch (action.type) {
        case ADD_TODO:
            newArr.push(action)
            return newArr
        case DELETE_TODO:
            return newArr.filter(item => { console.log(action.id === item.id); return item.id !== action.id })
        case UPDATE_TODO:
            newArr.forEach((item) => {
                if (item.id === action.id) {
                    item.note = action.value
                }
            })
            return newArr
        default:
            return newArr
    }
}
