goGameBtn = false;

function showMenu(){
    background("rgb(197, 174, 42)");
    fill("blue");
    btnOverlap();
    rect(175,175,50);
}

function mouseClicked(){
    if(tela === 0 && goGameBtn){
        tela = 1;
    }
}

function btnOverlap(){
    if(mouseX > 175 && mouseX < 225){
        //gameBtn
        goGameBtn = (mouseY > 175 && mouseY < 225);        
    }
}
    