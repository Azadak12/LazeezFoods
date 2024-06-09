import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const drinks = [
  {
    name: "Lasi",
    image: "https://img.freepik.com/free-photo/pouring-milk-out-glass_23-2148211455.jpg?t=st=1717905107~exp=1717908707~hmac=a008be51301ffbd41a8d669996b303be15389780869a3f3b719428773e404d54&w=740",
    description: "A refreshing blend of ripe mangoes and creamy yogurt.",
    price: "$5.99"
  },
  {
    name: "Lemonade",
    image: "https://img.freepik.com/premium-photo/swirling-glass-lemonade-simple-watercolor-sketch-white-background_910054-60100.jpg?w=740",
    description: "Freshly squeezed lemons with a touch of honey.",
    price: "$3.99"
  },
  {
    name: "Iced Coffee",
    image: "https://img.freepik.com/free-photo/delicious-coffee-cup-indoors_23-2150691345.jpg?t=st=1717924321~exp=1717927921~hmac=1d88b156fb0821aecc01f6f31c39aab420051490c420ff993f863d20d1334e42&w=826",
    description: "Rich and smooth iced coffee with a hint of vanilla.",
    price: "$4.49"
  },
  {
    name: "SugarJuice",
    image: "https://img.freepik.com/premium-photo/close-up-drink-glass-table_1048944-21376124.jpg?w=826",
    description: "A refreshing blend of ripe mangoes and creamy yogurt.",
    price: "$5.99"
  },
  {
    name: "Lemonade",
    image: "https://img.freepik.com/free-photo/orange-lime-fresh-drinks_23-2148606421.jpg?t=st=1717924169~exp=1717927769~hmac=87aa0be3f3a5556742acdddc9e75ff5a8c8982b9f01e40153447dda372c8197f&w=740",
    description: "Freshly squeezed lemons with a touch of honey.",
    price: "$3.99"
  },
  {
    name: "Iced Coffee",
    image: "https://img.freepik.com/free-photo/delicious-coffee-cup-indoors_23-2150691345.jpg?t=st=1717924321~exp=1717927921~hmac=1d88b156fb0821aecc01f6f31c39aab420051490c420ff993f863d20d1334e42&w=826",
    description: "Rich and smooth iced coffee with a hint of vanilla.",
    price: "$4.49"
  },
  {
    name: "Lasi",
    image: "https://img.freepik.com/free-photo/delicious-coffee-cup-indoors_23-2150691345.jpg?t=st=1717924321~exp=1717927921~hmac=1d88b156fb0821aecc01f6f31c39aab420051490c420ff993f863d20d1334e42&w=826",
    description: "A refreshing blend of ripe mangoes and creamy yogurt.",
    price: "$5.99"
  },
  {
    name: "Lemonade",
    image: "https://img.freepik.com/premium-photo/swirling-glass-lemonade-simple-watercolor-sketch-white-background_910054-60100.jpg?w=740",
    description: "Freshly squeezed lemons with a touch of honey.",
    price: "$3.99"
  }
];

function Drinks() {
  return (
    <div className='bg-light py-5'>
      <Container>
      <div className='container-fliud bg-dark my-3 p-3 border rounded sd-col-4 text-center text-white '>
    <h1>Order Now the best Drinks 🥂</h1>
    </div>

        <Row>
          {drinks.map((drink, index) => (
            <Col xs={12} md={4} lg={3} className='mb-4' key={index}>
              <Card className='h-100'>
                <Card.Img variant="top" src={drink.image} alt={drink.name} height={"200px"} />
                <Card.Body className='text-center bg-dark text-white'>
                  <Card.Title>{drink.name}</Card.Title>
                  <Card.Text>{drink.description}</Card.Text>
                  <Card.Text className='font-weight-bold'>{drink.price}</Card.Text>
                  <Button variant="primary" className="align-self-center">Order Now</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Drinks;
