import Navbar from "./components/Navbar";
import Model from "./components/Model";
import Modely from "./components/Modely";
import ModelX from "./components/ModelX";
import ModelS from "./components/ModelS";
import Solarpanel from "./components/Solarpanal";
import Solarroof from "./components/solarRoof";

function App() {
  return (
    <>
    <div className="bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/9160c5a3-b818-42dd-bb98-b8597948c636/bvlatuR/std/1927x4096/M3-Homepage-Mobile-LHD')] lg:bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/03e533bf-8b1d-463f-9813-9a597aafb280/bvlatuR/std/4096x2560/M3-Homepage-Desktop-LHD')] h-screen bg-cover bg-center">
      <Navbar />
      <Model />
      
    
    </div>

     <div class="bg-[url('https://wallpaperaccess.com/full/2257164.jpg')] h-screen bg-cover bg-center">
     <Modely />
     </div>

      <div class="bg-[url('https://images4.alphacoders.com/121/1210649.jpg')] h-screen bg-cover bg-center">
        <ModelX />
     </div>
     
      <div class="bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/898c2038-c428-452c-84bf-034d5c48ca8e/bvlatuR/std/4096x2560/Model-S-homepage-desktop')] h-screen bg-cover bg-center">
     <ModelS />
     </div>

      <div class="bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/16b04537-a4be-4bf9-8637-86862a858da8/bvlatuR/std/2880x1800/_25-HP-SolarPanels-D')] h-screen bg-cover bg-center">
        <Solarpanel/>
     </div>
      

      <div class="bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/4a41ec0e-7316-46a8-8ce9-e2f195ba644d/bvlatuR/std/2880x1800/Homepage-SolarRoof-Desktop-Global?')] h-screen bg-cover bg-center"> 
     
        <Solarroof/>
     </div>
    </>
  );
}

export default App;
