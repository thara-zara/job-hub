import About from "./components/About";
import Header  from "./components/Header";
import Portfolio from "./components/Portfolio";
import Service from "./components/Service";
import Team from "./components/Team";
import Comment from "./components/Comment";
import Support from "./components/Support";
import Process from "./components/Process";
import ClientBar from "./components/ClientBar";
import Blog from "./components/Blog";
import BrandBar from "./components/BrandBar";
/*
<Header/>
      <About/>
      <Service/>
      <Portfolio/>
      <Team/>
      <Comment/>
      <Support/>
      <Process/>
      <ClientBar/>
      <Blog/>
      <BrandBar/>
import Slider from "./Slider";*/
function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Service/>
      <Portfolio/>
      <Team/>
      <Support/>
      <Process/>
      <ClientBar/>
      <Blog/>
      <BrandBar/>
    </div>
  );
}

export default App;
