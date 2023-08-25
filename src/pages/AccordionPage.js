import Accordion from "../components/Accordion";


function AccordionPage() {
   const items= [
    {  id : '12iuyf',
       label : 'whats your name ?',
       content : 'Amit'
    },
    { 
      id:'jf578',
      label : 'whats your name ?',
      content : 'Amit'
    },
    { 
      id:'yff678',
      label : 'whats your name ?',
      content : 'Amit'
    }
  ];
   return <Accordion items = {items} /> ; 
}

export default AccordionPage;
