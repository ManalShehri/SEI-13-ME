var characters = [
  {
    name: "Daenerys Targaryen",
    bio:
      'The youngest child of King Aerys II — also known as the Mad King — Daenerys is known by many titles, including the Mother of Dragons, or Khaleesi (which simply means "queen" in Dothraki).',
    status: "alive",
    img: "daenerys_targaryan.png"
  },
  {
    name: "Khal Drogo",
    bio:
      'Khal Drogo is the leader of a Dothraki "khalasar" (tribe). He and Daenerys eventually come to care for one another, but the marriage begins under traumatic circumstances.',
    status: "dead",
    img: "khal_drogo.jpg"
  },
  {
    name: "Tyrion Lannister",
    bio:
      "Joanna Lannister died in childbirth when Tyrion when born. He's known for his cleverness and sharp tongue, though many derisively call him the Imp or Halfman.",
    status: "alive",
    img: "tyrian_lannister.png"
  },
  {
    name: "Sansa Stark",
    bio:
      "Sansa Stark was raised as a highborn lady who would one marry into another great house.",
    status: "alive",
    img: "sansa_stark.jpg"
  },
  {
    name: "Arya Stark",
    bio:
      "Arya has no desire to grow up in the confines of ladyship — she prefers swords to sewing.",
    status: "alive",
    img: "arya_stark.jpg"
  },
  {
    name: "Jon Snow",
    bio:
      "Said to be the bastard son of Ned Stark and a mystery woman, Jon is slightly ostracized from the rest of the Stark kids.",
    status: "alive",
    img: "jon_snow.jpg"
  }
];

const gotCharacters = document.querySelector(".got-characters");
const arrangeButton = document.getElementById("#arrange");

//  a function to display the content 
function displayContent(arr) {
  
  for(i in arr)
  {
    gotCharacters.innerHTML += 
    '<div class="character"><h3>' +arr[i].name+
    '</h3><img src="./img/'+arr[i].img+'" alt="'+arr[i].name+
    '" />'+'<p class="bio">'+arr[i].bio+'</p>'+
    '<button class="more-info">More info</button><button class="alive-or-dead">Status</button></div>';
  } 

  const moreInfoButtons = document.querySelectorAll(".more-info");
  const charactersDiv = document.querySelectorAll(".character");
  const statusButton = document.querySelectorAll(".alive-or-dead");
  const pTag = document.querySelectorAll(".bio");
  
  for (let i = 0; i < moreInfoButtons.length; i++) {
    // add event for each button
      moreInfoButtons[i].addEventListener("click", (event) => {
        event.preventDefault();
        // consle the name of charecter
        console.log(arr[i].name);
        // switch visibility 
        if (pTag[i].style.visibility === "visible")
        {
          pTag[i].style.visibility = "hidden"

        } else {
          pTag[i].style.visibility = "visible"

        }
      });
    } 

    for (let i = 0; i < statusButton.length; i++) {
      if(characters[i].status === 'dead')
      {
        // change the div's opacity if the charecter is dead
        charactersDiv[i].style.opacity = "0.5"
      }
    }
}
// display the contenet
displayContent(characters);

arrangeButton.addEventListener("click", (event) => {
  event.preventDefault();
  const sortedCharacters = characters.sort((a, b) => (a.name.toLowerCase() >= b.name.toLowerCase()) ? 1 : -1);
  gotCharacters.innerHTML = '';
  displayContent(sortedCharacters);
});

