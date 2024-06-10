// for in - Objects

let games = {
    racing: 'NFS',
    action: 'Prince of Prussia'
}

for (const key in games) {
    // console.log(`${key} games popular series: ${games[key]}`);

    // OUTPUT
    // racing games popular series: NFS
    // action games popular series: Prince of Prussia
}

// Can arrays be iterated with for in ?

let languages = ['JavaScript', 'Swift', 'C++', 'Python', 'Java']

for (const key in languages) {
    // console.log(`Index: ${key}, Value: ${languages[key]}`);

    // OUTPUT
    // Index: 0, Value: JavaScript
    // Index: 1, Value: Swift 
    // Index: 2, Value: C++   
    // Index: 3, Value: Python
    // Index: 4, Value: Java 
}

// Can maps be iterated with for in ?

let langCode = new Map()

langCode.set('js', 'JavaScript')
langCode.set('rb', 'Ruby')
langCode.set('cpp', 'C++')
langCode.set('py', 'Python')

// No Error, No Output
for (const key in langCode) {
    // console.log(`file: ${key}, language: ${langCode[key]}`);
}