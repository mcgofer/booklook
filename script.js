var fetch = function () {
  $.ajax({
    method: "GET",
    url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
    success: function(data) {
      console.log(data);
      $('.title').append(data.items[0].volumeInfo.title);
      $('.description').append(data.items[0].volumeInfo.description);
      $('.authors').append("Written by: " + data.items[0].volumeInfo.authors);
      $('.book').append('<img class=image src="' + data.items[0].volumeInfo.imageLinks.thumbnail + '">');
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
    }
  }); 
};

 $('.search-book').on('click', fetch);


