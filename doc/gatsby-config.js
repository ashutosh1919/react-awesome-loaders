module.exports = {
  siteMetadata: {
    title: "React Awesome Loaders",
    description: "Awesome Loading animations",
    author: "Ashutosh Hathidara",
    sections: ['Introduction', 'Loaders', 'More'],
    navItems: [
      { title: 'Docs', url: '/docs/' },
    ],
    twitterAccount: 'ashutosh_1919',
    githubRepositoryURL: 'https://github.com/ashutosh1919/react-awesome-loaders',
  },
  plugins: [
    {
      resolve: "smooth-doc",
      options: {
        name: "Smooth DOC Starter",
        description: "Use your own description...",
        siteUrl: "http://localhost:8000",
      },
    },
  ],
};
