import React ,{useEffect, useRef}from 'react'

function RefExample() {
    const inputRef=useRef<HTMLInputElement>(null);
    useEffect(() => {
     inputRef.current?.focus();
   }, [])

  return (
   
   
    <div>
        <h1>Ref EXample</h1>
        <input type="text" ref={inputRef} style={{}}/>
    </div>
  )
}

export default RefExample