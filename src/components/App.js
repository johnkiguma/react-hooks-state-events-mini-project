import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [stateVar, setStateVar] =useState(false);
  const handleClick =()=>{
    setStateVar((stateVar)=> !stateVar);
  }

  const appClass = stateVar ? "App dark" : "App Light"
  const buttonText = stateVar ? "Dark Mode " : "Light Mode"
  console.log(appClass)

  return (
    <div className="App light">
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
      <button onClick = {handleClick}> {buttonText}</button>
       </header>
      <ShoppingList items={itemData} />
    </div>
    </div>
  );
}

export default App;
