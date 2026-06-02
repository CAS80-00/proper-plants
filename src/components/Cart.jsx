import CartItem from "./CartItem";

function Cart({ cart, onUpdateQuantity }) {
  return (
    <div
      className="cart-container"
      style={{
        borderLeft: "2px solid #ccc",
        paddingLeft: "2rem",
        minWidth: "250px",
      }}
    >
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p> Your Cart is empty. Let's add some plants!</p>
      ) : (
        <div className="cart-items-list">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onUpdateQuantity={onUpdateQuantity}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Cart;
