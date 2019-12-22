<template>
    <div>
        <b-modal id="bv-modal" v-model="showDialog" hide-footer hide-header hide-header-close centered>
            <div class="text-center mt-5 mb-5">
                <b-spinner style="width: 3rem; height: 3rem;" label="Spinning"></b-spinner>
            </div>
    </b-modal>

    </div>

</template>

<script>
    import Vue from 'vue';
    import { ModalPlugin } from 'bootstrap-vue';
    import { SpinnerPlugin } from 'bootstrap-vue';
    Vue.use(SpinnerPlugin);
    Vue.use(ModalPlugin);

    export default {
        name: 'CBSModal',
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

</style>