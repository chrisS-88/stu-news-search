
$("#search-button").on("click", function () {
    let query = $("#search-term").val();
    // let numberOfYears = $(this).

    var queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&fq=source:("The New York Times")&api-key=Tma0LGAqxJwa3xlCcMx9qGUGbd8gfMa1`

    fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // console.log(data);
            if (data.response && data.response.docs) {
                for (let i = 0; i < data.response.docs.length; i++) {
                    let content = data.response.docs[i].web_url;
                    console.log(content);
                    $("#top-articles").append(content);
                }
            } else {
                console.log("No articles found.");
            }

        })

})


