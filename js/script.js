// capturo la lista:
const contenedor = document.getElementById('listaUsuarios');



// Extraer los datos de la API:
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        if (!response.ok) {
            throw new Error('La solicitud ha fallado');
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
        data.forEach((personal => {
            console.log(personal);
            // Creo el numero aleatorio a la edad:
            const edad = Math.floor(Math.random() * (60 - 18 + 1)) + 18;
            //console.log(edad);
            const { name, username, email, id } = personal;
            const { street, suite, city } = personal.address
            const companyName = personal.company.name;
            //me falta agregar la imagen a cada objectPosition: 
            const img = `../assets/img/${id}.jpeg`
            const nuevoPersonal = { name, username, email, age: edad, street, suite, city, companyName, img };
            console.log(nuevoPersonal);
            //el cath y agragregar a la lista:
        }))


    });