import React, {useState,useEffect} from "react"
import axios from "axios"
import readExcel from "read-excel-file"


export default function Index() {
	const [data,SetData] = useState({})

	// Función para seleccionar el proveedor, posiblemente desaparezca esta opcion porque desde el 
	// login se jale el proveedor
	const selectprovider = (e) => {
		data["provider"] = e.target.value
	}
	
	// Función para cargar un archivo excel y convertirlo a Array
	const uploadFile = (e) => {
		e.persist()
		readExcel(e.target.files[0])
			.then( rows => {
				data["table"] = rows
				console.log("dentro",data)
				SetData(data["approved"]=true)
      })
			.catch(e => console.log(e))

	}

 
	const sendDataToServer = () => {
		console.log(data)
		axios.get("https://kyyw75ebq3.execute-api.us-east-1.amazonaws.com/dev/genommalab/supplychain/getalldatatransactions")
			.then( ok => console.log(ok) )
			.catch( e => console.log(e) )
	}


	return (
		<section id="index-container">
			<select onChange={selectprovider}>
				<option value="seleccion">Selecciona el provedor</option>
				<option value="albek">Albek</option>
			</select>
      <br/>
      <input id="file" onChange={uploadFile} type="file" name="file"/>
      <br/>
      <button onClick={sendDataToServer}>Enviar a Genomma</button>
      { data["approved"] ? <p>DONE</p> : <p>NOT DONE</p> }
     
		</section>
	)
}