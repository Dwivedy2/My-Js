// forEach

const codingLang = ["C++", "Java", "JavaScript", "Ruby", "Python"]

// codingLang.forEach(function (language) {
//     console.log("Language:", language);
// })

// OUTPUT
// Language: C++
// Language: Java      
// Language: JavaScript
// Language: Ruby      
// Language: Python 

// Simpler way, user => func

// codingLang.forEach( (language) => console.log(`Language: ${language}`) )

// Same output as above

const printMyName = () => console.log("Om")

// codingLang.forEach(printMyName)

// OUTPUT
// Om
// Om
// Om
// Om
// Om

const printLanguages = (language) => console.log(language);

// codingLang.forEach(printLanguages(language))
// Err: codingLang.forEach(printLanguages(language))

// codingLang.forEach(printLanguages)
// OUTPUT
// C++
// Java
// JavaScript
// Ruby
// Python

// codingLang.forEach( (language, index, arr) => console.log(language, ":", index, ":", arr) )

// OUTPUT
// C++ : 0 : [ 'C++', 'Java', 'JavaScript', 'Ruby', 'Python' ]
// Java : 1 : [ 'C++', 'Java', 'JavaScript', 'Ruby', 'Python' ]      
// JavaScript : 2 : [ 'C++', 'Java', 'JavaScript', 'Ruby', 'Python' ]
// Ruby : 3 : [ 'C++', 'Java', 'JavaScript', 'Ruby', 'Python' ]      
// Python : 4 : [ 'C++', 'Java', 'JavaScript', 'Ruby', 'Python' ] 

// Some real case scenerio
let languages = [
    {
        name: "JavaScript",
        fileExtention: "js"
    }, 
    {
        name: "Java",
        fileExtention: "java"
    }, 
    {
        name: "Python",
        fileExtention: "py"
    }
]

// languages.forEach( ({name: lang, fileExtention: extention}) => console.log(`${lang}- .${extention}`) )

// OUTPUT
// JavaScript- .js
// Java- .java
// Python- .py

for (const {name, fileExtention} of languages) {
    console.log(`${name}, .${fileExtention}`);
}