const { Square, Rectangle, Triangle } = require('./shapes');
const prompts = require('./prompts');

describe('Shapes', () => {
    test('Triangle should render correctly', () => {
        const shape = new Triangle();
        const text = 'Tn';
        const textColor = 'white';
        const fill = 'blue';
        const stroke = 'blue';
        expect(shape.renderShape(text, textColor, fill, stroke)).toEqual(`<svg height="150" width="350"><polygon points="225,10 100,210 350,210" style="fill:${fill};stroke-width:3;stroke:${stroke}" /><text x="225" y="100" style="text-anchor:middle;" fill=${textColor}>${text}</text></svg>`);
    });
});
