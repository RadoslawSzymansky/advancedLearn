// __ dirmanme to sicekza absolutna do folderu

// tworzymy modul Common.js ktory zwraca obiekt konfiguracyjny

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'production',
  // wiecej plikow wejsciowych
  // entry: {
  //   main: './src/index.js',
  //   main2: './src/index.js',
  // },
  entry: './src/app.js',
  output: {
    filename: 'prod.js',
    path: path.resolve(__dirname, `../build`)
  },
  plugins: [
    // czysci folder build z niepotrzebnych plikow i stare rzeczy?
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'nowaNazwa'
    }),
    new HtmlWebpackPlugin({
      title: 'drugaNazwa',
      filename: 'prod.html',
      template: "src/template.html"
    })
  ]
}

// mode oznacza czy production czy development
// mozna uzywac innych modulow w webpacku np wbudowany modul node - path
// jeszcze tutaj nie mozna uzyć ES modules. Tylko to co w node 

// 4 najwazniejsze cechy webpacka
  

  // - entry (points) 
        // - webpack musi wiedziec ktory plik js jest plikiem wejsxciowym
        // entry: 'sciezka do pliku'

  // - loaders

        //  pozwalaja przeklszzatlacac pliki ktore nie sa obslugiwane przez js. Np img css itp
        
  // - output 

  // - plugins