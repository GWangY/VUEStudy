const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')
/*const htmlPlugin=new HtmlWebpackPlugin({
  template:'index.html'
})*/
module.exports={
  entry:'./src/main.js',
  output:{
    path:path.join(__dirname,'dist'),
    filename:'bundle.js'
  },
  /*publicPath:'dist/',*/

  module:{
    rules:[
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      },
      {
        test:/\.less$/,
        use:[
          {loader:'style-loader'},
          {loader:'css-loader'},
          {loader:'less-loader'}
          ]
      },
      {
        test:/\.(png|jpg|gif|jpeg)$/,
        use:[
            {
          loader: 'url-loader',
          options:{
            limit:13000
          }
        }]
      },
      {
        test:/\.js$/,
        exclude:/(node_modules|bower_components)/,
        use:{
          loader:'babel-loader',
          /*options:{
            preset:['es2015']
          }*/
        }
      },
      {
        test:/\.vue$/,
        use:['vue-loader']
      },
    ]
  },
  resolve:{
    alias:{"vue$":'vue/dist/vue.esm.js'}
  },
  plugins:[

  ]
}