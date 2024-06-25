const Location = document.querySelector('#input');
const div = document.querySelector('div');
const Form = document.querySelector('form');

Form.addEventListener('submit', (event) => {
    event.preventDefault();

    axios(`https://api.weatherapi.com/v1/current.json?key=fbc3f7bd72c3439581a105608241306&q=${Location.value}&aqi=no`)
        .then((res) => {
            console.log(res.data);
            const Data = res.data;
            div.innerHTML = `
            <div id="inner-box" class="bg-white border shadow-lg w-50 mx-auto mt-5 rounded-lg p-4 mb-5">
    <h1 class="h2 ">${Data.location.name} , ${Data.location.region}</h1>
    <p class="text-light">${Data.location.localtime} , ${Data.location.country}</p>
    <div class="mt-4 d-flex justify-content-between align-items-center mx-4 pb-4">
        <h2 class="display-3 display-md-1 display-lg-1">${Data.current.temp_c}°C</h2>
        <img class="w-25" src="${Data.current.condition.icon}" alt="weatherImg" />
    </div>
    <p class="h5">${Data.current.condition.text}</p>
</div>

            `

        })
        .catch((err) => {
            console.log(err);
        });
});
