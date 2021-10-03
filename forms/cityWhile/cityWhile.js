
let wantToContinue = true
let city = []
let enterCity = ""

while (wantToContinue) {
  let enterCity = prompt("Enter a city:");
  city.push(enterCity)
  wantToContinue = confirm("Do you want to enter another city")
  }
  
  i = 0
  
  while (i < city.length) {
    console.log(city[i].toLowerCase())
    i =  +  1 
    }