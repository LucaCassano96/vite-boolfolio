
<template>
    <div class="container d-flex justify-content-center align-items-center" style="margin-top: 130px">


        <div class="card mb-3 shadow p-3 mb-5 bg-body-tertiary rounded" style="max-width: 1040px; min-height: 400px">
            <div class="row g-0">
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title ">{{ project.title }}</h5>
                        <p class="card-text my-4">{{ project.description }}</p>

                        <ul>

                            <li class="my-2">

                                Inizio del progetto ->
                                <span class="fs-6">{{ project.start_date }}</span>

                            </li>

                            <li class="my-2">

                                Fine del progetto ->
                                <span class="fs-6">{{ project.end_date }}</span>

                            </li>

                            <li class="my-2">

                                Difficoltà progetto ->
                                <span class="fs-5 text-primary">{{ project.difficulty }}</span>

                            </li>

                            <li class="my-2">

                                Budget richiesto ->
                                <span class="fs-5 text-warning">{{ project.budget }}€</span>

                            </li>

                            <li class="my-2" v-if="project.type">
                                Categoria -> <span class="fs-5 text-danger">{{ project.type.category }}</span>
                            </li>


                        </ul>

                    </div>
                </div>
                <div class="col-md-4">

                    <img class="col-12 object-fit-cover border rounded"
                        :src="'http://localhost:8000/storage/' + project.image" alt="" style="min-height: 400px">

                </div>
            </div>
        </div>

    </div>
</template>


<script>

import axios from 'axios';

const API_URL = 'http://localhost:8000/api/v1';

export default {
    name: 'AppDetailsProjectt',
    data() {
        return {
            project: {}
        }
    },
    mounted() {

        const projectId = this.$route.params.id;

        axios.get(API_URL + '/AppDetailsProject/' + projectId)
            .then(res => {
                this.project = res.data.project
                console.log(res.data.project)
            })
            .catch(err => console.error(err));
    }
}

</script>