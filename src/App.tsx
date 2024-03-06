import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { fetchTodos } from "./features/todo/todoSlice";
import { AppDispatch } from "./app/store";
import TailwindPractice from "./pages/TailwindPractice";

interface todos {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}
function App() {
  const dispatch = useDispatch<AppDispatch>();
  const state = useSelector((state: any) => state?.todoreducer);
  const handleClick = () => {
    dispatch(fetchTodos());
  };

  return (
    <>
      <div>
        {/* <h1 className="text-4xl font-bold underline text-red-600">
          Simple React Typescript Tailwind Sample
        </h1>
        <button onClick={handleClick}>fetch todo</button>
      </div>
      <div>{state.isLoading && <p>Loading...</p>}</div>
      <div>
        {state?.data?.todos?.map((obj: todos, index: number) => (
          <div key={index}>
            <p>{obj.todo}</p>
          </div>
        ))} */}
        <TailwindPractice />
      </div>
    </>
  );
}

export default App;
