import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

export default function PageAlbums(props) {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userName = queryParams.get("name");

  const {
    match: {
      params: { id },
    },
  } = props;

  useEffect(() => {
    const fetchAlbums = async (userId) => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
        );
        const data = await response.json();
        setAlbums(data);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };
    fetchAlbums(id);
  }, [id]);

  const handleAlbumClick = (album) => {
    setSelectedAlbum(album);
  };

  return (
    <Container>
      <h2 className="text-light py-4">{`${userName}'s Albums`}</h2>
      <ListGroup>
        {albums.map((album) => (
          <Link
            to={`/user/${id}/albums/${album.id}?title=${album.title}`}
            className=" text-decoration-none"
            key={album.id}
          >
            <ListGroup.Item
              key={album.id}
              className="border border-info"
              onClick={() => handleAlbumClick(album)}
              active={selectedAlbum && selectedAlbum.id === album.id}
              action
              variant="info"
            >
              {album.title}
            </ListGroup.Item>
          </Link>
        ))}
      </ListGroup>
    </Container>
  );
}
