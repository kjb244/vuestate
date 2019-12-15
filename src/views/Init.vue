<template>
    <section>
        <c-modal :showSpinner="showSpinner"></c-modal>
        <md-button v-on:click="setTemplateInner('mv')" class="md-raised md-primary back">Use MD Vue</md-button><br>
        <b-button v-on:click="setTemplateInner('bs')" variant="primary" class="mt-4">Use Bootstrap Vue</b-button>
    </section>

</template>
<script>
    // @ is an alias to /src
    import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
    import Vue from 'vue';
    import CModal from '@/components/CModal.vue';
    import { MdButton } from 'vue-material/dist/components';
    import 'vue-material/dist/vue-material.min.css';
    import 'vue-material/dist/theme/default.css';
    Vue.use(MdButton);
    import { ButtonPlugin } from 'bootstrap-vue'
    Vue.use(ButtonPlugin);




    export default {
        name: 'init',
        components: {
            CModal
        },
        data(){
            return{
                showSpinner: false,

            }
        },
        computed:{

        },
        methods: Object.assign({},
            mapActions(['longAjax', 'moveFromInit', 'setTemplate']),
            {

                setTemplateInner(template){
                    this.setTemplate(template);
                    this.showSpinner = true;
                    const prom = this.longAjax();
                    prom.then((e) => {
                        this.showSpinner = false;
                        this.moveFromInit();
                    })

                }
            }



        ),
        created: function(){


        }
    }
</script>
