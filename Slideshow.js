var pictures = ["court","jayhawk","wiggins.jpg","seldon.jpg","Bill-Self.jpg"];


function next(){

    pictures.push(pictures.shift());
    document.getElementById("picture").src = pictures[0];
}

function previous(){

    pictures.unshift(pictures.pop());
    document.getElementById("picture").src = pictures[0];
}
