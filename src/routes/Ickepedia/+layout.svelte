<script>
        import { enhance } from "$app/forms";

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
                console.log("Gyatt");
                window.location.assign("/Ickepedia/Samel");
            break;
            case "melvin":
            case "melvin lundberg":
            case "lundberg":
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
</script>


<nav>
  <img src="/IckeP.png" alt="flexbox rules">
  <a href="/Ickepedia">Ickepedia</a>
  <form on:submit|preventDefault={()=>sök(fn.toLowerCase())}>
  <label for="field1">
      <input id="name" type="text" bind:value={fn}/>
      <input type="submit" value="Sök"/>
  </label>
  </form>
    
</nav>



<hr />

<slot />

<style>
 nav{
    background-color: aliceblue;
    display: flex;

 }
 img{
  width:25px;
 }


</style>
