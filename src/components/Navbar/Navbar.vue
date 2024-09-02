<template>
    <b-navbar :type="getTheme()" class="transparent-navbar border-bottom">
        <b-navbar-brand>JR</b-navbar-brand>

        <b-navbar-nav class="ml-auto">
            <b-nav-item href="#home">Home</b-nav-item>
            <b-nav-item href="#about">About</b-nav-item>
            <b-nav-item href="#experience">Experience</b-nav-item>
            <b-nav-item href="#tools">Tools</b-nav-item>
            <b-nav-item href="#projects">Projects</b-nav-item>

            <b-nav-item href="#toggle">    
                <b-form-group>
                    <div class="d-flex align-items-center">
                        <b-icon icon="brightness-high" class="mr-2"></b-icon>
                        <b-form-checkbox id="toggle" v-model="darkMode" switch>
                            <b-icon icon="moon" class="mr-2"></b-icon>
                        </b-form-checkbox>
                    </div>
                </b-form-group>
            </b-nav-item>
        </b-navbar-nav>
    </b-navbar>
</template>

<script>
export default {
    methods: {
        getTheme() {
            return this.darkMode ? "dark" : "light";
        }
    },  
    computed: {
        darkMode: {
            get() {
                return this.$store.state.darkMode;
            },
            set(value) {
                this.$store.commit('Set_ThemeMode', value);
            }
        }
    }
}
</script>

<style>
.custom-switch .custom-control-input:checked ~ .custom-control-label::before {
  background-color: gray; /* Change this to your desired color */
  border-color: gray; /* Match border color */
}

/* Customize the switch handle color */
.custom-switch .custom-control-input:checked ~ .custom-control-label::after {
  background-color: white; /* Change this to your desired handle color */
}

/* Customize the unchecked state (optional) */
.custom-switch .custom-control-input ~ .custom-control-label::before {
  background-color: #ccc; /* Change this to your desired off state color */
  border-color: #ccc; /* Match border color */
}
</style>