function like(id){
    document.getElementById(id).innerText ++;

}
function lik2(id){
    var likeId = "#" + id;
    console.log(likeId);
    document.querySelector(id).innerText ++;
}
function remove(id){ 
    document.getElementById(id).remove()

}