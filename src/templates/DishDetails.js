import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/layout';
import SEO from '../components/layout/seo';
import getCoffee from '../components/lib/getCoffee';
import Bio from '../components/vegetables/Bio';

export default function DishDetails({ data }) {
  const { body, timeToRead } = data.DishDataDetails;
  const { title, date, spoiler } = data.DishDataDetails.frontmatter;
  const { previous, next } = data;

  return (
    <Layout>
      <SEO title={title} description={spoiler} />
      <Wrapper>
        <ContentWrapper>
          {/* Header */}
          <Header>
            <Heading>{title}</Heading>
            <Date>
              {date} • {getCoffee(timeToRead)} {timeToRead} min read
            </Date>
          </Header>
          {/*
           * This one is for MD
           * <HTML dangerouslySetInnerHTML={{ __html: html }} />
           */}
          <HTML>
            {/* This one is for MDX */}
            <MDXRenderer>{body}</MDXRenderer>
          </HTML>
        </ContentWrapper>
      </Wrapper>
      <Nav className="blog-post-nav">
        <Previous>
          {previous && (
            <Link to={`/${previous.slug}`} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </Previous>
        <Next>
          {next && (
            <Link to={`/${next.slug}`} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </Next>
      </Nav>
      {/* Footer */}
      <Author>Who the hell wrote this?</Author>
      <Bio />
    </Layout>
  );
}

// Quering data from GraphGl
export const query = graphql`
  query ($id: String, $prevDishId: String, $nextDishId: String) {
    DishDataDetails: mdx(id: { eq: $id }) {
      body
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        spoiler
      }
    }
    previous: mdx(id: { eq: $prevDishId }) {
      slug
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextDishId }) {
      slug
      frontmatter {
        title
      }
    }
  }
`;

// Styling

const Wrapper = styled.section`
  margin-top: ${p => p.theme.margin.big};
`;

const ContentWrapper = styled.main``;

const Header = styled.header`
  max-width: 630px;
`;

const Heading = styled.h1`
  font-family: 'Montserrat', sans-serif;
  color: ${prop => prop.theme.color};
  /* font-family: 'Recoleta'; */
  font-weight: 900;
  font-size: 40px;
  margin-bottom: 10px;
`;

const Date = styled.p`
  font-family: 'Merriweather', serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: -2%;
  color: ${prop => prop.theme.color};
`;

const Author = styled.p`
  margin-top: ${p => p.theme.margin.big};
  font-size: 25px;
  font-family: 'Recoleta';
  font-weight: 600;
  color: ${prop => prop.theme.color};
`;

const Nav = styled.div`
  margin-top: ${p => p.theme.margin.large};
  display: flex;
  justify-content: space-between;

  a {
    font-size: 20px;
    color: ${prop => prop.theme.color};
  }
`;

const Previous = styled.div``;

const Next = styled.div``;

const HTML = styled.div`
  margin-top: ${p => p.theme.margin.medium};
  font-family: 'Merriweather', serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 180%;
  color: ${prop => prop.theme.color};

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: 'Recoleta';
    margin-top: ${p => p.theme.margin.large};
    a {
      display: none;
      margin-right: 5px;
    }

    :hover a {
      fill: ${p => p.theme.secondary};
      display: inline-block;
    }
  }

  h2 {
    font-size: 28px;
    font-weight: 600;
  }

  h3 {
    font-size: 22px;
    font-weight: 500;
  }

  p {
    margin: 0;
    margin-top: ${p => p.theme.margin.small};
  }

  li {
    margin-top: ${p => p.theme.margin.small};
  }

  hr {
    margin: ${p => p.theme.margin.large} 0;
  }

  a {
    font-family: 'Merriweather', serif;
  }
`;
