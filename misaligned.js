function index_to_number(i,j){
    return (i * 5 + j).toString().padStart(2,'0');
}

function format_user_manual(i,j,majorColors,minorColors) {
    return `${index_to_number(i,j)} | ${majorColors} | ${minorColors}`
}

function print_color_map() {
    const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
    const minorColors = ["Blue", "Orange", "Green", "Brown","Slate"];
    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            console.log(format_user_manual(i,j,majorColors[i],minorColors[j]));
        }
    }
    return majorColors.length * minorColors.length;
}

module.exports = { index_to_number, print_color_map, format_user_manual };

