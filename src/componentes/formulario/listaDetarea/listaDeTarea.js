
import { Table } from "react-bootstrap"
const listaDeTarea =(props)=>{


   

    
 return(
    <>
    <h1>Lista de tarea</h1>
    <Table  bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Tarea</th>
        <th>Descripcion</th>
        <th>aciones</th>
      </tr>
    </thead>
    <tbody>
        {props.titulo.map((tarea)=>{
                return( 
                  <tr key={tarea.id}>
                 <td>{tarea.id} </td> 
                 <td>{tarea.title} </td>
                <td>{tarea.descripcion} </td> 
                <td > x </td>
            </tr> )
        })}


    </tbody>
  </Table>

   
    </>
 )
}

export default listaDeTarea