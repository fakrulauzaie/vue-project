module.exports = {
    publicPath: '/vue-project/'
}

export default defineConfig({
    plugins: [
      vue(),
  
      vuetify({
        autoImport: true,
      }),
    ],
    define: {
      'process.env': {}
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    base: './',
  
  })
