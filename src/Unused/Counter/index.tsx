import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
} from "../../features/counter/counterSlice";
import ButtonComp from "../../Components/ButtonComp";

const BtnStyle = {
  border: "1px solid grey",
  background: "#9f61ca",
  padding: "10px",
  borderRadius: "10px",
  color: "#fff",
  marginLeft: "10px",
};
const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);

  // AppDispatch is necessary in type when we are using asyn task using thunk
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-bgClr h-screen p-4 space-y-4 md:space-y-0 md:space-x-8">
      {/* Increment Button */}
      <div className="flex justify-center w-full md:w-auto">
        <ButtonComp
          style={BtnStyle}
          onClickEvent={() => dispatch(increment())}
          label="Increment"
        />
      </div>

      {/* Counter Display */}
      <div className="py-0 px-8 flex flex-col md:flex-row items-center justify-center">
        <h2 className="text-pink text-center md:text-left">Counter is:</h2>
        <p className="flex items-center bg-pink justify-center bg-red-500 py-2 px-5 rounded-2xl text-center ml-0 md:ml-5  md:mt-0">
          {count}
        </p>
      </div>

      {/* Decrement Button */}
      <div className="flex justify-center w-full md:w-auto">
        <ButtonComp
          style={BtnStyle}
          onClickEvent={() => dispatch(decrement())}
          label="Decrement"
        />
      </div>

      {/* Increment by Payload Button */}
      <div className="flex justify-center w-full md:w-auto">
        <ButtonComp
          style={BtnStyle}
          onClickEvent={() => dispatch(incrementByAmount(2))}
          label="Increment by Payload"
        />
      </div>

      {/* Increment Async Button */}
      <div className="flex justify-center w-full md:w-auto">
        <ButtonComp
          style={BtnStyle}
          onClickEvent={() => dispatch(incrementAsync(10))}
          label="Increment Async"
        />
      </div>
    </div>
  );
};

export default Counter;
