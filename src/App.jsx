import {BrowserRouter as Router , Routes, Route}
 from "react-router"

 import Home from "./pages/Home";
 import DragonBall from "./pages/Dragonball";
 import Nav from "./components/Nav";
 import RickAndMorty from "./pages/RickAndMorty"

 

 function App(){
  return (
    <>
<Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dragon" element={<DragonBall />} />
            <Route path="/rick" element={<RickAndMorty />} />
        </Routes>
      </Router>
    </>
  );
 
}

export default App;