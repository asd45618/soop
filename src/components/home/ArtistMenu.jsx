import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ArtistMenuBlock = styled.div``;

const AartistMenu = () => {
  return (
    <ArtistMenuBlock>
      <ul>
        <li>
          <Link to="">GONG YOO</Link>
        </li>
        <li>
          <Link to="">KIM JAE-UCK</Link>
        </li>
        <li>
          <Link to="">NAM JOO-HYUK</Link>
        </li>
        <li>
          <Link to="">SEO HYUN-JIN</Link>
        </li>
        <li>
          <Link to="">SUZY</Link>
        </li>
      </ul>
    </ArtistMenuBlock>
  );
};

export default AartistMenu;
