<template>
    <section id="experience" style="padding-top: 5rem">
        <b-container>
            <h3>Experience</h3>

            <div style="padding-top: 1rem">
                <ExperienceInfo 
                    job=".NET Developer" 
                    company="IT Managers Inc."
                    deployed="Analog Devices"
                    duration="Jul 2024 - Present"
                />

                <ExperienceInfo 
                    job="Software Developer" 
                    company="ARC System Solutions"
                    duration="Jan 2024 - Mar 2024"
                    style="margin-top: 2rem"
                />

                <ExperienceInfo 
                    job="Assistant Web Developer" 
                    company="ARC System Solutions"
                    duration="Jun 2023 - Jan 2024"
                    style="margin-top: 2rem"
                />
            </div>
        </b-container>
    </section>
</template>

<script>
import ExperienceInfo from './Reusables/Experience.vue';

export default {
    components: {
        ExperienceInfo
    }
}
</script>

<style>
h3 {
    font-family: 'monospace', monospace;
}
</style>