<template>
    <div class="container-fluid ">
        <h1 class="text-center  text-white">Projects</h1>
        <div class="row justify-content-center">


            <div class="col-4 " v-for="project in projects" :key="project.id">
                <h2 class="text-center">
                   <!--  <router-link :to="{
                        name: 'AppDetailsProject.vue',
                        params: { id: project.id }
                    }">
                        
                    </router-link> -->
                    {{ project.title }}
                </h2>

                <div>
                    {{ project.description }}
                </div>

            </div>
        </div>
        <div class="pages row justify-content-center cursor-pointer text-white my-5">
            <div v-for="(page, index) in pages" :key="index" class="page col-1 text-center rounded mx-2" :class="(page.active ? ' bg-secondary' : 'bg-primary')
                + ' '
                + (page.url == null ? 'd-none' : '')" v-html="page.label" role="button" @click="loadPage(page.url)">
            </div>
        </div>
    </div>
</template>
  
<script >

import axios from 'axios';

export default {
    name: 'Home',
    data: function () {
        return {
            projects: [],
            pages: []
        }
    },
    methods: {

        loadPage(target) {

            if (target == null) return;

            this.loadProject(target);
        },
        loadProject(target) {
            axios.get(target)
                .then(response => {

                    const data = response.data;
                    console.log(data);

                    this.projects = data.projects.data;
                    this.pages = data.projects.links;
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
    mounted() {

        this.loadProject('http://localhost:8000/api/v1/projectIndex-api');
    }
}

</script>

