function populate() {
    const requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
    const request = new Request(requestURL);
  
    fetch(request)
      .then(response => response.text())
      .then(superHeroesText => {
        const superHeroes = JSON.parse(superHeroesText);
        populateHeader(superHeroes);
        populateHeroes(superHeroes);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  function populateHeader(obj) {
    const header = document.querySelector("header");
    const myH1 = document.createElement("h1");
    myH1.textContent = obj.squadName;
    header.appendChild(myH1);
  
    const myPara = document.createElement("p");
    myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
    header.appendChild(myPara);
  }

  function populateHeroes(obj) {
    const section = document.querySelector("section");
    const heroes = obj.members;
  
    for (const hero of heroes) {
      const myArticle = document.createElement("article");
      const myH2 = document.createElement("h2");
      const myPara1 = document.createElement("p");
      const myPara2 = document.createElement("p");
      const myPara3 = document.createElement("p");
      const myList = document.createElement("ul");
  
      myH2.textContent = hero.name;
      myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
      myPara2.textContent = `Age: ${hero.age}`;
      myPara3.textContent = "Superpowers:";
  
      const superPowers = hero.powers;
      for (const power of superPowers) {
        const listItem = document.createElement("li");
        listItem.textContent = power;
        myList.appendChild(listItem);
      }
  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);
  
      section.appendChild(myArticle);
    }
  }

  //-------- daugiau herojų

  // function populateHeroes(obj) {
  //   const section = document.querySelector("section");
  //   const heroes = obj.members;
  
  //   heroes.forEach(hero => {
  //     const myArticle = createHeroArticle(hero);
  //     section.appendChild(myArticle);
  //   });
  // }
  
  // function createHeroArticle(hero) {
  //   const myArticle = document.createElement("article");
  //   const myH2 = document.createElement("h2");
  //   const myPara1 = document.createElement("p");
  //   const myPara2 = document.createElement("p");
  //   const myPara3 = document.createElement("p");
  //   const myList = document.createElement("ul");
  
  //   myH2.textContent = hero.name;
  //   myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
  //   myPara2.textContent = `Age: ${hero.age}`;
  //   myPara3.textContent = "Superpowers:";
  
  //   hero.powers.forEach(power => {
  //     const listItem = document.createElement("li");
  //     listItem.textContent = power;
  //     myList.appendChild(listItem);
  //   });
  
  //   myArticle.appendChild(myH2);
  //   myArticle.appendChild(myPara1);
  //   myArticle.appendChild(myPara2);
  //   myArticle.appendChild(myPara3);
  //   myArticle.appendChild(myList);
  
  //   return myArticle;
  // }


  //------- keisti "secret identity"

  // function createEditButton(hero) {
  //   const button = document.createElement("button");
  //   button.textContent = "Edit Secret Identity";
  //   button.addEventListener("click", () => {
  //     const newIdentity = prompt("Enter new secret identity:", hero.secretIdentity);
  //     if (newIdentity) {
  //       hero.secretIdentity = newIdentity;
  //       updateHeroArticle(hero);
  //     }
  //   });
  //   return button;
  // }

  //------- keisti amžių

  // function createEditAgeButton(hero) {
  //   const button = document.createElement("button");
  //   button.textContent = "Edit Age";
  //   button.addEventListener("click", () => {
  //     const newAge = prompt("Enter new age:", hero.age);
  //     if (newAge) {
  //       hero.age = newAge;
  //       updateHeroArticle(hero);
  //     }
  //   });
  //   return button;
  // }

  //------- pridėti/šalinti supergalias

  // function createAddPowerButton(hero) {
  //   const button = document.createElement("button");
  //   button.textContent = "Add Superpower";
  //   button.addEventListener("click", () => {
  //     const newPower = prompt("Enter new superpower:");
  //     if (newPower) {
  //       hero.powers.push(newPower);
  //       updateHeroArticle(hero);
  //     }
  //   });
  //   return button;
  // }
  
  // function createRemovePowerButton(hero) {
  //   const button = document.createElement("button");
  //   button.textContent = "Remove Superpower";
  //   button.addEventListener("click", () => {
  //     const powerToRemove = prompt("Enter superpower to remove:");
  //     const index = hero.powers.indexOf(powerToRemove);
  //     if (index !== -1) {
  //       hero.powers.splice(index, 1);
  //       updateHeroArticle(hero);
  //     }
  //   });
  //   return button;
  // }

  //------- atnaujinti herojų straipsnius
  
  // function updateHeroArticle(hero) {
  //   const articles = document.querySelectorAll("article");
  //   articles.forEach(article => {
  //     if (article.querySelector("h2").textContent === hero.name) {
  //       article.querySelector("p").textContent = `Secret identity: ${hero.secretIdentity}`;
  //       article.querySelectorAll("p")[1].textContent = `Age: ${hero.age}`;
        
  //       const ul = article.querySelector("ul");
  //       ul.innerHTML = "";
  //       hero.powers.forEach(power => {
  //         const listItem = document.createElement("li");
  //         listItem.textContent = power;
  //         ul.appendChild(listItem);
  //       });
  //     }
  //   });
  // }


  populate();
