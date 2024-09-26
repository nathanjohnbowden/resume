function bibleVerse() {
    $.ajax("https://bible-api.com/?random=verse", {
        success: function (bible) {
        $("#bibleVerse").empty();
        $("#bibleVerse").append(`<p class= "h5"> ${bible.reference}</p>` + `<p>${bible.text}</p>`);
        }
    });
}