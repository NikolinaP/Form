function show2(){
    document.getElementById('div1').style.display = 'none';
}
function show1(){
    document.getElementById('div1').style.display = 'block';
}
// dropdown
function configureDropDownLists(vechile_type, vechile_model) {
    const small = ['Seat Ibiza', 'Citroen C3', 'Chevrolet Spark', 'Renault Twingo'];
    const sedan = ['Opel Insignia', 'Skoda Octavia', 'Opel Astra Sedan'];
    const pickup = ['Toyota Tacoma', 'Nissan Frontier', 'Chevrolet Silverado'];
    const minivan = ['Ford Grand C-MAX', 'Renault Trafic', 'Opel Zafira Tourer'];
    const suv = ['Dacia Duster', 'Nissan Qashqai', 'Ford Kuga'];

    switch (vechile_type.value) {
        case 'Small':
            vechile_model.options.length = 0;
            for (i = 0; i < small.length; i++) {
                createOption(vechile_model, small[i], small[i]);
            }
            break;
        case 'Sedan':
            vechile_model.options.length = 0;
            for (i = 0; i < sedan.length; i++) {
                createOption(vechile_model, sedan[i], sedan[i]);
            }
            break;
        case 'Pickup':
            vechile_model.options.length = 0;
            for (i = 0; i < pickup.length; i++) {
                createOption(vechile_model, pickup[i], pickup[i]);
            }
            break;
        case 'Minivan':
            vechile_model.options.length = 0;
            for (i = 0; i < minivan.length; i++) {
                createOption(vechile_model, minivan[i], minivan[i]);
            }
            break;
        case 'SUV':
            vechile_model.options.length = 0;
            for (i = 0; i < suv.length; i++) {
                createOption(vechile_model, suv[i], suv[i]);
            }
            break;
        default:
            vechile_model.options.length = 0;
            break;
    }

}

function createOption(ddl, text, value) {
    var opt = document.createElement('option');
    opt.value = value;
    opt.text = text;
    ddl.options.add(opt);
}



// date time picker
$(function() {
    $("#date1").datepicker();
    var date1 = $("#date1");
});
$(function() {
    $("#date2").datepicker();
    var date2 = $("#date2");
});

function func() {
    date1 = new Date(date1.value);
    date2 = new Date(date2.value);
    var milli_secs = date1.getTime() - date2.getTime();
     
    // Convert the milli seconds to Hours 
    var days = milli_secs / (1000 * 60 * 60);

var showdays =Math.round(Math.abs(days));
console.log(showdays);

var denovi = Math.ceil(showdays/24);
console.log(denovi);

var result = denovi * 1500;
document.getElementById("ans").innerHTML = 'Price for car rental: ' + result + 'MKD';

}

