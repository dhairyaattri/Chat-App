<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn v-go-back.single v-if="$route.fullPath.includes('/chat')" dense flat icon="arrow_back" label="Back" />

        <q-toolbar-title class="absolute-center">
          {{ title }}
        </q-toolbar-title>

        <q-btn v-if="!userDetails.userId" to="/auth" dense flat icon="account_circle" class="absolute-right q-pr-sm" no-caps label="Login" />
        <q-btn @click="logoutUser" v-else dense flat icon="account_circle" class="absolute-right q-pr-sm" no-caps>Logout<br>{{ userDetails.name }}</q-btn>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import mixinOtherUserDetails from 'src/mixins/mixin-other-user-details.js'

export default {
  mixins: [mixinOtherUserDetails],
  computed: {
    ...mapState('store', ['userDetails']),
    title () {
      console.log(this.$route)
      const currentPath = this.$route.fullPath
      if (currentPath == '/') return 'Chat App'
      else if (currentPath.includes('/chat')) return this.otherUserDetails.name
      else if (currentPath == '/auth') return 'Login'
    }
  },
  methods: {
    ...mapActions('store', ['logoutUser'])
  }
}
</script>

<style lang='stylus'>
.q-toolbar .q-btn{
  line-height: 1.2;
}
</style>
