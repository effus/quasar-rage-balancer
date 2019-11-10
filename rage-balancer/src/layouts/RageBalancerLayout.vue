<template>
    <q-layout view="lHh Lpr lFf">
        <q-header elevated>
            <q-toolbar>
                <q-btn
                flat
                dense
                round
                @click="leftDrawerOpen = !leftDrawerOpen"
                icon="menu"
                aria-label="Menu"
                />

                <q-toolbar-title>Rage Balancer</q-toolbar-title>
            </q-toolbar>
        </q-header>
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