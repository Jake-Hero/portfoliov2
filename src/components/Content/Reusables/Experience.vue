<template>
    <section class="border-left border-dark">
        <h4 class="ml-3">{{ job }}</h4>
        <h5 class="ml-3">{{ company }}</h5>
        <h5 class="ml-3" v-if="deployed">{{ deployed }}</h5>
        <h5 class="ml-3 font-italic">{{ duration }}</h5>
    </section>
</template>

<script>
export default {
    props: {
        job: String,
        company: String,
        duration: String,
        deployed: {
            type: String,
            default: null,
        }
    }
}
</script>

<style scoped>
h3 {
    font-weight: bolder;
    font-family: 'monospace', monospace;
}

h5 {
    font-size: 18px;
    font-family: 'monospace', monospace;
}
</style>