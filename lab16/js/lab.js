//Lab 16
//Author: Jeffrey E
//Date: 06/05/2025

$(document).ready(function() {
    // Avoids CORS restrictions。
    //  WHY DOES IT HAD RESTRICTION THAT WAS NEVER MENTIONED1!!!
    //  I have to ask people around, Credited to an UCSD Student, a friend of mine, who helped me here is his github: https://github.com/ViolentGarden By: Siyan L.
    const corsProxy = "https://api.allorigins.win/get?url=";
    const xkcdUrl = "https://xkcd.com/info.0.json"; // It is automatically links Latest comic
    
    // jQuery .ajax recipe
    $.ajax({
        url: corsProxy + encodeURIComponent(xkcdUrl),
        method: "GET",
        dataType: "json" // Expect JSON response
    })

    //If ajax is success
    .done(function(response) {
        try {
            // comicCode wraps the response in .contents
            const comicCode = JSON.parse(response.contents);
            displayComic(comicCode);
        } catch (e) {
            showError("Failed to parse comic data: " + e.message);
        }
    })

    //If fail, Print <p>
    .fail(function(xhr, status, errorThrown) {
        console.log(errorThrown + " Status:" + status);
        $("#output").html(`
            <p class="error">Could not load XKCD comic.</p>
            <p>Error: ${errorThrown} (Status: ${status})</p>
            <p>Please try refreshing the page.</p>
        `);
    });
});

// Display the comic as an img to html， also print out data of XKCD that was 
function displayComic(comic) {
    const html = `
        <h3>${comic.title} (#${comic.num})</h3>
        <img src="${comic.img}" alt="${comic.alt}">
        <p><em>${comic.alt}</em></p>
        <p>Published: ${comic.month}/${comic.day}/${comic.year}</p>
    `;
    $("#output").html(html);
}