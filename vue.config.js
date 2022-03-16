module.exports = {
    devServer: {
        disableHostCheck: true,
    },
    chainWebpack: config => {
        config
          .plugin('html')
          .tap(args => {
            args[0].title= '陽明交大資工系-高中生專區'
            return args
          })
      }
}