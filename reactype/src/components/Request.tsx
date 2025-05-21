import React from 'react'

type RequestProps={
    status:"loading" | "succes" | "error"
}

function Request(props:RequestProps) {
    let message="";

    if (props.status==="loading") {
        message="loading"
    }
    if (props.status==='succes') {
        message="Başarılı"
    }
    if (props.status==="error") {
        message="Yüklenemedi Hata Var"
    }
  return (
    <div>Request durumu 
        {message}   
    </div>
  )
}

export default Request