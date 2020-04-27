<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <nav-header @pageWasChanged="currentPage = $event"></nav-header>

        <div id="instructions" class="text-center italic">
          <div class="row">
            <div class="col-sm-6">
              <p><em>&larr; Make changes in the left area below</em></p>
            </div>
            <div class="col-sm-6">
              <p><em>And they will show on the card &rarr;</em></p>
            </div>
          </div>
        </div>

        <transition name="fade" mode="out-in" @enter="enter" type="transition" appear appear-active-class="custom-appear-active-class">
          <!-- Vue functionality to keep data inside a component if switched to another -->
          <keep-alive>
            <component v-bind:is="currentPage"></component>
          </keep-alive>
        </transition>

        <cc-footer>
          <p class="text-center" slot="app-name">{{ appName }} &copy;</p>
          <nav slot="nav-slot">
            <ul class="nav justify-content-center">
              <li class="nav-item"><a class="nav-link">Home</a></li>
              <li class="nav-item"><a class="nav-link">About</a></li>
              <li class="nav-item"><a class="nav-link">Contacts</a></li>
            </ul>
          </nav>
        </cc-footer>
      </div>
    </div>
  </div>
</template>

<script>
  import FirebaseConfig from './FirebaseConfig.js';
  import Header from './components/Header.vue';
  import CardFront from './components/card/CardFront.vue';
  import CardInsideLeft from './components/card/CardInsideLeft.vue';
  import CardInsideRight from './components/card/CardInsideRight.vue';
  import CardBack from './components/card/CardBack.vue';
  import Footer from './components/Footer.vue';

  export default {
    data: function() {
      return {
        currentPage: 'cardFront',
        appName: 'Creative Cards',
      }
    },
    methods: {
      enter: function(el, done) {
        document.getElementById("instructions").style.display = 'none'
        done()
      }
    },
    components: {
      navHeader: Header,
      cardFront: CardFront,
      cardInsideLeft: CardInsideLeft,
      cardInsideRight: CardInsideRight,
      cardBack: CardBack,
      ccFooter: Footer,
    }
  }
</script>

<style>
  body {
    font-family: Verdana, Geneva, sans-serif;
    color: #333;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity .5s;
    //animation: scale-in 2s;
  }
  .fade-leave-active {
    transition: opacity .5s;
    //animation: scale-out 2s;
  }
  .fade-enter-to, .fade-leave {

  }
  .custom-enter-active {
    animation: scale-in 0.5s;
  }
  .custom-leave-active {
    animation: scale-out 0.5s;
  }
  .custom-appear-active-class {
    transition: opacity 1s;
  }
  @keyframes scale-in {
    0% { transform: scale(0); }
    100% { transform: scale(1); }
  }
  @keyframes scale-out {
    0% { transform: scale(1); }
    100% { transform: scale(0); }
  }

</style>
