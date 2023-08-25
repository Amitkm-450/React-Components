import Button from "../components/Button";
import { AiFillBell ,AiFillBug ,AiFillApple} from "react-icons/ai";

function ButtonPages() {
 
 
  return (
    <div>
     App
     <div>
      <Button primary rounded classNames = "mb-5">
      <AiFillBell />
        Button1
      </Button>
     </div>
     <div>
      <Button success outline>
        <AiFillBug />
        Button2
        </Button>
     </div>
     <div>
      <Button warning >
        <AiFillApple />
        Button3
      </Button>
     </div>

    </div>
  );
}

export default ButtonPages;
