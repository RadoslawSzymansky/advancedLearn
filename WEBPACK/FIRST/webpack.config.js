// __ dirmanme to sicekza absolutna do folderu

// tworzymy modul Common.js ktory zwraca obiekt konfiguracyjny

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
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
    filename: 'index.js',
    path: path.resolve(__dirname, `build`)
  },
  module: {
    rules: [
      {
        // raw loader dla plikow txt
        test: /\.txt$/,
        use: 'raw-loader'
      }
    ]
  },
  plugins: [
    // czysci folder build z niepotrzebnych plikow i stare rzeczy?
    new CleanWebpackPlugin(),
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
