class Enemy{
    constructor(x, y, width, height){
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.image = loadImage("Images/theif.png");
    }

   display() {
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.width, this.height);    
    }
    

}