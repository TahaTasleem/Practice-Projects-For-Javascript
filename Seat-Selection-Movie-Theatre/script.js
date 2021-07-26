//Getting DOM Elements
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count =document.getElementById('count');
const total = document.getElementById('total');
const selectmovie = document.getElementById('movie');

populateUI();

let ticketprice = +selectmovie.value;

function updateselectedcount()
{
    const selectedseats = document.querySelectorAll('.row .seat.selected');
    const seatindex = [...selectedseats].map(seat => [...seats].indexOf(seat));
    console.log(seatindex);
    const SelectedSeatscount = selectedseats.length;
    count.innerText = SelectedSeatscount;
    total.innerText = SelectedSeatscount * ticketprice;
    localStorage.setItem('selectedseats',JSON.stringify(seatindex));
}

function populateUI()
{
    const selectedseats = JSON.parse(localStorage.getItem('selectedseats'));
    if(selectedseats !==null && selectedseats.length > 0)
    {
        seats.forEach((seat, index) => {
            if(selectedseats.indexOf(index) > -1)
            {
                seat.classList.add('selected')
            }
        })
        const selectedmovieindex =localStorage.getItem('selectedmovieindex');
        if(selectedmovieindex !== null)
        {
            selectmovie.selectedIndex = selectedmovieindex;
        } 
    }
}

//Set movie data to local storage
function setmoviedata(movieindex,movieprice)
{
    localStorage.setItem('selectedmovieindex', movieindex);
    localStorage.setItem('selectedmovieprice', movieprice);
}

//Event Listener for container to check seats
container.addEventListener('click',e => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) 
    {
        e.target.classList.toggle('selected');
        updateselectedcount();
    }
})
//Event Listener for movie selection
selectmovie.addEventListener('click', e => {
    setmoviedata(e.target.selectedIndex, e.target.value);
    ticketprice =+ e.target.value;
    updateselectedcount();
})

//Initial count and total price of movies
updateselectedcount();