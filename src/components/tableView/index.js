import React from "react";
import PropTypes from "prop-types";
import { Button, CustomInput, Table } from "reactstrap";

export const RowItem = ({ todo, toggleSelect, toggleComplete }) => {
  return (
    <tr>
      <td scope="row">
        <CustomInput
          type="checkbox"
          id={todo.id}
          checked={todo.isSelect}
          onChange={() => toggleSelect(todo.id)}
        />
      </td>
      <td>{todo.time.toDateString()}</td>
      <td>{todo.text}</td>
      <td>
        <Button
          color={todo.isComplete ? "danger" : "success"}
          onClick={() => toggleComplete(todo.id)}
        >
          {todo.isComplete ? "Completed" : "Running"}
        </Button>
      </td>
    </tr>
  );
};


RowItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleSelect: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

export const TableView = ({ todos, toggleComplete, toggleSelect }) => (
  <Table>
    <thead>
      <tr>
        <th>#</th>
        <th>Time</th>
        <th>Todo</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {todos.map((todo) => (
        <RowItem
          todo={todo}
          key={todo.id}
          toggleSelect={toggleSelect}
          toggleComplete={toggleComplete}
        ></RowItem>
      ))}
    </tbody>
  </Table>
);
export default TableView;
TableView.propTypes={
  todos: PropTypes.object.isRequired,
  toggleComplete:PropTypes.func.isRequired,
  toggleSelect:PropTypes.func.isRequired
}