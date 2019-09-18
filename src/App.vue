<template>
    <div id="app">
        <game/>
    </div>
</template>

<script>
    import Game from "./components/Game";

    export default {
        name: 'app',
        components: {
            Game,
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Nunito+Sans&display=swap');

    * {
        font-family: 'Nunito Sans', sans-serif;
    }

    #app {

        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 1rem;
    }

    html, body {
        background: linear-gradient(90deg, #141e30 0%, #243b55 100%);
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;;
    }

    p {
        color: #000000;
    }

    .card-body {
        background-color: #efefef;
    }

    .game-footer {
        padding: 2rem 3rem 0.5rem 3rem;
        position: fixed;
        bottom: 0;
        width: 100%;
        background: #2c2828;
        background: linear-gradient(90deg, #4ca1af 0%, #141e30 100%);
        -webkit-box-shadow: 0px 1px 11px 10px rgba(20, 30, 48, 1);
        -moz-box-shadow: 0px 1px 11px 10px rgba(20, 30, 48, 1);
        box-shadow: 0px 1px 11px 10px rgba(20, 30, 48, 1);
    }

    button {
        max-width: 90% !important;
    }

    @media only screen and (max-width: 1000px) {
        .game-footer {
            padding: 0.5rem;
        }

        button {
            padding: 0.25rem !important;
            max-width: 90% !important;
            font-size: 0.75rem !important;
        }

        .card-title {
            margin-bottom: 0.4rem !important;
        }
    }

    .footer--block {
        color: white;
    }

    h5 {
        font-size: 0.8rem !important;
    }

    .owl-nav {
        display: none;
    }

    .card {
        height: 100%;
    }

</style>
