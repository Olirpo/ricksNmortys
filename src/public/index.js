let rickCounter = 0;
const API = 'https://rickandmortyapi.com/api/character/?name=';
let maxRickCounter;
const rickCard = {
    'name':     document.getElementById('rick-name'),
    'img' :     document.getElementById('rick-img'),
    'origin':   document.getElementById('rick-origin'),
    'location': document.getElementById('rick-location'),
    'state': document.getElementById('rick-state')
};

const nextRick = async () => {
    if(rickCounter >= maxRickCounter-1) return;
    try{
    rickCounter++
    getPropetiesOfRick(rickCounter)
    }catch{
        console.error(error)
    }
}
const prevRick = async () => {
    if(rickCounter === 0) return;
    try{
        rickCounter--
        getPropetiesOfRick(rickCounter)
    }catch{
        console.error(error)
    }
}

const getPropetiesOfRick = async (index) => {
    const rickData = await fetch(`${API}rick`)
        .then(e => e.json())
        .then(jsonRicks => {
            maxRickCounter = jsonRicks.results.length;
            return jsonRicks.results[index]
        });
    rickCard.name.innerHTML = rickData.name;
    rickCard.img.src = rickData.image;
    rickCard.origin.innerHTML = `Origin: ${rickData.origin.name}`;
    rickCard.location.innerHTML = `Location: ${rickData.location.name}`;
    rickCard.state.innerHTML = `State: ${rickData.status}`
    
    
}

window.onload = ( async ()=>{
    getPropetiesOfRick(0);
});
