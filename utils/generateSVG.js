function generateSVG (data) {
    const svgHeader = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`
    let logo = "";
    let text = "";

    // get the shape and the text
    if (data.logoShape == "circle") {
        logo = `<circle r="75" cx="150" cy="100" fill="${data.logoColor}" />`
        text = `<text x="150" y="100" fill="${data.logoTextColor}" dominant-baseline="middle" text-anchor="central" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="3em">${data.logoText}</text>`;
    }
    else if (data.logoShape == "square") {
        logo = `<rect x="100" y="50" width="100" height="100" fill="${data.logoColor}" />`;
        text = `<text x="150" y="100" fill="${data.logoTextColor}" dominant-baseline="central" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="3em">${data.logoText}</text>`;
    }
    else if (data.logoShape == "triangle") {
        logo = `<polygon points="150,50 207.735,150 92.265,150" fill="${data.logoColor}"/>`;
        text = `<text x="150" y="145" fill="${data.logoTextColor}" dominant-baseline="auto" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="3em">${data.logoText}</text>`;
    }
    else {
        // throw error
    }

    return `${svgHeader}
    ${logo}
    ${text}
</svg>`;
}

module.exports = generateSVG;