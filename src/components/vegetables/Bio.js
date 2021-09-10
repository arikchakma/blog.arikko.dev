import React from 'react';
import styled from 'styled-components';
import fav from '../../../static/images/icons/profile.png';

export default function Bio() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Image src={fav} alt="Making tasty" />
        <TextWrapper>
          <Heading>
            Frontend world of <a href="https://github.com/arikchakma">Arik Chakma</a>
          </Heading>
          <Spoiler>A frontend chef who is cooking his world!</Spoiler>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  margin-top: ${props => props.theme.margin.medium};
  color: ${prop => prop.theme.color};
`;

const ContentWrapper = styled.div`
  display: flex;
`;

const TextWrapper = styled.div`
  max-width: 310px;
  line-height: 160%;
  color: ${prop => prop.theme.color};
`;

const Heading = styled.h1`
  a {
    font-size: 20px;
  }
`;

const Spoiler = styled.p``;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
`;
