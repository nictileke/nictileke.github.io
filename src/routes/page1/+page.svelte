<script>
    import { Canvas } from '@threlte/core'
    import Scene from '$lib/components/page1.svelte'
  </script>

<div id="display">
  <Canvas>
    <Scene />
  </Canvas>
</div>

<style>
    #display{
        position:absolute;
        height: 100%;
        width: 100%;
        
    }

</style>