//worst case of Naive
    // O(m(n - m + 1))
//worse case of KMP is O(n)

//uses degenerating property
//pattern having sam sub-patterns appearing more than once in the pattern
//of the pattern and improves the worst case 
//basic idea
    //whenever we detect a mismatch (after some matches)
    //we already know some of the characters in the text of the next window
//we take advantage of this information to avoid matching the characters that we know will match anyway

// txt = "AAAAABAAABA" 
// pat = "AAAA" 

// in the next step, we just need to compare index 3 of pattern
//with index 4 of text

//we need to pre-process pattern and prepare an interager array
//lps[] that tells us the count of characters to be skipped
//KMP algo preprocesses pat[] and constructs an auxiliary lps[]
//of size m (the same size of pattern) which is used to skip characters while matching
//the name lsp indicates longest proper prefix which is also suffix
    //a proper prefix is a prefix with whole string NOT allows
    //for example
        //prefixes of "ABC" are "", "A", "AB", "ABC"
        //proper prefixes are "", "A" and "AB"
        //suffixes of the string are "", "C", "BC", "ABC"
    //we search for lps in sub-patterns. more clearly we focus on substrings of patterns that are either prefix or suffix
//create a function that takes in
    //an array of characters from the pattern string
    //a variable M equal to the size of the pattern array
    //an array to hold the lps (longest suffix prefix)
// void computeLPSArray(char *pat, int M, int *lps)
// {
//     //declare variable 'len' and set to 0 which is the initial length of the lps array
//     int len = 0;
//     //set value of lps[0] to zero, since there is no possible proper prefix or suffix for a single character
//     lps[0] = 0;
//     //declare the iterative 'i' and set to 1
//     int i = 1;
//     //while the iterative is less than the length of the pattern array
//     while (i < M)
//     {
//         //if the char at pat[i] equals the char at index equal to the lps length
//         if (pat[i] == pat[len])
//         {
//             //increment len
//             len++;

//             lps[i] = len;
//             i++;
//         }
//         else // pat[i] != pat[len]
//         {
//             if (len != 0)
//             {
//                 len = lps[len - 1];
//             }
//             else
//             {
//                 lps[i] = 0;
//                 i++;
//             }
//         }
//     }
// }

// pat[] = [a,b,x,a,b]
// lps[] = []

//lps[i] stores length of the max matching proper prefix which is also a suffix, of the pattern pat[0..i]
//Let's start with lps[0], which will be 0 since there's no proper prefix or suffix possible for a single character string

// lps[] = [0]
//for lps[1], we have to take two characters from pat[] and check whether there' any substring which is both prefix and suffix
//there's only two different characters, pat[0] and pat[1]
//check if pat[i] == pat[len] => pat[1] == pat[0]
//since len == 0 => lps[i] = 0 and i++
//so, lps[1] will be 0 as well

// lps[] = [0, 0]
//for lps[2], since lps[1] is 0, we look for the first and last characters
    //in highlighted pat[] string
    //previous value in lps[] being 0 mans that there's no characters following the lps
    //property until previous index, i.e. until index 2
    //if pat[2] == pat[0] => A == X ?
    //it does not
    //lps[2] = 0; i++

// lps = [0, 0 , 0]
//for lps[3], 
    // here  the first and alt character are the same, thus we increase the value of lps[3] t0 1
    //pat[3] == pat[0] ? => A == A?
    //len++, 0 => 1
    //lps[3] = 1
    //i++ => 4

// lps = [0, 0, 0, 1]
//lps[4]
    //lps[3] is 1, so we compare the last character of the highlighted pat[] string with character at index 1 
    //pat[4] == pat[1] ? => B == B? 
    //len++, 1 => 2
    //lps[4] = 2
    //i++ => 5
    //now, as the comparared characters are same, we increase the value of lps[4]  to 2
    //we looked for the second char because from the previous lps[] i.e 1, there's already 1 character following the property
    //and since the character is a suffix also, it will already be present at the end,
        // so we directly look for the second character
// lps = [0, 0, 0, 1, 2]


//Searching the pattern
//to search for a pattern pat[] in a string txt[] we will  be using the lps[] array we just made
// we use a value from lps[] to decide the next characters to be match
//the idea is to not match a character that we know will anyway match 


//let's say that we have to find pat[] in txt[]
//we already have the lps[] array for pat[]

//we start with comparing pat[] with text[] from the very first character
//we keep comparing the part of txt[] in the window wth pat[] character by character until a mismatch is found
// since there's no mismatch we first mark that pattern was found then we move our window foward
//this movement is determiend using the lps[] array. as in this case match was found until index 4, we check lps[4]
//lps[4] is 2, therefore we start comparing the next char of txt[] from index 2 of pat[] until a mismatch is found
//the characters do not match therefore we look for value of lps[] array for substring just behind the current char , ie lps[1]
// lps[1] is 0, ie the lps for pat[0 to 1], thus we start comparing the txt[] from index 0 of pat[] until a mismatch is found
//since there was no mismatch until the last index, we mark the pattern fwas found and also the txt[] string has ended so search process is complete 

// txt = abxababxab
// pat = abxab
// lps = [0,0,0,1,2]

// void KMPSearch(char *pat, char *txt)
// {
//     int M = strlen(pat) //10
//     int N = strlen(txt) //5

//     int lps[M];

//     computeLPSArray(pat, M, lps);

//     int i = 0;
//     int j = 0;
//     while (i < N)
//     {
//         if (pat[j] == txt[i])
//         {
//             j++;
//             i++;
//         }

//         if (j == M)
//         {
//             print("Found pattern at index &d \n", i-j);
//             j = lps[j - 1]
//         }
//         else if (i < N && pat[j] != txt[i])
//         {
//             if (j != 0)
//                 j = lps[j - 1];
//             else 
//                 i = i + 1
//         }
//     }
// }



function lpsArray(pattern) {
    let len = 0
    let lps = []
    lps[0] = 0

    let i = 1
    while (i < pattern.length) {
        if (pattern[i] === pattern[len]) {
            len++
            lps.push(len)
            i++
        } else {
            if (len !== 0) {
                len = lps[len - 1]
            } else {
                lps.push(0)
                i++
            }
        }
    }
    return lps
}


function findPattern(string, pattern) {
    if (string.length === 0) return 0

    let count = 0
    let sLength = string.length
    let pLength = pattern.length

    let lpsArr = lpsArray(pattern)

    let i = 0
    let j = 0
    while (i < string.length) {
        let pChar = pattern[j]
        let sChar = string[i]
        if (pattern[j] === string[i]) {
            j++
            i++
        }

        if (j === pattern.length) {
            count++
            j = lpsArr[j - 1]
        } else if (i < string.length && pattern[j] != string[i]) {
            if (j !== 0) {
                j = lpsArr[j - 1]
            } else {
                i++
            }
        }
    }
    return count
}

let string = "swoswosw"
let pattern = "swosw"

console.log(findPattern(string, pattern))
