$(document).ready(function () {

  let url = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=c77d75b0083d4404998c02c9ab00426d";

  $.ajax({
    url: url,
    method: "GET",
    dataType: "JSON",

    beforeSend: function () {
      $(".progress").show();
    },

    complete: function () {
      $(".progress").hide();
    },

    success: function (newsdata) {
      let output = "";
      



      let latestNews = newsdata.articles;
      var arr = [];
      var count=0;
      for (var i in latestNews) {
        count++;
        if(count==11)
        break;
        var data ={
          title : latestNews[i].title,
          uri : latestNews[i].url
        };
        
      var store = JSON.stringify(data);
      arr.push(store);
      $("#newsResults").append(store)
      $("#newsResults").append("<br><br>");
     
      }
      

    },

    error: function () {
      let errorMsg = `<div class="errorMsg center">Some error occured</div>`;
      $("#newsResults").html(errorMsg);
    }
  })

});