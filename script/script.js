function calculateInsurance() {
    var name = document.getElementById("name").value;
    var age = Number(document.getElementById("age").value);
    var country = document.getElementById("selectOption").value;
    var horsepower = Number(document.getElementById("horsepower").value);

    switch (true) {
        case (country == "Austria"):
            c = Math.round((horsepower * 100) / (age + 50))
            document.getElementById('result').innerHTML = name + ", your insurance costs " + c + " €";
            break;
        case (country == "Hungary"):
            c = Math.round((horsepower * 120) / (age + 100))
            document.getElementById('result').innerHTML = name + ", your insurance costs " + c + " €";
            break;
        case (country == "Greece"):
            c = Math.round((horsepower * 150) / ((age + 3) + 50))
            document.getElementById('result').innerHTML = name + ", your insurance costs " + c + " €";
            break;
    }
}
document.getElementById("calculate").addEventListener("click", calculateInsurance)