import React from "react";

import PageHeader from "../template/PageHeader";
import Form from "../todo/TodoForm";
import List from "../todo/TodoList";


export default props => {
return(
  <div>
        <PageHeader name="Tarefas" small="Cadastro" />
        <Form/>
        <List/>
  </div>
)
}