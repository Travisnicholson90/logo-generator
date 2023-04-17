class Rectangle {
    constructor(rectangle) {
        this.rectangle = 
        `<svg width="300" height="200">
        <rect width="300" height="150" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
        <text x="150" y="80" style="text-anchor: middle;" fill="white"></text>
        </svg>`
        this.renderShape = (text, textColor, fill, stroke) => {
            return `<svg width="300" height="200">
                    <rect width="300" height="150" style="fill:${fill};stroke-width:3;stroke:${stroke}" />
                    <text x="150" y="80" style="text-anchor: middle;" fill=${textColor}>${text}</text>
                    </svg>`
        };
    };
};

class Square {
    constructor(square) {
      this.square = 
      `<svg width="300" height="200">
      <rect width="300" height="300" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
      <text x="150" y="50" style="text-anchor: middle;" fill="white"></text>
      </svg>`
      this.renderShape = (text, textColor, fill, stroke) => {
        return `<svg width="300" height="200">
                <rect width="300" height="300" style="fill:${fill};stroke-width:3;stroke:${stroke}" />
                <text x="150" y="100" style="text-anchor: middle;" fill=${textColor}>${text}</text>
                </svg>`
      };
    };
  };

class Triangle {
    constructor(triangle) {
        this.triangle = 
        `<svg height="150" width="350">
        <polygon points="225,10 100,210 350,210" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
        <text x="225" y="100" style="text-anchor: middle;" fill="white"></text>
        </svg>`
        this.renderShape = (text, textColor, fill, stroke) => {
            return  `<svg height="150" width="350">
                    <polygon points="225,10 100,210 350,210" style="fill:${fill};stroke-width:3;stroke:${stroke}" />
                    <text x="225" y="100" style="text-anchor: middle;" fill=${textColor}>${text}</text>
                    </svg>`
        };
    };
};


module.exports = {
    Rectangle: Rectangle,
    Square: Square,
    Triangle: Triangle
};