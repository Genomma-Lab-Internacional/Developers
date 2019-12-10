import React,{useState} from "react"
import axios from "axios"

export default function Login (props) {
    const [user,setUser] = useState({})

    const inputData = (e) => {
        user[e.target.name] = e.target.value
    }

    const VerifyUser = () => {
        // switch(`${user.username}_${user.password}`) {
        //     case "albek_albek123":
        //         console.log()
        //         break
        //     default:
        //         break
        // }
        console.log(user)
        axios.post("https://kyyw75ebq3.execute-api.us-east-1.amazonaws.com/dev/genommalab/supplychain/login",user)
            .then( user => console.log(user) )
            .catch( error => console.log(error) )
    }

    return(
        <section>
           <input onChange={inputData} type="text" name="username" placeholder="Nombre de Usuario"/>
           <br/>
           <input onChange={inputData} type="password" name="password" placeholder="Contraseña"/>
           <br/>
           <button onClick={VerifyUser}>Ingresa a Genomma-Supply Chain</button>
        </section>
    )
}