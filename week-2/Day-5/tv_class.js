class TV{
	constructor(price, inches, OnOFF, brand="SamSung", channel="1", volume="50"){
		this.price = price
		this.inches = inches
		this.OnOFF = OnOFF
		this.brand = brand
		this.channel = channel
		this.volume = volume
	}
	adjustVolume(vol){
		if(vol>0){
			this.volume += vol
			if(this.volume > 100){
				this.volume = 100
			}
		}
		else if(vol<0){
			this.volume -= vol
			if(this.volume < 0){
				this.volume = 0
			}
		}
	}
	setChannel(cha){
		if(this.channel < cha and cha < 0){
			return -1
		}
		this.channel = cha
	}
	reset(){
		temp = new TV()
		this.channel = temp.channel
		this.volume = temp.volume
	}
	status(){
		return this.brand+" at channel "+this.channel+", volume "+this.volume;
	}
}

class LED extends TV{
	constructor(thickness, energy_usage, lifespan, refresh_rate,price, inches, OnOFF, brand, channel, volume){
		super(price, inches, OnOFF, brand, channel, volume)
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
}
class Plasma extends TV{
	constructor(thickness, energy_usage, lifespan, refresh_rate,price, inches, OnOFF, brand, channel, volume){
		super(price, inches, OnOFF, brand, channel, volume)
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
}
le = new LED()
console.log(le.DisplayDetails())