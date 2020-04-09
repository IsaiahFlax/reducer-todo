import React, { useState, useReducer } from "react";
import styled from 'styled-components'

import { reducerFunction, initialState } from "../reducers/reducer";

const StylesP = styled.p`
${item=>item.item.completed ? `
text-decoration: line-through;
` : `
text-decoration: none;
${console.log("styled props", item.item.completed)}
`}
`

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
       <button type="submit"
            onClick={() => {
                dispatch({
                    type: 'ADD_ITEM', payload: newItem
                });
                setNewItem("");
            }}
        >Add Item...
        </button>
        <button type="button"
            onClick={() => {
                dispatch({ 
                    type: 'REMOVE_ITEM'});
            }}>
                Clear Completed
        </button>

    <div>
    {state.todos.map(item => {
        return (
          <div key={item.id}>
          <StylesP item={item} onClick={() => {
                dispatch({
                  type: 'TOGGLE_COMPLETED', id: item.id
              });
            }}>{item.item}</StylesP>
          </div>
        );
      })}
      {console.log('state', state)}
    </div>
   </div>

  );
};

export default Form;