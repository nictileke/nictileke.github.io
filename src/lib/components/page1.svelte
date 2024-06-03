<script>
    import { T, useLoader, useTask } from '@threlte/core'
    import { interactivity } from '@threlte/extras'
    import { spring } from 'svelte/motion'
    import { TextureLoader } from 'three';

    interactivity()
    const scale = spring(1)

    const logo = useLoader(TextureLoader).load("/IP.Logga.png")

    let rotation = 0
    useTask((delta) => {
      rotation += delta
    })

  </script>

<T.PerspectiveCamera

  makeDefault
  position={[10, 1, 10]}
  on:create={({ ref }) => {
    ref.lookAt(0, 1, 0)
  }}
/>

<T.DirectionalLight 
  position={[0, 10, 10]} 
/>

<T.Mesh position.y={1}
  rotation.y={rotation*0.2}
  scale={$scale}
  on:pointerenter={() => scale.set(1.5)} 
  on:pointerleave={() => scale.set(1)}
  
  >
  <T.SphereGeometry args={[6,1000]} />
  {#if $logo} <T.MeshBasicMaterial map={$logo} /> {/if}
</T.Mesh>



 