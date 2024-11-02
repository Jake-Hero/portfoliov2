<template>
    <div class="d-flex justify-content-center mt-3 mb-3">
        <b-card
            :bg-variant="getBackground()"
            :img-src="imgResolve()"
            img-alt="Image"
            img-top
        >
            <template #header>
                <h4 :class="getTheme()">
                    {{ name }}
                </h4>
            </template>

            <b-card-text :class="getTheme()">
                {{ description }}
            </b-card-text>

            <br />

            <h5 :class="getTheme()">Tech Stack</h5>

            <div v-for="(lang, index) in parsedLanguage" :key="index" style="display: inline-block; padding: 3px;">
                <h4><b-badge :variant="getBadgeBackground()">{{ lang }}</b-badge></h4>
            </div>

            <div>
                <h5><a :href="link" style="color: inherit;">View Project <b-icon-box-arrow-up-right></b-icon-box-arrow-up-right></a></h5>
            </div>
        </b-card>
    </div>
</template>

<script>
import thesis from '@/assets/thesis.png';
import renegade from '@/assets/gtapinas.png';

export default {
    props: {
        icon: String,
        name: String,
        description: String,
        language: String,
        link: String
    },
    methods: {
        imgResolve() {
            switch(this.icon) {
                case "renegade":
                    return renegade;
                case "thesis":
                    return thesis;
            }
        },
        getTheme() {
            return this.$store.state.darkMode ? "text-light" : "text-dark";
        },
        getBackground() {
            return this.$store.state.darkMode ? "dark" : "light";
        },
        getBadgeBackground() {
            return this.$store.state.darkMode ? "light" : "dark";
        }
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