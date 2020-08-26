/*
Create a petshop project in oops with pets available for adoption in one class (availability class) and a request class containing enquiries for different kinds of pets. (request class)

Write an insert method to create  different  kinds of pets available for adoption. Add required fields containing the characteristics and history of the pet.
Write an insert method to store the incoming enquiries (availability check) for pets in request class. Every enquiry will contain an array of pets of their choice.
Write a method to find the status (available or not ) of the first 5 enquiry in request class, based on the data present in the availability collection.
Write a query to find the count of different kinds of pets found in availability collection(eg. Dog -5, Cat-3, Parrot-4)
Write  a method  that maps the request data with availability data,  explaining how many  incoming requests are matching with  each entry (pet availability) found in availability collection.

*/
var Shop = /** @class */ (function () {
    function Shop() {
        this.pets_available = [];
        this.enquries = [];
    }
    Shop.prototype.insertPets = function (arr) {
        var _this = this;
        arr.forEach(function (item) {
            _this.pets_available.push(new Pet(item[0], item[1], item[2]));
        });
    };
    Shop.prototype.insertQueries = function (arr) {
        var _this = this;
        arr.forEach(function (item) {
            _this.enquries.push(new Enquiry(item));
        });
    };
    Shop.prototype.findFirstFive = function () {
        var len = this.enquries.length;
        if (len > 5) {
            len = 5;
        }
        var result = [];
        var status, j;
        for (var i = 0; i < len; i++) {
            status = true;
            for (j = 0; j < this.pets_available.length; j++) {
                for (var k = 0; k < this.enquries[i].enquiry.length; k++) {
                    if (this.pets_available[j].collection == this.enquries[i].enquiry[k].collection && this.pets_available[j].characteristics == this.enquries[i].enquiry[k].characteristics) {
                        result.push({ 'Enquiry': i + 1, "Availability": 'Available', "Pet": this.pets_available[j] });
                        status = false;
                        break;
                    }
                }
                if (!status) {
                    break;
                }
            }
            if (j == this.pets_available.length) {
                result.push({ 'Enquiry': i + 1, "Availability": 'No', "Remark": "None of the Pet satisfied" });
            }
        }
        return result;
    };
    Shop.prototype.collectionCount = function () {
        var result = {};
        this.pets_available.forEach(function (pet) {
            if (result[pet.collection] === undefined) {
                result[pet.collection] = 1;
            }
            else {
                result[pet.collection]++;
            }
        });
        return result;
    };
    Shop.prototype.match = function () {
        for (var i = 0; i < this.enquries.length; i++) {
            console.log("Enquiry:" + (i + 1));
            for (var j = 0; j < this.enquries[i].enquiry.length; j++) {
                var status_1 = false;
                for (var k = 0; k < this.pets_available.length; k++) {
                    if (this.enquries[i].enquiry[j].collection == this.pets_available[k].collection && this.enquries[i].enquiry[j].characteristics == this.pets_available[k].characteristics) {
                        console.log(" Query:" + (j + 1) + " is mathched with Pet:" + (k + 1));
                        status_1 = true;
                    }
                }
                if (!status_1) {
                    console.log(" Query:" + (j + 1) + " is not mathched with available Pets");
                }
            }
        }
    };
    return Shop;
}());
var Pet = /** @class */ (function () {
    function Pet(type, hist, charac) {
        this.characteristics = charac;
        this.history = hist;
        this.collection = type;
    }
    return Pet;
}());
var Enquiry = /** @class */ (function () {
    function Enquiry(arr) {
        var _this = this;
        this.enquiry = [];
        arr.forEach(function (item) {
            _this.enquiry.push(item);
        });
    }
    return Enquiry;
}());
var myShop = new Shop();
var pets = [["Dog", "Old", "White, Furry"], ["Cat", "Old", "White, Furry"], ["Dog", "New", "Brownie, Tall"], ["Parrot", "Old", "Green, Strong Wings"], ["Tortoise", "Old", "Green&Cement"]];
myShop.insertPets(pets);
var queries = [[myShop.pets_available[0], new Pet("Cat", "Old", "White, Furry")],
    [new Pet("Cow", "Old", "White, Furry")],
    [new Pet("Cat", "Old", "Black, Furry"), new Pet("Pigeon", "Old", "White"), new Pet("Cat", "New", "White, Furry")]];
myShop.insertQueries(queries);
console.log('First Five Enquries,---------------------------------------------------------');
console.log(myShop.findFirstFive());
console.log('Pet Collection,--------------------------------------------------------------');
console.log(myShop.collectionCount());
console.log('Request and Availability data Matching,--------------------------------------');
myShop.match();
