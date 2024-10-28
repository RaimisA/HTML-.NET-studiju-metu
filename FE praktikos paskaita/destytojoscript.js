btn_fetch_superheroes.onclick = () => {
 
    const url = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
    fetch(url)
        .then(response => {
            console.log("response status", response.status);
            return response.json()
        }) //Promise objektas sulaukiamas su then
        .then(result => {
            console.log("result", result);
            populateHeader(result);
            populateMembers(result);
        })
        .catch(error => {
            console.log("my error", error);
        })
};
function populateHeader(result) {
    const header = document.querySelector("#header");
    header.innerHTML =
        `<h1>
        ${result.squadName}
    </h1>
    <p>
        Hometown: ${result.homeTown} // Formed: ${result.formed}
    </p>`;
}

// populateMembers = (obj) => {
//     const membersdiv = document.querySelector("#members");
//     const heroes = obj.members; //turetu buti masyvas
//     heroes.forEach(hero => {
//         membersdiv.innerHTML += `
//     <article data-id=${hero.name}>
//         <h2>${hero.name}</h2>
//         <p>Secret identity: ${hero.secretIdentity}</p>
//         <p id="age">Age: ${hero.age}</p>
//         <p>Superpowers:
//             <ul>
//                 ${hero.powers.map(power => `<li>${power}</li>`).join("")}
//             </ul>
//         </p>
//     </article>`;
//     });

// }

const populateMembers = (obj) => {
    const membersdiv = document.querySelector("#members");
    membersdiv.innerHTML = ''; // Clear previous content
    const heroes = obj.members; // Should be an array
  
    heroes.forEach(hero => {
      const article = document.createElement("article");
      article.dataset.id = hero.name;
  
      const h2 = document.createElement("h2");
      h2.textContent = hero.name;
  
      const p1 = document.createElement("p");
      p1.textContent = `Secret identity: ${hero.secretIdentity}`;
  
      const p2 = document.createElement("p");
      p2.id = "age";
      p2.textContent = `Age: ${hero.age}`;
  
      const p3 = document.createElement("p");
      p3.textContent = "Superpowers:";
  
      const ul = document.createElement("ul");
      hero.powers.forEach(power => {
        const li = document.createElement("li");
        li.textContent = power;
        ul.appendChild(li);
      });
  
      article.appendChild(h2);
      article.appendChild(p1);
      article.appendChild(p2);
      article.appendChild(p3);
      article.appendChild(ul);
  
      membersdiv.appendChild(article);
    });
  };