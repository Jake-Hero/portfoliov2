<template>
    <section id="tools" style="padding-top: 5rem">
        <b-container>
            <h3>Platform & Tools</h3>

            <div style="padding-top: 3rem">
                <b-row align-h="around">
                    <b-col>
                        <ToolInfo
                            icon="github"
                            name="Github"
                        />
                    </b-col>

                    <b-col>
                        <ToolInfo
                            icon="jira"
                            name="Jira"
                        />
                    </b-col>

                    <b-col>
                        <ToolInfo
                            icon="tortoisesvn"
                            name="TortoiseSVN"
                        />
                    </b-col>
                </b-row>
            </div>
        </b-container>
    </section>
</template>

<script>
import ToolInfo from './Reusables/Tools.vue';

export default {
    components: {
        ToolInfo
    }
}
</script>

<style>
h3 {
    font-family: 'monospace', monospace;
}
</style>