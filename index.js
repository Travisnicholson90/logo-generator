const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

const { Square, Rectangle, Triangle } = require('./util/shapes');

const prompts = [
    {
        type: 'rawlist',
        message: 'Choose a shape',
        name: 'shape',
        choices: ["Square", "Triangle", "Rectangle"]
    },
    {
        type: 'input',
        message: 'Enter a logo color',
        name: 'fill'
    },
    {
        type: 'input',
        message: 'Enter a logo outline color',
        name: 'stroke'
    }
];

const init = () => {
    inquirer
        .prompt(prompts)
        .then((response) => {
            console.log(response);
            const { shape, fill, stroke } = response;
            
            let svgShape;
            if(shape === "Square") {
                svgShape = new Square()
            } else if (shape === 'Triangle') {
                svgShape = new Triangle()
            } else if (shape === 'Rectangle') {
                svgShape = new Rectangle()
            }
            const svg = svgShape.renderShape()
            const svgFill = svg.renderFill()
            generateFile(svgFill);
        })
        .catch((err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('success');
            }
        });
};

const generateFile = (svgFill) => {
    fs.writeFile('logo.svg', svgFill, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
};

init();
