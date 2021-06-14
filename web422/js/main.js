let restaurantData = [];
let currentRestaurant = {}
let page = 1;
const perPage = 10;
let map = null;

function avg(grades){
    let total = 0;
    grades.forEach(g=>total += g.score);
    let average = total / grades.length;
    return average.toFixed(2);
}

let tableRows = _.template(`
    <% restaurants.forEach(r=>{ %>
        <tr data-id="<%- r._id %>">
            <td><%- r.name %></td>
            <td><%- r.cuisine %></td>
            <td><%- r.address.building %> <%- r.address.street %></td>
            <td><%- avg(r.grades) %></td>
        </tr>
    <% }); %>
`);

function loadRestaurantData(){
    // fetch(`http://localhost:8080/api/restaurants?page=${page}&perPage=${perPage}`)
    fetch(`https://weisong-web422-a1-2211.herokuapp.com/api/restaurants?page=${page}&perPage=${perPage}`)
    .then(res => res.json())
    .then(data =>{
        restaurantData = data;
        
        let rows = tableRows({restaurants: restaurantData});

        $("#restaurant-table tbody").html(rows);
        $("#current-page").html(page);
    });
}

$(function(){

    loadRestaurantData();

    $("#restaurant-table tbody").on("click", "tr", function (e) {
        currentRestaurant = restaurantData.find(r => r._id == $(this).attr("data-id"));

        console.log("currentRestaurant.name: ", currentRestaurant.name);

        $("#restaurant-modal .modal-title").html(currentRestaurant.name);
        $("#restaurant-address").html(`<h5> ${currentRestaurant.address.building} ${currentRestaurant.address.street}</h5>`);

        $("#restaurant-modal").modal({
            backdrop: "static",
            keyboard: false
        });
    });

    $(".pagination").on("click", "#previous-page", function(e){
        if(page > 1){
            page--;
            loadRestaurantData();
        }
    });

    $(".pagination").on("click", "#next-page", function(e){
        page++;
        loadRestaurantData();
    });

    $('#restaurant-modal').on('shown.bs.modal', function () {
        map = new L.Map('leaflet', {
            center: [currentRestaurant.address.coord[1], currentRestaurant.address.coord[0]],
            zoom: 18,
            layers: [
                new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
            ]
        });

        L.marker([currentRestaurant.address.coord[1], currentRestaurant.address.coord[0]]).addTo(map);
    });

    $('#restaurant-modal').on('hidden.bs.modal', function () {
        map.remove();
    });
});