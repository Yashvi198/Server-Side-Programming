/*Question 1. 
Write a JavaScript program to find all the index positions of a given word within a given string.*/
function findWordIndexes(inputString1, word1) {
    let indexes = [];
    let index = inputString1.indexOf(word1);
    while (index !== -1) {
        indexes.push(index);
        index = inputString1.indexOf(word1, index + 1);
    }
    return indexes;
}
// Example usage:
const inputString1 = "hello world world hello hello";
const word1 = "hello";
const indexes = findWordIndexes(inputString1, word1);
console.log(indexes); // Output: [0, 18, 24]


/*Question 2. 
Write a JavaScript program to find the first index of a given element in an array using the linear search algorithm.*/
function linearSearch(arr2, target) {
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] === target) {
            return i; // Return the index if found
        }
    }
    return -1; // Return -1 if the element is not found
}
// Example usage:
const arr2 = [9, 7, 18, 10, 3];
const target = 10;
const index = linearSearch(arr2, target);
console.log(index); // Output: 3 (index of element 8 in the array)
   

/*Question 3. 
Write a JavaScript program to find the first index of a given element in an array using the linear search algorithm.*/
function quickSort(arr3) {
    if (arr3.length <= 1) {
        return arr3; // Base case: if array is empty or has only one element, it's already sorted
    }
    const pivot = arr3[0]; // Choose the first element as the pivot
    const left = [];
    const right = [];
    for (let i = 1; i < arr3.length; i++) {
        if (arr3[i] < pivot) {
        left.push(arr3[i]);
        } 
        else {
            right.push(arr3[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}
// Example usage:
const arr3 = [3, 7, 5, 2, 18, 6, 14];
const sortedArr3 = quickSort(arr3);
console.log(sortedArr3); // Output: [2, 3, 5, 6, 7, 14, 18]


/*Question 4. 
Write a JavaScript program to sort a list of elements using Merge sort*/
function mergeSort(arr4) {
    if (arr4.length <= 1) {
        return arr4; // Base case: if array is empty or has only one element, it's already sorted
    }
    const middle = Math.floor(arr4.length / 2);
    const left = arr4.slice(0, middle);
    const right = arr4.slice(middle);
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
    return merge(sortedLeft, sortedRight);
}
function merge(left, right) {
let result = [];
let leftIndex = 0;
let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } 
        else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}
// Example usage:
const arr4 = [5, 3, 7, 2, 8, 6, 4];
const sortedArr4 = mergeSort(arr4);
console.log(sortedArr4); // Output: [2, 3, 4, 5, 6, 7, 8]


/*Question 5. 
Write a JavaScript program to sort a list of elements using Heapsort.*/
function heapSort(arr5) {
buildMaxHeap(arr5);
    for (let i = arr5.length - 1; i > 0; i--) {
        swap(arr5, 0, i);
        heapify(arr5, 0, i);
    }
return arr5;
}
function buildMaxHeap(arr5) {
const n = arr5.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr5, i, n);
    }
}
function heapify(arr5, i, size) {
let largest = i; // Initialize largest as root
const left = 2 * i + 1;
const right = 2 * i + 2;
    if (left < size && arr5[left] > arr5[largest]) {
        largest = left;
    }
    // Check if right child is larger than largest so far
    if (right < size && arr5[right] > arr5[largest]) {
        largest = right;
    }
    if (largest !== i) {
        swap(arr5, i, largest);
        heapify(arr5, largest, size);
    }
}
function swap(arr5, i, j) {
    const temp = arr5[i];
    arr5[i] = arr5[j];
    arr5[j] = temp;
}
// Example usage:
const arr5 = [5, 3, 7, 2, 8, 6, 4];
const sortedArr5 = heapSort(arr5);
console.log(sortedArr5); // Output: [2, 3, 4, 5, 6, 7, 8]
  

/*Question 6. 
Write a JavaScript program to sort a list of elements using Insertion sort.*/
function insertionSort(arr6) {
const n = arr6.length;
    for (let i = 1; i < n; i++) {
        let current = arr6[i];
        let j = i - 1;
        while (j >= 0 && arr6[j] > current) {
            arr6[j + 1] = arr6[j];
            j--;
        }
    // Place current at its correct position in sorted part
        arr6[j + 1] = current;
    }
    return arr6;
}
// Example usage:
const arr6 = [5, 3, 7, 2, 8, 6, 4];
const sortedArr6 = insertionSort(arr6);
console.log(sortedArr6); // Output: [2, 3, 4, 5, 6, 7, 8]


/*Question 7. 
Write a JavaScript program to sort a list of elements using Bubble sort*/
function bubbleSort(arr7) {
const n = arr7.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr7[j] > arr7[j + 1]) {
                // Swap arr7[j] and arr7[j+1]
                const temp = arr7[j];
                arr7[j] = arr7[j + 1];
                arr7[j + 1] = temp;
            }
        }
    }
    return arr7;
}
// Example usage:
const arr7 = [5, 3, 7, 2, 8, 6, 4];
const sortedArr7 = bubbleSort(arr7);
console.log(sortedArr7); // Output: [2, 3, 4, 5, 6, 7, 8]


/*Question 8.
Write a JavaScript program to sort the characters in a string alphabetically.*/
function sortStringAlphabetically(str8) {
    return str8.split('').sort().join('');
}
// Example usage:
const inputString8 = "hello world";
const sortedString8 = sortStringAlphabetically(inputString8);
console.log(sortedString8); // Output: " dehllloorw"

 
/*Question 9.   
Write a JavaScript program to check if a numeric array is sorted or not.*/
function isSorted(arr9) {
// Check if every element is less than or equal to the next element
    for (let i = 0; i < arr9.length - 1; i++) {
        if (arr9[i] > arr9[i + 1]) {
            return false; 
        }
    }
    return true;
}
// Example usage:
const sortedArr9 = [1, 2, 3, 4, 5];
const unsortedArr9 = [5, 3, 7, 2, 8];
console.log(isSorted(sortedArr9)); // Output: true
console.log(isSorted(unsortedArr9)); // Output: false


/*Question 10. 
Write a JavaScript function to validate whether a given value type is null or not.*/
function isNull(value10) {
    return value10 === null;
}
// Example usage:
console.log(isNull(null)); // Output: true
console.log(isNull(5)); // Output: false
console.log(isNull("Hello")); // Output: false


/*Question 11. 
Write a JavaScript function to validate whether a given value is a number or not.*/
function isNumber(value11) {
    return typeof value11 === 'number' && !isNaN(value11);
}
// Example usage:
console.log(isNumber(5)); // Output: true
console.log(isNumber("Hello")); // Output: false
console.log(isNumber(null)); // Output: false
console.log(isNumber(undefined)); // Output: false


/*Question 12. 
Write a JavaScript function to validate whether a given value is RegExp or not.*/
function isRegExp(value12) {
    return value12 instanceof RegExp;
}
// Example usage:
console.log(isRegExp(/hello/)); // Output: true
console.log(isRegExp(new RegExp('hello'))); // Output: true
console.log(isRegExp("hello")); // Output: false
console.log(isRegExp(null)); // Output: false


/*Question 13. 
Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.*/
var student = {
    name: 'Abhishek',
    sclass: 'XII',
    rollno: 3,
};
  
console.log('Original Object: ', student);
delete student['rollno'];
console.log('Modified Object', student);
  

/*Question 14. 
Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.*/
var library = [
    {
      author: 'J.K. Rowling',
      title: 'Harry Potter and the Sorcerer\'s Stone',
      readingStatus: true,
    },
    {
      author: 'George Orwell',
      title: '1984',
      readingStatus: true,
    },
    {
      author: 'Harper Lee',
      title: 'To Kill a Mockingbird',
      readingStatus: false,
    },
];
  
library.forEach((book) => {
    console.log(book['title'], ':', book['readingStatus']);
});
  

/*Question 15. Write a JavaScript program to create a clock.
Note: The output will come every second.
Expected Console Output :
"14:37:42"
"14:37:43"
"14:37:44"
"14:37:45"
"14:37:46"
"14:37:47"*/
// Function to display the current time in HH:MM:SS format
function displayCurrentTime() {
    // Create a new Date object to get the current time
    const currentTime = new Date();
    // Extract hours, minutes, and seconds from the date object
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');
    // Display the time in the format HH:MM:SS
    console.log(`${hours}:${minutes}:${seconds}`);
}
// Function to start the clock
function startClock() {
// Set an interval to display the current time every second
    setInterval(displayCurrentTime, 1000);
}
  // Start the clock
startClock();
  

/*Question 16. Write a JavaScript function to parse an URL.*/
function parseURL(url) {
const parsedURL = new URL(url);
    return {
        protocol: parsedURL.protocol,
        hostname: parsedURL.hostname,
        port: parsedURL.port,
        pathname: parsedURL.pathname,
        search: parsedURL.search,
        hash: parsedURL.hash,
        username: parsedURL.username,
        password: parsedURL.password,
        origin: parsedURL.origin,
    };
}
// Example usage:
const url = "https://www.example.com:8080/path/to/page?query=string#section";
const parsedURL = parseURL(url);
console.log(parsedURL);


/*Question 17. Write a JavaScript function to split a string and convert it into an array of words.*/
function splitStringIntoWords(str17) {
// Using regular expression to split the string by non-word characters
    return str17.split(/\W+/).filter(word17 => word17.length > 0);
}
// Example usage:
const sentence = "Hello world, how are you?";
const wordsArray = splitStringIntoWords(sentence);
console.log(wordsArray); // Output: ["Hello", "world", "how", "are", "you"]


/*Question 18. 
Write a JavaScript function that takes a string with both lowercase and upper case letters as a parameter. It converts upper case letters to lower case, and lower case letters to upper case.*/
// Function to convert lowercase string to uppercase and uppercase string to lowercase
function convertCase(lowercase, uppercase) {
    // Convert lowercase string to uppercase
    const upperConverted = lowercase.toUpperCase();
    // Convert uppercase string to lowercase
    const lowerConverted = uppercase.toLowerCase();
    // Log the converted strings
    console.log('Converted to uppercase:', upperConverted);
    console.log('Converted to lowercase:', lowerConverted);
}
  // Main function to demonstrate the conversion
function main() {
    // Define lowercase and uppercase strings
    const lowercaseString = 'abc';
    const uppercaseString = 'DEF';
    // Perform case conversion and display the results
    convertCase(lowercaseString, uppercaseString);
}
  // Execute the main function
main();
  

/*Question 19. 
Write a JavaScript function that returns the number of minutes in hours and minutes.
Input :
   console.log(timeConvert(200));
Output :
   "200 minutes = 3 hour(s) and 20 minute(s)."*/
class Stack {
    constructor() {
      this.array = [];
      this.size = 0;
    }
    push(val) {
      this.array.push(val);
      this.size++;
    }
    pop(val) {
      if (this.size == 0) return -1;
      const temp = this.array[this.size - 1];
      this.array.splice(this.size - 1);
      this.size--;
      return temp;
    }
    isEmpty() {
      return this.size == 0;
    }
}
function main() {
    const stack = new Stack();
    console.log(stack.isEmpty());
    stack.push(1);
    console.log(stack.isEmpty());
}
main();
  
   
/*Question 20. 
Write a JavaScript program to implement a stack that checks if a given element is present or not in the stack.*/
class Stack1 {
    constructor() {
        this.items = [];
    }
    // Push element to the stack
    push(element) {
        this.items.push(element);
    }
    // Pop element from the stack
    pop() {
        if (this.items.length == 0) {
            return "Underflow";
        }
        return this.items.pop();
    }
    // Peek at the top element of the stack
    peek() {
        return this.items[this.items.length - 1];
    }
    // Check if element is present in the stack
    contains(element) {
        return this.items.includes(element);
    }
    // Check if stack is empty
    isEmpty() {
        return this.items.length == 0;
    }
    // Print the stack elements
    printStack() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        return str;
    }
}
   // Example usage:
let stack1 = new Stack1();
stack1.push(10);
stack1.push(20);
stack1.push(30);
console.log("Stack elements:", stack1.printStack()); // Output: 10 20 30
console.log("Is 20 present in the stack?", stack1.contains(20)); // Output: true
console.log("Is 40 present in the stack?", stack1.contains(40)); // Output: false


/*Question 21. 
Write a JavaScript program to check whether a single linked list is empty or not. Return true otherwise false.*/
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    // Check if the linked list is empty
    isEmpty() {
        return this.head === null;
    }
}
// Example usage:
let list = new LinkedList();
console.log("Is the linked list empty?", list.isEmpty()); // Output: true
list.head = new Node(10);
console.log("Is the linked list empty?", list.isEmpty()); // Output: false


/*Question 22. 
Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.*/
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    // Method to calculate rectangle area
    calculateArea() {
        return this.width * this.height;
    }
    // Method to calculate rectangle perimeter
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
// Create an instance of Rectangle class
let rectangle = new Rectangle(5, 8);
// Calculate area and perimeter of the rectangle
let area = rectangle.calculateArea();
let perimeter = rectangle.calculatePerimeter();
console.log("Rectangle Area:", area); // Output: 40
console.log("Rectangle Perimeter:", perimeter); // Output: 26


/*Question 23. 
Write a JavaScript program to create a slideshow that changes the displayed image when a next or previous button is clicked.*/
/* <!DOCTYPE html>
<html>
<head>
    <title>Slideshow</title>
    <style>
        .slideshow-container {
            position: relative;
            max-width: 500px;
            margin: auto;
        }
        .mySlides {
            display: none;
        }
        .prev, .next {
            cursor: pointer;
            position: absolute;
            top: 50%;
            width: auto;
            padding: 16px;
            margin-top: -22px;
            color: white;
            font-weight: bold;
            font-size: 18px;
            transition: 0.6s ease;
            border-radius: 0 3px 3px 0;
        }
        .next {
            right: 0;
            border-radius: 3px 0 0 3px;
        }
        .prev:hover, .next:hover {
            background-color: rgba(0, 0, 0, 0.8);
        }
    </style>
</head>
<body>
   <div class="slideshow-container">
    <div class="mySlides">
        <img src="image1.jpg" style="width:100%">
    </div>
    <div class="mySlides">
        <img src="image2.jpg" style="width:100%">
    </div>
    <button class="prev" onclick="plusSlides(-1)">❮ Previous</button>
    <button class="next" onclick="plusSlides(1)">Next ❯</button>
   </div>
    <script>
        let slideIndex = 1;
        showSlides(slideIndex);
        function plusSlides(n) {
            showSlides(slideIndex += n);
        }
        function showSlides(n) {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            if (n > slides.length) { slideIndex = 1; }
            if (n < 1) { slideIndex = slides.length; }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[slideIndex - 1].style.display = "block";
        }
    </script>
</body>
</html> */


/*Question 24. 
Write a JavaScript program that uses a try-catch block to catch and handle a 'SyntaxError' when parsing an invalid JSON string.*/
try {
    // Try to parse an invalid JSON string
    let invalidJSON = '{"name": "John", "age": 30, "city": "New York}';
    let parsedJSON = JSON.parse(invalidJSON);
    console.log(parsedJSON);
} 
catch (error) {
    // Catch and handle the SyntaxError
    if (error instanceof SyntaxError) {
        console.log("Caught a SyntaxError:", error.message);
    } else {
    // Handle other errors
        console.log("Caught an error:", error);
    }
}
   
   
/*Question 25. 
Write a JavaScript program to redirect to a specified URL.*/
// Redirect to a specified URL
function redirectTo(url) {
    window.location.href = url;
}
// Example usage:
redirectTo("https://www.example.com");