<template>

</template>

<script>
    import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';


    export default {
        name: 'LoadData',
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
            this.addRouteData();
        },
        methods:{
          
            ...mapActions([
                'addRouteData'
            ]),
        }
    }
</script>