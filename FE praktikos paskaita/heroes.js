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
    const myH1 = createHeaderElement("h1", obj.squadName);
    header.appendChild(myH1);
  
    const myPara = createHeaderElement("p", `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`);
    header.appendChild(myPara);
  }
  
  function createHeaderElement(tag, textContent) {
    const element = document.createElement(tag);
    element.textContent = textContent;
    return element;
  }
  
  function populateHeroes(obj) {
    const section = document.querySelector("section");
    const heroes = obj.members;
  
    heroes.forEach(hero => {
      const myArticle = createHeroArticle(hero);
      section.appendChild(myArticle);
    });
  }
  
  function createHeroArticle(hero) {
    const myArticle = document.createElement("article");
    const myH2 = createHeroElement("h2", hero.name);
    const myPara1 = createHeroElement("p", `Secret identity: ${hero.secretIdentity}`);
    const myPara2 = createHeroElement("p", `Age: ${hero.age}`);
    const myPara3 = createHeroElement("p", "Superpowers:");
    const myList = createHeroPowersList(hero.powers);
  
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);
  
    return myArticle;
  }
  
  function createHeroElement(tag, textContent) {
    const element = document.createElement(tag);
    element.textContent = textContent;
    return element;
  }
  
  function createHeroPowersList(powers) {
    const myList = document.createElement("ul");
    powers.forEach(power => {
      const listItem = document.createElement("li");
      listItem.textContent = power;
      myList.appendChild(listItem);
    });
    return myList;
  }
  
  populate();