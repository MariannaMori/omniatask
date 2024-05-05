
// Write a same_chars function, it should take word "programmer" and two numbers to represent position of characters
// it needs to tell us if indexes/letters of those positions are the same or not and give us a true or false statement

function same_chars(str, index1, index2) {
    // Check if both indexes/letters are within the boundaries of the string
    if (index1 < 0 || index1 >= str.length || index2 < 0 || index2 >= str.length) {
        return false; // If any letter is out of string, return false
    }
    
    // Compare letters in the positions
    return str[index1] === str[index2]; // If characters are the same, return true; if not, return false
}

// Test cases for the browser console using the provided examples and two additional examples
console.log(same_chars("programmer", 6, 7)); // true
console.log(same_chars("programmer", 0, 4)); // false
console.log(same_chars("programmer", 0, 12)); // false
console.log(same_chars("programmer", 1, 9)); // true
console.log(same_chars("programmer", 4, 5)); // false

