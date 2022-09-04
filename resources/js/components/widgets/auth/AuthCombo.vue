<template>
    <div>
        <component :is="authComponent" v-on:componentChanged="componentChanged" :preFormText="preFormText"></component>
    </div>
</template>

<script>
  import SignUp from './SignUp'
  import SignIn from './SignIn'
  export default {
    name: 'auth-combo',
    components: {SignIn, SignUp},
    data () {
      return {
        authComponent: 'sign-in',
        modalTitle: 'Sign In',
        preFormText: ''
      }
    },

    methods: {
      /**
       * Runs when the componentChange event is emitted. Sets passed values
       *
       * @param $componentInfo
       */
      componentChanged($componentInfo) {
        this.modalTitle = $componentInfo['title']
        this.authComponent = $componentInfo['component']
        this.preFormText = $componentInfo['preFormText']
      }
    }
  }
</script>