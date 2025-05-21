import React from 'react'


type Egitmenler={
    egitmenler:{
        name:string,
        last_name:string
        kurs_sayisi:number
    }[]
}

function Egitmenler(props:Egitmenler) {
  return (
    <div>Egitmenler

        {props.egitmenler.map((egitmen)=>{
            return <p key={egitmen.last_name}>{egitmen.name} {egitmen.last_name} {egitmen.kurs_sayisi}</p>
        })}
    </div>
  )
}

export default Egitmenler