<template>
    <section>
        <c-modal :showSpinner="showSpinnerMV"></c-modal>
        <c-b-s-modal :showSpinner="showSpinnerBS"></c-b-s-modal>
        <md-button v-show="!clickedButton" v-on:click="setTemplateInner('mv')" class="md-raised md-primary back">Use MD Vue</md-button><br>
        <b-button v-show="!clickedButton" v-on:click="setTemplateInner('bs')" variant="primary" class="mt-4">Use Bootstrap Vue</b-button>
    </section>

</template>
<script>
    // @ is an alias to /src
    import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
    import Vue from 'vue';
    import CModal from '@/components/CModal.vue';
    import CBSModal from '@/components/CBSModal.vue';
    import { MdButton } from 'vue-material/dist/components';
    import 'vue-material/dist/vue-material.min.css';
    import 'vue-material/dist/theme/default.css';
    Vue.use(MdButton);
    import { ButtonPlugin } from 'bootstrap-vue'
    Vue.use(ButtonPlugin);


    export default {
        name: 'init',
        components: {
            CBSModal,
            CModal
        },
        data(){
            return{
                showSpinnerMV: false,
                showSpinnerBS: false,
                clickedButton: false,

            }
        },
        computed:{

        },
        methods: Object.assign({},
            mapActions(['longAjax', 'moveFromInit', 'setTemplate']),
            {

                setTemplateInner(template){
                    this.clickedButton = true;
                    this.setTemplate(template);
                    if(template === 'mv'){
                        this.showSpinnerMV = true;
                    } else{
                        this.showSpinnerBS = true;
                    }
                    const prom = this.longAjax();
                    prom.then((e) => {
                        this.showSpinnerMV = false;
                        this.showSpinnerBS = false;
                        this.moveFromInit();
                    })

                }
            }



        ),
        created: function(){


        }
    }
</script>
