import axios from "axios";

export const API = axios.create({
    baseURL: 'https://wire-graphs-cron.herokuapp.com'
})