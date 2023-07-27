// This is a program to check whether a string is palindrome.
/*A palindrome is a word, number, phrase, or other sequence of 
symbols that reads the same backwards as forwards, such as madam or racecar */

function Palin(str) {

    // length 
    const len = str.length;

    
    for (let i = 0; i < len/2; i++) {

        
        if (string[i] !== string[len - 1 - i]) {
            alert( 'It is not a palindrome');
        }
    }
    alert( 'It is a palindrome');
}

 const string = prompt('Enter a string or number: ');

 const value = Palin(string);

 console.log(value);



