$(document).ready(function() {
    
    $('form').submit(function(e){
        e.preventDefault();
        const taskForm = $('#taskForm').val();
        if(taskForm!=""){
            console.log(taskForm);
            const newLine = $(`<li style="display:none">${taskForm}</li>`);
            newLine.appendTo($('ul'));
            newLine.fadeIn();
            $('#taskForm').val('');
        }
    }) 
    $("ul").on("click", "li", function(){
        $(this).wrap("<strike>");
    });
})
