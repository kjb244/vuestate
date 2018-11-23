<template>
    <section>
        <div class="md-layout md-alignment-center">
            <div class="md-layout-item md-small-size-100 md-medium-size-50 md-large-size-50 ">
                <div class="md-layout">
                    <div v-show="showBack()" class="md-layout-item md-small-size-100 md-medium-size-100 md-large-size-100">
                        <md-button v-on:click="submitBack(props)" class="md-raised md-primary back">Go Back</md-button>
                    </div>
                    <div v-show="showSubmit()" class="md-layout-item md-small-size-100 md-medium-size-100 md-large-size-100">
                        <md-button v-on:click="submitClick(props)" class="md-raised md-primary">Submit</md-button>
                    </div>


                </div>
            </div>

        </div>






    </section>
</template>

<script>
    import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
    import Vue from 'vue';
    import { MdButton } from 'vue-material/dist/components';
    import 'vue-material/dist/vue-material.min.css';
    import 'vue-material/dist/theme/default.css';
    Vue.use(MdButton);

    export default {
        name: 'CSubmit',
        props: ['props'],
        data(){
            return{


            }
        },
        computed: {
            ...mapState([
                'routeData'
            ]),
        },
        created: function(){

        },
        methods:{
            ...mapActions([
                'submitClick', 'submitBack'
            ]),
            showSubmit: function(){
                const currRoute = this.$router.currentRoute.name;
                const next = this.routeData.routeMapping[currRoute].next || '';
                return next.length;
            },
            showBack: function(){
                const currRoute = this.$router.currentRoute.name;
                const prev = this.routeData.routeMapping[currRoute].prev || '';
                return prev.length;
            }
        }
    }
</script>

<style scoped>
    section{
        margin-top: 10px;
    }

    .back{
        margin-bottom: 15px !important;
    }
    .md-button{
        width: 100%;
        height: 55px;
        margin:0;
    }

</style>
