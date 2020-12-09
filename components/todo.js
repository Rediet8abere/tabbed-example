import React from 'react'
import { Text, View, Button} from 'react-native';
import { useDispatch } from 'react-redux'
import { deleteTodo, completeToDo } from '../actions'
// import your complete todo action

function Todo(props) {
  const dispatch = useDispatch()
  const { name, completed, index } = props

  return (
    <View>
      <Text style={{fontSize: 20, color: '#fff' }}>
        {name}
      </Text>

      <Button
        onPress={() => {
          dispatch(deleteTodo(index))
        }}
        title="Delete"
      />
    </View>
  )
}

export default Todo
