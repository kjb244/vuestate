<template>
    <section>
        <b-container>
            <b-row class="text-center">
                <b-col sm="12">
                    <h2>Splash</h2>
                </b-col>
            </b-row>
            <b-alert :show="ajaxErrorData===true" variant="danger">Server Side Field Validation</b-alert>
            <b-row>
                <b-col sm="12" md="6">
                    <b-form-input v-model="form.fname" :placeholder="jcrData.firstNamePlaceholder"></b-form-input>
                </b-col>
                <b-col sm="12" md="6" class="mt-4  mt-md-0">
                    <b-form-input v-model="form.lname" :placeholder="jcrData.lastNamePlaceholder"></b-form-input>
                </b-col>
            </b-row>

            <b-row>
                <b-col sm="12" class="mt-4">
                    <b-form-textarea v-model="form.description" :placeholder="jcrData.descriptionPlaceholder"></b-form-textarea>
                </b-col>
            </b-row>

        </b-container>

        <c-b-s-submit :props="form"></c-b-s-submit>




    </section>
</template>

<script>
    import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
    import Vue from 'vue';
    import { FormInputPlugin } from 'bootstrap-vue';
    import { AlertPlugin } from 'bootstrap-vue';
    Vue.use(AlertPlugin);
    Vue.use(FormInputPlugin);
    import CBSSubmit from "./CBSSubmit.vue";


    export default {
        name: 'CBSView1',
        components: {
            CBSSubmit,
        },
        data(){
            return{
                form: {
                    fname: '',
                    lname: '',
                    description: '',

                }


            }
        },
        computed: {
            ...mapState([
                'routeData'
            ]),
            ...mapGetters([
                'formData', 'jcrData', 'ajaxErrorData',
            ]),
        },
        created: function(){
            Object.keys(this.formData).map((e) => {
                this.form[e] = this.formData[e];
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
