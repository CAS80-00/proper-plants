import PlantItem from "./PlantItem";

function PlantList({ plants, onAddToCart }) {
  return (
    <div className="plan-list-container" style={{ flex: 1 }}>
      <h2>Available Plants</h2>
      {/* CSS Grid layout wrapper */}
      <div
        className="plant-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)", // Creates exactly 5 equal columns
          gap: "1.5rem", // Spacing between cards
          padding: "1rem 0",
        }}
      >
        {plants.map((plant) => (
          <PlantItem key={plant.id} plant={plant} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
}

export default PlantList;
