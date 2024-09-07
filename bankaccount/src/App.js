import { useReducer } from "react";

const initialState = {
  balance: 0,
  isActive: false,
  loan: 0,
};

function reducer(state, action) {
  if (!state.isActive && action.type !== "openAccount") return { ...state };
  switch (action.type) {
    case "openAccount":
      return {
        ...state,
        isActive: true,
        balance: action.payload,
      };
    case "deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        balance: state.balance + action.payload,
        loan: action.payload,
      };
    case "payLoan":
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
      };
    case "close":
      console.log(state);
      if (state?.balance > 0 || state?.balance !== 0) return state;
      return initialState;
  }
}

function App() {
  const [{ balance, loan, isActive }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div className="app">
      <h1>useReducer Bank Account</h1>
      <p>
        Balance: <strong>{balance} Rs.</strong>
      </p>
      <p>
        Loan: <strong>{loan} Rs.</strong>
      </p>
      <p>
        <button onClick={() => dispatch({ type: "openAccount", payload: 500 })}>
          Open account
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "deposit", payload: 100 })}
          disabled={!isActive}
        >
          Deposit 100Rs.
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "withdraw", payload: 50 })}
          disabled={!isActive}
        >
          Withdraw 50Rs.
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "requestLoan", payload: 5000 })}
          disabled={!isActive}
        >
          Request a loan of 5000Rs.
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "payLoan" })}
          disabled={!isActive}
        >
          Pay loan
        </button>
      </p>
      <button onClick={() => dispatch({ type: "close" })} disabled={!isActive}>
        Close account
      </button>
    </div>
  );
}

export default App;
