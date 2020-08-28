
class UI{
    player;
    tracks;
    constructor(){
        this.tracks = document.getElementById('tracks');
        this.player = document.getElementById("player");
    }
}

class Card{
    src;
    title;
    subtitle;
    text;
    constructor(track){
        this.src = track.hub.actions[1].uri;
        this.title = track.title;
        this.subtitle = track.subtitle;
        this.text = track.share.text;
        this.addCard();
    }
    addCard(){
        let card = document.createElement('div');
        card.setAttribute("class", "card");
        card.setAttribute("style", "margin-bottom: 10px;");
        let row = document.createElement('div');
        row.setAttribute("class", "row");

        let col_2 = document.createElement('div');
        col_2.setAttribute("class", "col-2 mar");

        let img = document.createElement('img');
        img.src="play.png";
        img.setAttribute("width", "80%");
        img.setAttribute("height", "100%");
        img.id = this.src;
        img.addEventListener('click',function(){
            console.log(this.id);
            ui.player.src = this.id;
        })
        col_2.append(img);
        row.append(col_2);

        let col_8 = document.createElement('div');
        col_8.setAttribute("class", "col-8 mar");
        col_8.innerHTML = `<h5>${this.title}</h5>
                            <h6>${this.subtitle}</h6>
                            <p>${this.text}</p>`;
        row.append(col_8);
        card.append(row);
        ui.tracks.append(card);
    }
}
document.getElementById('top').addEventListener('click', async function(){
    let response = await fetch("https://shazam.p.rapidapi.com/songs/list-artist-top-tracks?locale=en-US&id=40008598", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "shazam.p.rapidapi.com",
            "x-rapidapi-key": "14e26c9068mshe01f97bbaddc3acp19042ajsn02d3bc2caee7"
        }
    });
    ui.player.src = "";
    let data = await response.json();
    console.log(data);
    ui.tracks.innerHTML = "";
    data.tracks.forEach((track)=>{
        if(track.hub.actions === undefined){
            return;
        }
        new Card(track);
    });
})

document.getElementById('recommended').addEventListener('click', async function(){
    
    let response = await fetch("https://shazam.p.rapidapi.com/songs/list-recommendations?locale=en-US&key=484129036", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "shazam.p.rapidapi.com",
            "x-rapidapi-key": "14e26c9068mshe01f97bbaddc3acp19042ajsn02d3bc2caee7"
        }
    });
    ui.player.src = "";
    let data = await response.json();
    console.log(data);
    ui.tracks.innerHTML = "";
    data.tracks.forEach((track)=>{
        if(track.hub.actions === undefined){
            return;
        }
        new Card(track);
    });
});

(<HTMLInputElement>document.getElementById('search')).addEventListener('change', async function(){
    console.log(this.value);
    let response = await fetch(`https://shazam.p.rapidapi.com/search?locale=en-US&offset=0&limit=5&term=${this.value}`, {
	    "method": "GET",
	    "headers": {
	    	"x-rapidapi-host": "shazam.p.rapidapi.com",
	    	"x-rapidapi-key": "14e26c9068mshe01f97bbaddc3acp19042ajsn02d3bc2caee7"
	    }
    });

    ui.player.src = "";
    let data = await response.json();
    let state = false;
    console.log(data);
    ui.tracks.innerHTML = "";
    if(data.tracks === undefined){
        alert(`No songs found for search: ${this.value}`);
        return
    }
    data.tracks.hits.forEach((track)=>{
        if(track.track.hub.actions === undefined){
            return;
        }
        new Card(track.track);
        state = true;
    });
    if(!state){
        alert(`No songs found for searc: ${this.value}`);
    }

})

let ui = new UI();