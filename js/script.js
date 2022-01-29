// Question 1
// My answer to question 1

const cat = {
    complain: function() {
        console.log("Meow");
    }
};

console.log(cat);

// Question 2
// My answer to question 2

const heading = document.querySelector("h3");

document.querySelector("h3").innerHTML = "Updated heading";

// Question 3
// My answer to question 3

heading.style.fontSize = "2em";

// Question 4
// My answer to question 4

heading.className = "subheading";

// Question 5
// My answer to question 5

const paragraphs = document.querySelectorAll("p");

console.dir(paragraphs);

for(let i = 0; i <paragraphs.length; i++) {
    console.dir(paragraphs[i].innerHTML);
    paragraphs[i].style.color = "red";
}




