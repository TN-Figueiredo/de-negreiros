const { isFuture } = require("date-fns");
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { format } = require("date-fns");

async function createBlogPostPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityPost(
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const postEdges = (result.data.allSanityPost || {}).edges || [];

  postEdges
    .filter((edge) => !isFuture(new Date(edge.node.publishedAt)))
    .forEach((edge) => {
      const { id, slug = {}, publishedAt } = edge.node;
      const dateSegment = format(new Date(publishedAt), "yyyy/MM");
      const path = `/artigos/${dateSegment}/${slug.current}/`;

      createPage({
        path,
        component: require.resolve("./src/templates/article.js"),
        context: { id },
      });
    });
}

const createCustomPages = async (graphql, actions) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityPage {
        edges {
          node {
            title
            slug {
              current
            }
            sections {
              ... on SanityBanner {
                _key
                _type
                background {
                  _key
                  _type
                  alt
                  caption
                  asset {
                    _id
                    metadata {
                      _key
                      _type
                      lqip
                      hasAlpha
                      isOpaque
                      _rawLocation
                      _rawDimensions
                      _rawPalette
                    }
                  }
                  crop {
                    _key
                    _type
                    top
                    bottom
                    left
                    right
                  }
                  hotspot {
                    _key
                    _type
                    x
                    y
                    height
                    width
                  }
                }
                titleAndContent {
                  _key
                  _type
                  title
                  block {
                    _key
                    _type
                    children {
                      _key
                      _type
                      marks
                      text
                    }
                  }
                }
                buttons {
                  _key
                  _type
                  label
                  url
                }
              }
              ... on SanityForm {
                _key
                _type
                title
                backgroundColor
                submit
                fields {
                  ... on SanityInputMessage {
                    _key
                    _type
                    maxLength
                    placeholder
                    required
                    title
                  }
                  ... on SanityInputSelect {
                    _key
                    _type
                    options
                    required
                    title
                  }
                  ... on SanityInputText {
                    _key
                    _type
                    maxLength
                    placeholder
                    required
                    title
                  }
                }
              }
              ... on SanitySmallSection {
                _key
                _type
                title
                select
                buttons {
                  _key
                  _type
                  label
                  url
                }
                background {
                  _key
                  _type
                  alt
                  caption
                  asset {
                    _id
                    metadata {
                      _key
                      _type
                      lqip
                      hasAlpha
                      isOpaque
                      _rawLocation
                      _rawDimensions
                      _rawPalette
                    }
                  }
                  crop {
                    _key
                    _type
                    top
                    bottom
                    left
                    right
                  }
                  hotspot {
                    _key
                    _type
                    x
                    y
                    height
                    width
                  }
                }
                whatsAppPlaceholder {
                  Show
                  _key
                  _type
                }
              }
              ... on SanityAuthorList {
                _key
                _type
                authors {
                  _key
                  author {
                    _key
                    name
                    slug {
                      current
                    }
                    bio {
                      _key
                      children {
                        _key
                        _type
                        marks
                        text
                      }
                      _type
                    }
                    image {
                      _key
                      caption
                      alt
                      asset {
                        metadata {
                          _key
                          _type
                          lqip
                          hasAlpha
                          isOpaque
                          _rawLocation
                          _rawDimensions
                          _rawPalette
                        }
                        _id
                      }
                      crop {
                        _key
                        _type
                        top
                        bottom
                        left
                        right
                      }
                      hotspot {
                        _key
                        _type
                        x
                        y
                        height
                        width
                      }
                    }
                    _type
                  }
                  _type
                }
              }
              ... on SanityLatestPostsSection {
                _key
                _type
                title
              }
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const pageEdges = (result.data.allSanityPage || {}).edges || [];

  pageEdges.forEach(
    ({
      node: {
        title,
        slug: { current },
        sections,
      },
    }) => {
      createPage({
        path: `/${current}`,
        component: require.resolve("./src/templates/page.js"),
        context: { title, sections },
      });
    }
  );
};

exports.createPages = async ({ graphql, actions }) => {
  await createCustomPages(graphql, actions);
  await createBlogPostPages(graphql, actions);
};
