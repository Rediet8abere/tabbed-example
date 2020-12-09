import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { newTodo } from '../actions'
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

import TodoItem from './TodoItem'
import TodoList from './todo-list'


function TodoNew(props) {

  const {nav, route} = props

  const [ name, setName ] = useState(route.params)
  const dispatch = useDispatch()




  function handleSubmit(e) {
    e.preventDefault()
    if (name === '') { return }
    dispatch(newTodo(new TodoItem(name)))
    setName('')
  }

  return (
    <View style={{display: 'flex'}}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        type="text"
        value={route.params}
        onChange={(name) => setName(route.params)}
      />


      <Button
        style={{
           backgroundColor: '#222',
           borderRadius: 5,
           padding: 10,
           margin: 20
         }}
        onPress={handleSubmit}
        title="Save"
      />

      <TodoList />

    </View>
  )
}







export default TodoNew
