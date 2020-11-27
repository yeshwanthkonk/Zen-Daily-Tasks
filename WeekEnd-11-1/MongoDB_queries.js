//--------------------------------------------------------------------------------
db.topics.insertMany([
	{
	"topic_name":"Sample_1",
	"on_date":new Date("2020-10-02"),
},
{
	"topic_name":"Sample_2",
	"on_date":new Date("2020-09-02"),
},
{
	"topic_name":"Sample_3",
	"on_date":new Date("2020-08-02"),
},
{
	"topic_name":"Sample_4",
	"on_date":new Date("2020-07-02"),
},
])
var month={}
month["October"]=9
db.topics.aggregate([
{
	$project:
		{topic_name:1, on_date:1, "Month":{$month: '$on_date'}}
},
{$match: {"Month": month["October"]}}
]).pretty()

//----------------------------------------------------------------------------------------
db.placement_drives.insertMany([
{
	"id":1,
	"company_name":"Zoho",
	"drive_date":new Date("2020-10-16 10:10:10"),
},
{
	"id":2,
	"company_name":"Mahindra",
	"drive_date":new Date("2020-10-18 10:10:10"),
},
{
	"id":3,
	"company_name":"Amazon",
	"drive_date":new Date("2020-10-23 10:10:10"),
},
{
	"id":4,
	"company_name":"Facebook",
	"drive_date":new Date("2020-10-01 10:10:10"),
},
{
	"id":5,
	"company_name":"Google",
	"drive_date":new Date("2020-11-16 10:10:10"),
}
])

db.placement_drives.find({
	$and:[
	{"drive_date":
		{$gt:new Date("2020-10-15")}},
	{"drive_date":
		{$lt:new Date("2020-10-31")}}
	]
	}
).pretty()

//---------------------------------------------------------------------------------------

db.users.insertMany([
{
	"id":1,
	"name":"Sample_1",
	"email":"Sample_1@mail.com",
	"is_mentor":0
},
{
	"id":2,
	"name":"Sample_2",
	"email":"Sample_2@mail.com",
	"is_mentor":0
},
{
	"id":3,
	"name":"Sample_3",
	"email":"Sample_3@mail.com",
	"is_mentor":0
},
{
	"id":4,
	"name":"Sample_4",
	"email":"Sample_4@mail.com",
	"is_mentor":1
}
])

db.placement_student_status.insertMany([
{
	"user_id":1,
	"drive_id":3,
	"status":"Attended"
},
{
	"user_id":1,
	"drive_id":2,
	"status":"Attended"
},
{
	"user_id":2,
	"drive_id":4,
	"status":"Attended"
},
{
	"user_id":2,
	"drive_id":3,
	"status":"Attended"
},
{
	"user_id":3,
	"drive_id":1,
	"status":"Attended"
},
{
	"user_id":3,
	"drive_id":3,
	"status":"Attended"
},
{
	"user_id":1,
	"drive_id":3,
	"status":"Absent"
},
])

db.placement_student_status.aggregate([
{
	"$match":{"status":"Attended"}
},
{
	"$lookup":{
		"localField":"user_id",
		"from": "users",
		"foreignField":"id",
		"as":"user_details"
	}
},
{
	"$lookup":{
		"localField":"drive_id",
		"from": "placement_drives",
		"foreignField":"id",
		"as":"drive_details"
	}
},
{ "$project": {
    "user_details.name": 1,
    "user_details.email": 1,
    "drive_details.company_name": 1,
    "drive_details.drive_date": 1,
    "status":1,
    "_id":0
  } }
]).pretty();

//--------------------------------------------------------------

db.codekata.insertMany([
{
	"id":1,
	"question":"Array",
	"description":"Here we have 10 numbers",
	"score":10
},
{
	"id":2,
	"question":"Strings",
	"description":"Here we have 10 names",
	"score":15
},
{
	"id":3,
	"question":"Maths",
	"description":"Here we have 10 puzzels",
	"score":40
},
{
	"id":4,
	"question":"DP",
	"description":"Here we have 10 stairs",
	"score":30
},
{
	"id":5,
	"question":"Trees",
	"description":"Here we have 10 nodes",
	"score":50
},
])

db.codekata_user_status.insertMany([
{
	"user_id":1,
	"codekata_id":5,
	"marks_obt":40,
	"status":"Attempted"
},
{
	"user_id":1,
	"codekata_id":4,
	"marks_obt":10,
	"status":"Attempted"
},
{
	"user_id":2,
	"codekata_id":3,
	"marks_obt":20,
	"status":"Attempted"
},
{
	"user_id":3,
	"codekata_id":5,
	"marks_obt":30,
	"status":"Attempted"
},
{
	"user_id":4,
	"codekata_id":1,
	"marks_obt":10,
	"status":"Attempted"
},
{
	"user_id":3,
	"codekata_id":2,
	"marks_obt":0,
	"status":"Checked"
},
])

//,"doc":{"$first":"$$ROOT"} in $group

db.codekata_user_status.aggregate([
{
	$match:{"status":"Attempted"}	
},
{
	"$group":{"_id":"$user_id", "solved_count":{"$sum":1},"doc":{"$first":"$$ROOT"}}
},
{
	$lookup:{
		"localField":"doc.user_id",
		"from": "users",
		"foreignField":"id",
		"as":"user"
	}
},
{
	$project:{
		"user_id":"$_id",
		"user_name":{$first:"$user.name"} ,
		"solved_count":"$solved_count",
		"_id":0,
	}
}
])

//---------------------------------------------------------------------------
db.user_mentor_topic.insertMany([
{
	"user_id":1,
	"mentor_id":4,
	"course_id":3,
	"status":"",
},
{
	"user_id":2,
	"mentor_id":4,
	"course_id":2,
	"status":"",
},
{
	"user_id":3,
	"mentor_id":4,
	"course_id":1,
	"status":"",
},
])
//mentee's count morethan 2
db.user_mentor_topic.aggregate([
{
	$group:{
		"_id":"$mentor_id",
		"mentee_count":{$sum: 1}
	}
},
{
	$match:{
		"mentee_count":{$gt:2}
	}
},
{
	$lookup:{
		"localField":"_id",
		"from": "users",
		"foreignField":"id",
		"as":"mentor"
	}
},
{
	$project:{
		"_id":0,
		"mentor_id":"$_id",
		"Mentor Name":{$first: "$mentor.name"},
		"Mentor Email":{$arrayElemAt: ["$mentor.email",0]},
		"Mentee's Count":"$mentee_count"
	}
}
]).pretty()