<template>
    <section>
        <b-container>
            <b-row>
            <b-col sm="12" lg="6" class="offset-lg-3">
                <div v-show="showBack()">
                    <b-button class="mb-4" v-on:click="submitBack(props)" variant="primary" block>Go Back</b-button>
                </div>
                <div v-show="showSubmit()">
                    <b-button v-on:click="submitClick(props)" variant="primary" block>Submit</b-button>
                </div>
            </b-col>

        </b-row>
        </b-container>
    </section>
</template>

<script>
    import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
    import Vue from 'vue';
    import { ButtonPlugin } from 'bootstrap-vue'
    Vue.use(ButtonPlugin);

    export default {
        name: 'CBSSubmit',
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


</style>
