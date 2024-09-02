<template>
    <div>
        <img 
            :src="svgResolve()" 
            style="height: auto; width: 50px;" 
            :alt="name" 
            :class="getTheme()"
        />
    </div>
</template>

<script>
import php from '@/assets/svgs/php.svg';
import vue from '@/assets/svgs/vue.svg';
import laravel from '@/assets/svgs/laravel.svg';
import dotnet from '@/assets/svgs/dotnet.svg';
import jquery from '@/assets/svgs/jquery.svg';

export default {
    props: {
        icon: String,
    },
    methods: {
        svgResolve() {
            switch(this.icon) {
                case "laravel":
                    return laravel;
                case "php":
                    return php;
                case "dotnet":
                    return dotnet;
                case "vuejs":
                    return vue;
                case "jquery":
                    return jquery;
            }
        },
        getTheme() {
            return this.$store.state.darkMode ? "filter-white" : "filter-black";
        }
    }
}
</script>

<style scoped>
.filter-black {
    filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(103deg) brightness(111%) contrast(104%);
}

.filter-white {
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(148deg) brightness(106%) contrast(105%);
}
</style>