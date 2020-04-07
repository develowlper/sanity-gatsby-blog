export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e8cf14c44d1146d41e93cda',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-7s9a77re',
                  apiId: 'dfecec59-081b-4231-96f0-47a5b00ba167'
                },
                {
                  buildHookId: '5e8cf14c9e20c56aa69fb82c',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-s7eqyd23',
                  apiId: '06662ff3-0b32-4d88-a3b6-4f3d896d41ae'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/develowlper/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-s7eqyd23.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
