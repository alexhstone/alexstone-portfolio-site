module.exports = {
  publicPath: '',
  outputDir: 'dist',
  indexPath: 'index.html',
  filenameHashing: false,
  devServer: {
    historyApiFallback: {
      rewrites: [
        { from: /^\/alexstone-portfolio-site\/.*$/, to: '/alexstone-portfolio-site/' }
      ]
    }
  }
};
