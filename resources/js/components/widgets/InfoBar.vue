<template>
  <div class="info-bar" v-if="show">
      <!-- <div class="better-niagara mb-3">
          <a class="external-link" target="_blank" title="Regional Council Voting Record" alt="Regional Council Voting Record" href="images/REGIONVOTING.png">
              <div class="title">A Better Niagara</div>
              <div class="better-niagara-logo"></div>
              <span>Regional Council Voting Record</span>
          </a>
      </div> -->

      <div class="clearfix"></div>

      <!-- <div class="community-quotes">
          <i class="fa fa-quote-right" aria-hidden="true"></i>
          <a class="community-quotes-link" title="Community Quotes" href="files/quotebrochure.pdf" target="_blank">Community Quotes</a>
      </div> -->

      <div class="view-brochure">
          <a class="view-brochure-link" title="View Brochure" href="#" target="_blank">View Brochure</a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'InfoBar',

  props: {
    showGt: {
      type: Number,
      default: 0
    },
    showLt: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },

  computed: {
    show() {
      return false // remove this once i actually get the brochure
      if (this.showGt) return (this.windowWidth > this.showGt) ? true : false
      if (this.showLt) return (this.windowWidth < this.showLt) ? true : false
      return true
    },
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },

  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
  },
}
</script>