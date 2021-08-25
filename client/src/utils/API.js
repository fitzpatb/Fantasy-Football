import axios from "axios";

export default {
  findArticles: function() {
    return axios.get("/api/articles/all");
  }
}