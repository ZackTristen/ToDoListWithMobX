import { makeAutoObservable } from 'mobx'

class ToDoList {


    todo = {
        todos: [
            {
                id: 1,
                title: 'make tea',
                date: '23-07-2019',
                important: true,
                done: false
            },
            {
                id: 2,
                title: 'make tea',
                date: '23-07-2019',
                important: false,
                done: true
            },
            {
                id: 3,
                title: 'make tea',
                date: '23-07-2019',
                important: false,
                done: false
            }
        ],
        label: '',
        filtering: '',
        stateButton: [
            { name: 'all', status: true },
            { name: 'done', status: false },
            { name: 'important', status: false }
        ]
    }

    onToggleStatus = (title) => {

        this.todo.stateButton = this.todo.stateButton.map((item) => {
            if (item.name === title) {
                return {
                    name: item.name,
                    status: true
                }
            } else {
                return {
                    name: item.name,
                    status: false
                }
            }
        })

    }

    constructor() {
        makeAutoObservable(this)
        this.now = new Date()
    }

    onToggleDone = (id) => {
        this.todo.todos.map(item => {
            if (item.id === id) {
                item.done = !item.done
            }
            return item;
        })
    }

    deleteItem = (id) => {
        const idx = this.todo.todos.findIndex(item => item.id === id)
        this.todo.todos = [
            ...this.todo.todos.slice(0, idx),
            ...this.todo.todos.slice(idx + 1)
        ]
    }

    onToggleImportant = (id) => {
        this.todo.todos.map(item => {
            if (item.id === id) {
                item.important = !item.important
            }
            return item;
        })
    }



    sortData = () => {
        if (this.todo.stateButton[0].status === true) {
            if (this.todo.filtering.length === 0) {
                return this.todo.todos;
            }
            return this.todo.todos.filter((item) => {
                return item.title.toLowerCase().indexOf(this.todo.filtering.toLowerCase()) > -1;
            });
        }
        if (this.todo.stateButton[1].status === true) {
            if (this.todo.filtering.length === 0) {
                return this.todo.todos.filter(item => item.done === true);
            }
            const matches = this.todo.todos.filter(item => item.important === false && item.done === true)
            return matches.filter((item) => {
                return item.title.toLowerCase().indexOf(this.todo.filtering.toLowerCase()) > -1;
            });
        }
        if (this.todo.stateButton[2].status === true) {
            if (this.todo.filtering.length === 0) {
                return this.todo.todos.filter(item => item.important === true && item.done === false);
            }
            const matches = this.todo.todos.filter(item => item.important === true && item.done === false)
            return matches.filter((item) => {
                return item.title.toLowerCase().indexOf(this.todo.filtering.toLowerCase()) > -1;
            });
        }
    }

    changeFiltering = (text) => {

        this.todo.filtering = text;
    }

    changeLabel = (text) => {
        this.todo.label = text;

    }
    addTask = () => {
        const newTitle = this.todo.label;

        const forDate = {
            day: this.now.getDate() > 10 ? `${this.now.getDate()}` : `0${this.now.getDate()}`,
            month: (this.now.getMonth() + 1) > 10 ? `${(this.now.getMonth() + 1)}` : `0${this.now.getMonth() + 1}`,
            year: this.now.getFullYear()
        }

        const newTask = {
            id: this.todo.todos.length + 1,
            title: newTitle,
            date: `${forDate.day}-${forDate.month}-${forDate.year}`,
            important: false,
            done: false
        }

        this.todo.label = ''
        this.todo.todos.push(newTask)

    }

    removeTask = (id) => {
        const idx = this.todo.findIndex(item => item.id === id)
        this.todo = this.todo.map(item => item.id !== idx)

    }

}

export default new ToDoList;

