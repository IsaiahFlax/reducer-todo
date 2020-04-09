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
          <StylesP item={item} key={item.id} onClick={()=>{ 
                item.completed ? item.completed = false : item.completed = true
          console.log('clicked', item.completed)}}>{item.item}</StylesP>
          </div>
        );
      })}
      {console.log('state', state)}
    </div>
   </div>

  );
};

export default Form;