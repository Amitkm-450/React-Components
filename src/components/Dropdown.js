import { useState } from "react";
import{GoChevronDown} from "react-icons/go";
import Panel from "./Panel";

function Dropdown({options , value ,onChange}){
    const [isOpen , setIsOpen] = useState(false);
    const handleClick = ()=> {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setIsOpen(false);
        onChange(option); 
    };

    const renderedOptions = options.map((option) => {
        return(
            <div className = "hover:bg-sky-100 rounded cursor-pointer p-1" onClick = {() => handleOptionClick(option)} key = {option.value}>
              {option.label}
            </div>
        );
    });

    

    return <div className="w-48 inline-block relative">
        <Panel className="flex  relative justify-between items-center cursor-pointer " onClick = {handleClick} >
            {value?.label || 'select...'}
            <GoChevronDown className="text-lg"/>
        </Panel>
        {isOpen && <Panel className="absolute top-full ">
            {renderedOptions}
        </Panel> }
    </div> 
}

export default Dropdown ;
