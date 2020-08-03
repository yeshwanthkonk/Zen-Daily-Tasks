class Circle{
	constructor(...arr){
		[this.radius, this.color] = arr
	}
	getRadius(){
		return this.radius
	}
	getColor(){
		return this.color
	}
	setRadius(radius){
		this.radius = radius
	}
	setColor(color){
		this.color = color
	}
	getArea(){
		return ((this.radius**2)*(22/7))
	}
}

cir = new Circle(2, "red")
console.log(cir.getArea())