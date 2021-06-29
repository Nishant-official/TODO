import React, {useState} from "react";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DoneIcon from '@material-ui/icons/Done';

const Showtodo = (props) =>{

    const [clr, setClr] = useState(false);

    const Donetodo = () =>{
        setClr(true);
    }
    return(
        <div className="todo_style">
        <span onClick={Donetodo} >
            <DoneIcon className="doneicon" />
        </span>
        <li style={{color:clr ? "rgb(31, 226, 31)" : "black"}}>
            {props.text}
        </li>

        </div>
    );

};

export default Showtodo;