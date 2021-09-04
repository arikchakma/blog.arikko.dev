import { Link } from 'gatsby';
import React, { useContext } from 'react';
import styled from 'styled-components';
import ThemeContext from '../lib/ThemeContext';

export default function Header() {
  const context = useContext(ThemeContext);
  const { changeTheme } = context;
  return (
    <Wrapper>
      <ContentWrapper>
        <Link to="/">arikko</Link>
        <Chill onClick={changeTheme}>f*cking chill</Chill>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  padding-bottom: 20px;
`;

const ContentWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    font-weight: 700;
    font-size: 40px;
    text-decoration: none;
    color: ${prop => prop.theme.color};
  }
`;

const Chill = styled.p`
  color: ${prop => prop.theme.color};
`;
