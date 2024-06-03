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
    let ads = [ad1,ad12,ad10,ad4,ad11,ad7,ad13,ad9,ad5,ad3]
</script>

<h1>Title</h1>




<div class="article">
    <div class="bildbox">
        <div class="bildtext">
            <div class="rub" style="background-color:rgb(179, 216, 249);">
                <b>name</b>
            </div>
            <img class="bild1" src="/IckeP.png" alt="flexbox rules">
            <div class="rub" style="background-color:rgb(179, 216, 249);">
                <b>Scientific classification</b>
            </div>
            <div class="list">
                <div class="tab">
                    <p>Kingdom:</p>
                    <p>Clade:</p>
                    <p>Clade:</p>
                    <p>Clade:</p>
                    <p>Clade:</p>
                    <p>Order:</p>
                    <p>Family:</p>
                    <p>Genus:</p>
                    <p>Species:</p>
                </div>
                <div>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            </div>
            
            <div class="rub" style="background-color:rgb(179, 216, 249);">
                <b>Binomial name</b>
            </div>

            <div class="rub">
                <p></p>
            </div>
        </div>
    </div>
    <div class="paragraf1">
        <p2>Text</p2>
    </div>

    <b style="background-color:rgb(179, 216, 249);">Title</b>
    <div class="paragraf2">
        <div>
            <div style="margin-bottom:20px;">Text</div>
            <div class="paragraf3">
                <p2>Text</p2>
            </div>
        </div>
        <img style = "margin:10px; height:200px;"src="/IckeP.png" alt="flexbox rules">
    </div>

    <div class="paragraf3">
        <p2>Text</p2>
    </div>

    <div class="paragraf3">
        <p2>Text</p2>
    </div>

    <b style="background-color:rgb(179, 216, 249);">Title</b>
    <div class="paragraf3">
        <p2>Text</p2>
        
    </div>

    <b style="background-color:rgb(179, 216, 249);">Title</b>
    <div class="paragraf3">
        
        <p2>Text</p2>
    </div>
    
    <b style="background-color:rgb(179, 216, 249);">Title</b>
    <div class="paragraf3">
        <p2>Text</p2>
    </div>

    <div class="paragraf3">
        <p2></p2>
    </div>

    <b style="background-color:rgb(179, 216, 249);">Title</b>
    <div class="paragraf3">
        <p2>Text</p2>
    </div>

    <b style="background-color:rgb(179, 216, 249);">Sources:</b>
    <div class="paragraf4">
        <p2>1. Text</p2>
        <p2>2. Text</p2>
        <p2>3. Text</p2>
        <p2>5. Text</p2>
        <p2>6. Text</p2>
        <p2>7. Text</p2>
        <p2>8. Text</p2>
    </div>

    
    <div class="ads">
        {#each ads as ad}
            <div class="image-wrapper">
                <img src={ad} alt="flexbox
                rules">
            </div>
        {/each}
    </div>


</div>

<style>
    
    .ads{
    display:flex;
    justify-content: space-around;
    max-width: 90vw;
    align-items: left;
    flex-wrap: wrap;
    padding:10px;
    
    

    }

    h1{
        background-color:rgb(179, 216, 249);

    }
    
    .article{
        width:100%;
        height:100%;
        background-color:rgba(228, 238, 247, 0.173);
    }
    .bildbox{
        
        margin-left:75%;
        width:25%;
        height: 700px;
        background-color:aliceblue;
        position:absolute;
    }

    .rub{
        text-align: center; 
    }

    .bild1{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
        margin-top:10px;
        width:200px;
    }

    .list{
        display: flex;
        flex-direction: row;
        
    }
    .tab{
        margin-left:10px;
        width: 40%;
    }

    .paragraf1{
        width: 70%;
        background-color:aliceblue;
        margin-bottom:20px;
    }
    .paragraf2{
        width: 70%;
        display: flex;
        margin-bottom:20px;
        background-color:aliceblue;


    }
    .paragraf3{
        width: 70%;
        background-color:aliceblue;
        margin-bottom:20px;
    }
    .paragraf4{
        width: 70%;
        display: flex;
        margin-bottom:20px;
        flex-direction:column;
        background-color:aliceblue;
    }

</style>