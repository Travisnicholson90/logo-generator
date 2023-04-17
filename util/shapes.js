

class Rectangle {
    constructor(rectangle) {
        this.rectangle = `<svg width="400" height="110">
        <rect width="300" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
        </svg>`
    this.renderShape = () => {
        return `<svg width="400" height="110">
        <rect width="300" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
        </svg>`;
        }
        this.renderFill = () => {
            return `<svg width="400" height="400">
            <rect width="300" height="100" style="fill:${fill};stroke-width:3;stroke:rgb(0,0,0)" />
            </svg>`
        }
    };
};

class Square {
    constructor(square) {
        this.square = `<svg width="400" height="400">
        <rect width="300" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
        </svg>`
        this.renderShape = () => {
            return this.square;
        }
        this.renderFill = () => {
            return `<svg width="400" height="400">
            <rect width="300" height="100" style="fill:${fill};stroke-width:3;stroke:rgb(0,0,0)" />
            </svg>`
        }
    };
};

class Triangle {
    constructor(triangle) {
        this.triangle = `<svg height="250" width="450">
        <polygon points="225,10 100,210 350,210" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
        </svg>`
        this.renderShape = () => {
            return this.triangle;
        }
        this.renderFill = () => {
            `<svg height="250" width="450">
        <polygon points="225,10 100,210 350,210" style="fill:${fill};stroke-width:3;stroke:rgb(0,0,0)" />
        </svg>`
        }
    };
};


module.exports = {
    Rectangle: Rectangle,
    Square: Square,
    Triangle: Triangle
};