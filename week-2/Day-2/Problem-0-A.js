// Problem 0 : Part A
var cat = {
 name: 'Fluffy',
 activities: ['play', 'eat cat food'],
 catFriends: [
 {
 name: 'bar',
 activities: ['be grumpy', 'eat bread omblet'],
 weight: 8,
 furcolor: 'white'
 }, 
 {
 name: 'foo',
 activities: ['sleep', 'pre-sleep naps'],
 weight: 3
 }
 ]
}
// Basic Tasks to play with JSON
//1. Add height and weight to Fluffy
cat.weight = 5
cat.height = 3

//2. Fluffy name is spelled wrongly. Update it to Fluffyy
cat.name = "Fluffyy"

//3. List all the activities of Fluffyy’s catFriends.
list_act = []
for(let friend in cat.catFriends){
	for(let act in cat.catFriends[friend].activities){
		list_act.push(cat.catFriends[friend].activities[act])
	}
}
console.log(list_act)

//4. Print the catFriends names.
for(let friend in cat.catFriends){
	console.log(cat.catFriends[friend].name)
}

//5. Print the total weight of catFriends
var su_we = 0
for(let friend in cat.catFriends){
	su_we += cat.catFriends[friend].weight
}
console.log(su_we)

//6. Print the total activities of all cats (op:6)
for(let act in cat.activities){
		console.log(cat.activities[act])
	}
for(let friend in cat.catFriends){
	for(let act in cat.catFriends[friend].activities){
		console.log(cat.catFriends[friend].activities[act])
	}
}

//7. Add 2 more activities to bar & foo cats
for(let friend in cat.catFriends){
	cat.catFriends[friend].activities.push('play')
	cat.catFriends[friend].activities.push('eat cat food')
}

//8. Update the fur color of bar
cat.catFriends[0].furcolor = 'Brown'
console.log(cat)