import Dropdown from "./components/Dropdown";


import { useState } from "react";

function App() {
   const [selected , setSelected] = useState(null);

   const handleSelect = (option) => {
       setSelected(option);
   };
   const options = [
     {label: 'red' , value : 'red'},
     {label: 'pinkblue' , value : 'pinkblue'},
     {label: 'blue' , value : 'blue'},

   ];
   return <div>
       <Dropdown value = {selected} options = {options} onChange = {handleSelect} />
       <Dropdown value = {selected} options = {options} onChange = {handleSelect} />
   </div>
   

}

export default App;
