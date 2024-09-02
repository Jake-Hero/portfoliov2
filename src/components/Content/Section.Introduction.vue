<template>
    <section id="home" class="mt-5">
        <b-container>
            <div class="introduction">
                <h3 class="special-left">Hello I am,</h3>
                <h2 class="middle">Justine Rainiel Ramos</h2>
                <h4 class="special-right">Full Stack Developer</h4>

                <div class="icons">
                    <a href="https://www.linkedin.com/in/justinerainielramos/" target="_blank">
                        <b-icon icon="linkedin" class="h3 mr-2" :style="getTheme()"></b-icon>
                    </a>

                    <a href="https://github.com/Jake-Hero" target="_blank">
                        <b-icon icon="github" class="h3 mr-2" :style="getTheme()"></b-icon>
                    </a>
                </div>
            </div>
        </b-container>
    </section>
</template>

<script>
export default {
    methods: {
        getTheme() {
            return this.$store.state.darkMode ? "color: white" : "color: black";
        }
    }
}
</script>

<style>
.introduction {
    text-align: center;
    font-family: 'monospace', monospace;
}

.special-left {
    font-size: 20px;
    font-weight: lighter;
    padding-right: 250px;
    margin-bottom: 1px;
}

.middle {
    margin-top: 2px;
    margin-bottom: 2px;
}

.special-right {
    font-size: 20px;
    font-weight: bold;
    margin-top: 1px;
    padding-left: 150px;
    margin-bottom: 20px;
}

.icons {
    padding-left: 300px;
}
</style>