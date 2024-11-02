<template>
    <section id="projects" style="padding-top: 5rem">
        <b-container>
            <h3>Projects</h3>

            <div style="padding-top: 3rem">
                <b-row align-h="between">
                    <b-col>
                        <ProjectInfo
                            icon="renegade"
                            name="GTA Pinas Roleplay"
                            link="https://github.com/Jake-Hero/php-vanilla-GTAPinas"
                            description="A user control panel made for a game server in San Andreas Multiplayer, it lets the user control their game account settings and their roleplay characters."
                            language='["Laravel", "PHP"]'
                        />
                    </b-col>

                    <b-col>
                        <ProjectInfo
                            icon="thesis"
                            name="Thesis Project Manager"
                            link="https://github.com/Jake-Hero/thesis-project-manager"
                            description="A research project made back in my College Days with my Research Group, it aims to make the research paper collaboration and documentation easier and efficient."
                            language='["PHP", "jQuery"]'
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