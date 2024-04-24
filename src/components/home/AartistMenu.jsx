import React from 'react';
import styled from 'styled-components';

const AartistMenuBlock =styled.div`

`

const AartistMenu = () => {
    return (
        <AartistMenuBlock>
            <ul>
                <li><Link to="">GONG YOO</Link></li>
                <li><Link to="">KIM JAE-UCK</Link></li>
                <li><Link to="">NAM JOO-HYUK</Link></li>
                <li><Link to="">SEO HYUN-JIN</Link></li>
                <li><Link to="">SUZY</Link></li>
            </ul>
        </AartistMenuBlock>
    );
};

export default AartistMenu;