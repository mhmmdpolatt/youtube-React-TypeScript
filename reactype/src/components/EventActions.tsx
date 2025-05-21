import React from 'react';
import { useState } from 'react';

function EventActions() {
    const [value, setValue] = useState("")
    const handleClick = (
        e: React.MouseEvent<HTMLButtonElement>,
        id: number
    ) => {
        e.preventDefault(); // (opsiyonel) varsa form submit engelle
        console.log("Buton tıklandı! ID:", id,e);
    };

    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value)
    }

    return (
        <div>
            <h2>EventActions</h2>
            <button onClick={(e) => handleClick(e, 4)}>Tıkla</button>
            <input type="text" value={value} onChange={handleChange} />
        </div>
    );
}

export default EventActions;
