import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Menu.css";

const menuItems = [
  {
    name: "Chicken Biryani",
    image: "https://img.freepik.com/premium-photo/dum-handi-chicken-biryani-is-prepared-earthen-clay-pot-called-haandi-popular-indian-non-vegetarian-food_466689-52237.jpg?w=360",
    price: "$12",
    description: "Aromatic rice cooked ",
    spiceLevel: ["Mild", "Medium", "Hot"]
  },
  {
    name: "Beef Karahi",
    image: "https://img.freepik.com/premium-photo/aromatic-karahi-dish-meat-spice-mix_1179130-202040.jpg?w=826",
    price: "$12",
    description: "Delicious Beef dish",
    spiceLevel: ["Mild", "Medium", "Hot"]
  },
  {
    name: "Seekh Kebab",
    image: "https://img.freepik.com/free-photo/high-angle-tasty-kebab-slate-with-other-dish-tomatoes_23-2148685481.jpg?t=st=1717923851~exp=1717927451~hmac=6c74c43cb0354a061b424ba7a0dfe59a6a4300925baa258674b1c225fd554b30&w=826",
    price: "$12",
    description: "Delicious Chapli Kabab dish.",
    spiceLevel: ["Mild", "Medium", "Hot"]
  },
  {
    name: "Fruit Salad",
    image: "https://img.freepik.com/premium-photo/colourful-bowl-filled-with-fruit-salad_636537-179023.jpg?w=826",
    price: "$12",
    description: "Lazeez Fruit dish.",
    spiceLevel: ["Mild", "Medium", "Hot"]
  },
  
];

function Menu() {
  return (
    <div className="bg-warning mt-5">
      <div className="bg-dark p-3 rounded text-center text-white shadow-lg mb-5 menu-header">
        <h1 className="mb-0">Our Lazeez Menu 😋</h1>
      </div>
      <Container className="mt-5">
        <Row>
          {menuItems.map((menuItem, index) => (
            <Col key={index} md={6} className="mb-4">
              <MenuItem menuItem={menuItem} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

function MenuItem({ menuItem }) {
  const { name, image, description, price, spiceLevel } = menuItem;

  return (
    <div className="menu-item">
      <div className="menu-item-image">
        <img src={image} alt={name} style={{borderRadius:"10px", height:"250px"}} />
      </div>
      <div className="menu-item-details">
        <h2>{name}</h2>
        <p className="price">{price}</p>
        <p className="description">{description}</p>
        <p className="spice-level">Customize spice level: {spiceLevel.join(", ")}</p>
        <Button variant="primary">Order Now</Button>
      </div>
    </div>
  );
}

export default Menu;
