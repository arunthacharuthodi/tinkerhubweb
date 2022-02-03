
import { Html, OrbitControls,  Stars } from '@react-three/drei';
import Model from "../Tinkerhub_logo"
import { Canvas} from '@react-three/fiber';
import styled from "styled-components";

const CanvasContainer = styled.div`
width: 100%;
height: 100%;
background-color: black;

`;

export default function HomepageCanvas() {

    return (
       


<CanvasContainer>
<Canvas  camera={{ position:[4 , -1, -1]}}  >

  <OrbitControls enableZoom={false} />


  
  <Stars depth={190} />

  <ambientLight intensity={0.5} />
  <spotLight position={[10, 15, 10]} angle={0.3} />
  
  <Html  center>
  <div className="inside">
     <h1>welcome to tinkerhub</h1>
     <p>
       we are tinkerhub, we are a group of people who are passionate about forging things.
        
     </p>
  </div>
  
  </Html>
  
  
  <Model/>

</Canvas>

</CanvasContainer>

    );
}

