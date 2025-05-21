import "./App.css";
import Egitmenler from "./components/Egitmenler";
import EventActions from "./components/EventActions";
import Home from "./components/Home";
import LoginCheck from "./components/LoginCheck";
import Odadakiler from "./components/Odadakiler";
import RefExample from "./components/RefExample";
import Request from "./components/Request";
import TodoList from "./components/TodoList";

function App() {
  const odaArkadaslari = {
    isim: "Muhammed",
    soy_isim: "Polat",
  };

  const egitmenler = [
    {
      name: "Burak",
      last_name: "Boz",
      kurs_sayisi:8
    },
    {
      name: "Burakaaaaa",
      last_name: "Bozaa",
      kurs_sayisi:12
    },
  ];

  return (
    <>
      <Home isim={"Umut Baba"} yas={20} yakisiklimi={true} />
      <Odadakiler odaArkadaslari={odaArkadaslari} />
      <Egitmenler egitmenler={egitmenler}/>
      <Request status="loading" />
      <EventActions/>

      <LoginCheck/>
      <RefExample/>
      <TodoList/>
    </>
  );
}

export default App;
