<template>
    <div class="menu">
       <div class="about">
        <div class="container">
            <div class="about-heading">
                <h6>feedbacks</h6>
                <h3>what people say about us?</h3>
                <p>let's share your experiences when taking</p>
            </div>
            <div class="about-feedback">
                <div class="item">
                    <div class="item-text">
                        <a href="#">x</a>
                        <p>Lorem ispum dolor Lorem ispum dolor
                            Lorem ispum dolor 
                            Lorem ispum dolor Lorem ispum dolor
                        </p>
                        <div class="social">
                            <span>hieu</span>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="item-text">
                        <a href="#">x</a>
                        <p>Lorem ispum dolor Lorem ispum dolor
                            Lorem ispum dolor 
                            Lorem ispum dolor Lorem ispum dolor
                        </p>
                        <div class="social">
                            <span>hieu</span>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="item-text">
                        <a href="#">x</a>
                        <p>Lorem ispum dolor Lorem ispum dolor
                            Lorem ispum dolor 
                            Lorem ispum dolor Lorem ispum dolor
                        </p>
                        <div class="social">
                            <span>hieu</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default ({
    
   computed: {
    ...mapState({
   
    })
  }
})
</script>


<style>
     .about-heading {
            text-align: center;
        }
        .about-heading h6 {
            color: green;
        }
        .about-heading h3 {
            color: darkblue;
        }
        .about-heading p {
            font-size: 12px;
            color: darkblue;
        }
        .about-feedback {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
        }
        .about-feedback .item {
           box-shadow: inset 0 0 8px  rgba(0, 0, 0, 0.3);
           border-radius: 5px;
        }
        .item-text {
            margin-left: 3%;
            margin-bottom: 3%;
        }
        .item a {
            text-decoration: none;
            color: darkblue;
            font-weight: bold;
            margin-left: 90%;
        }
</style>