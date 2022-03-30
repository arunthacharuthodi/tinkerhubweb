
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
<Canvas    >

  <OrbitControls enableZoom={false} />


  
  <Stars depth={190} />

  <ambientLight intensity={0.5} />
  <spotLight position={[10, 15, 10]} angle={0.3} />
  <spotLight position={[17, 8, -1]} angle={0.3} />
  

  
  <Model/>
  <Html  center>
  <div className="inside">
     <h1>welcome to tinkerhub</h1>
     <p>
       <h5>
       we are tinkerhub, we are a group of people who are passionate about forging things.
       </h5>
        
     </p>
  </div>
  
  </Html>
  
</Canvas>

</CanvasContainer>

    );
}

