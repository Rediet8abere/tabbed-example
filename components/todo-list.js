import React from 'react'
import { useSelector } from 'react-redux'
import { Text, View, Button} from 'react-native';

import Todo from './todo'

function TodoList() {
  const todos = useSelector((state) => state.todos)

  function renderTodos() {
    return todos.map((todo, i) => <Todo {...todo} index={i} key={i} />)
  }


  return (
    <View  style={{ fontSize: 20, backgroundColor: '#000', padding: 10 }}>
      {renderTodos()}
    </View>
  )
}




export default TodoList
