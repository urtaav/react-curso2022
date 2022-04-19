import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import SongDetail from "./SongDetail";
import SongForm from "./SongForm";
import { helpHttp } from "../helpers/helpHttp";

const SongSearch = () => {
  //Variables de estado
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      const { artist, song } = search;

      let artistUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
      let songUrl = `https://private-anon-9aa7abf89b-lyricsovh.apiary-proxy.com/v1/${artist}/${song}`;
      console.log(artistUrl, songUrl);

      setLoading(true);

      const [artistRes, songRes] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(songUrl),
      ]);

      console.log(artistRes, songRes);
      setBio(artistRes);
      setLyric(songRes);
      setLoading(false);
    };

    fetchData();
  }, [search]);

  const handleSearch = (data) => {
    // console.log(data);
    setSearch(data);
  };

  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="4">
            <h3 className="text-center text-primary">Song Search</h3>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs lg="6">
            {loading && <Loader />}
            <SongForm handleSearch={handleSearch} />
          </Col>
          <Col xs lg="6">
            {search && !loading && (
              <SongDetail search={search} lyric={lyric} bio={bio} />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SongSearch;
