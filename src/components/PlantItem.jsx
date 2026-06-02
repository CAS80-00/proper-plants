function PlantItem({ plant, onAddToCart }) {
  return (
    <div className="plant-card">
      <span className="plant-emoji" style={{ fontSize: "3rem" }}>
        {" "}
        {plant.image}
      </span>
      <h3>{plant.name}</h3>
      <button onClick={() => onAddToCart(plant.id)}> Add to Cart</button>
    </div>
  );
}
export default PlantItem;
