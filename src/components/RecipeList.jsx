import React, { useState, useEffect } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // This is where you would fetch recipes from an API
    // For now, let's use some dummy data
    const dummyRecipes = [
      {
        id: 1,
        name: "Spaghetti Bolognese",
        description: "A classic Italian pasta dish.",
      },
      {
        id: 2,
        name: "Chicken Curry",
        description: "A flavorful and spicy curry.",
      },
    ];

    setRecipes(dummyRecipes);
  }, []);

  return (
    <Container className='mt-4'>
      <Row>
        {recipes.map((recipe) => (
          <Col key={recipe.id} sm={12} md={6} lg={4}>
            <Card className='mb-4'>
              <Card.Body>
                <Card.Title>{recipe.name}</Card.Title>
                <Card.Text>{recipe.description}</Card.Text>
                <Button variant='primary'>View Recipe</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RecipeList;
