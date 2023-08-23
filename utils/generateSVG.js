function generateSVG (data) {
    const svgHeader = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`
    let logo = "";

    // get the shape
    if (data.logoShape == "circle") {
        logo = `<circle r="75" cx="150" cy="100" fill="${data.logoColor}" />`
    }
    else if (data.logoShape == "square") {
        logo = `<rect x="100" y="50" width="100" height="100" fill="${data.logoColor}" />`;
    }
    else if (data.logoShape == "triangle") {
        logo = `<polygon points="150,50 207.735,150 92.265,150" fill="${data.logoColor}"/>`;//<polygon points="50 15, 100 100, 0 100"/>`
    }
    else {
        // throw error
    }

    return `${svgHeader}
    ${logo}
</svg>`;
}

module.exports = generateSVG;