
const ProductCard = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Price: {props.price}</p>
      <p>Description: {props.declaration}</p>
    </div>
  )
}

export default ProductCard
