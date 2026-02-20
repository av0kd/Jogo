goGameBtn = false;

function showMenu(){
    background("#16303c");
    fill("blue");
    btnOverlap();
    rect(215,131,50);
}

function setupMenu(){
    
}

function mouseClicked(){
    if(tela === 0 && goGameBtn){
        tela = 1;
        setup();
        
    }
}

function btnOverlap(){
    if(tela === 0 && mouseX > 215 && mouseX < 265){
        goGameBtn = (mouseY > 131 && mouseY < 181);
                
    }
}
    