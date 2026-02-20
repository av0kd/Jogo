class Img{
    x = 0;
    y = 0;
    file;
    
    constructor(addrs){
        this.file = addrs;
    }

    showImg(){
        image(this.file, this.x, this.y);
    }
};