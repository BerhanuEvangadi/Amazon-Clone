import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://us-central1-fir-cd71d.cloudfunctions.net/api'
    // "https://us-central1-fir-cd71d.cloudfunctions.net/api",
});

export default instance;