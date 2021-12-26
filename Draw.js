//triangle function
let drawTriangle = function(offLength, height) {
    let triangle = "";
    for(let h=0;h<height;h++)
    {
        //create a new line
        let line = "\n";

            //create the offset
        let offset ="";
        for(let o = offLength;o>=0;o--)
            offset +=" ";
        //append the created offset to the line
        line += offset;
        

        // draw a number of stars equals to the line number
        for (let s=0;s<h+1;s++)
            line += "*";
        
        //append the new line to the triangle
        triangle +=line;
    }
    console.log(triangle);
}

//rectangle function
let drawRectangle = function(offLength, height, width) {
    let rectangle = "";
    for (let h = 0; h<height; h++) {
        // create new line
        let line = "\n"
        
        //create offset
        let offset = "";
        for (let o = offLength; o>=0; o--)
            offset += " ";
        //append offset to the line
        line += offset;

        //draw number of stars equal to the width
        for (let w = 0; w<width; w++) 
            line += "*";

        //add line to rectangle string
        rectangle += line;
    }
    //output rectangle
    console.log(rectangle);

}

//pallet function
let shapeDrawer = function(shape) {
    //returns function to draw rectangle based on parameter
    if (shape == "rectangle") {
        return(drawRectangle);
    }
    //returns function to draw triangle based on parameter
    else if (shape == "triangle") {
        return(drawTriangle);
    }
};

//sets up rectangle function
let rectangle = shapeDrawer("rectangle");
//draws with offset of 10
rectangle(10,5,5);
rectangle(10,3,4);
//draws with offset of 20
rectangle(20,6,1);
rectangle(20,2,2);

//sets up triangle function
let triangle = shapeDrawer("triangle");
//draws with offset of 10
triangle(10, 5);
triangle(10, 7);
//draws with offset of 20
triangle(20,3);
triangle(20,10);