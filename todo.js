
var title = $('#title');
var desc = $('#desc');
var point = $('#point');
var task = $('.task');
var add = $("#addButton");
$(add).click(function(){
    for (var i = 0; i < task.length; i++) {
        console.log(task[i].value);}
    
$("#incomplete").val(
    $("#incomplete").val() +
    "Title: "+$("#title").val() + 
     " , description: "+$("#desc").val() +
     ", point: "+$("#point").val()
    );

    localStorage.setItem("Task:", task)
})


//  $("#isDone").click(function(){
 
//  })

 $("#deleteButton").click(function(){
    $("#incomplete").val("");
    localStorage.clear("Task:", task)
});



