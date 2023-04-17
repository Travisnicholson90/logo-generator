


const prompts = [
    {
        type: 'input',
        message: 'Enter your logo name, No more that 3 characters',
        name: 'text',
        limit: 3    
    },
    {
        type: 'input', 
        message: 'Enter the text color',
        name: 'textColor'
    },
    {
        type: 'rawlist',
        message: 'Choose a shape',
        name: 'shape',
        choices: ["Square", "Triangle", "Rectangle"]
    },
    {
        type: 'input',
        message: 'enter the shape color',
        name: 'fill'
    },
    {
        type: 'input',
        message: 'Enter a shape outline color',
        name: 'stroke'
    },
];

module.exports = prompts;