var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var videos = [
    {
        "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"],
        "title": "For Bigger Escape"
    },
    {
        "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"],
        "title": "For Bigger Fun"
    },
    {
        "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"],
        "title": "For Bigger Joyrides"
    },
    {
        "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"],
        "title": "For Bigger Meltdowns"
    },
    {
        "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"],
        "title": "Sintel"
    },
    {
        "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4"],
        "title": "Subaru Outback On Street And Dirt"
    },
    {
        "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"],
        "title": "Tears of Steel"
    },
    {
        "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4"],
        "title": "Volkswagen GTI Review"
    },
    {
        "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"],
        "title": "We Are Going On Bullrun"
    },
    {
        "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4"],
        "title": "What care can you get for a grand?"
    }
];
var TV = /** @class */ (function () {
    function TV(price, inches, OnOFF, brand, channel, volume) {
        if (OnOFF === void 0) { OnOFF = true; }
        if (brand === void 0) { brand = "SamSung"; }
        if (channel === void 0) { channel = 1; }
        if (volume === void 0) { volume = 50; }
        this.price = price;
        this.inches = inches;
        this.OnOFF = OnOFF;
        this.brand = brand;
        this.channel = channel;
        this.volume = volume;
        this.player = document.getElementById('video_player');
        this.show = document.getElementById('show');
        this.setChannel(this.channel);
        this.adjustVolume(this.volume);
    }
    TV.prototype.adjustVolume = function (vol) {
        console.log("In", vol);
        if (!this.OnOFF || (vol < 0 || vol > 100)) {
            return;
        }
        this.volume = vol;
        this.player.volume = this.volume / 100;
        this.show.innerHTML = "Volume<br>" + this.volume;
        setTimeout(this.showDisable, 2000);
    };
    TV.prototype.setChannel = function (cha) {
        if (!this.OnOFF || (cha < 1 || cha > 10)) {
            return;
        }
        this.channel = cha;
        this.player.src = videos[this.channel - 1].sources;
        this.show.innerHTML = "Channel<br>" + this.channel;
        setTimeout(this.showDisable, 2000);
    };
    TV.prototype.muteBtn = function () {
        if (!this.OnOFF) {
            return;
        }
        this.player.muted = !this.player.muted;
    };
    TV.prototype.playPauseBtn = function () {
        if (!this.OnOFF) {
            return;
        }
        if (this.player.paused) {
            this.player.play();
        }
        else {
            this.player.pause();
        }
    };
    TV.prototype.powerOnOff = function () {
        this.OnOFF = !this.OnOFF;
        if (this.OnOFF) {
            this.player.src = videos[this.channel - 1].sources;
        }
        else {
            this.player.src = "";
            this.showDisable();
        }
    };
    TV.prototype.showDisable = function () {
        this.show.innerHTML = "";
    };
    TV.prototype.reset = function () {
        this.constructor();
    };
    TV.prototype.status = function () {
        return this.brand + " at channel " + this.channel + ", volume " + this.volume;
    };
    return TV;
}());
var LED = /** @class */ (function (_super) {
    __extends(LED, _super);
    function LED(price, inches, OnOFF, brand, channel, volume, thickness, energy_usage, lifespan, refresh_rate) {
        if (thickness === void 0) { thickness = 0; }
        if (energy_usage === void 0) { energy_usage = 210; }
        if (lifespan === void 0) { lifespan = 5; }
        if (refresh_rate === void 0) { refresh_rate = 1200; }
        return _super.call(this, price, inches, OnOFF, brand, channel, volume) || this;
    }
    LED.prototype.viewingAngle = function () {
        return -1;
    };
    LED.prototype.Backlight = function () {
        return -1;
    };
    LED.prototype.DisplayDetails = function () {
        return this.status() + " Thickness " + this.thickness + ", Energy_usage " + this.energy_usage + ", LifeSpan " + this.lifespan;
    };
    return LED;
}(TV));
var Plasma = /** @class */ (function (_super) {
    __extends(Plasma, _super);
    function Plasma(price, inches, OnOFF, brand, channel, volume, thickness, energy_usage, lifespan, refresh_rate) {
        if (thickness === void 0) { thickness = 0; }
        if (energy_usage === void 0) { energy_usage = 210; }
        if (lifespan === void 0) { lifespan = 5; }
        if (refresh_rate === void 0) { refresh_rate = 1200; }
        return _super.call(this, price, inches, OnOFF, brand, channel, volume) || this;
    }
    Plasma.prototype.viewingAngle = function () {
        return -1;
    };
    Plasma.prototype.Backlight = function () {
        return -1;
    };
    Plasma.prototype.DisplayDetails = function () {
        return this.status() + " Thickness " + this.thickness + ", Energy_usage " + this.energy_usage + ", LifeSpan " + this.lifespan;
    };
    return Plasma;
}(TV));
var tv = new LED(23000, 15.6, true, "Samsung", 1, 50);
console.log(tv.volume);
document.getElementById('+').addEventListener('click', function () {
    tv.adjustVolume(tv.volume + 1);
    console.log(tv.volume);
});
document.getElementById('-').addEventListener('click', function () {
    tv.adjustVolume(tv.volume - 1);
    console.log(tv.volume);
});
document.getElementById('next').addEventListener('click', function () {
    tv.setChannel(tv.channel + 1);
    console.log(tv.channel);
});
document.getElementById('prev').addEventListener('click', function () {
    tv.setChannel(tv.channel - 1);
    console.log(tv.channel);
});
document.getElementById('mute').addEventListener('click', function () {
    tv.muteBtn();
});
document.getElementById('>||').addEventListener('click', function () {
    tv.playPauseBtn();
});
document.getElementById('power').addEventListener('click', function () {
    tv.powerOnOff();
});
