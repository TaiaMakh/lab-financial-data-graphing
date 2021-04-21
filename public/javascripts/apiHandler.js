class ApiHandler {
    constructor(baseURL){
        this.baseURL = baseURL;
    }

    getData(){
        return axios.get(this.baseURL);
    }
}