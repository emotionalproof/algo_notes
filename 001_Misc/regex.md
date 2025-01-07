regex is wrapped in // forward slashed 
/z/
will find all instances letter z

will look for a match of the string inside of the //
[abc] will match any of the included characters

[^abc]  matches any characters not specified
ex. [^aeiou] will match all consonants 

[a-z] matches any characters in the range
[1-3a-c] matches anything between 1-3 and anything a-c inclusive

. matchez any character expect linebreaks 

\w matches any word charcter except linebreaks 
same as [A-Za-z0-9]


\d matches numeric digits 


\s matches any whitespace(spaces, tabs, linebreaks)


repeatin g a character code will look for two next to each other 
\w\w will look for two letter words (including _)

Quantifiers and more

+ Matches 1 or more preceeding token. must be at least 1
h+a will match any number of h's that come before a single a
ha+ will match any number of a's that come after a single h
h+a+ will match any number of h's that come before any number of a's


* matches zero or more of preceeding token
hi*m* will match every h and every number of i that immediately follow it (even zero) and any number of m's after that


{3} matches specfic quanity of previous token

{1,3} matches qty within a specific range

{4,} matches the specified qty or greater

? matches 0 or 1 of previous otken. basically it makes something optional 
colour matches color and colour


|
like the OR boolean operator 
\w+pp(y|ies) matches puppy puppies yuppy yuppies

Anchors
^ matches beginning of a string
^


$ matches end of string 

escape characters


\b word boundary character. white space or word boundary charcter like a hyphen or period

(?:)
non-capturing group


const timeRe = /\b([01]?[0-9]|2[0-3]):([0-5][0-9])(?::([0-5][0-9]))?/
wrap in / / 

timeRe.test(string)
returns true or false if match is found 


timeRe.exec(string) 
return matches it finds
null if no match
returns array 
0: the match
1: group 1
2: group 2
3: group 3