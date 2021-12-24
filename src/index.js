import './global.css';
import './css/main.css';
import './css/font-awesome.min.css';
import './fonts/openSans.css';


  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg|webp)$/));
  const fonts = importAll(require.context('./fonts', false, /\.(woff|woff2|eot|ttf|svg)$/));
  console.log('fonts',fonts);