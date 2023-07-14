

import React, { useState, useEffect } from 'react';
import "./Loader.scss";


import { BeatLoader, ClipLoader, DotLoader, HashLoader, MoonLoader, PacmanLoader, PulseLoader, ScaleLoader } from 'react-spinners';




function SplashScreen() {
    const [loading, setLoading] = useState(true);

      // When the component mounts, overflow is set to 'hidden' on the body
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    // When the component unmounts, overflow is reset to 'auto'
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []); 
    return (
   <>
       
         <div className='loadingPage'> 
         {/* <div className="model">   <Canvas camera={{ fov: 23, position:[5,5,5]}} >
        <OrbitControls enableZoom={false} autoRotate/>
        <ambientLight intensity={1}/>
        <directionalLight position={[3,2,1]}/>
        
       <Cube/>
      </Canvas></div> */}
            <h1> 
            <ul className='ull'>
                <li className='ull__lii'>S</li>
                <li className='ull__lii'>A</li>
                <li className='ull__lii'>A</li>
                <li className='ull__lii'>Y</li>
                <li className='ull__lii'>A</li>
                <div><h1 className='ull__liii' color='white'>  s</h1></div>
                <br/>
                <br/>
                <br/>

               {/* <li className='ull__liii1'>a </li> */}
                <li className='ull__lii'>A</li>
                <li className='ull__lii'>R</li>
                <li className='ull__lii'>C</li>
                <li className='ull__lii'>H</li>
                <li className='ull__lii'>I</li>
                <li className='ull__lii'>T</li>
                <li className='ull__lii'>E</li>
                <li className='ull__lii'>C</li>
                <li className='ull__lii'>T</li>
                <li className='ull__lii'>S</li>

               
            </ul>

            </h1>
            <ScaleLoader className='override'
        loading={loading}
        
        color = '#00dfb659'
        size={290}
        aria-label="Loading Spinner"
        data-testid="loader"/>
            
     
        </div>
   </>
    );
}

function Appp() {
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     // Simulate a loading delay
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 5000); 
          
    // }, []);
    useEffect(() => {
        // Simulate a loading delay
        const timer = setTimeout(() => {
          setLoading(false);
        }, 3000); // 3 seconds
    
        return () => clearTimeout(timer); // Clean up the timeout
      }, []);
    

    

    return (
      
        <div className="App">
            {loading ? <SplashScreen /> : (
                <div>
                    {/* Your normal app components here */}
                </div>
            )}
        </div>
    );
}

export default Appp;
