<template>
    <div>
        <md-dialog :md-active.sync="showDialog">
            <md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
        </md-dialog>

    </div>

</template>

<script>
    import Vue from 'vue';
    import { MdDialog, MdProgress } from 'vue-material/dist/components';
    import 'vue-material/dist/vue-material.min.css';
    import 'vue-material/dist/theme/default.css';
    Vue.use(MdDialog);
    Vue.use(MdProgress);

    export default {
        name: 'CModal',
        props: ['showSpinner'],
        data(){
            return{
                showDialog: this.showSpinner,

            }
        },
        watch: {
            showSpinner: function(newVal) { // watch it
                this.showDialog = newVal;
            }
        },
        created: function(){
        }
    }
</script>

<style scoped>
    .md-dialog {
    }
    .md-progress-spinner {
        margin: auto;
    }

    @media only screen and (min-width: 601px) {
        .md-progress-spinner{
            margin: 110px;
        }
    }
</style>