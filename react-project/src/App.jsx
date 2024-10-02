
import './App.css'
import Accordion from './components/Accordion/index'
import RandomColorGenerator from './components/RandomColorGenerator/index'
import StarRating from './components/StarRating';
import ImageSlider from './components/ImageSlider';
import LoadMoreProducts from './components/Load-more-projects';
import QrCodeGenerator from './components/qr-code-generator';

function App() {
  

  return (
  <>
     {/* <Accordion/> */}
     {/* <RandomColorGenerator/> */}
     {/* <StarRating noOfStars={10}/> */}
     {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"}/> */}
     {/* <LoadMoreProducts/> */}
     <QrCodeGenerator/>
  </>
   
  
  );
}

export default App