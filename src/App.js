import React,{useState} from "react";
import "./index.css";
import Button from '@material-ui/core/Button';
import AddBoxIcon from '@material-ui/icons/AddBox';
import AddIcon from '@material-ui/icons/Add';
import Showtodo from "./Showtodo";

const App = () => {

    const [item, setItem] = useState("");
    const [newitem, setnewItem] = useState([]);

    const todo = (e) =>{
        setItem(e.target.value);
    }

    const alltodo = () =>{
        setnewItem((previtem) =>{
            return [...previtem,item];
        });
        setItem("");
    }

    return(
    <>
    <div className="first">
        <div className="second">
            <h1>SMART TODO</h1>
            <input type="text" value={item} placeholder="What to do?" onChange={todo}/>
            <Button className="btn" onClick={alltodo}>
                <AddIcon />
            </Button>
            <ol>

            {newitem.map((value,index) =>{
                return <Showtodo key={index} text={value} />
            })}
                
            </ol>
        </div>
    </div>

    </>);
};

export default App;