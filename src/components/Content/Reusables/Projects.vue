<template>
    <section>
        <div class="border border-dark text-center">
            <div style="padding: 1rem">
                <b-row align-h="start" style="height: 100%">
                    <b-col>
                        <a :href="link" target="_blank">
                            <img 
                                :src="imgResolve()" 
                                style="height: auto; width: 200px;" 
                                :alt="name" 
                            />
                        </a>
                    </b-col>

                    <b-col>
                        <label>{{ name }}</label>
                        <label>{{ description }}</label>
                        <label>{{ date }}</label>

                        <div class="icons-container" style="padding-top: 1rem">
                            <div v-for="(lang, index) in parsedLanguage" :key="index" class="icon-item">
                                <Icon :icon="lang" />
                            </div>
                        </div>
                    </b-col>
                </b-row>
            </div>
        </div>
    </section>
</template>

<script>
import ccs from '@/assets/lpu_ccs.png';
import renegade from '@/assets/gtapinas_logo.png';
import Icon from './Icons.vue';

export default {
    components: {
        Icon,
    },
    props: {
        icon: String,
        name: String,
        description: String,
        language: String,
        link: String,
        date: String,
    },
    methods: {
        imgResolve() {
            switch(this.icon) {
                case "renegade":
                    return renegade;
                case "thesis":
                    return ccs;
            }
        },
    },
    computed: {
        parsedLanguage() {
            const formattedString = this.language.replace(/'/g, '"');
            return JSON.parse(formattedString);
        }
    }
}
</script>

<style scoped>
.icons-container {
    display: flex;
    justify-content: center; /* Horizontally center the items */
    align-items: center; /* Vertically center the items */
    flex-wrap: nowrap; /* Prevent wrapping, ensuring items stay on one line */
    gap: 10px; /* Space between items */
}

.icon-item {
    display: flex;
    align-items: center; /* Vertically center the items */
}

label {
    display: block;
    font-family: 'monospace', monospace;
}
</style>