<template>
    <footer>
      <slot name="app-name"><p>Footer text</p></slot>
      <slot name="nav-slot"></slot>
    </footer>
</template>

<script>
    export default {
        name: "Footer.vue"
    }
</script>

<style scoped>

</style>
