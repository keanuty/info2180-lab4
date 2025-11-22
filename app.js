window.onload = function()
{
    document.getElementById("search-button").onclick = function() {
        getSuperheroes();
    };
};

function getSuperheroes()
{
    $.ajax("superheroes.php")
    .done(function(data) {
        alert("Data retrieved: " + data);
    })
    .fail(function() {
        alert("Error retrieving data.");
    });
}