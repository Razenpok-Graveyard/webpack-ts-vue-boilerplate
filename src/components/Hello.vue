<template>
  <div>
    <button @click="incrementWorlds">Hello World!</button>
    <div>Hello World x{{worlds}}</div>
  </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";

    @Component
    export default class Hello extends Vue {
        private worlds: number = 0;

        incrementWorlds() {
            this.worlds++;
        }
    }
</script>

<style scoped lang="scss">

</style>
