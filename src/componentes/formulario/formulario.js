import {Form,Button,Col,Row } from 'react-bootstrap';
import  {useState} from "react"

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

      const ListaDetarea= task
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
<p>Tarea</p>
<p>{title}</p>
</Col>

</Row>
    )
}

export default Formulario