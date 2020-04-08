import React, { useState, useReducer } from "react";

import { reducerFunction, initialState } from "../reducers/reducer";

const Form = () => {
  
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  const [newItem, setNewItem] = useState("");

  const handleChanges = e => {
    setNewItem(e.target.value);
  };

  return (
   <div>
       <input
        className="item-input"
        type="text"
        name="newItem"
        value={newItem}
        onChange={handleChanges}
       />
       <button
            onClick={() => {
                dispatch({
                    type: 'ADD_ITEM', payload: newItem
                });
            }}
        >Add Item...
        </button>
        <button
            onClick={() => {
                dispatch({ 
                    type: 'REMOVE_ITEM'});
            }}>
                Clear Completed
        </button>
    <div>
    {state.map(item => {
        return (
          <div>
          {item.item}
          </div>
        );
      })}
      {console.log('state', state)}
    </div>
   </div>

  );
};

export default Form;