import React from 'react'

type GelenData ={
  isim:string,
  yas:number,
  yakisiklimi:boolean
}

function Home(props:GelenData) {
  return (
    <div>Home {props.isim} {props.yas} yaşında
      {props.yakisiklimi ? (<p>Fena Yakışıklı</p>):(<p>Değil Yakışıklı</p>)}
    </div>
  )
}

export default Home