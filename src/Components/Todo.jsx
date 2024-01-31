import { useDispatch, useSelector } from "react-redux";
import { fetchtodosdata } from "../Store/reducer/todo";
function Todo() {
  const todos = useSelector((state) => state.todo.data);
  const loading = useSelector((state) => state.todo.isLoading);
  const Errord = useSelector((state) => state.todo.isError);
  const tododispatch = useDispatch();
  const gettodo = () => {
    tododispatch(fetchtodosdata());
  };
  return (
    <>
      <button onClick={gettodo}>get todo</button>
      <section>
        {Errord && <p>There is an error in loading datas</p>}
        {loading && !Errord && <p>Loading todo datas</p>}
        {!loading &&
          !Errord &&
          todos.map((todo) => {
            return <p>{todo.title}</p>;
          })}
        {!loading && !Errord && todos.length < 1 && (
          <p>Click button to get data</p>
        )}
      </section>
    </>
  );
}

export default Todo;
