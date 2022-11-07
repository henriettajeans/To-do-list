let firstName = "Henrietta";
console.log(firstName);


let container = document.createElement ("div");
let box = document.createElement ("article");

function listObjects() {
    let ul = document.createElement("ul");
    let toDo = ["Vakna", "Plugga", "Ta en promenad", "Vila"];
    for (let i = 0; i < toDo.length; i++){
        let li = document.createElement("li");
        li.innerHTML = toDo[i]
        ul.appendChild(li);
        console.log(toDo[i]);
      };

      document.body.appendChild(ul);
    //toDo.sort();
}
setTimeout(()=>{listObjects()}, 3000);
//console.log(listObjects);

// for (let i=0; i < toDo.length; i++){
//     console.log(toDo);
//     document.createElement("ul").innerHTML = toDo[i];
//     // create.innerHTML = toDo;
//     // toDo.textContent = toDo;
// };


// container.appendChild(box);
// box.className = "box";

// container.appendChild(listObjects1)
// container.appendChild(listObjects2)
// container.appendChild(listObjects3)
// container.appendChild(listObjects4)
// container.appendChild(listObjects5)
//listObjects.className = "box__titleOfList__listObjects"
//document.body.appendChild(container);


//let titleOfList = document.createElement ("h3");
// let listObjects = document.createElement ("ul");
// let listObjects1 = document.createElement ("ul");
// let listObjects2 = document.createElement ("ul");
// let listObjects3 = document.createElement ("ul");
// let listObjects4 = document.createElement ("ul");
// let listObjects5 = document.createElement ("ul");
//element.innerHTML = container[i].box;

//let toDo = ["Vakna", "Dricka kaffe", "Åka pendeltåg", "Mata katterna", "Kolla på Bachelor"];
//container.appendChild(titleOfList);
//titleOfList.textContent = ("Vad jag vill hinna med idag:");


// listObjects.textContent = "Grejerna";
// listObjects1.textContent = "Grej 1";
// listObjects2.textContent = "Grej 2";
// listObjects3.textContent = "Grej 3";
// listObjects4.textContent = "Grej 4";
// listObjects5.textContent = "Grej 5";




// console.log(listObjects.innerHTML);
// console.log(listObjects1.innerHTML);
// console.log(listObjects2.innerHTML);
// console.log(listObjects3.innerHTML);
// console.log(listObjects4.innerHTML);
// console.log(listObjects5.innerHTML);



//addEventListener.container(()=>{handleClick(listObjects[i])})

