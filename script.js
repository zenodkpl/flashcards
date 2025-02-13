const flashcards = [
  { topic: "HTML Elements", question: "What is an HTML element?", answer: "An HTML element is a building block of a webpage defined by a start tag, content, and an end tag." },
  { topic: "HTML Elements", question: "Name a common container element in HTML.", answer: "The <div> element is commonly used as a container for grouping and styling content." },
  { topic: "HTML Elements", question: "What does the <a> tag do?", answer: "The <a> tag defines a hyperlink, which is used to link from one page to another." },
  { topic: "HTML Elements", question: "What is the purpose of the <img> tag?", answer: "The <img> tag is used to embed images in an HTML document." },
  { topic: "HTML Elements", question: "How is a self-closing tag represented in HTML5?", answer: "In HTML5, self-closing tags like <br> or <img> don’t require a closing slash." },

  { topic: "HTML Attribute", question: "What is an HTML attribute?", answer: "An HTML attribute provides additional information about an element, typically in a key-value pair." },
  { topic: "HTML Attribute", question: "Which attribute is used to specify a unique identifier for an element?", answer: "The 'id' attribute is used to assign a unique identifier to an element." },
  { topic: "HTML Attribute", question: "What attribute is used to link an external stylesheet?", answer: "The 'href' attribute in the <link> tag is used to link an external stylesheet." },
  { topic: "HTML Attribute", question: "How can you add inline styles to an HTML element?", answer: "By using the 'style' attribute to include CSS directly in the element." },
  { topic: "HTML Attribute", question: "Which attribute provides alternative text for an image?", answer: "The 'alt' attribute provides alternative text describing the image." },

  { topic: "HTML Semantics", question: "What are semantic HTML elements?", answer: "Semantic HTML elements clearly describe their meaning both to the browser and the developer (e.g., &lt;header&gt;, &lt;footer&gt;, &lt;article&gt;)." },
  { topic: "HTML Semantics", question: "Why is semantic HTML important?", answer: "It improves accessibility, SEO, and code readability by conveying the structure and meaning of the content." },
  { topic: "HTML Semantics", question: "Name a semantic element that defines the main content of a page.", answer: "The <main> element is used to define the primary content of a page." },
  { topic: "HTML Semantics", question: "What is the purpose of the <nav> element?", answer: "The <nav> element is used to define a section that contains navigation links." },
  { topic: "HTML Semantics", question: "Which semantic element is used for self-contained content that could be distributed independently?", answer: "The <article> element is used for self-contained content like blog posts or news articles." },

  { topic: "HTML Style Guide", question: "What is the purpose of an HTML style guide?", answer: "An HTML style guide provides conventions and best practices for writing clean, consistent, and maintainable code." },
  { topic: "HTML Style Guide", question: "Why should developers follow a style guide?", answer: "Following a style guide improves code readability, maintainability, and collaboration among team members." },
  { topic: "HTML Style Guide", question: "What naming convention might a style guide suggest for classes and IDs?", answer: "A style guide often recommends using meaningful, consistent, and lowercase names, sometimes with hyphenation (e.g., .main-content)." },
  { topic: "HTML Style Guide", question: "How does proper indentation help in HTML coding?", answer: "Proper indentation makes the document structure clearer and easier to navigate, improving readability." },
  { topic: "HTML Style Guide", question: "What is one benefit of using semantic class names?", answer: "Semantic class names improve clarity, making it easier to understand the purpose of elements in the code." },

  { topic: "CSS Position", question: "What does the CSS 'position' property control?", answer: "It controls how an element is positioned in the document, including its placement relative to its normal flow." },
  { topic: "CSS Position", question: "List the possible values for the 'position' property.", answer: "The possible values are static, relative, absolute, fixed, and sticky." },
  { topic: "CSS Position", question: "How does 'position: relative' affect an element?", answer: "It positions an element relative to its normal position without removing it from the document flow." },
  { topic: "CSS Position", question: "What happens when an element is given 'position: absolute'?", answer: "An absolutely positioned element is removed from the normal flow and is positioned relative to its closest positioned ancestor." },
  { topic: "CSS Position", question: "When would you use 'position: fixed'?", answer: "You use 'position: fixed' to position an element relative to the viewport, ensuring it remains visible during scrolling." },

  { topic: "CSS Simple Selector", question: "What is a CSS simple selector?", answer: "A CSS simple selector selects elements based on their name, id, or class." },
  { topic: "CSS Simple Selector", question: "How do you select an element by its class using a CSS simple selector?", answer: "By prefixing the class name with a dot (.), e.g., .classname." },
  { topic: "CSS Simple Selector", question: "How do you select an element by its ID using CSS?", answer: "By prefixing the ID with a hash (#), e.g., #elementId." },
  { topic: "CSS Simple Selector", question: "What does the universal selector (*) do in CSS?", answer: "It selects all elements in the document." },
  { topic: "CSS Simple Selector", question: "Can you combine an element type with a class in a selector? Provide an example.", answer: "Yes, for example, div.container selects all <div> elements with the class 'container'." },

  { topic: "CSS Attribute Selector", question: "What is a CSS attribute selector?", answer: "A CSS attribute selector targets elements based on the presence or value of a given attribute." },
  { topic: "CSS Attribute Selector", question: "How do you select elements with a specific attribute value?", answer: "Using the syntax [attribute='value'], e.g., [type='text']." },
  { topic: "CSS Attribute Selector", question: "What does the attribute selector [attribute] do?", answer: "It selects all elements that have the specified attribute, regardless of its value." },
  { topic: "CSS Attribute Selector", question: "How do you select elements where an attribute value starts with a specific string?", answer: "By using the selector [attribute^='value'], e.g., [href^='https']." },
  { topic: "CSS Attribute Selector", question: "Which selector is used to match elements with an attribute containing a specific word?", answer: "The selector [attribute~='value'] matches elements whose attribute value is a space-separated list containing that word." },

  { topic: "CSS Combinators", question: "What are CSS combinators used for?", answer: "They are used to combine selectors to target elements based on their relationships in the DOM." },
  { topic: "CSS Combinators", question: "What does the descendant combinator (a space) do?", answer: "It selects elements that are descendants of another element." },
  { topic: "CSS Combinators", question: "How does the child combinator (>) function?", answer: "It selects only the direct children of a specified element." },
  { topic: "CSS Combinators", question: "What is the adjacent sibling combinator (+) used for?", answer: "It selects the element that immediately follows another element, sharing the same parent." },
  { topic: "CSS Combinators", question: "Explain the general sibling combinator (~).", answer: "It selects all sibling elements that follow the specified element, not just the immediate next one." },
];

// Shuffle the entire flashcards array:
shuffle(flashcards);

let currentIndex = 0;
const card = document.getElementById("card");
const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");

// Helper function to update flashcard content.
function updateFlashcard(index) {
const flashcard = flashcards[index];
questionEl.innerHTML = `<div class="topic">${flashcard.topic}</div><div class="content">${flashcard.question}</div>`;
answerEl.innerHTML = `<div class="topic">${flashcard.topic}</div><div class="content">${flashcard.answer}</div>`;
}

// Initialize the first flashcard.
updateFlashcard(currentIndex);

card.addEventListener("click", () => {
card.classList.toggle("flipped");
if (card.classList.contains("flipped")) {
nextBtn.style.display = "block";
backBtn.style.display = "block";
} else {
nextBtn.style.display = "none";
backBtn.style.display = "none";
}
});

nextBtn.addEventListener("click", (event) => {
event.stopPropagation();
card.classList.remove("flipped");
nextBtn.style.display = "none";
backBtn.style.display = "none";
setTimeout(() => {
currentIndex = (currentIndex + 1) % flashcards.length;
updateFlashcard(currentIndex);
}, 500);
});

backBtn.addEventListener("click", (event) => {
event.stopPropagation();
card.classList.remove("flipped");
nextBtn.style.display = "none";
backBtn.style.display = "none";
setTimeout(() => {
currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
updateFlashcard(currentIndex);
}, 500);
});

// Fisher-Yates Shuffle function
function shuffle(array) {
let currentIndex = array.length, randomIndex;
while (currentIndex !== 0) {
randomIndex = Math.floor(Math.random() * currentIndex);
currentIndex--;
[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
}
return array;
}