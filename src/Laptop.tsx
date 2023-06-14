import {
  Environment,
  Html,
  PresentationControls,
  useGLTF
} from '@react-three/drei'

function Laptop() {
  const laptop = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf'
  )

  return (
    <>
      <Environment preset="warehouse" />

      <PresentationControls global polar={[-0.4, 0.2]} azimuth={[-0.4, 0.2]}>
        <primitive object={laptop.scene} position-y={-1.2} />
        <Html
          wrapperClass="laptop"
          position={[0.1, 0.3, -1.6]}
          transform
          distanceFactor={1.19}
          rotation-x={-0.25}
        >
          <iframe src="https://portifolio-page-beige.vercel.app/" />
        </Html>
      </PresentationControls>
    </>
  )
}

export default Laptop
