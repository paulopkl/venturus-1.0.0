import React from 'react';
import ContentComponent from '../components/Content';

import styled from 'styled-components';

const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
    color: rgb(85,44,138);
    margin: 0;

    display: flex;
    align-items: center;
`;


const LogIn = () => {

    return (
        <ContentComponent>
            <Title>
                LogIn
            </Title>
        </ContentComponent>
    );
}

export default LogIn;