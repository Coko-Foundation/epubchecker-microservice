const components = require('./components')

module.exports = {
  components,
  subscriptionsDb: {},
  useGraphQLServer: false,

  onStartup: [
    {
      label: 'Create client runner through environment',
      execute: async () => {
        const {
          createServiceClientFromEnvironment,
          /* eslint-disable-next-line global-require */
        } = require('@coko/service-auth')

        await createServiceClientFromEnvironment()
      },
    },
  ],
}
