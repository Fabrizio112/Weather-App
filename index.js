const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '1cdc29d1fbmsh8c7f4b7d7ca48d8p1e78ddjsn2f86475e8467',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};

let $iconoBuscar = document.querySelector("#icon-search")
let valorDelInputDeCiudad = document.querySelector("#input-clima")


function function1(a,) {
    let llamado = setInterval(() => {
        traerDatos(a.value)
    }, 200);
    if ($iconoBuscar.addEventListener("click", () => {
        clearInterval(llamado)
    })) {
    }
}

valorDelInputDeCiudad.addEventListener("click", () => {
    function1(valorDelInputDeCiudad);
})

$iconoBuscar.addEventListener("click", () => {
    let valorDelInputDeCiudad = document.querySelector("#input-clima")
    traerDatosParaCrearElContenedor(valorDelInputDeCiudad.value);
    traerDatosParaCrearELContenedorDelClimaExtendido(valorDelInputDeCiudad.value)
})

let opcionesExistentes = {};
function traerDatos(a) {
    fetch(`https://weatherapi-com.p.rapidapi.com/search.json?q=${a}&lang=es`, options)
        .then(response => response.json())
        .then(datos => {
            Object.keys(datos).forEach((key) => {
                const optionValue = `${datos[key].country} ${datos[key].region} ${datos[key].name}`;
                if (!opcionesExistentes[optionValue]) {
                    $("#datos").append($(`
                    <option value="${optionValue}"></option>
                    `));
                    opcionesExistentes[optionValue] = true;
                }
            })
        })
        .catch(err => console.error(err));
}
function traerDatosParaCrearElContenedor(a) {
    fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${a}&lang=es`, options)
        .then(response => response.json())
        .then(datos => {
            console.log(datos)
            borrarClima();
            $("#contenedor").append($(`
            <div id="contenedor-clima" class="container">
            <h1 id="pais-clima">${datos.location.country}</h1>
            <p id="ciudad-clima">${datos.location.name} <span id="provincia-clima">${datos.location.region}</span></p>
            <section id="contenedor-contenedores">
            <div id="contenedor-clima__derecho">
                <img src="https://${datos.current.condition.icon}" alt="" id="imagen-clima">
                <span id="numero_clima" >${datos.current.temp_c} °</span>
            </div>
            <div id="contenedor-clima__izquierdo">
                <div id="contenedor-velocidad__clima">
                <i class="fa-solid fa-wind fa-2x"></i>
                    <span id="velocidad_clima">${datos.current.gust_kph} km/h</span>
                </div>
                <div id="contenedor-humedad__clima">
                <i class="fa-solid fa-temperature-three-quarters fa-2x"></i>
                    <span id="sensacion-termica_clima">${datos.current.feelslike_c} °</span>
                </div>
            </div>
            </section> 
            <div id="contenedor-clima__inferior">
            <strong id="nombre-clima">${datos.current.condition.text}</strong>
            <p id="hora-clima">${datos.location.localtime}</p>
            <div>
            </div>
            `))

        })
        .catch(err => console.error(err));
}

function traerDatosParaCrearELContenedorDelClimaExtendido(a) {
    fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${a}&days=3&lang=es`, options)
        .then(response => response.json())
        .then(datos => {
            borrarClimaExtendido();
            $("#contenedor").append($(`
            <section id="contenedor-clima-extendido">
            <section id="dia-hoy">
                <div id="mini-box">
                    <h1>Hoy</h1>
                    <p>${datos.forecast.forecastday[0].date}</p>
                </div>
                <div id="mini-box">
                    <span>4AM</span>
                    <img src="https://${datos.forecast.forecastday[0].hour[4].condition.icon}" alt="">
                    <p>${datos.forecast.forecastday[0].hour[4].temp_c} °</p>
                    <span>${datos.forecast.forecastday[0].hour[4].condition.text}</span>
                    <div id="contenedor-sensacion-termica">
                    <i class="fa-solid fa-temperature-three-quarters"></i>
                    <p>${datos.forecast.forecastday[0].hour[4].feelslike_c}</p>
                    </div>
                </div>
                <div id="mini-box">
                    <span>8AM</span>
                    <img src="https://${datos.forecast.forecastday[0].hour[8].condition.icon}" alt="">
                    <p>${datos.forecast.forecastday[0].hour[8].temp_c} °</p>
                    <span>${datos.forecast.forecastday[0].hour[8].condition.text}</span>
                    <div id="contenedor-sensacion-termica">
                    <i class="fa-solid fa-temperature-three-quarters"></i>
                    <p>${datos.forecast.forecastday[0].hour[8].feelslike_c}</p>
                    </div>
                </div>
                <div id="mini-box">
                    <span>12PM</span>
                    <img src="https://${datos.forecast.forecastday[0].hour[12].condition.icon}" alt="">
                    <p>${datos.forecast.forecastday[0].hour[12].temp_c} °</p>
                    <span>${datos.forecast.forecastday[0].hour[12].condition.text}</span>
                    <div id="contenedor-sensacion-termica">
                    <i class="fa-solid fa-temperature-three-quarters"></i>
                    <p>${datos.forecast.forecastday[0].hour[12].feelslike_c}</p>
                    </div>
                </div>
                <div id="mini-box">
                    <span>16PM</span>
                    <img src="https://${datos.forecast.forecastday[0].hour[16].condition.icon}" alt="">
                    <p>${datos.forecast.forecastday[0].hour[16].temp_c} °</p>
                    <span>${datos.forecast.forecastday[0].hour[16].condition.text}</span>
                    <div id="contenedor-sensacion-termica">
                    <i class="fa-solid fa-temperature-three-quarters"></i>
                    <p>${datos.forecast.forecastday[0].hour[16].feelslike_c}</p>
                    </div>
                </div>
                <div id="mini-box">
                    <span>20PM</span>
                    <img src="https://${datos.forecast.forecastday[0].hour[20].condition.icon}" alt="">
                    <p>${datos.forecast.forecastday[0].hour[20].temp_c} °</p>
                    <span>${datos.forecast.forecastday[0].hour[20].condition.text}</span>
                    <div id="contenedor-sensacion-termica">
                    <i class="fa-solid fa-temperature-three-quarters"></i>
                    <p>${datos.forecast.forecastday[0].hour[20].feelslike_c}</p>
                    </div>
                </div>
            </section>
            <section id="dia-mañana">
                <div id="mini-box">
                    <h1>Mañana</h1>
                    <p>${datos.forecast.forecastday[1].date}</p>
                </div>
                <div id="mini-box">
                    <span>4AM</span>
                    <img src="https://${datos.forecast.forecastday[1].hour[4].condition.icon}" alt="">
                    <p>${datos.forecast.forecastday[1].hour[4].temp_c} °</p>
                    <span>${datos.forecast.forecastday[1].hour[4].condition.text}</span>
                    <div id="contenedor-sensacion-termica">
                    <i class="fa-solid fa-temperature-three-quarters"></i>
                    <p>${datos.forecast.forecastday[1].hour[4].feelslike_c}</p>
                    </div>
                </div>
                <div id="mini-box">
                    <span>8AM</span>
                    <img src="https://${datos.forecast.forecastday[1].hour[8].condition.icon}" alt="">
                    <p>${datos.forecast.forecastday[1].hour[8].temp_c} °</p>
                    <span>${datos.forecast.forecastday[1].hour[8].condition.text}</span>
                    <div id="contenedor-sensacion-termica">
                    <i class="fa-solid fa-temperature-three-quarters"></i>
                    <p>${datos.forecast.forecastday[1].hour[8].feelslike_c}</p>
                    </div>
                </div>
                <div id="mini-box">
                    <span>12PM</span>
                    <img src="https://${datos.forecast.forecastday[1].hour[12].condition.icon}" alt="">
                    <p>${datos.forecast.forecastday[1].hour[12].temp_c} °</p>
                    <span>${datos.forecast.forecastday[1].hour[12].condition.text}</span>
                    <div id="contenedor-sensacion-termica">
                    <i class="fa-solid fa-temperature-three-quarters"></i>
                    <p>${datos.forecast.forecastday[1].hour[12].feelslike_c}</p>
                    </div>
                </div>
                <div id="mini-box">
                    <span>16PM</span>
                    <img src="https://${datos.forecast.forecastday[1].hour[16].condition.icon}" alt="">
                    <p>${datos.forecast.forecastday[1].hour[16].temp_c} °</p>
                    <span>${datos.forecast.forecastday[1].hour[16].condition.text}</span>
                    <div id="contenedor-sensacion-termica">
                    <i class="fa-solid fa-temperature-three-quarters"></i>
                    <p>${datos.forecast.forecastday[1].hour[16].feelslike_c}</p>
                    </div>
                </div>
                <div id="mini-box">
                    <span>20PM</span>
                    <img src="https://${datos.forecast.forecastday[1].hour[20].condition.icon}" alt="">
                    <p>${datos.forecast.forecastday[1].hour[20].temp_c} °</p>
                    <span>${datos.forecast.forecastday[1].hour[20].condition.text}</span>
                    <div id="contenedor-sensacion-termica">
                    <i class="fa-solid fa-temperature-three-quarters"></i>
                    <p>${datos.forecast.forecastday[1].hour[20].feelslike_c}</p>
                    </div>
                </div>
            </section>
            <section id="dia-pasado-mañana">
                <div id="mini-box">
                    <h1>En 2 dias</h1>
                    <p>${datos.forecast.forecastday[2].date}</p>
                </div>
                <div id="mini-box">
                    <span>4AM</span>
                    <img src="https://${datos.forecast.forecastday[2].hour[4].condition.icon}" alt="">
                    <p>${datos.forecast.forecastday[2].hour[4].temp_c} °</p>
                    <span>${datos.forecast.forecastday[2].hour[4].condition.text}</span>
                    <div id="contenedor-sensacion-termica">
                    <i class="fa-solid fa-temperature-three-quarters"></i>
                    <p>${datos.forecast.forecastday[2].hour[4].feelslike_c}</p>
                    </div>
                </div>
                <div id="mini-box">
                    <span>8AM</span>
                    <img src="https://${datos.forecast.forecastday[2].hour[8].condition.icon}" alt="">
                    <p>${datos.forecast.forecastday[2].hour[8].temp_c} °</p>
                    <span>${datos.forecast.forecastday[2].hour[8].condition.text}</span>
                    <div id="contenedor-sensacion-termica">
                    <i class="fa-solid fa-temperature-three-quarters"></i>
                    <p>${datos.forecast.forecastday[2].hour[8].feelslike_c}</p>
                    </div>
                </div>
                <div id="mini-box">
                    <span>12PM</span>
                    <img src="https://${datos.forecast.forecastday[2].hour[12].condition.icon}" alt="">
                    <p>${datos.forecast.forecastday[2].hour[12].temp_c} °</p>
                    <span>${datos.forecast.forecastday[2].hour[12].condition.text}</span>
                    <div id="contenedor-sensacion-termica">
                    <i class="fa-solid fa-temperature-three-quarters"></i>
                    <p>${datos.forecast.forecastday[2].hour[12].feelslike_c}</p>
                    </div>
                </div>
                <div id="mini-box">
                    <span>16PM</span>
                    <img src="https://${datos.forecast.forecastday[2].hour[16].condition.icon}" alt="">
                    <p>${datos.forecast.forecastday[2].hour[16].temp_c} °</p>
                    <span>${datos.forecast.forecastday[2].hour[16].condition.text}</span>
                    <div id="contenedor-sensacion-termica">
                    <i class="fa-solid fa-temperature-three-quarters"></i>
                    <p>${datos.forecast.forecastday[2].hour[16].feelslike_c}</p>
                    </div>
                </div>
                <div id="mini-box">
                    <span>20PM</span>
                    <img src="https://${datos.forecast.forecastday[2].hour[20].condition.icon}" alt="">
                    <p>${datos.forecast.forecastday[2].hour[20].temp_c} °</p>
                    <span>${datos.forecast.forecastday[2].hour[20].condition.text}</span>
                    <div id="contenedor-sensacion-termica">
                    <i class="fa-solid fa-temperature-three-quarters"></i>
                    <p>${datos.forecast.forecastday[2].hour[20].feelslike_c}</p>
                    </div>
                </div>
            </section>`))
        })
        .catch(error => console.error(error));
}

function borrarClima() {
    $("#contenedor-clima").remove();
}
function borrarClimaExtendido() {
    $("#contenedor-clima-extendido").remove();
}