import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import config from "./config";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import RecipeCard from "./RecipeCard";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);

  const fetchRecipes = async (query) => {
    const endpoint = `https://api.edamam.com/search?q=${query}&app_id=${config.APP_ID}&app_key=${config.APP_KEY}&from=0&to=10`;
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      setRecipes(data.hits);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setError("Failed to load recipes. Please try again later.");
    }
  };

  const handleSearch = () => {
    if (query.trim()) {
      setError(null);
      fetchRecipes(query);
    } else {
      setError("Please enter a search term.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    handleSearch(); // Call the search handler
  };
  return (
    <Container>
      <h1 className='my-4'>Recipe Search</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            type='text'
            placeholder='Search for a recipe'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Form.Group>
        <Button variant='primary' className='mt-2 ml-2' onClick={handleSearch}>
          Search
        </Button>
      </Form>
      {error && (
        <Alert variant='danger' className='mt-3'>
          {error}
        </Alert>
      )}
      <Row className='mt-4'>
        {recipes.map((recipeData, index) => (
          <Col md={4} key={index}>
            <RecipeCard recipe={recipeData.recipe} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
