

const listaDeTarea =(props)=>{

   

    
 return(
    <>
    <h1>Lista de tarea</h1>
    <ul>
        {props.titulo.map((tarea) => (
          <li key={tarea.id}>
            <h3>{tarea.title}</h3>
            <p>{tarea.descripcion}</p>
          </li>
        ))}
      </ul>
   
    </>
 )
}

export default listaDeTarea