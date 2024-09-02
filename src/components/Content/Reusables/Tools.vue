<template>
    <section>
        <div class="border text-center">
            <div style="padding: 1rem">
                <Icon :icon="icon" />
                <label>{{ name }}</label>
            </div>
        </div>
    </section>
</template>

<script>
import Icon from './Icons.vue';

export default {
    components: {
        Icon,
    },
    props: {
        icon: String,
        name: String,
    },
}
</script>

<style scoped>
label {
    display: block;
    margin-top: 20px;
    font-family: 'monospace', monospace;
    font-size: 18px;
}
</style>