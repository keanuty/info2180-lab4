$(function() {
    $("#search-button").on("click", function() {
        getSuperheroes();
    });
});

function getSuperheroes()
{
    let heroName = $("#hero-name").val();

    $.ajax("superheroes.php?query=" + heroName)
    .done(function(data) {
        $("#result").html(data);
    })
    .fail(function() {
        $("#result").html("An error occurred while processing your request.");
    });
}