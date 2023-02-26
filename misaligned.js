const {expect} = require('chai')

function index_to_number(i,j){
    return i * 5 + j;
}

function print_color_map() {
    const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
    const minorColors = ["Blue", "Orange", "Green", "Brown","Slate"];
    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            console.log(`${index_to_number(i,j)} | ${majorColors[i]} | ${minorColors[j]}`);
        }
    }
    return majorColors.length * minorColors.length;
}


result = print_color_map();

expect(index_to_number(0,0)).equals(1));
expect(result).equals(25);
console.log('All is well (maybe!)');
