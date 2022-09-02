const paper = document.getElementById("paper-sel")
paper.addEventListener("click", function(){
    console.log("123")
})

$(document).ready(function(){
    $("#select12").change(function(){
        $(this).find("option:selected").each(function(){
            if($(this).attr("id")=="f1"){
                $(".q-div").not(".f1").hide();
                $(".f1").show();
            }
            // else if($(this).attr("id")=="f2"){
            //     $(".q-div").not(".f2").hide();
            //     $(".f2").show();
            // }
            // else if($(this).attr("id")=="f3"){
            //     $(".q-div").not(".f3").hide();
            //     $(".f3").show();
            // }
            else {
                $(".q-div").hide();
                // $(" ").show();
            }

        });
    }).change();
});

$(document).ready(function(){
    $("#select13").change(function(){
        $(this).find("option:selected").each(function(){
            if($(this).attr("id")=="q1"){
                $(".q-div2").not(".q1").hide();
                $(".q1").show();
            }
            // else if($(this).attr("id")=="f2"){
            //     $(".q-div").not(".f2").hide();
            //     $(".f2").show();
            // }
            // else if($(this).attr("id")=="f3"){
            //     $(".q-div").not(".f3").hide();
            //     $(".f3").show();
            // }
            else {
                $(".q-div2").hide();
                // $(" ").show();
            }

        });
    }).change();
});


function yesnoCheck() {
    if (document.getElementById('yesCheck').checked) {
        document.getElementById('ifYes').style.display = 'block';
    }
    else document.getElementById('ifYes').style.display = 'none';

}

function showBtn(){
    if(document.getElementById('onSelect').checked){
        document.getElementById('btn-3').style.display = 'block';
        document.getElementById('btn-2').style.display = 'block';
    }
    else document.getElementById('btn-3').style.display = 'none';
}


