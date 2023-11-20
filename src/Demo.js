import {useEffect, useState} from "react";

function Demo(){

    const [state, setState] = useState({
        list: [
            {
                name: "Hùng",
                age: 25
            },
            {
                name: "Đạt",
                age: 24
            }
        ],
        inputName : "",
        inputAge: ""

    });
    // useEffect(()=>{
    //     console.log(1)
    //     return()=>{
    //         console.log(5)
    //     }
    // })
    const add = ()=>{
        setState((state)=>{
            return{
                list: [...state.list, {name: state.inputName, age: state.inputAge}],
                inputAge: '',
                inputName: ''
            }
        })
    }
    const change = (e)=>{
        setState({...state,
          [e.target.name]: e.target.value
        })
    }
    return(
        <>
            <h1>{state.inputName}</h1>
            <h1>{state.inputAge}</h1>
    <div>
        {state.list.map((i, index) =>(<p key = {index}>{i.name}, {i.age}</p>))}
    </div>
            <input type="text" name={"inputName"} value={state.inputName} onChange={change}/>
            <input type="text" name={"inputAge"} value={state.inputAge} onChange={change}/>
            <button onClick={()=>{
                add()
            }}>Luu</button>
        </>
    )
}

export default Demo;