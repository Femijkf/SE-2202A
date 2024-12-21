function generateShapes(rows) {
    let star = "*";
    let blank = "";
    let counter = rows;
    let pattern = "";

    for (let i=0; i<rows; i++) {
        for (let j=counter-1; j>0; j--) {
            // blank = "";
            blank += " ";
        }
        pattern += blank + star + "\n";
        star += "*";
        blank ="";
        counter--;
    }
    return pattern;
}


console.log(generateShapes(4));