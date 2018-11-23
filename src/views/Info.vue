<template>
    <div :class="routeData.forwardBack" data-route="info">
        <c-view2></c-view2>

    </div>
</template>
<script>
    // @ is an alias to /src
    import CView2 from '@/components/CView2.vue';
    import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';


    export default {
        name: 'info',
        components: {
            CView2
        },
        computed:{
            ...mapState([
                'routeData'
            ]),
        }
    }
</script>
