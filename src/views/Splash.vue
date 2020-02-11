<template>
    <div :class="routeData.forwardBack" data-route="splash">
        <div v-if="getTemplate === 'mv'">
            <c-view1></c-view1>
        </div>
        <div v-if="getTemplate === 'bs'">
            <c-b-s-view1></c-b-s-view1>
        </div>

    </div>
</template>
<script>
    // @ is an alias to /src
    import CView1 from '@/components/CView1.vue';
    import CBSView1 from '@/components/CBSView1.vue';
    import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';


    export default {
        name: 'splash',
        components: {
            CView1,
            CBSView1,
        },
        computed:{
            ...mapState([
                'routeData',
            ]),
            ...mapGetters([
                'getTemplate',
            ])
        },
        created: function(){

        }
    }
</script>
