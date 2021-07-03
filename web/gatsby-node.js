const { isFuture } = require("date-fns");
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { format } = require("date-fns");

// async function createBlogPostPages(graphql, actions) {
//   const { createPage } = actions;
//   const result = await graphql(`
//     {
//       allSanityPost(
//         filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
//       ) {
//         edges {
//           node {
//             id
//             publishedAt
//             slug {
//               current
//             }
//           }
//         }
//       }
//     }
//   `);

//   if (result.errors) throw result.errors;

//   const postEdges = (result.data.allSanityPost || {}).edges || [];

//   postEdges
//     .filter((edge) => !isFuture(new Date(edge.node.publishedAt)))
//     .forEach((edge) => {
//       const { id, slug = {}, publishedAt } = edge.node;
//       const dateSegment = format(new Date(publishedAt), "yyyy/MM");
//       const path = `/blog/${dateSegment}/${slug.current}/`;

//       createPage({
//         path,
//         component: require.resolve("./src/templates/blog-post.js"),
//         context: { id },
//       });
//     });
// }

const createCustomPages = async (graphql, actions) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityPage {
        nodes {
          title
          slug {
            current
          }
          sections {
            _key
            _type
            background {
              caption
              alt
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
            bannerText {
              children {
                text
                marks
              }
            }
            buttons {
              label
              url
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const { nodes } = result.data.allSanityPage;

  nodes.forEach(({ title, slug: { current }, sections }) => {
    createPage({
      path: `/${current}`,
      component: require.resolve("./src/templates/page.js"),
      context: { title, sections },
    });
  });
};

exports.createPages = async ({ graphql, actions }) => {
  await createCustomPages(graphql, actions);
  // await createBlogPostPages(graphql, actions);
};
