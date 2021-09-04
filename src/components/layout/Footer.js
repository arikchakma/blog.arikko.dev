import React from 'react';
import styled from 'styled-components';
import footerLinkData from '../../data/footerLink';

export default function Footer() {
  return (
    <Wrapper>
      <ContentWrapper>
        <LinkWrapper>
          {footerLinkData.map(data => {
            const { key, title, link } = data;

            return (
              <a href={link} key={key}>
                {title}
              </a>
            );
          })}
        </LinkWrapper>
        <TextWrapper>
          <p>Cooking</p>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: ${p => p.theme.margin.big};
  margin-bottom: ${p => p.theme.margin.tiny};
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LinkWrapper = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, auto);
  a {
    font-family: 'Recoleta';
  }
`;

const TextWrapper = styled.div`
  p {
    color: ${prop => prop.theme.color};
    font-family: 'Recoleta';
    font-weight: 500;
  }
`;
