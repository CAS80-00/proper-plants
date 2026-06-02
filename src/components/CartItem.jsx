function CartItem({ item, onUpdateQuantity }) {
  return (
    <div
      className="cart-item"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        margin: "0.5rem 0",
      }}
    >
      <span style={{ fontSize: "1.5rem" }}>{item.image}</span>
      <span>{item.name}</span>
      <button onClick={() => onUpdateQuantity(item.id, -1)}>-</button>
      <span>{item.quantity}</span>
      <button onClick={() => onUpdateQuantity(item.id, 1)}>+</button>
    </div>
  );
}
export default CartItem;
