import { useState } from "react";
import { GoChevronDown , GoChevronLeft } from "react-icons/go";

function Accordion({items}){
    
    const [expandedIndex , setExpandedIndex] = useState(-1);
    
    const handleClick = (idx) => {
        if(idx === expandedIndex)
           setExpandedIndex(-1);
         else
           setExpandedIndex(idx);
    };
    const renderedItems = items.map((item , index) => {

       const isExpanded = index === expandedIndex ;
       
       const icons = <span className="text-4xl">
         {isExpanded ? <GoChevronDown/> : <GoChevronLeft/> }
       </span>

        return (
           <div key={item.id} >
            <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick = {() => handleClick(index)}>
              {item.label}
              {icons}
           </div>
              {isExpanded && <div className="border-b p-5">{item.content}</div> }
        </div>
        );
    });


    return <div className="border-x border-t rounded">
       { renderedItems}
    </div>;
}

export default Accordion ;