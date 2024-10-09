import React,{useState} from "react";

function counter(){
    const [count, setcount] = useState(0);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <p>you clicked {count} times</p>
            <button  className="px-4 py-2 bg-pink-500 text-white" onClick={()=> setcount (count + 1)}>click me</button>
        </div>
    );
}
export default counter;