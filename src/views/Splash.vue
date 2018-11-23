<template>
    <div :class="routeData.forwardBack" data-route="splash">
        <c-view1></c-view1>
    </div>
</template>
<script>
    // @ is an alias to /src
    import CView1 from '@/components/CView1.vue';
    import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';


    export default {
        name: 'splash',
        components: {
            CView1
        },
        computed:{
            ...mapState([
                'routeData'
            ]),
        }
    }
</script>
