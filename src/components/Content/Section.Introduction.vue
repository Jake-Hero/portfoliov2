<template>
    <section id="home" class="mt-5">
        <div class="d-flex justify-content-center align-items-center">
            <div class="text-center" :style="getTheme()">
                <p class="intro-text">Hello I am,</p>
                <h1 class="name">Justine Rainiel Ramos</h1>
                <p class="title">Full Stack Developer</p>
                <div class="icon-container d-flex justify-content-center">
                        <a href="https://www.linkedin.com/in/justinerainielramos/" target="_blank" class="icon-link" :style="getTheme()">
                        <b-icon icon="linkedin" font-scale="1.5"></b-icon>
                    </a>
                        <a href="https://github.com/Jake-Hero" target="_blank" class="icon-link" :style="getTheme()">
                        <b-icon icon="github" font-scale="1.5"></b-icon>
                    </a>
                </div>
            </div>
        </div>
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
.icons {
    padding-left: 300px;
}

.intro-text {
    font-family: 'monospace', monospace;
    margin-bottom: 0;
    font-size: 1.2rem;
}

.name {
    font-family: 'monospace', monospace;
    font-size: 2rem;
    margin: 0;
}

.title {
    font-family: 'monospace', monospace;
    margin-top: 5px;
    font-size: 1.1rem;
}

.icon-container {
    margin-top: 10px;
}

.icon-link {
    margin: 0 10px;
    color: white;
    display: inline-block;
}   
</style>