import { useState } from "react";
import Header from "./components/header";
import Form from "./components/Form";
import List from "./components/List";
import Summary from "./components/Summary";
import { data } from "./data";

function App() {
  const [items, setItems] = useState([]);
  // const [itemsCount, setItemsCount] = useState(0)

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleUpdateItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id == id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  function handleClearList() {
    const onay = window.confirm(
      "Listedeki tüm ürünleri silmek istediğinizden emin misiniz?"
    );
    if (onay) {
      setItems([]);
    }
  }

  return (
    <>
      <Header />
      <Form onAddİtem={handleAddItem} onClearList={handleClearList} />
      <List
        items={items}
        onDeleteItem={handleDeleteItem}
        onUpdateItem={handleUpdateItem}
      />
      <Summary items={items} />
    </>
  );
}

export default App;
