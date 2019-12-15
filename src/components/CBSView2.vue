<template>
    <section>
        <b-container>
            <b-row class="text-center">
                <b-col sm="12">
                    <h2>Information</h2>
                </b-col>
            </b-row>

            <b-row>
                <b-col sm="12" lg="6" class="checkbox-group">
                    <b-form-checkbox v-model="form.choicesArr" value="1">Choice 1</b-form-checkbox>
                    <b-form-checkbox class="ml-3" v-model="form.choicesArr" value="2">Choice 2</b-form-checkbox>

                </b-col>
                <b-col sm="12" lg="6" class="mt-4">
                    <b-form-select v-model="form.country">
                        <option :value="null" disabled>Please select a country</option>
                        <option v-for="(v,k) in form.countryOptions" :value="k">{{v}}</option>

                    </b-form-select>
                </b-col>

                <b-col sm="12" class="mt-4">
                    <b-form-textarea v-model="form.description" placeholder="Description"></b-form-textarea>
                </b-col>

                <b-col sm="12" class="mt-4">
                    <b-form-input v-model="form.search" placeholder="Search friends" class="mb-3"></b-form-input>
                    <p v-for="rec in filterFriends">
                        <span v-html="filterBold(form.search, rec)"></span>
                    </p>
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
        name: 'CView2',
        components: {
            CBSSubmit
        },
        data(){
            return{
                form: {
                    choicesArr: [],
                    country: null,
                    countryOptions: {
                        brazil: 'Brazil',
                        japan: 'Japan',
                        'united-states': 'United States'
                    },
                    description: '',
                    search: '',
                    friends: [
                        'john',
                        'sussie',
                        'harry',
                        'heman',
                    ]
                }

            }
        },
        methods: {
            filterBold(query, text){
                return text.replace(new RegExp('(' + query + ')', 'gi'), '<strong class="highlighted">$1</strong>');
            },
        },
        computed: {

            filterFriends(){
                return this.form.friends.filter(e => e.includes(this.form.search));

            },
            ...mapState([
                'routeData'
            ]),
            ...mapGetters([
                'formData'
            ]),
        },
        created: function(){
            const fd = this.formData('info');
            Object.keys(fd).map((e) => {
                this.form[e] = fd[e];
            });
        },

    }
</script>

<style scoped>
    .header h2{
        text-align: center;
    }

    .checkbox-group{
        display: flex;
    }

</style>
