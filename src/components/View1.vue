<template>
    <div class="view1">
        asdf
        <div v-for="rec in routeData">
            {{rec}}
        </div>
    </div>
</template>

<script>
    import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';


    export default {
        name: 'View1',
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
        }
    }
</script>

<style scoped>

</style>
