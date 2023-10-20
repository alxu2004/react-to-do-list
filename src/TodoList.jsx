import {TodoItem} from './TodoItem'


/*

[
  { id: 1, text: "doing exercise", isChecked: false}
  { id: 2, text: "doing exercise", isChecked: true}
  { id: 3, text: "doing exercise", isChecked: false}
  { id: 4, text: "doing exercise", isChecked: false}
]
*/

export const TodoList = () => {

  return (
    <section>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </section>
  )
}
