import { Card, Button } from "react-bootstrap";

const SongArtist = ({ artist }) => {
  return (
    <section>
      <Card>
        <Card.Img
          variant="top"
          src={artist.strArtistThumb}
          alt={artist.strArtist}
        />
        <Card.Body>
          <Card.Title>{artist.strArtist}</Card.Title>
          <Card.Text>
            <p>
              {artist.intBornYear} - {artist.intDiedYear || "Presente"}
            </p>
            <p>{artist.strCountry}</p>
            <p>
              {artist.strGenre} - {artist.strStyle}
            </p>

            <p>{artist.strBiographyEN}</p>
          </Card.Text>
          <a
              href={`http://${artist.strWebsite}`}
              target="_blank"
              rel="noreferrer"
            >
              Sitio Web Oficial
            </a>
        </Card.Body>
      </Card>
    </section>
  );
};

export default SongArtist;
