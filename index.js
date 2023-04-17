const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const prompts = require('./lib/prompts');

const { Square, Rectangle, Triangle } = require('./lib/shapes');


const init = () => {
    inquirer
        .prompt(prompts)
        .then((response) => {
            console.log(response);
            const { shape, text, textColor, fill, stroke } = response;
            
            let svgShape;
            if(shape === "Square") {
                svgShape = new Square()
            } else if (shape === 'Triangle') {
                svgShape = new Triangle()
            } else if (shape === 'Rectangle') {
                svgShape = new Rectangle()
            }
            const svg = svgShape.renderShape(text, textColor, fill, stroke);
            generateFile(svg);
        })
        .catch((err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('success');
            }
        });
};

const generateFile = (svg) => {
    fs.writeFile('logo.svg', svg, (err) => {
        if (err) {
            console.error('content is missing', err);
        };
            console.log('Generate logo.svg');
    });
};

init();
