<template>
    <section id="tools" style="padding-top: 5rem">
        <b-container>
            <h3>Tools</h3>

            <div style="padding-top: 3rem">
                <b-row align-h="around">
                    <b-col>
                        <ToolInfo
                            icon="php"
                            name="Vanilla PHP"
                        />
                    </b-col>

                    <b-col>
                        <ToolInfo
                            icon="laravel"
                            name="Laravel"
                        />
                    </b-col>

                    <b-col>
                        <ToolInfo
                            icon="dotnet"
                            name=".NET (MVC)"
                        />
                    </b-col>
                    <b-col>
                        <ToolInfo
                            icon="vuejs"
                            name="Vue.js"
                        />
                    </b-col>
                    <b-col>
                        <ToolInfo
                            icon="jquery"
                            name="jQuery"
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