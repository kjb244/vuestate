<template>
    <div :class="routeData.forwardBack" data-route="income">
        <div v-if="getTemplate === 'mv'">
            <c-view3></c-view3>
        </div>
        <div v-if="getTemplate === 'bs'">
            <c-b-s-view3></c-b-s-view3>
        </div>

    </div>
</template>
<script>
    // @ is an alias to /src
    import CView3 from '@/components/CView3.vue';
    import CBSView3 from '@/components/CBSView3.vue';

    import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';


    export default {
        name: 'income',
        components: {
            CView3, CBSView3,
        },
        computed:{
            ...mapState([
                'routeData'
            ]),
            ...mapGetters([
                'getTemplate',
            ]),
        }
    }
</script>
