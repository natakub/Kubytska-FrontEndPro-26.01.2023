import { useState, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

export default function PagePhotos(props) {
  const [photos, setPhotos] = useState([]);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const albumTitle = queryParams.get("title");

  const {
    match: {
      params: { id },
    },
  } = props;

  const history = useHistory();

  useEffect(() => {
    const fetchPhotos = async (albumId) => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
        );
        const data = await response.json();
        setPhotos(data);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };
    fetchPhotos(id);
  }, [id]);

  const handleCloseButtonClick = () => {
    history.goBack();
  };

  return (
    <Container className="py-4">
      <Link to="/" className="text-decoration-none">
        <Button variant="info" size="md" onClick={handleCloseButtonClick}>
          Close
        </Button>
      </Link>
      <h2 className="text-light py-4">Photos from album: "{albumTitle}"</h2>
      <Row xs={4} md={6} lg={8} className="g-4 ">
        {photos.map((photo) => (
          <Col key={photo.id}>
            <Image src={photo.url} alt={photo.title} thumbnail />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
