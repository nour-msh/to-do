
var title = $('#title');
var desc = $('#desc');
var point = $('#point');
var task = $('.task');
var add = $("#addButton");
$(add).click(function(){
    for (var i = 0; i < task.length; i++) {
        console.log(task[i].value);
    }})




