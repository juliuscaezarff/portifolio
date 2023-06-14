import ReactDOM from 'react-dom/client'
import './styles.css'
import Laptop from './Laptop.tsx'
import { Canvas } from '@react-three/fiber'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Canvas
    camera={{
      fov: 40,
      near: 0.1,
      far: 2000,
      position: [-3, 1.5, 4],
    }}
  >
    <Laptop />
  </Canvas>,
)
