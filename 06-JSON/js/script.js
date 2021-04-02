let employees = {
    "pracownicy": [
        { "firstName": "Krystian", "lastName": "Dziopa" },
        { "firstName": "Anna", "lastName": "Szapiel" },
        { "firstName": "Piotr", "lastName": "Żmuda" }
    ]
};

console.log(employees);

employees.pracownicy.forEach(function (element, index) {
    console.log(index + ' ' + element.firstName, element.lastName)
});