import axios from 'axios';

//could refactor this URL later if there are any other things we end up needing from github's API

export default {

    //get a list of projects from github's API
    getProjects(){
        return axios.get('https://api.github.com/users/alexhstone/repos');
    }

}