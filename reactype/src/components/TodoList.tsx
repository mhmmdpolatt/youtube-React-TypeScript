import React, { useState, type ChangeEvent } from "react";

type Gorev = {
  gorev: string;
  sure: number;
};

function TodoList() {
  const [gorev, setGorev] = useState<string>("");
  const [sure, setSure] = useState<number>(0);
  const [gorevler, setGorevler] = useState<Gorev[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === "gorev") {
      setGorev(value);
    } else if (name === "sure") {
      setSure(Number(value));
    }
  };

  const handleAddTask = () => {
    if (!gorev || !sure) return;

    setGorevler([...gorevler, { gorev, sure }]);
    setGorev("");
    setSure(0);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        name="gorev"
        placeholder="görev ekle"
        onChange={handleChange}
        value={gorev}
      />
      <input
        type="number"
        name="sure"
        placeholder="süre ekle"
        onChange={handleChange}
        value={sure}
      />
      <button onClick={handleAddTask}>Görev Ekle</button>

      <ul>
        {gorevler.map((item, index) => (
          <li key={index}>
            Görev: {item.gorev} - Süre: {item.sure} dakika
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
