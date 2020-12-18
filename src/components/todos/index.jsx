import React, { Component } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import shortid from 'shortid';
import Controller from '../controllers';
import ListView from '../listView';
import TableView from '../tableView';
import TodoForm from '../todo-form';

export class Todos extends Component {
    state = {
        todos: [
            {
                id: 'airful01',
                text: 'Create Reat Project',
                description: 'simple description',
                time: new Date(),
                isComplete: false,
                isSelect: false
            },
            {
                id: 'airful02',
                text: 'Learn JS Building Method',
                description: 'simple description',
                time: new Date(),
                isComplete: false,
                isSelect: false
            },
            {
                id: 'airful03',
                text: 'Reading Programming Blog',
                description: 'simple description',
                time: new Date(),
                isComplete: false,
                isSelect: false
            }
        ],
        isOpenTodoForm: false,
        searchTerm: '',
        view: 'list',
        filter: 'all'
    }
    toggleSelect = todoId => {
        const todos = [...this.state.todos]
        const todo = todos.find(t => t.id === todoId)
        todo.isSelect = !todo.isSelect

        this.setState({ todos })
    }
    toggleComplete = todoId => {
        const todos = [...this.state.todos]
        const todo = todos.find(t => t.id === todoId)
        todo.isComplete = !todo.isComplete

        this.setState({ todos })
    }

    toggleForm = () => {
        this.setState({
            isOpenTodoForm: !this.state.isOpenTodoForm
        })
    }

    handleSearch = (value) => {
        this.setState({
            searchTerm: value
        })
    }

    createTodo = (todo) => {
        todo.id = shortid.generate()
        todo.time = new Date()
        todo.isComplete = false
        todo.isSelect = false

        const todos = [todo, ...this.state.todos]
        this.setState({ todos })
        this.toggleForm();
    }

    handleFilter = (filter) => {
        this.setState({ filter })
    }
    changeView = (event) => {
        this.setState({
            view: event.target.value
        })
    }
    clearSelected = () => {
        const todos = this.state.todos.filter(todo => !todo.isSelect)
        this.setState({todos})
    }
    clearCompleted = () => {
        const todos = this.state.todos.filter(todo => !todo.isComplete)
        this.setState({todos})
    }
    reset = () => {
        this.setState({
            filter: 'all',
            searchTerm: '',
            view:'list',
            isOpenTodoForm: false
        })
    }
    performSearch = () => {
        return this.state.todos.filter(todo =>
            todo.text.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    };
    performFilter = todos => {
        const { filter } = this.state
        if (filter === 'completed') {
            return todos.filter(todo => todo.isComplete)
        } else if (filter === 'running') {
            return todos.filter(todo => !todo.isComplete)
        } else {
            return todos
        }
    }
    getView = () => {
        let todos = this.performSearch()
        todos = this.performFilter(todos)
        return this.state.view === 'list' ? (
            <ListView
                todos={todos}
                toggleComplete={this.toggleComplete}
                toggleSelect={this.toggleSelect} />
        ) :
            (
                <TableView
                    todos={todos}
                    toggleComplete={this.toggleComplete}
                    toggleSelect={this.toggleSelect} />
            )

    }
    render() {
        return (
            <div>
                <h1 className="display-4 text-center mb-5">Task Todos</h1>
                <Controller
                    searchTerm={this.state.searchTerm}
                    toggleForm={this.toggleForm}
                    handleSearch={this.handleSearch}
                    handleFilter={this.handleFilter}
                    view={this.state.view}
                    changeView={this.changeView}
                    clearSelected={this.clearSelected}
                    clearCompleted={this.clearCompleted}
                    reset={this.reset}
                    filter={this.state.filter}

                />
                <div>
                    {this.getView()}
                </div>
                <Modal
                    isOpen={this.state.isOpenTodoForm}
                    toggle={this.toggleForm}
                >
                    <ModalHeader toggle={this.toggleForm}>Create New Todo Item</ModalHeader>
                    <ModalBody>
                        <TodoForm createTodo={this.createTodo} ></TodoForm>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default Todos

// const todo = {
//     id: 'daierel',
//     text: 'main to text',
//     description: 'simple description',
//     time: 'soeru',
//     isComplete: false,
//     isSelect: false
// }
