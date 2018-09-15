/********************************************************************************* 
 *
 * WEB222 – Assignment #4a
 *
 * I declare that this assignment is my own work in accordance with Seneca 
 * Academic Policy. No part of this assignment has been copied manually or 
 * electronically from any other source (including web sites) or distributed to 
 * other students. 
 * 
 * Name: Jordan Witley Student ID: 142433176 Date: 15/07/2018 
 * 
 ********************************************************************************/

var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)

widow.onload = function loadTableWithFilters() {
    var main = document.querySelector("#main-table-body");

    main.innerHTML = "";

    var content;

    for (var i = 0; i < petData.length; i++) {
        if (filterType == "" && filterAgeMax == Number.MAX_VALUE && filterAgeMin == 0) {
            var row = document.createElement("tr");
            var column = document.createElement("td");

            row.innerHTML += "<td>" + "<img src='" + petData[i].image.src + "'" + "alt='" + petData[i].image.alt + "'" + "width='" + petData[i].image.width + "'" + "height='" + petData[i].image.height + "'" + "/>" + "</td>";
            row.innerHTML += "<td><p><span class= 'name'>" + petData[i].name + "</span></p><p>" + petData[i].description + "</p><p>Age: " + petData[i].age + " years old.</p></td>";
            main.appendChild(row);
        } else if (petData[i].type == filterType && (petData[i].age > filterAgeMin && petData[i].age < filterAgeMax)) {
            var row = document.createElement("tr");
            var column = document.createElement("td");

            row.innerHTML += "<td>" + "<img src='" + petData[i].image.src + "'" + "alt='" + petData[i].image.alt + "'" + "width='" + petData[i].image.width + "'" + "height='" + petData[i].image.height + "'" + "/>" + "</td>";
            row.innerHTML += "<td><p><span class= 'name'>" + petData[i].name + "</span></p><p>" + petData[i].description + "</p><p>Age: " + petData[i].age + " years old.</p></td>";
            main.appendChild(row);
        }
    }
}

function loadTableWithFilters() {
    var main = document.querySelector("#main-table-body");
    main.innerHTML;
    var content;

    for (var i = 0; i < petData.length; i++) {
        if (filterType == "" && filterAgeMax == Number.MAX_VALUE && filterAgeMin == 0) {
            var row = document.createElement("tr");
            var column = document.createElement("td");

            row.innerHTML += "<td>" + "<img src='" + petData[i].image.src + "'" + "alt='" + petData[i].image.alt + "'" + "width='" + petData[i].image.width + "'" + "height='" + petData[i].image.height + "'" + "/>" + "</td>";
            row.innerHTML += "<td><p><span class= 'name'>" + petData[i].name + "</span></p><p>" + petData[i].description + "</p><p>Age: " + petData[i].age + " years old.</p></td>";
            main.appendChild(row);
        } else if ((petData[i].type == filterType || filterType == "") && (petData[i].age > filterAgeMin && petData[i].age < filterAgeMax)) {
            var row = document.createElement("tr");
            var column = document.createElement("td");

            row.innerHTML += "<td>" + "<img src='" + petData[i].image.src + "'" + "alt='" + petData[i].image.alt + "'" + "width='" + petData[i].image.width + "'" + "height='" + petData[i].image.height + "'" + "/>" + "</td>";
            row.innerHTML += "<td><p><span class= 'name'>" + petData[i].name + "</span></p><p>" + petData[i].description + "</p><p>Age: " + petData[i].age + " years old.</p></td>";
            main.appendChild(row);
        }
    }
}

function filterDog() {
    filterAgeMin = 0;
    filterAgeMax = Number.MAX_VALUE;
    filterType = "dog";
    loadTableWithFilters();
}

function filterCat() {
    filterAgeMin = 0;
    filterAgweMax = Number.MAX_VALUE
    filterType = "cat";
    loadTableWithFilters();
}

function filterBird() {
    filterAgeMin = 0;
    filterAgeMax = Number.MAX_VALUE;
    filterType = "bird";
    loadTableWithFilters();
}

function filter_zero_1() {
    filterAgeMax = 1;
    filterAgeMin = 0;
    filterType = "";
    loadTableWithFilters();
}

function filter_1_3() {
    filterAgeMax = 3;
    filterAgeMin = 1;
    filterType = "";
    loadTableWithFilters();
}

function filter_4_plus() {
    filerAgeMax = Number.MAX_VALUE;
    filterAgeMin = 4;
    filterType = "";
    loadTableWithFilters();
}

function filterAllPets() {
    filterType = "";
    filerAgeMax = Number.MAX_VALUE;
    filterAgeMin = 0;
    loadTableWithFilters();
}