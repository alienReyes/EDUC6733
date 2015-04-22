var json = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': 'js/data.json',
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})();



$('#modal_div').leanModal({
    dismissible: false, // Modal can be dismissed by clicking outside of the modal
    opacity: .5, // Opacity of modal background
    in_duration: 100, // Transition in duration
    out_duration: 100, // Transition out duration
    ready: function () {
        alert('Ready');
    },
    complete: function () {
        console.log("eeee")
    }
});




var currentSelection;
var totalSelections = 0;

//
//$(".badge").click(function (event) {
//    currentSelection = $(this);
//    $('#content_filler').html(null);
//    var divCont = $(this).attr("targ");
//    //console.log(divCont.attr("targ"))
//    //.attr('targ');
//    populateDiv(divCont);
//    $('#modal1').openModal();
//
//
//});

$(".cardItem").bind("click", function (event) {
    currentSelection = $(this).attr('id');
    $('#content_filler').html(null);
    populateDiv(currentSelection);
    $('#modal_div').openModal();

});





function populateDiv($person) {

    $('#content_filler').append('<img  class="col s12 m4 l4" src="' + json[$person].photo + '">');
    $('#content_filler').append('<ul class=" col s12 m8 l8" id="innerConts"></ul>');
    $('#innerConts').append('<li><em>Age: </em>' + json[$person].age + '</li>');
    $('#innerConts').append('<li><em>Gender: </em>' + json[$person].gender + '</li>');
    $('#innerConts').append('<li><em>Ethnicity origin or Race: </em>' + json[$person].ethnicity + '</li>');
    $('#innerConts').append('<li><em>Highest degree or level of school completed: High school graduate, diploma or the equivalent (for example GED) : </em>' + json[$person].education + '</li>');
    $('#innerConts').append('<li><em>Vacation Place: </em>' + json[$person].vacation + '</li>');
    $('#innerConts').append('<li><em>Stores: </em>' + json[$person].stores + '</li>');
    $('#innerConts').append('<li><em>Marital: </em>' + json[$person].marital + '</li>');
    $('#innerConts').append('<li><em>Employment Status: </em>' + json[$person].employment + '</li>');
    $('#innerConts').append('<li><em>Pets: </em>' + json[$person].pets + '</li>');
    $('#innerConts').append('<li><em>Hobbies: </em>' + json[$person].hobbies + '</li>');

};








$(".selecButton").bind("click", function (event) {
    var btnPressed = String(event.target.id);
    showHideCheck(btnPressed);
    $('#modal_div').closeModal();
});


function showHideCheck($buttonName) {

    var tgtDiv = '#' + currentSelection;
    var tgtDiv = $(tgtDiv).find('.badge');


    switch ($buttonName) {
    case "#select":
        if (totalSelections < 6) {
            tgtDiv.fadeIn();
            totalSelections++;
        } else {
            alert("You've made all the possible selections")
        }



        break;
    case "#deselect":
        tgtDiv.fadeOut();
        totalSelections--;
        break;
    }
}