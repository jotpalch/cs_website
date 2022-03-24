module.exports = {
    devServer: {
        disableHostCheck: true,
    },
    chainWebpack: config => {
        config
          .plugin('html')
          .tap(args => {
            args[0].title= '交大資工-高中生專區'
            return args
          })
      }
}