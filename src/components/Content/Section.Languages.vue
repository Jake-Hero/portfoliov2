<template>
    <section id="tools" style="padding-top: 5rem">
        <b-container>
            <h3>Programming Languages</h3>

            <div style="padding-top: 3rem">
                <b-row align-h="around">
                    <b-col>
                        <ToolInfo
                            icon="php"
                            name="PHP"
                        />
                    </b-col>

                    <b-col>
                        <ToolInfo
                            icon="c-sharp"
                            name="C#"
                        />
                    </b-col>

                    <b-col>
                        <ToolInfo
                            icon="javascript"
                            name="Javascript"
                        />
                    </b-col>

                    <b-col>
                        <ToolInfo
                            icon="pawn"
                            name="Pawn"
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