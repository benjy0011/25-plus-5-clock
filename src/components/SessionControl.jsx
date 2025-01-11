import { useDispatch, useSelector } from "react-redux";
import { decrementSession, incrementSession } from "../redux/slices/clockSlice";


function SessionControl() {
  const dispatch = useDispatch(); // Initialize dispatch for trigerring Redux actions
  const sessionLength = useSelector((state) => state.clock.sessionLength); // Get sessionLength from Redux store

  return (
    <>
      <h2 id="session-label">Session Length</h2>
      <div className="d-flex justify-content-center align-items-center">
        <button
          id="session-increment"
          className="btn btn-info mx-2 button-text"
          onClick={() => dispatch(incrementSession())}
        >
          +
        </button>
        <span id="session-length" className="mx-2 small-text">
          {sessionLength}
        </span>
        <button
          id="session-decrement"
          className="btn btn-info mx-2 button-text px-3" 
          onClick={() => dispatch(decrementSession())}
        >
          -
        </button>
      </div>
    </>
  )
}

export default SessionControl;