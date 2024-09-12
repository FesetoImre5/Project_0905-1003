function openClose(){
    let open = 2;
    var nav = document.getElementById("sideNav");
    if (open % 2 == 0){
        nav.style.top = 0;
        open += 1;
    }
    else{
        nav.style.top = "-330px";
        open += 0;
    }
}