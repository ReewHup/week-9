import Layout from "../Template/Layout"
import ProductCard from '../Components/ProductCard';

const Product = () => {
  return (
    <Layout>
        <h1 className="text-5xl font-bold mb-6">
        Product
        </h1>
      <div className="mt-4">
        <ProductCard
        name="Chocolate"
        price="30"
        description="Chocolate Bar" />
        <ProductCard
        name="Vanila"
        price="70"
        description="Vanila Bar with Oatmeal" />

      </div>
    </Layout>
  )
}

export default Product