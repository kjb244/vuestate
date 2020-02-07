<template>
    <section>
        <div class="md-layout header">
            <div class="md-layout-item">
                <h2>Information</h2>
            </div>
        </div>

        <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100 md-medium-size-50">
                <md-checkbox v-model="form.choicesArr" value="1">Choice 1</md-checkbox>
                <md-checkbox v-model="form.choicesArr" value="2">Choice 2</md-checkbox>
            </div>
            <div class="md-layout-item md-small-size-100 md-medium-size-50">

                <md-field>
                    <label for="country">Country</label>

                    <md-select v-model="form.country" name="country" id="country">
                        <md-option v-for="(v, k) in form.countryOptions" :key="k" :value="k">{{v}}</md-option>
                    </md-select>
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

        <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
                <md-field>
                    <label>Search friends</label>
                    <md-input v-model="form.search"></md-input>
                </md-field>
                <p v-for="rec in filterFriends">
                    <span v-html="filterBold(form.search, rec)"></span>
               </p>

            </div>
        </div>


        <c-submit :props="form"></c-submit>

    </section>
</template>

<script>
    import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
    import Vue from 'vue';
    import { MdField, MdCheckbox, MdList, MdMenu  } from 'vue-material/dist/components';
    import 'vue-material/dist/vue-material.min.css';
    import 'vue-material/dist/theme/default.css';
    import CSubmit from "./CSubmit.vue";

    Vue.use(MdField);
    Vue.use(MdCheckbox);
    Vue.use(MdList);
    Vue.use(MdMenu);

    export default {
        name: 'CView2',
        components: {
            CSubmit
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

</style>
