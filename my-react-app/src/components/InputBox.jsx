import { useState } from "react";

function InputBox({onAdd}){
    const [text, setText] = useState("");

    function handleAdd(){
        if(text.trim() === "") return;
        onAdd(text);
        setText("");
    }


    return (
        <div style = {{marginTop: "20 px", marginBottom: "20px"}}>
            <input
                value = {text}
                onChange={(e) => setText(e.target.value)}
                placeholder = "Enter a note"
                style = {{fontSize: "15px", marginRight: "20px", width:"200px", height: "25px"}}
            />
            <button onClick={handleAdd} style = {{marginRight: "8px"}}>
                Add Note
            </button>
        </div>
    );
}

export default InputBox;