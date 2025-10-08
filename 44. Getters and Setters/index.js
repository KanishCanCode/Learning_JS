class Rectangle{
    constructor(width,height){
        this.width=width;
        this.height=height;
       
    }

    set width(newWidth){
        if(newWidth>0){
            this._width=newWidth;
        }
        else{
            console.error("width must be a positive number");
        }
    }

    set height(newHeight){
    if(newHeight>0){
            this._height=newHeight;
        }
    else{
            console.error(" height must be a positive number");
        }
    }
    get width(){
        return this._width.toFixed(1);
    }
    get height(){
        return this._height.toFixed(1);
    }

    get area(){
        return this._height*this._width.toFixed(1);
    }
}

const rect =  new Rectangle(13,24)
console.log(rect.width);
console.log(rect.height);
console.log(rect.area);