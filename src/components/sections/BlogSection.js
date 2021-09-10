import { graphql, Link, useStaticQuery } from 'gatsby';
// import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import getCoffee from '../lib/getCoffee';

export default function BlogSection() {
  // Getting all dishes: posts data from MDX
  const data = useStaticQuery(graphql`
    query DishData {
      Dish: allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          frontmatter {
            title
            spoiler
            date(formatString: "MMMM DD, YYYY")
            slug
          }
          timeToRead
          id
        }
      }
    }
  `);
  const dishes = data.Dish.nodes;
  return (
    <Wrapper>
      {dishes.map(dish => {
        const { id, timeToRead } = dish;
        const { title, spoiler, date, slug } = dish.frontmatter;

        return (
          <ContentWrapper key={id}>
            <ArticleWrapper>
              <HeaderWrapper>
                <Header>
                  <Link to={slug} itemProp="url">
                    {title}
                  </Link>
                </Header>
                <Small>
                  {date} • {getCoffee(timeToRead)} {timeToRead} min read
                </Small>
              </HeaderWrapper>
            </ArticleWrapper>
            <Spoiler>{spoiler}</Spoiler>
          </ContentWrapper>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  font-family: 'Merriweather', serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: ${prop => prop.theme.color};
  margin-top: ${prop => prop.theme.margin.big};
`;

const ContentWrapper = styled.article`
  :not(:first-child) {
    margin-top: ${prop => prop.theme.margin.large};
  }
`;

const ArticleWrapper = styled.div``;

const HeaderWrapper = styled.header``;

const Header = styled.h3`
  a {
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
    font-size: 28px;
    line-height: 140%;

    text-decoration: none;
    cursor: pointer;
  }
  margin-bottom: 2px;
`;

const Small = styled.small`
  font-size: 14px;
  line-height: 130%;
`;

const Spoiler = styled.p`
  color: ${prop => prop.theme.color};
`;
