<template>
    <section>
        <div class="md-layout header">
            <div class="md-layout-item">
                <h2>Income</h2>
            </div>
        </div>

        <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100 md-medium-size-50">
                <md-field>
                    <label>First Name</label>
                    <md-input v-model="form.fname"></md-input>
                </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-medium-size-50">
                <md-field>
                    <label>Last Name</label>
                    <md-input v-model="form.lname"></md-input>
                </md-field>
            </div>
        </div>

        <div class="md-layout">
            <div class="md-layout-item md-small-size">

                <md-field>
                    <label>Description</label>
                    <md-textarea v-model="form.description" required></md-textarea>
                    <span class="md-helper-text">Helper text</span>
                    <span class="md-error">There is an error</span>
                </md-field>
            </div>
        </div>

        <c-submit :props="form"></c-submit>


    </section>
</template>

<script>
    import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
    import Vue from 'vue';
    import { MdField } from 'vue-material/dist/components';
    import 'vue-material/dist/vue-material.min.css';
    import 'vue-material/dist/theme/default.css';
    import CSubmit from "./CSubmit.vue";

    Vue.use(MdField);

    export default {
        name: 'CView3',
        components: {
            CSubmit
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
