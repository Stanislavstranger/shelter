let pets;

fetch("../../../assets/json/pets.json") //path to the file with json data
        .then(response => {
            return response.json();
        })
        .then(data => {
            pets = data;
            console.log(pets);
        });