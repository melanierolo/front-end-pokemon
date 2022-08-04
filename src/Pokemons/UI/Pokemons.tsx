import React from "react";
import { getPokemons } from "../Application/Pokemons.business";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementplustwo,
} from "../Structure/Pokemons.reducer";

const Pokemons: React.FC = () => {
  const onClick2 = () => {
    console.log("data", getPokemons());
  };

  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.pokemons.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <button onClick={onClick2}>Click me</button>
      <section>
        <h2>Counter:</h2>
        <span>
          <b>Count is:</b>
          {count}
        </span>
        <br />
        <button
          onClick={() => dispatch(increment())}
          className="btn btn-outline-primary mt-2"
        >
          +1
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="btn btn-outline-primary mt-2"
        >
          -1
        </button>
        <button
          onClick={() => dispatch(incrementplustwo())}
          className="btn btn-outline-primary mt-2"
        >
          +2
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="btn btn-outline-primary mt-2"
        >
          +5
        </button>
      </section>
    </div>
  );
};

export default Pokemons;
