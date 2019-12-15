<template>
    <section>
        <b-container>
            <b-row class="text-center">
                <b-col sm="12">
                    <h2>Income</h2>
                </b-col>
            </b-row>

            <b-row>
                <b-col sm="12" md="6">
                    <b-form-input v-model="form.fname" placeholder="First Name"></b-form-input>
                </b-col>
                <b-col sm="12" md="6" class="mt-4  mt-md-0">
                    <b-form-input v-model="form.lname" placeholder="Last Name"></b-form-input>
                </b-col>
            </b-row>

            <b-row>
                <b-col sm="12" class="mt-4">
                    <b-form-textarea v-model="form.description" placeholder="Description"></b-form-textarea>
                </b-col>
            </b-row>

        </b-container>

        <c-b-s-submit :props="form"></c-b-s-submit>




    </section>
</template>

<script>
    import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
    import Vue from 'vue';
    import { FormInputPlugin } from 'bootstrap-vue'
    Vue.use(FormInputPlugin);
    import CBSSubmit from "./CBSSubmit.vue";


    export default {
        name: 'CBSView3',
        components: {
            CBSSubmit,
        },
        data(){
            return{
                form: {
                    description: '',
                    fname: '',
                    lname: ''
                }


            }
        },
        computed: {
            ...mapState([
                'routeData'
            ]),
            ...mapGetters([
                'formData'
            ]),
        },
        created: function(){
            const fd = this.formData('income');
            Object.keys(fd).map((e) => {
                this.form[e] = fd[e];
            });
        },
        methods:{

            ...mapActions([
                'submitClick'
            ]),
        }

    }
</script>

<style scoped>
    .header h2{
        text-align: center;
    }

</style>
