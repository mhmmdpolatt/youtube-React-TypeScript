// Odadakiler.tsx
import React from "react";
import type { OdadakilerProps } from "./propstype";

function Odadakiler(props: OdadakilerProps) {
  return (
    <div>
      Odadakiler = {props.odaArkadaslari.isim} {props.odaArkadaslari.soy_isim}
    </div>
  );
}

export default Odadakiler;
