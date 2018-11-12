<template>
  <div class="about">
    <view1/>
    <load-data></load-data>
  </div>
</template>

<script>
    // @ is an alias to /src
    import View1 from '@/components/View1.vue';
    import LoadData from '@/components/LoadData.vue';

    export default {
        name: 'about',
        components: {
            View1,
            LoadData,
        }
    }
</script>