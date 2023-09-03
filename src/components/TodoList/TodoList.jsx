import { Grid, GridItem, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectFilter, selectTodos } from 'redux/selectors';

export const TodoList = () => {
  const todos = useSelector(selectTodos);
  const filter = useSelector(selectFilter);
  const getFilteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <Grid>
      {getFilteredTodos.map((todo, index) => (
        <GridItem key={todo.id}>
          <Todo id={todo.id} text={todo.text} counter={index + 1} />
        </GridItem>
      ))}
    </Grid>
  );
};
