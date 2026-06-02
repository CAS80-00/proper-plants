import { useState } from "react";
import plants from "./data";
import PlantList from "./components/PlantList";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (plantId) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === plantId);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === plantId ? { ...item, quantity: item.quantity + 1 } : item,
        );
      } else {
        const plantToadd = plants.find((p) => p.id === plantId);
        return [...prevCart, { ...plantToadd, quantity: 1 }];
      }
    });
  };

  //quantity handler//
  const handleUpdateQuantity = (itemId, amount) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.id === itemId) {
            return { ...item, quantity: item.quantity + amount };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };
  return (
    <div className="app-container">
      <h1 style={{ paddingLeft: "2rem", paddingTop: "1rem" }}>Proper Plants</h1>

      <main style={{ display: "flex", gap: "4rem", padding: "2rem" }}>
        <PlantList plants={plants} onAddToCart={handleAddToCart} />
        <Cart cart={cart} onUpdateQuantity={handleUpdateQuantity} />
      </main>
    </div>
  );
}

export default App;
// export default function App() {
//   return <></>;
// }
