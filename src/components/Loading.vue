<template>
<div class="loading">
        <div class="pic">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
        </div>
</div>
</template>

<script>
export default {
}
</script>

<style scoped>
   .loading{
       margin: 50px 0;
            width:100%;
            height:100%;
            background-color:#fff;
        }
        .loading .pic{
            width:50px;
            height:50px;
            margin:auto;
        }
        .loading .pic i{
            display:block;
            float:left;
            width:6px;
            height:50px;
            background-color:#399;
            margin:0 2px;
            -webkit-transform:scaleY(0.4);
            transform:scaleY(0.4);
            -webkit-animation:load 1.2s infinite;
            animation:load 1.2s infinite;
        }
        .loading .pic i:nth-child(2){
            -webkit-animation-delay:0.1s;
            animation-delay:0.1s;
        }
        .loading .pic i:nth-child(3){
            -webkit-animation-delay:0.2s;
            animation-delay:0.2s;
        }
        .loading .pic i:nth-child(4){
            -webkit-animation-delay:0.3s;
            animation-delay:0.3s;
        }
        .loading .pic i:nth-child(5){
            -webkit-animation-delay:0.4s;
            animation-delay:0.4s;
        }
        @-webkit-keyframes load{
            0%,40%,100%{
                -webkit-transform:scaleY(0.4);
                transform:scaleY(0.4);
            }
            20%{
                -webkit-transform:scaleY(1);
                transform:scaleY(1);
                background-color: rgb(99, 236, 236);
            }
        }
        @keyframes load{
            0%,40%,100%{
                -webkit-transform:scaleY(0.4);
                transform:scaleY(0.4);
            }
            20%{
                -webkit-transform:scaleY(1);
                transform:scaleY(1);
                background-color: rgb(99, 236, 236);
            }
        }
</style>