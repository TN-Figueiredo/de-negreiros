module.exports = {
  sanity: {
    projectId: process.env.GATSBY_SANITY_PROJECT_ID || "impv9vga",
    dataset: process.env.GATSBY_SANITY_DATASET || "production",
    apiVersion: "2021-03-25",
    useCdn: true,
  },
};
