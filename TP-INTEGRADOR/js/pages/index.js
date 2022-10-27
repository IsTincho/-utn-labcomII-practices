const llamarDatos= async () => {
    try {
        let miciudad = document.getElementById("Ciudades").value;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${miciudad}&appid=${apiKey}&units=metric&lang=es`;
        const res = await fetch(url);
        if (res.ok) {
            const datos = await res.json();
            console.log(datos);
        } else {
            console.log(res.status); // 404            
        }
    } catch (err) {
        console.log(err);
    }
};

//llamarDatos();


function mostrarCard(){
    llamarDatos(); //<--- Va a haber que llamar la funcion
    document.getElementById('card').style.display = "block";
    //alert(document.getElementById("Ciudades").value);
    //`....${miciudad}...` <--- Usar `` para poder pasar valores
}

function cargarCiudades(){
    var x = document.getElementById("Ciudades");
    var a = JSON.parse(localStorage.getItem('CITIES'));
    var b = a.length;
    var i;
    for (i=0; i<b; i++) {
        x.options.add(new Option (a[i], a[i]));
    }
}
