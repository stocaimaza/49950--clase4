import { useState } from "react";
import './Vista.css';


const Vista = () => {
    const [modo, setModo] = useState(false);

    const cambiarModo = () => {
        setModo(!modo)
    }

    const estilo = modo ? "oscuro" : "claro";

  return (
    <div className={estilo}>
        <button onClick={cambiarModo}> {modo ? "Claro" : "Oscuro"} </button>
        <h2>Componente Vista </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta numquam, totam accusantium quas repudiandae vero ullam ex, reprehenderit minima, at aut vitae voluptatem repellendus expedita et ipsa ea suscipit quis!</p>
    </div>
  )
}

export default Vista