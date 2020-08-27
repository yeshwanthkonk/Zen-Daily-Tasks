
let videos = [ 
    {
      "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" ],
      "title" : "For Bigger Escape"
    },
    {
      "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" ],
      "title" : "For Bigger Fun"
    },
    {
      "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" ],
      "title" : "For Bigger Joyrides"
    },
    {
      "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" ],
      "title" : "For Bigger Meltdowns"
    },
    {
      "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" ],
      "title" : "Sintel"
    },
    {
      "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4" ],
      "title" : "Subaru Outback On Street And Dirt"
    },
    {
      "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" ],
      "title" : "Tears of Steel"
    },
    {
      "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4" ],
      "title" : "Volkswagen GTI Review"
    },
    {
      "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4" ],
      "title" : "We Are Going On Bullrun"
    },
    {
      "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4" ],
      "title" : "What care can you get for a grand?"
    }
]

class TV{
    price
    inches
    OnOFF
    brand
    channel:number
    volume:number;
    player;
    show;
    constructor(price, inches, OnOFF = true, brand="SamSung", channel=1, volume=50){
		this.price = price
		this.inches = inches
		this.OnOFF = OnOFF
		this.brand = brand
		this.channel = channel
        this.volume = volume
        this.player = document.getElementById('video_player');
        this.show = document.getElementById('show');
        this.player.src = videos[this.channel-1].sources;
        this.player.play();
        this.adjustVolume(this.volume);
    }

    adjustVolume(vol){
        console.log("In",vol);
        if(!this.OnOFF || (vol<0 || vol>100)){
            return;
        }
        this.volume = vol;
        this.player.volume = this.volume/100;
        this.show.innerHTML = `Volume<br>${this.volume}`;
        setTimeout(this.showDisable, 2000);
    }
    setChannel(cha){
        if(!this.OnOFF || (cha < 1 || cha > 10)){
            return;
        }
        this.channel = cha;
        this.player.src = videos[this.channel-1].sources;
        this.show.innerHTML = `Channel<br>${this.channel}`;
        setTimeout(this.showDisable, 2000);
    }
    muteBtn(){
        if(!this.OnOFF){
            return;
        }
        this.player.muted = !this.player.muted;
    }
    playPauseBtn(){
        if(!this.OnOFF){
            return;
        }
        if(this.player.paused){
            this.player.play();
        }
        else{
            this.player.pause(); 
        }
    }
    powerOnOff(){
        this.OnOFF = !this.OnOFF;
        if(this.OnOFF){
            this.player.src = videos[this.channel-1].sources;
        }
        else{
            this.player.src = "";
            this.showDisable();
        }
    }
    showDisable(){
        this.show.innerHTML = "";
    }

    reset(){
		this.constructor();
	}
    status(){
        return this.brand+" at channel "+this.channel+", volume "+this.volume;
    }
}

class LED extends TV{
    thickness
    energy_usage
    lifespan
    refresh_rate
	constructor(price, inches, OnOFF, brand, channel, volume, thickness=0, energy_usage=210, lifespan=5, refresh_rate=1200){
        super(price, inches, OnOFF, brand, channel, volume)
    }
    viewingAngle(){
        return -1
    }
    Backlight(){
        return -1
    }
    DisplayDetails(){
        return this.status()+" Thickness "+this.thickness+", Energy_usage "+this.energy_usage+", LifeSpan "+this.lifespan
    }
}

class Plasma extends TV{
    thickness
    energy_usage
    lifespan
    refresh_rate
	constructor(price, inches, OnOFF, brand, channel, volume, thickness=0, energy_usage=210, lifespan=5, refresh_rate=1200){
		super(price, inches, OnOFF, brand, channel, volume)
    }
    viewingAngle(){
        return -1
    }
    Backlight(){
        return -1
    }
    DisplayDetails(){
        return this.status()+" Thickness "+this.thickness+", Energy_usage "+this.energy_usage+", LifeSpan "+this.lifespan
    }
}

let tv = new LED(23000, 15.6, true, "Samsung", 1, 50);
console.log(tv.volume);
document.getElementById('+').addEventListener('click',function(){
    tv.adjustVolume(tv.volume+1);
    console.log(tv.volume);
})
document.getElementById('-').addEventListener('click',function(){
    tv.adjustVolume(tv.volume-1);
    console.log(tv.volume);
})


document.getElementById('next').addEventListener('click',function(){
    tv.setChannel(tv.channel+1);
    console.log(tv.channel);
})
document.getElementById('prev').addEventListener('click',function(){
    tv.setChannel(tv.channel-1);
    console.log(tv.channel);
})

document.getElementById('mute').addEventListener('click',function(){
    tv.muteBtn();
})

document.getElementById('>||').addEventListener('click',function(){
    tv.playPauseBtn();
})

document.getElementById('power').addEventListener('click',function(){
    tv.powerOnOff();
})