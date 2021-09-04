const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve('./src/templates/DishDetails.js');
  const { data, errors } = await graphql(`
    query DishDetails {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  if (errors) {
    reporter.panicOnBuild(`There was an error loading your blog posts`, errors);
    return;
  }

  const dishes = data.allMdx.nodes;

  if (dishes.length > 0) {
    dishes.forEach((dish, index) => {
      const prevDishId = index === 0 ? null : dishes[index - 1].id;
      const nextDishId = index === dishes.length - 1 ? null : dishes[index + 1].id;

      createPage({
        path: `${dish.frontmatter.slug}`,
        component: postTemplate,
        context: {
          prevDishId,
          nextDishId,
          id: dish.id,
          slug: dish.frontmatter.slug,
        },
      });
    });
  }
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }
    type Author {
      name: String
    }
    type Social {
      twitter: String
    }
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }
    type Frontmatter {
      title: String
      spoiler: String
      date: Date @dateformat
    }
    type Fields {
      slug: String
    }
  `);
};
