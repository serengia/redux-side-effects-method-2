import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    name: "My first book",
    description: "This is the first book I ever wrote.",
    price: 12.49,
  },
  {
    id: "p2",
    name: "My second book",
    description: "This is the second book I ever wrote.",
    price: 14.99,
  },
  {
    id: "p3",
    name: "My third book",
    description: "This is the third book I ever wrote.",
    price: 11.99,
  },
  {
    id: "p4",
    name: "My forth book",
    description: "This is the forth book I ever wrote.",
    price: 20.5,
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
