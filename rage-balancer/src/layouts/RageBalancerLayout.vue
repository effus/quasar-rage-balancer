<template>
    <q-layout view="lHh Lpr lFf">
        <q-header elevated>
            <q-toolbar>
                <q-toolbar-title>Rage Balancer</q-toolbar-title>
            </q-toolbar>
        </q-header>
        <q-page-container class="fit">
          <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
export default { 
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>