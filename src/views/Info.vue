<template>
    <div :class="routeData.forwardBack" data-route="info">
        <div v-if="getTemplate === 'mv'">
            <c-view2></c-view2>
        </div>
        <div v-if="getTemplate === 'bs'">
            <c-b-s-view2></c-b-s-view2>
        </div>

    </div>
</template>
<script>
    // @ is an alias to /src
    import CView2 from '@/components/CView2.vue';
    import CBSView2 from '@/components/CBSView2.vue';
    import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';


    export default {
        name: 'info',
        components: {
            CView2, CBSView2,
        },
        computed:{
            ...mapState([
                'routeData'
            ]),
            ...mapGetters([
                'getTemplate',
            ])
        }
    }
</script>
