import React, { Component } from 'react'
import PropTypes from "prop-types";
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'


class TodoForm extends Component {
    state = {
        text: '',
        description: ''
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit  = event =>{
        event.preventDefault()
        this.props.createTodo(this.state)
        event.target.reset()
        this.setState({text: '', description: ''})
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label>Enter Task</Label>
                    <Input
                        placeholder="Do some code"
                        name="text"
                        value={this.state.text}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Describe Task</Label>
                    <Input
                        placeholder="Write some short description about your task"
                        type="textarea"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <Button type="submit">Create Task</Button>
            </Form>
        )
    }
} 

TodoForm.propTypes = {
    createTodo: PropTypes.func.isRequired
}

export default TodoForm
