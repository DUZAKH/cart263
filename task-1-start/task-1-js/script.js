window.onload = setup;

/** function setup */
function setup(){
console.log("we are a go!")
/*** ALL ANWSERS TO BE ADDED IN THE ALLOCATED SPACE */
/*** START PART ONE ACCESS */ 
/* 1: all paragraph elements */
/***CODE */
//console.log(document.getElementsByTagName("p"));
/***OUTPUT: 
 * 1.
 * HTMLCollection(9) [p#1, p#2.img-descript, p#3.img-descript, p#4.img-descript, p#5.img-descript, p#6.img-descript, p#7.img-descript, p#8.img-descript, p#9.img-descript]

/*************************************** */
/* 2: only the first paragraph element */
/***CODE 
 * 
*/
//console.log(document.getElementsByTagName("p")[0]);


/***OUTPUT: 
 * * 2.
   <p id="1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias perspiciatis blanditiis, et
                laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur ducimus
                officiis non
                quasi officia sit veniam!
            </p>

 */


/*************************************** */
/* 3: all elements with the class inner-container */
/***CODE */
//console.log(document.getElementsByClassName(".inner-container"));



/***OUTPUT: 
 * * 3.

HTMLCollection []
length
: 
0
[[Prototype]]
: 
HTMLCollection
item
: 
ƒ item()
length
: 
(...)
namedItem
: 
ƒ namedItem()
constructor
: 
ƒ HTMLCollection()
Symbol(Symbol.iterator)
: 
ƒ values()
Symbol(Symbol.toStringTag)
: 
"HTMLCollection"
get length
: 
ƒ length()
[[Prototype]]
: 
Object

 */


/*************************************** */
/* 4: the last image element inside the element that has the class img-container */
/***CODE */
//console.log(document.querySelectorAll(".img-container"));
//console.log(document.querySelectorAll(".img-container img")[7]);


/***OUTPUT: 
 * 
*4.
<img class="img-image" src="task-1-images/seventeen.png">

 */

 //*/

/*************************************** */
///* 5A: all h2 elements */
//console.log(document.querySelectorAll("h2"));
///* 5B: length of the list in 5A */
//console.log(document.querySelectorAll("h2").length);
///* 5C: the text content of the first element in the list from 5A */
//console.log(document.querySelector("h2").textContent);
/***CODE */
/***OUTPUT: 
 * *5. 
A.
NodeList [h2]
0
: 
h2
length:1
[object NodeList]
B. 
1

C.
 The header of this fancy page
 */


/*************************************** */
/* 6: the element with id name parent */
    
/***CODE */
//console.log(document.querySelector("#parent"));
/***OUTPUT: 
 * *6.
<section id="parent">
            <div class="inner-container">
                <div class="content-container">
                    <div class="img-container">
                        <img class="img-image" src="task-1-images/sixteen.png">
                    </div>
                    <p id="2" class="img-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                        perspiciatis blanditiis, et
                        laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur
                        ducimus officiis non
                        quasi officia sit veniam!</p>

                </div>
            </div>
            <div class="inner-container">
                <div class="content-container">
                    <div class="img-container">
                        <img class="img-image" src="task-1-images/eight.png">
                    </div>
                    <p id="3" class="img-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                        perspiciatis blanditiis, et
                        laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur
                        ducimus officiis non
                        quasi officia sit veniam!</p>

                </div>
            </div>
            <div class="inner-container">

                <div class="content-container">
                    <div class="img-container">
                        <img class="img-image" src="task-1-images/eleven.png">
                    </div>
                    <p id="4" class="img-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                        perspiciatis blanditiis, et
                        laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur
                        ducimus officiis non
                        quasi officia sit veniam!</p>

                </div>
            </div>
            <div class="inner-container">
                <div class="content-container">
                    <div class="img-container">
                        <img class="img-image" src="task-1-images/fifteen.png">
                    </div>
                    <p id="5" class="img-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                        perspiciatis blanditiis, et
                        laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur
                        ducimus officiis non
                        quasi officia sit veniam!</p>

                </div>
            </div>
            <div class="inner-container">
                <div class="content-container">
                    <div class="img-container">
                        <img class="img-image" src="task-1-images/five.png">
                    </div>
                    <p id="6" class="img-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                        perspiciatis blanditiis, et
                        laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur
                        ducimus officiis non
                        quasi officia sit veniam!</p>

                </div>
            </div>
            
            <div class="inner-container">
                <div class="content-container">
                    <div class="img-container">
                        <img class="img-image" src="task-1-images/three.png">
                    </div>
                    <p id="7" class="img-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                        perspiciatis blanditiis, et
                        laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur
                        ducimus officiis non
                        quasi officia sit veniam!</p>

                </div>
            </div>
            
            <div class="inner-container">
                <div class="content-container">
                    <div class="img-container">
                        <img class="img-image" src="task-1-images/twelve.png">
                    </div>
                    <p id="8" class="img-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                        perspiciatis blanditiis, et
                        laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur
                        ducimus officiis non
                        quasi officia sit veniam!</p>

                </div>
            </div>
            
            <div class="inner-container">
                <div class="content-container">
                    <div class="img-container">
                        <img class="img-image" src="task-1-images/seventeen.png">
                    </div>
                    <p id="9" class="img-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                        perspiciatis blanditiis, et
                        laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur
                        ducimus officiis non
                        quasi officia sit veniam!</p>

                </div>
            </div>
            
        </section>
 */

/*************************************** */
/*** END PART ONE ACCESS */ 


/*************************************** */
/*** START PART TWO MODIFY */ 
/*************************************** */
/* 1: Select the first paragraph and replace the text within the paragraph... */
/***CODE */
//* document.querySelector("p").innerHTML = "<p>'New text in paragraph one: text changed by ``Kiana`` on the following date: `today's date`.</p>"
/*************************************** */
/* 2: Select all elements in the HTML that have the class name content-container
 and change the background color ... of first and second ...*/
/***CODE */
//document.querySelector(".content-container").style.background = "orange"
//document.querySelectorAll(".content-container")[0,1].style.background = ("orange", "purple")
/*************************************** */
/* 3: Change the src element of the first image element on the page to be ...
/***CODE */

//document.querySelector("img").src = "task-1-images/seven.png"

/*************************************** */
/* 4: Select the third paragraph element on the page and 
replace the content (within the paragraph) to be an h2 element which contains the text `TEST 123`
/***CODE */
//document.querySelectorAll("p")[2].innerHTML = "<h2> TEST 123 </h2>"

/*************************************** */
/* 5: Select the fourth paragraph element on the page and 
add to the existing content an h2 element containing the text `TEST 123`
/***CODE */
//document.querySelectorAll("p")[3].innerHTML += "<h2> TEST 123 </h2>"

/*************************************** */
/* 6: Select the fifth paragraph element on the page and add to the existing content 
an img element that holds `one.png`, and add the class newStyle to said paragraph element.
/***CODE */
    
//document.querySelectorAll("p")[4].innerHTML += '<img src="task-1-images/one.png" alt="one">';
//document.querySelectorAll("p")[4].classList.add("newStyle");   


/*************************************** */
/* 7: Add the following array variable: let colors = ['red','blue','green','orange'];, 
then access all elements with class name inner-container and save to a variable called `innerContainers`. 
Next, iterate over the colors array, and for each color: 
assign the element from innerContainers variable with the same index 
(i.e. colors[0] should be allocated to the first innerContainers element, colors[1] to the second, etc ...) 
a background using that color.
/***CODE */ 
//let colors = ['red', 'blue', 'green', 'orange'];
//let innerContainers = document.querySelectorAll(".inner-container");
//
//for (let [index, singleContainer] of innerContainers.entries()) {
//  singleContainer.style.background = colors[index] || '';
//}
/*************************************** */
/*** END PART TWO MODIFY */ 


/*************************************** */
/*** START PART THREE CREATE */ 
/*************************************** */
/* 1: NEW PARAGRAPHS */
/* 1A: Access all paragraph elements, and store the result in a variable called: allPTagsThree */
let allPTagsThree = document.querySelectorAll("p");

/* 1B: Create a function:function customCreateElement(parent){ //body } */
function customCreateElement(parent){
/* 1C:  In the body of customCreateElement create a new parargraph element*/
    let newParagraph = document.createElement("p");
/* 1D:  Set the text of this element to be : `using create Element`*/
    newParagraph.textContent= "using create Element";
/* 1E:  Set the background of this paragraph element to be green */
    newParagraph.style.background= "green";
/* 1F:  Set the color of the text in this paragraph element to be white */
    newParagraph.style.color= "white";
/* 1G: Append this new element to the parent variable within the function. */
    parent.appendChild(newParagraph);
}
/* 1H: Iterate through the allPTagsThree array and call customCreateElement(), 
passing the current allPTagsThree element as the parent with each iteration.*/
/***CODE */
for (let singlePTag of allPTagsThree) {
  if (singlePTag.querySelector("span") !== null) {
    singlePTag.querySelector("span").textContent += " other Content";
  }
    customCreateElement(singlePTag);
    }
/***EXPLANATION::
 The result is a green box added to each paragraph on the page. This green box is a newly created <p> element that contains the text "using create element." The customCreateElement function is responsible for creating this new paragraph as its own separate <p> tag, applying the specified styles (green background and white text), and appending it as a child to the existing paragraphs. The for...of loop iterates through all pre-existing paragraphs, ensuring the new element is added to each one.

/*************************************** */
/* 2: GRID OF BOXES */
/* 2A: Create another new function: function customNewBoxCreate(parent){ //body }*/
    function customNewBoxCreate(parent) {
         
//* 2B: In the body of customNewBoxCreate create a new div element, that has the class testDiv.
        let newDiv = document.createElement("div");
        newDiv.classList.add("testDiv");
//* 2C:Then append this new element to the parent variable within the function. 
        parent.appendChild(newDiv);
/* 2D:Finally, return</code> this new element */
          return newDiv;
}
/* 2E:Create a nested for loop (for rows and columns) to iterate through 10 columns and 10 rows (just like the JS Review :)). 
    Call the customNewBoxCreate function, in order to generate a new div -> representing each cell in the grid. 
    Ensure that the parent element for each of these new divs is the element whose id is named `new-grid`*/
let parentGrid =document.getElementById("new-grid");
let gridSize = 50;
let gridCols = 10;
let gridRows = 10;
for (let row = 0; row < gridRows; row++) {
      for (let col = 0; col < gridCols; col++) {
            let returnedDiv = customNewBoxCreate(parentGrid);

///* 2F: You will see at this point that the x,y position of the resulting divs makes no sense... 
//    Fix this by doing the following: every time you call customNewBoxCreate() - save the current returned element 
//    in a variable i.e. returnedDiv. 
//    Set the style (left and top) to the of this element to 
//    the necessary x and y position (use the counter variables in the for nested for loop to 
//    calculate the new positions.
 returnedDiv.style.width = `${gridSize - 5}px`;
        returnedDiv.style.height = `${gridSize - 5}px`;
        returnedDiv.style.left = `${col * gridSize}px`;
        returnedDiv.style.top = `${row * gridSize}px`;


///* 2G: BONUS I: Make every div in the resulting grid in an even numbered row have white background 
//    and otherwise let it have a background of purple.</li>
    if (row % 2 === 0) {
          returnedDiv.style.background = "white";
        } else {
          returnedDiv.style.background = "cornflowerblue";
        }
/* 2H: BONUS II: For every div in an even numbered row make it contain the text `EVEN`, 
    otherwise lat it have the content `ODD`.*/
   if (row % 2 === 0) {
          returnedDiv.textContent = "EVEN";
        } else {
          returnedDiv.textContent = "ODD";
        }
      }
    }


/***CODE */


/***EXPLANATION::
 * //checking to see how many testdivs
console.log(document.querySelectorAll(".testDiv").length);
//answer: 100
this is because there is 10 rows and 10 columns 
 * 
 */

/*************************************** */
/* 3: GRID OF BOXES II */

/* 3A: Create ANOTHER nested for loop - in order to generate a new grid ... 
    USE the same customNewBoxCreate function..., the only difference is that the parent element 
    for each of these new divs is the element whose id is `new-grid-three`. */
let parentGridThree = document.getElementById("new-grid-three");

for (let row = 0; row < gridRows; row++) {
  for (let col = 0; col < gridCols; col++) {
    let returnedDiv = customNewBoxCreate(parentGridThree);

    returnedDiv.style.width = `${gridSize - 5}px`;
    returnedDiv.style.height = `${gridSize - 5}px`;
    returnedDiv.style.left = `${col * gridSize}px`;
    returnedDiv.style.top = `${row * gridSize}px`;
///* 3B: Then: write the code to check when a column is a multiple of 3 (no remainder), 
//    when it is a column where the remainder is 1 or when the remainder is 2 ... 
//    HINT:: look up the % operator.. */
 if (col % 3 === 0) {
       
///* 3C: Then for each of the above cases: give the new divs in the first case a background of red, 
    returnedDiv.style.background = "red";
      returnedDiv.textContent = "0";
    } else if (col % 3 === 1) {
//   then the second a background of orange and the third yellow. */
      returnedDiv.style.background = "orange";
      returnedDiv.textContent = "1";
       } else if (col % 3 === 2) {
        returnedDiv.style.background = "yellow";
       returnedDiv.textContent = "2";
      }
  }
    }
  }
///*  3D: Finally, let each div contain the text content representing the associated remainder 
//    when dividing by three. */
// done in previous part 
      
//
///***CODE */
//
//
///***EXPLANATION::
//images are as follows: task-1-images/Kiana_task1_part_two.png
//task-1-images//Kiana_part_three_create.png
//task-1-images//Kiana_part_three_first_grid.png
//task-1-images//Kiana_part_three_second_grid.png
// 
// * 
// */
//
///*************************************** */
///*** END PART THREE CREATE */ 
///*************************************** */