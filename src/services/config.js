import axios from 'axios'

export const https = axios.create({
    baseURL: 'https://friendly-char-gen-backend-api.herokuapp.com/archetypes'
})