<script>
    let ad1 = "/ad1.webp"
    let ad2 = "/ad2.jpg"
    let ad3 = "/ad3.jpg"
    let ad4 = "/ad4.webp"
    let ad5 = "/ad5.jpg"
    let ad6 = "/ad6.jpg"
    let ad7 = "/ad7.jpg"
    let ad8 = "/ad8.jpg"
    let ad9 = "/ad9.jpg"
    let ad10 = "/ad10.jpg"
    let ad11 = "/ad11.jpg"
    let ad12 = "/ad12.jpg"
    let ad13 = "/ad13.jpg"
    let ads = [ad1,ad12,ad10,ad4,ad11,ad7,ad6,ad13,ad9,ad2,ad5,ad3]
    let fn = ""

    function sök(target) {
        switch (target){
            case "bananas":
            case "banana":
                console.log("banan");
                window.location.assign("/Ickepedia/Bananas");
            break;
            case "apples":
            case "apple":
                console.log("äpple");
                window.location.assign("/Ickepedia/Apples");
            break;
            case "pears":
            case "pear":
                console.log("päron");
                window.location.assign("/Ickepedia/Pears");
            case "samuel":
            case "samuel mellesmo":
            case "mellesmo":
            case "gyatt":
                console.log("Gyatt");
                window.location.assign("/Ickepedia/Samel");
            break;
            case "melvin":
            case "melvin lundberg":
            case "lundberg":
            case "alien":
                console.log("Alien");
                window.location.assign("/Ickepedia/Melle");
            break;
            case "david":
            case "david nilsson":
            case "nilsson":
            case "burman":
            case "buzz":
            case "buzz lightyear":
            case "lightyear":
            case "socksovare":
            case "burmans":
            case "källare":
                console.log("lightyear");
                window.location.assign("/Ickepedia/Buzz");
            break;
            case "Layout":
                window.location.assign("/Ickepedia/Layout");
            case "Layout_personer":
                window.location.assign("/Ickepedia/Layout_personer");
            break;
            default:
                console.log("Error");
                window.location.assign("/Ickepedia/ERROR")
        }
        return -1
    }
    import { onMount } from 'svelte'

    import GoogleAd from "$lib/components/GoogleAds.svelte"
    import { isAdLoaded } from "$lib/stores";

    import { Canvas } from '@threlte/core'
    import Scene from '$lib/components/page1.svelte'
    import { GptSlot } from '@rigu/svelte-gpt';
    
    

</script>



<h1>Ickepedia</h1>

<div id="display">
    <Canvas>
      <Scene />
    </Canvas>
</div>

<div class="form">
    <form on:submit|preventDefault={()=>sök(fn.toLowerCase())}>
        <fieldset><legend>What wanna know?</legend>
        <label for="field1">
            <input id="name" type="text" bind:value={fn}/>
            <input type="submit" value="Sök"/>
        </label>
        </form>
</div>


<div class="ads">
    {#each ads as ad}
        <div class="image-wrapper">
            <img src={ad} alt="flexbox
            rules">
        </div>
    {/each}
</div>


<style>


.form{
    background-color:aliceblue;
    margin:auto;
    display: flex;
    justify-content: center;
    margin-top: 2%;
    z-index:0;

}

h1{
    background-color:aliceblue;
    display:flex;
    justify-content: center;
    z-index:1;
}

.logo{
    margin-top: 15%;
    display:flex;
    justify-content: center;
}

.image-wrapper img {
    width:30vw;
    height:30vh;
}
.ads{
display:flex;
justify-content: space-around;
max-width: 90vw;
flex-wrap: wrap;
padding:50px;
align-items: center;
justify-content: center;


}
#display{

        height:30vh;
        margin-top: 2%;
        display:flex;
        justify-content: center;
        z-index:2;
    }

</style>