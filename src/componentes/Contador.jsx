import React,{useState} from "react"
import "./Contador.css"

function Contador(){
  
  const [numero,setNumero] = useState(0)
  
  function Adicionar(){
    if(numero <20){
      setNumero(numero+1)
    }
  }

  function Remover(){
if(numero > 0 ){
setNumero(numero-1)
}
  }

  function Limpar(){
    setNumero(0)
    }

  return(
<section className="contador">
  
<h1>Contador</h1>
<h2>{numero}</h2>
<div className="boxButton">

<button onClick ={Adicionar}>+</button>
<button onClick={Remover}>-</button>
<button onClick={Limpar}>Limpar</button>
</div>
</section>
  )
}

export default  Contador