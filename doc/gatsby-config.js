module.exports = {
  siteMetadata: {
    title: "React Awesome Loaders",
    description: "High quality, super responsive and completely customisable Loading Animations to insert into your website with single line of code.",
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
        name: "React Awesome Loaders",
        description: "High quality, super responsive and completely customisable Loading Animations to insert into your website with single line of code.",
        siteUrl: "http://localhost:8000",
        author: 'Ashutosh Hathidara',
      },
    },
  ],
};
