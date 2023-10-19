import {Form,Button,Col,Row } from 'react-bootstrap';
import  {useState} from "react"
import ListaDeTarea from './listaDetarea/listaDeTarea';
const Formulario =()=>{
   const [task, setTask] = useState([])


    const enviarTarea =(e)=>{
        //importante poner esto para no envie cosas el server
        e.preventDefault();
        console.log(e)
        let [title, descripcion] = e.target.elements
        title=title.value.trim()
        descripcion=descripcion.value.trim()



        setTask([
            ...task,
            {
                id:3,title,descripcion
            }
        
        ])

      const ListaDetareaTasl= task
  // Vaciar el formulario
  e.target.reset();
    }




    return(
< Row>
<Col>
 <Form onSubmit={enviarTarea}>
    <Form.Group className="mb-3">
        <Form.Label>Nombre de la tarea</Form.Label>
        <Form.Control placeholder="tarea" name='title'  />
    </Form.Group>
    <Form.Group className="mb-3">
        <Form.Label>Descripcion de la tarea</Form.Label>
        <Form.Control placeholder="Descripcion" name='descripcion' />
    </Form.Group>

      <Button className='mb-3' type='submit' variant="warning">Enviar</Button>    
 </Form>

</Col>
<Col>
<ListaDeTarea titulo={task}></ListaDeTarea>
</Col>

</Row>
    )
}

export default Formulario
