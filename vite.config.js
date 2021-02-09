import antdVars from './resources/applause/themes/antd'

export default {
  cssPreprocessOptions: {
    less: {
      javascriptEnabled: true,
      modifyVars: antdVars
    }
  },
  proxy: {
    '/api': {
      target: 'http://localhost:8000',
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, '')
    }
  }
}
