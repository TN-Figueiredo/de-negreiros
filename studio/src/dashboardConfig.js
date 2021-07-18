export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId: "60d66d392a97bc0b80f573c9",
                  title: "Sanity Studio",
                  name: "de-negreiros-studio",
                  apiId: "6ecb9fec-d468-477a-a09b-5199a7270cdc",
                },
                {
                  buildHookId: "60d66d39d8eda90096b4d319",
                  title: "Blog Website",
                  name: "de-negreiros",
                  apiId: "8725e269-3843-4050-b8f8-1339fed56605",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value: "https://github.com/TN-Figueiredo/de-negreiros",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://de-negreiros.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent articles",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
