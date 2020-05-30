/*var li1 = document.write("1"),
            	xfb = document.createDocumentFragment(li1,li2,li3,li4,li5
          		*/
var cla = document.getElementsByClassName("cla")
    //ul = cla[0].childNodes,
    //console.log(li)
    //cla.insertBefore(li,cla.childNodes.0);
    //cla[0].insertBefore(li,cla[0].childNodes[0])
    /*for(var two = 1; two>=5; two++){
        for(var three = 1; three >=5; three++){
        console.log(two  three)
        }
            }*/
for (var two = 1; two <= 9; two++) {
    ul = document.createElement("ul");
    if (two >= 9) {
        for (var three = 1; three <= 9; three++) {
            li = document.createElement("li");
            span = document.createElement("span");
            span.append(three + '*' + two + '=' + two * three);
            li.append(span);
            ul.append(li);
            li.style.backgroundColor = "#FDF5E6";
        }
    } else if (two >= 8) {
        for (var three = 1; three <= 8; three++) {
            li = document.createElement("li");
            span = document.createElement("span");
            span.append(three + '*' + two + '=' + two * three);
            li.append(span);
            ul.append(li);
            li.style.backgroundColor = "#FAF0E6";
        }
    } else if (two >= 7) {
        for (var three = 1; three <= 7; three++) {
            li = document.createElement("li");
            span = document.createElement("span");
            span.append(three + '*' + two + '=' + two * three);
            li.append(span);
            ul.append(li);
            li.style.backgroundColor = "#FAEBD7";
        }
    } else if (two >= 6) {
        for (var three = 1; three <= 6; three++) {
            li = document.createElement("li");
            span = document.createElement("span");
            span.append(three + '*' + two + '=' + two * three);
            li.append(span);
            ul.append(li);
            li.style.backgroundColor = "#FFEFD5";
        }
    } else if (two >= 5) {
        for (var three = 1; three <= 5; three++) {
            li = document.createElement("li");
            span = document.createElement("span");
            span.append(three + '*' + two + '=' + two * three);
            li.append(span);
            ul.append(li);
            li.style.backgroundColor = "#FFEBCD";
        }
    } else if (two >= 4) {
        for (var three = 1; three <= 4; three++) {
            li = document.createElement("li");
            span = document.createElement("span");
            span.append(three + '*' + two + '=' + two * three);
            li.append(span);
            ul.append(li);
            li.style.backgroundColor = "#FFE4C4";
        }
    } else if (two >= 3) {
        for (var three = 1; three <= 3; three++) {
            li = document.createElement("li");
            span = document.createElement("span");
            span.append(three + '*' + two + '=' + two * three);
            li.append(span);
            ul.append(li);
            li.style.backgroundColor = "#FFDAB9";
        }
    } else if (two >= 2) {
        for (var three = 1; three <= 2; three++) {
            li = document.createElement("li");
            span = document.createElement("span");
            span.append(three + '*' + two + '=' + two * three);
            li.append(span);
            ul.append(li);
            li.style.backgroundColor = "#FFDEAD";
        }
    } else if (two >= 1) {
        for (var three = 1; three <= 1; three++) {
            li = document.createElement("li");
            span = document.createElement("span");
            span.append(three + '*' + two + '=' + two * three);
            li.append(span);
            ul.append(li);
            li.style.backgroundColor = "#FFE4B5";
        }
    }
    document.write("<br>");
    cla[0].append(ul)
}

p = document.createElement("p");
op = document.createTextNode("花里胡哨的，没见过世面")
p.append(op)
cla[0].append(p)


for (var two = 9; two >= 1; two--) {
    ul = document.createElement("ul");
    if (two <= 1) {
        for (var three = 1; three <= 1; three++) {
            li = document.createElement("li");
            span = document.createElement("span");
            span.append(three + '*' + two + '=' + two * three);
            li.append(span);
            ul.append(li);
            li.style.backgroundColor = "#00F5FF";
        }
    } else if (two <= 2) {
        for (var three = 1; three <= 2; three++) {
            li = document.createElement("li");
            span = document.createElement("span");
            span.append(three + '*' + two + '=' + two * three);
            li.append(span);
            ul.append(li);
            li.style.backgroundColor = "#00E5EE";
        }
    } else if (two <= 3) {
        for (var three = 1; three <= 3; three++) {
            li = document.createElement("li");
            span = document.createElement("span");
            span.append(three + '*' + two + '=' + two * three);
            li.append(span);
            ul.append(li);
            li.style.backgroundColor = "#00E5EE";
        }
    } else if (two <= 4) {
        for (var three = 1; three <= 4; three++) {
            li = document.createElement("li");
            span = document.createElement("span");
            span.append(three + '*' + two + '=' + two * three);
            li.append(span);
            ul.append(li);
            li.style.backgroundColor = "#00EEEE";
        }
    } else if (two <= 5) {
        for (var three = 1; three <= 5; three++) {
            li = document.createElement("li");
            span = document.createElement("span");
            span.append(three + '*' + two + '=' + two * three);
            li.append(span);
            ul.append(li);
            li.style.backgroundColor = "#00FFFF";
        }
    } else if (two <= 6) {
        for (var three = 1; three <= 6; three++) {
            li = document.createElement("li");
            span = document.createElement("span");
            span.append(three + '*' + two + '=' + two * three);
            li.append(span);
            ul.append(li);
            li.style.backgroundColor = "#00BFFF";
        }
    } else if (two <= 7) {
        for (var three = 1; three <= 7; three++) {
            li = document.createElement("li");
            span = document.createElement("span");
            span.append(three + '*' + two + '=' + two * three);
            li.append(span);
            ul.append(li);
            li.style.backgroundColor = "#436EEE";
        }
    } else if (two <= 8) {
        for (var three = 1; three <= 8; three++) {
            li = document.createElement("li");
            span = document.createElement("span");
            span.append(three + '*' + two + '=' + two * three);
            li.append(span);
            ul.append(li);
            li.style.backgroundColor = "#3A5FCD";
        }
    } else if (two <= 9) {
        for (var three = 1; three <= 9; three++) {
            li = document.createElement("li");
            span = document.createElement("span");
            span.append(three + '*' + two + '=' + two * three);
            li.append(span);
            ul.append(li);
            li.style.backgroundColor = "#0000FF";
        }
    }
    document.write("<br>");
    cla[0].append(ul)
}
//console.log(ul)
//console.log(cla.length[0])
//console.log(li)