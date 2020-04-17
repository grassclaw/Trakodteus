// portfolio.html Page Links
    // Object of Links
    var IndexObj = {1:"shadowlaqs-first", 2:"", 3:"", 4:"", 5:"", 6:"", 7:"", 8:""};

    $(".tutorials").on("click",function(){
        var webPath =$(this).attr("value");
        window.location.href='https://shadowlaq.github.io/DraKodeus/tutorial1/'+IndexObj[webPath];
    });