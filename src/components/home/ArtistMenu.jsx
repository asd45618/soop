import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ArtistMenuBlock =styled.div`
position: relative;
top: 20px;
right: -30px;
    ul {
        position: absolute;
        z-index: 99;

        li { 
            margin-bottom:10px;
            font-size: 18px; 
            color: #bbb;
            a { 
                display: block;
            }
        }
    }
`

const AartistMenu = () => {
    return (
        <ArtistMenuBlock>
            <ul>
                <li><Link to="/gongyoo">GONG YOO</Link></li>
                <li><Link to="/">KIM JAE-UCK</Link></li>
                <li><Link to="/">NAM JOO-HYUK</Link></li>
                <li><Link to="/">SEO HYUN-JIN</Link></li>
                <li><Link to="/">SUZY</Link></li>
            </ul>
        </ArtistMenuBlock>
    );
};

export default AartistMenu;
