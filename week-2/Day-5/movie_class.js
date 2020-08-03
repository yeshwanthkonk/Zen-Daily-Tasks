class Movie{
	constructor(title, studio, rating = "PG"){
		this.title = title
		this.studio = studio
		this.rating = rating
	}
}
class Movies extends Movie{
	getPG(arr){
		return arr.filter((item)=>{return item.rating == "PG"})
	}
}
movies = new Movies()
mov_1 = new Movie("Casino Royale", "Eon Productions", "PG13")
mov_2 = new Movie("Journey-2")
console.log(movies.getPG([mov_1, mov_2]))