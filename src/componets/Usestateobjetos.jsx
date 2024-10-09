import React,{useState} from "react";

function userProfile(){
    const [user, setUser] = useState ({name: 'John Doe', age: 19});

    const updateName = () => {
        setUser({...user, name: 'Jane Doe'});
    };
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <p>name:{user.name}</p>
            <p>age:{user.age}</p>
            <button onClick={updateName}>update name</button>
        </div>
    )
}
export default userProfile;