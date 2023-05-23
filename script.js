/* 
---CHEAT SHEETS---
https://dev.to/devsmitra/28-javascript-array-hacks-a-cheat-sheet-for-developer-5769
https://gist.github.com/rauschma/6cdeb4af7586aa03baed2f925e0a084b
https://clubmate.fi/array-cheat-sheet
https://array-methods.github.io/
*/


const tweets = [
    { text: 'Elon Musk is ..', id: 523423 },
    { text: 'World Cup Quatar is ..', id: 823423 },
    { text: 'Bye bye Cov-id..', id: 2039842 },
    { text: 'Meatballs, oh meatballs', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];


// Array.prototype.find()
// 1. Hitta kommentaren med id 823423

let searchTweet = tweets.find(tweet => tweet["id"] === 823423)
console.log(searchTweet.text)


// Array.prototype.findIndex() och Array.prototype.splice()
// 2. Hitta kommentaren med id 2039842 och ta sedan bord den kommentaren

let findTweet = tweets.findIndex(tweet => tweet["id"] == 2039842)
console.log(findTweet)

//tweets[2].text = ""

/*
Kan du återkomma till mig om du vet om det finns ett sätt att 
tömma kommentaren bara som jag gjort på rad 34 med denna metod? 
För nu försvinner liksom indexen.
*/ 
removeComment = tweets.splice(2, 1)
console.log(tweets)


// Array.prototype.map() och Array.prototype.join()
// 3. Generera HTML för en ul-lista där varje li innehåller värdet i 'text'. Lägg till ul-listan på index.html

let ul = document.createElement("ul")
document.body.appendChild(ul)

let liArray
liArray = tweets.map(element => element.text)

let listItem

for(i = 0; i < liArray.length; i++){
    let newLiArray = []
    newLiArray.push(liArray[i])


    let li = document.createElement("li")
    li.innerHTML = newLiArray.join()
    li.classList.add("list-item");
    ul.appendChild(li)

    listItem = document.querySelectorAll(".list-item")
}


  //------------------ny data att jobba med - authors -------------------  //
  const authors = [
    { first: 'Leo', last: 'Tolstoj', year: 1828, passed: 1910 },
    { first: 'Alexander', last: 'Pusjkin', year: 1799, passed: 1837 },
    { first: 'Fjodor', last: 'Dostojevski', year: 1821, passed: 1881 },
    { first: 'Anton', last: 'Tjechov', year: 1860, passed: 1904 },
    { first: 'Vladimir', last: 'Nabokov', year: 1899, passed: 1997 },
    { first: 'Maksim', last: 'Gorkij', year: 1868, passed: 1936 },
    { first: 'Koldan', last: 'Egorov', year: 1921, passed: 1821 },
    { first: 'Nikolaj', last: 'Gogl', year: 1809, passed: 1852 },
    { first: 'Leonid', last: 'Andrejev', year: 1871, passed: 1919 },
    { first: 'Mirra', last: 'Lokhvitskaya', year: 1869, passed: 1905 },
    { first: 'Ivan', last: 'Krylov', year: 1769, passed: 1844 },
    { first: 'Michail', last: 'Lermontov', year: 1814, passed: 1841 },
    { first: 'Alexandr', last: 'Blok', year: 1880, passed: 1921 }
  ];


// Array.prototype.findIndex() och Array.protype.splice() 
// 4. Det finns en fake-författare i authors - som är död före den är född! Hitta elementet och ta bort det med Array.prototype.splice()

let findAuthor = authors.findIndex(author => author["passed"] < author["year"])
removeAuthort = authors.splice(6, 1)


// Använd Array.prototype.map
// 5. Skapa en array med varje författares för- och efternamn från arrayen authors

let authorsFullName = authors.map(element => element.first + " " + element.last)
console.log(authorsFullName)

let authorsSeprateName = authors.map(element =>{
    const container = {}
    container.firstName = element.first
    container.lastName = element.last

    return container
})
console.log(authorsSeprateName)


// Array.prototype.filter()
// 6. Filtrera arrayen authors utifrån författare som föddes på 1800-talet

let authors1800 = authors.filter(element => element.year >= 1800 && element.year < 1900)
console.log(authors1800)


// Array.protoype.sort()
// 7. Sortera arrayen i stigande ordning utifrån födelseår - äldst till yngst

let authorSort = authors.sort((firstElement, secondElement) => firstElement.year - secondElement.year)
console.log(authorSort)


// Array.protoype.sort()
// 8. Sortera arrayen utifrån hur många år varje författare har levt - från flest år till minst år

let authorYears = authors.sort((firstElement, secondElement) => {
  a = firstElement.passed - firstElement.year
  b = secondElement.passed - secondElement.year

  return b - a
})

console.log(authorYears)


// Array.protype.reduce()
// 9. Beräkna hur totala antalet år som ALLA författare har levt

let authorTotalAge = authors.reduce((totalAge, author) => {
  let age = author.passed - author.year
  return totalAge + age

}, 0)

console.log("The total age of all authors combined is " + authorTotalAge + " years.")


  //------------------ny data att jobba med - players -------------------  //

  const players = [
    { name: 'Modrić, Luka', year: 1985 },
    { name: 'Christian, Eriksen', year: 1992 },
    { name: 'Griezmann, Antoine', year: 1991 },
    { name: 'Achraf, Hakimi', year: 1998 },
    { name: 'Martínez, Lautaro', year: 1997 }
  ];

// Array.prototype.some() 
// 10. Finns det någon spelare som är äldre än 35 år?

let player35 = players.some((player) => {
  let currentYear = new Date().getFullYear()

  if(currentYear - player.year > 35 ){
    console.log(player.name + " is over 35 years old.")
    return true
  }
})


// Array.prototype.every() 
// 11. Är alla spelare äldre än 20 år?

let playerOver20 = players.some((player) => {
  let currentYear = new Date().getFullYear()

  return currentYear - player.year < 20
  
})

console.log(playerOver20 ? "All players is not over 20 years old" : "All players is over 20 years old.")


  // Array.prototype.map() och Array.prototype.split()
  // 12. Gör om så att 'name' skrivs "förnamn efernamn" istället för nuvarande "efternamn, förnamn"

  let newPlayers = players.map(player => {
    let firstName = player.name.split(" ")
    let lastName = player.name.split(",")

    return {
      name: firstName[1] + " " + lastName[0],
      year: player.year
    }

  })

console.log(newPlayers)







