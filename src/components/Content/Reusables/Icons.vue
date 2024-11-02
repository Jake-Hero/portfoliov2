<template>
    <div>
        <b-img 
            :src="svgResolve()" 
            style="height: 50px; width: 50px;" 
            fluid
            :alt="icon" 
            :class="getTheme()"
        >
        </b-img>
    </div>
</template>

<script>
import php from '@/assets/svgs/php.svg';
import vue from '@/assets/svgs/vue.svg';
import laravel from '@/assets/svgs/laravel.svg';
import dotnet from '@/assets/svgs/dotnet.svg';
import jquery from '@/assets/svgs/jquery.svg';
import csharp from '@/assets/svgs/c-sharp.svg';
import pawn from '@/assets/svgs/pawn.svg';
import mysql from '@/assets/svgs/mysql.svg';
import mssql from '@/assets/svgs/mssql.svg';
import github from '@/assets/svgs/github-mark.svg';
import jira from '@/assets/svgs/jira.svg';
import tortoisesvn from '@/assets/svgs/tortoisesvn.svg';

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
                case "c-sharp":
                    return csharp;
                case "pawn":
                    return pawn;
                case "mysql":
                    return mysql;
                case "mssql":
                    return mssql;
                case "github":
                    return github;
                case "jira":
                    return jira;
                case "tortoisesvn":
                    return tortoisesvn;
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