<template>
    <div :class="routeData.forwardBack" data-route="income">
        <c-view3></c-view3>
    </div>
</template>
<script>
    // @ is an alias to /src
    import CView3 from '@/components/CView3.vue';
    import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';


    export default {
        name: 'income',
        components: {
            CView3
        },
        computed:{
            ...mapState([
                'routeData'
            ]),
        }
    }
</script>
