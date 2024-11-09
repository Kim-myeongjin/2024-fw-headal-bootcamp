class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  
    calArea() {
      return this.height * this.width;
    }
  }
  
  const myRectangle = new Rectangle(5, 10); // 높이 5, 너비 10
  console.log("사각형의 넓이:", myRectangle.calArea()); // 사각형의 넓이: 50
  