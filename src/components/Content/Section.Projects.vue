<template>
    <section id="projects" style="padding: 5rem">
        <b-container>
            <h3>Projects</h3>

            <div style="padding-top: 3rem">
                <b-row align-h="between">
                    <b-col>
                        <ProjectInfo
                            icon="renegade"
                            name="GTA Pinas"
                            link="https://github.com/Jake-Hero/php-vanilla-GTAPinas"
                            description="User Control Panel"
                            language='["laravel", "php"]'
                            date="2024"
                        />
                    </b-col>

                    <b-col>
                        <ProjectInfo
                            icon="thesis"
                            name="Thesis Project Manager"
                            description="Team/Document Management"
                            language='["php", "jquery"]'
                            date="2022-23"
                        />
                    </b-col>
                </b-row>
            </div>
        </b-container>
    </section>
</template>

<script>
import ProjectInfo from './Reusables/Projects.vue';

export default {
    components: {
        ProjectInfo
    }
}
</script>

<style>
h3 {
    font-family: 'monospace', monospace;
}
</style>