import axios from "axios";

export default {
  
  getArticles: function(search) {
    console.log(search.search);
    var params = {
      'api-key': 'cd6ac5f5b01e47a586e7b2a0969a50c3',
      'q':search.search
    }

    if(search.startYear !== ""){
      search.startYear += '0101';
      params.begin_date = search.startYear;
    }
    if(search.endYear !== ""){
      search.endYear+= '1231'
      params.end_date = search.endYear
    }

    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", { params
    }).then(function(results){
      return results.data.response.docs
    })
  },

  getSavedArticles: function() {
    return axios.get("/api/articles/");
  },

  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },

  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};
