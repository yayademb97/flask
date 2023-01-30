function hide(){
    document.querySelector(".dojo").remove();
}


setTimeout(function(){alert("The ninjas have won")},13000);

function add(id) {
    var adds = [319, 169]
    var spans = [
        document.querySelector("score1"),
        document.querySelector("score2"),
    ]
}

//     var adds = [319, 169] ;
//     var spans = [
//         document.querySelector("#score1"),
//         document.querySelector("#score2"),
//     ];
//     function add(id) {
//         adds[i]++;
//         spans[id].innerHTML= adds[id];
// }


function adds(e){
    document.getElementById(e).innerText ++;
}