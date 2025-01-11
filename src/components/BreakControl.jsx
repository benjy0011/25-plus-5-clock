import { useDispatch, useSelector } from "react-redux";
import { decrementBreak, incrementBreak } from "../redux/slices/clockSlice";

function BreakControl() {
  const dispatch = useDispatch(); // Used to dispatch actions tothe Redux store
  const breakLength = useSelector((state) => state.clock.breakLength); // Access breakLength from the Redux store
  
  return (
    <>
      <h2 id="break-label">Break Length</h2>
      <div className="d-flex justify-content-center align-items-center">
        <button
          id="break-increment"
          className="btn btn-primary mx-2 button-text "
          onClick={() => dispatch(incrementBreak())}
        >
          +
        </button>
        <span id="break-length" className="mx-2 small-text">
          {breakLength}
        </span>
        <button
          id="break-decrement"
          className="btn btn-primary mx-2 button-text px-3"
          onClick={() => dispatch(decrementBreak())}
        >
          -
        </button>
      </div>
    </>
  );
}

export default BreakControl;