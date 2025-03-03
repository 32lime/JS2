const modals = document.querySelectorAll('.modal')

const body = document.querySelector('body')

const darkButton = document.querySelector('.darkbutton')
const dropdowns = document.querySelectorAll('.dropdown')

let dark = false

let dropdownOpen = false

for (const modal of modals){ // Looppi antaa kaikille modaaleille eventlistenerin
    modal.addEventListener('click', ()=> { //Nyt niitä on vaa yks mut ehkä lisään niitä myöhemmin...

        const popUpDiv = document.createElement('div');  //Popuppaava näkymä on yksi divi
        const exitDiv = document.createElement('div'); // Jonka sisälle oma divi 'sulje' napille

        popUpDiv.classList.add('popup')
        exitDiv.classList.add('exit')

        exitDiv.addEventListener('click', ()=> {
            document.querySelector('.popup').remove() // sulje napille oma eventlisteneri, poistaa koko popupdivin (samalla itsensä)

        })

        const popupText = document.createElement('p');
        popupText.classList.add('popupText')
        popupText.innerText = 
        "Noniin avasit tälläsen modaalin. Miltä tuntuu? Aika siistiä eikö? Klikkaa punasta neliötä ni voit kattoo mitä muuta oon kyhäillyt. Ja toi punainen neliö on tosiaan design-valinta eikä vaan laiskasti tehty nappi... "

        popUpDiv.appendChild(exitDiv)
        popUpDiv.appendChild(popupText)

        body.appendChild(popUpDiv)

    });
}

darkButton.addEventListener('click', ()=> { // Tee tää vikana koska niin.

    if (!dark){
        body.classList.add('darkmode_on')
        dropdowns.forEach(dropdown=>{
            dropdown.classList.add('dropdown_dark')
        })

        document.querySelector('.dropdown_sec').classList.add('dark_background')
        document.querySelector('.darkmode').classList.add('dark_background')
        document.querySelector('.modal').classList.add('dark_modal')
        document.querySelector('.darkbutton').classList.add('dark_darkbutton')

        document.querySelector('.darkbutton').innerText = '🌅'

        document.querySelectorAll('.dropdown_text').forEach(txt=>{
            txt.classList.add('whiteText')
        })

        document.querySelectorAll('h1').forEach(txt1=>{
            txt1.classList.add('whiteText')
        })

        document.querySelectorAll('.hidden_text').forEach(txt2=>{
            txt2.classList.add('whiteText')
        })

        dark = true

    }
    else{
        body.classList.remove('darkmode_on')
        dropdowns.forEach(dropdown=>{
            dropdown.classList.remove('dropdown_dark')
        })

        document.querySelector('.dropdown_sec').classList.remove('dark_background')
        document.querySelector('.darkmode').classList.remove('dark_background')
        document.querySelector('.modal').classList.remove('dark_modal')
        document.querySelector('.darkbutton').classList.remove('dark_darkbutton')

        document.querySelector('.darkbutton').innerText = '🌃'

        document.querySelectorAll('.dropdown_text').forEach(txt=>{
            txt.classList.remove('whiteText')
        })

        document.querySelectorAll('h1').forEach(txt1=>{
            txt1.classList.remove('whiteText')
        })

        document.querySelectorAll('.hidden_text').forEach(txt2=>{
            txt2.classList.remove('whiteText')
        })


        dark = false
    }

})


for (const dropdown of dropdowns){
    dropdown.addEventListener('click', ()=> {

        const hidden_text = dropdown.nextElementSibling

        if (!dropdownOpen){      // Vain yksi haitari voi olla auki kerrallaan. 
            hidden_text.classList.add('reveal_text')
            dropdownOpen = true

        }
        else if (dropdown.nextElementSibling.classList.contains('reveal_text')){ // Haitarin voi sulkea vain klikkaamalla juuri kyseistä haitaria.
            hidden_text.classList.remove('reveal_text')
            dropdownOpen = false
        }
        

        
        
    })
}

