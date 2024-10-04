
import './App.css'
import Accordion from './components/Accordion/index'
import RandomColorGenerator from './components/RandomColorGenerator/index'
import StarRating from './components/StarRating';
import ImageSlider from './components/ImageSlider';
import LoadMoreProducts from './components/Load-more-projects';
import QrCodeGenerator from './components/qr-code-generator';
import LightDarkMode from './components/Light-Dark-Mode';
import ScrollIndicator from './components/scroll-indicator';
function App() {
  

  return (
  <>
     {/* <Accordion/> */}
     {/* <RandomColorGenerator/> */}
     {/* <StarRating noOfStars={10}/> */}
     {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"}/> */}
     {/* <LoadMoreProducts/> */}
     {/* <QrCodeGenerator/> */}
     {/* <LightDarkMode/> */}
     <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
  </>
   
  
  );
}

export default App