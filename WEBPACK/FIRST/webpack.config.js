// __ dirmanme to sicekza absolutna do folderu

// tworzymy modul Common.js ktory zwraca obiekt konfiguracyjny

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  // wiecej plikow wejsciowych
  // entry: {
  //   main: './src/index.js',
  //   main2: './src/index.js',
  // },
  entry: './src/app.js',
  output: {
    // hashowanie
    filename: '[contenthash:3]index.js',
    path: path.resolve(__dirname, `build`)
  },
  devServer: {
    open: true,
    // contebnt base czyli zasoby statyczne ktorych nie bundlujemy
    contentBase: path.resolve(__dirname, `public`),
    // port: 5000
  },
  module: {
    rules: [
      {
        // raw loader dla plikow txt
        test: /\.txt$/,
        use: 'raw-loader'
      },
      {
        // raw loader dla plikow txt
        test: /\.css$/,
        // sstyle-loader wstrzykuje zaimpo plik css w js do head index.html
        // use: [ 'style-loader', 'css-loader', ]
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
        // mini-css-extract-plugine do jednego pliku saprowadzi wszystko css
      }
    ]
  },
  plugins: [
    // czysci folder build z niepotrzebnych plikow i stare rzeczy?
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin({
      // dobra nazwa dla wersji dev
      filename: '[name].css'
    })
  ]
}

// CSS 
  // -- 

// mode oznacza czy production czy development
// mozna uzywac innych modulow w webpacku np wbudowany modul node - path
// jeszcze tutaj nie mozna uzyć ES modules. Tylko to co w node 

// 4 najwazniejsze cechy webpacka
  

  // - entry (points) 
        // - webpack musi wiedziec ktory plik js jest plikiem wejsxciowym
        // entry: 'sciezka do pliku'

  // - loaders

    // - loadery pozwalaja obslugiwac pliki ktore jsa domyslnie nie iobsluguje typu css img
    // - przekazyhe je w module - obiekt . use to jaki loader uzyc do jakich plikow ( test  - wyr regularbne)

    // TEORIA LOADEROW!

    // -- Przeksztlacjaja inne pliki w moduly
    // -- wymagane sa ich instalacje i zflaga DEV
    // -- loader pelni role preprocesora
    // -- sam w sobie loader jest funckja ktory przyjmuje jako argument przekazany kod zrodlowy
    // -- w use moze byc w tablicy dla danego pliku. wtedy uzyje od konca tablicy! loadery uzyjemy od prawej i bedzie przedostatni pracowal na pliku zmienionym przez loader na ostatnim
    // -- lub  tablica z obiektami { loader: 'nazwa' }
    // -- 

  // - output 

  // - plugins

    // -- zrobia to czego nie sa  wstanie zrobic loadery, i webpack
    // -- sa kregoslupem webpacka
    // -- musze zostac zainstalowane i zaimportowane
    // -- pluginy moga dzialac podczas calego procesu, dzialaja na konkretnym komdule i moga dzialac w trakcie modulu. Na poczatku i na koncu tez
    // -- najpopularniejszy HtmlWebpackPlugin
    // -- instalacjo jako devDepenedency
    // przekazuje je  w tablicy


// // Hashinh 
// --przegladarka jak pobrala pliki to niekoniecznie chce je pobrac drugi raz.
//   --czyli nie pobiera pliku jak jest ta sama nazwa a moze byc inna zawartosc.
//   --dlatego sie hashuje, mozna dodac hash indetyfikator dla pliku obok nazwy 
//   -- hash zmieni hash dla wszystkich plikow ten sam, a contenthash inne dla wszystkjch

// Dynamicznie gemnerowany html  plugin html-webpack-plugin

//  Webpack Dev swerver - server developerksi oswieza strone i moduly np  wreacue
// --- ma duzy opcji , instalacja jako zaleznosc dev
// odpalant jako webpack-dev-server lub npm start