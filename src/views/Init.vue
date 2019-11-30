<template>
    <c-modal :showSpinner="showSpinner"></c-modal>
</template>
<script>
    // @ is an alias to /src
    import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
    import CModal from '@/components/CModal.vue';



    export default {
        name: 'init',
        components: {
            CModal
        },
        data(){
            return{
                showSpinner: true,

            }
        },
        computed:{
            ...mapActions([
                'longAjax', 'moveFromInit'
            ]),
        },
        created: function(){


            this.longAjax.then((e) => {
                this.showSpinner = false;

                this.moveFromInit;
            })
        }
    }
</script>
