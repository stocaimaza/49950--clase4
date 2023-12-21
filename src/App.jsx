import React from 'react';
import TituloPrincipal from './componentes/TituloPrincipal/TituloPrincipal';
import ItemCount from './componentes/ItemCount/ItemCount';
import Vista from './componentes/Vista/Vista';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
/*

Componentes 1: 

Definición: conjunto de elementos que cumplen una función especifica. (ejemplo, una card, un boton, un header). 

Ventajas de trabajar con componentes: 

- Reutilizar código. 
- Favorece la separación de responsabilidades. 
- El código es más fácil de entender. 
- Mejora el rendimiento de la aplicación. 

Características principales: 

- Renderizar un único elemento. 
- Pueden recibir props (propidades). 
- Pueden tener un estado. 

¿Que es el Estado? Es un OBJETO que contiene información del componente que puede cambiar durante la ejecución de la App. 





*/

const App = () => {
  return (
    <>
      {/* <h1>Hola, bienvenido a la clase 4</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum consectetur fugiat, error dicta ea impedit aut necessitatibus esse laudantium totam. Saepe fugiat cupiditate voluptate cumque, ab repellat recusandae aspernatur dolores!</p>
      <h2>Mis productos</h2>
      <TituloPrincipal saludo="Hola Grupo" nombre="Samuel" edad={18} />
      <TituloPrincipal saludo="tengo hambre" nombre="Tinki Winki" edad={38} />
      <hr />
      <ItemCount stock={10}/>
      <ItemCount stock={5}/>
      <ItemCount stock={100}/>
      <Vista/>
      */}
      <NavBar/>
      <ItemListContainer greeting="Hola Comisión"/>
    </>
  )
}

export default App