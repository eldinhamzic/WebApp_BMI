let = tabs = document.querySelectorAll('.tabs_toggle'),
    contents = document.querySelectorAll('.tabs_content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        contents.forEach((content) => {
            content.classList.remove('is-active');
        });
        tabs.forEach((tab) => {
            tab.classList.remove('is-active');
        });
        contents[index].classList.add('is-active');
        tabs[index].classList.add('is-active');
    });
});

function racunMetric() {
    var age = document.getElementById("age").value;
    var male = document.getElementById("m").checked;
    var female = document.getElementById("f").checked;
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;



    var BMIM = (weight / (Math.pow(height, 2))) * 10000;
    console.log(BMIM.toFixed(2));
    document.getElementById("rez").innerHTML = BMIM.toFixed(2);
    // ZNAM DA JE PREGLUPO AL NISAM ZNAO BOLJI NACIN HEHE

    if (age < 2) {
        alert("Age must be over 2!");
        location.reload();
    }

    if (BMIM < 16 && age > 2) {
        document.getElementById("severe").style.backgroundColor = "#289df6aa";

        document.getElementById("severe1").style.backgroundColor = "white";
        document.getElementById("severe2").style.backgroundColor = "white";
        document.getElementById("severe3").style.backgroundColor = "white";
        document.getElementById("severe4").style.backgroundColor = "white";
        document.getElementById("severe5").style.backgroundColor = "white";
        document.getElementById("severe6").style.backgroundColor = "white";
        document.getElementById("severe7").style.backgroundColor = "white";

    } else if (BMIM >= 16 && BMIM <= 17 && age > 2) {

        document.getElementById("severe1").style.backgroundColor = "#289df6aa";
        document.getElementById("severe").style.backgroundColor = "white";
        document.getElementById("severe2").style.backgroundColor = "white";
        document.getElementById("severe3").style.backgroundColor = "white";
        document.getElementById("severe4").style.backgroundColor = "white";
        document.getElementById("severe5").style.backgroundColor = "white";
        document.getElementById("severe6").style.backgroundColor = "white";
        document.getElementById("severe7").style.backgroundColor = "white";


    } else if (BMIM > 17 && BMIM <= 18.5 && age > 2) {
        document.getElementById("severe2").style.backgroundColor = "#289df6aa";
        document.getElementById("severe1").style.backgroundColor = "white";
        document.getElementById("severe").style.backgroundColor = "white";
        document.getElementById("severe3").style.backgroundColor = "white";
        document.getElementById("severe4").style.backgroundColor = "white";
        document.getElementById("severe5").style.backgroundColor = "white";
        document.getElementById("severe6").style.backgroundColor = "white";
        document.getElementById("severe7").style.backgroundColor = "white";


    } else if (BMIM > 18.5 && BMIM <= 25 && age > 2) {
        document.getElementById("severe3").style.backgroundColor = "#289df6aa";
        document.getElementById("severe1").style.backgroundColor = "white";
        document.getElementById("severe2").style.backgroundColor = "white";
        document.getElementById("severe").style.backgroundColor = "white";
        document.getElementById("severe4").style.backgroundColor = "white";
        document.getElementById("severe5").style.backgroundColor = "white";
        document.getElementById("severe6").style.backgroundColor = "white";
        document.getElementById("severe7").style.backgroundColor = "white";

    } else if (BMIM > 25 && BMIM <= 30 && age > 2) {
        document.getElementById("severe4").style.backgroundColor = "#289df6aa";
        document.getElementById("severe1").style.backgroundColor = "white";
        document.getElementById("severe2").style.backgroundColor = "white";
        document.getElementById("severe3").style.backgroundColor = "white";
        document.getElementById("severe").style.backgroundColor = "white";
        document.getElementById("severe5").style.backgroundColor = "white";
        document.getElementById("severe6").style.backgroundColor = "white";
        document.getElementById("severe7").style.backgroundColor = "white";


    } else if (BMIM > 30 && BMIM <= 35 && age > 2) {
        document.getElementById("severe5").style.backgroundColor = "#289df6aa";
        document.getElementById("severe1").style.backgroundColor = "white";
        document.getElementById("severe2").style.backgroundColor = "white";
        document.getElementById("severe3").style.backgroundColor = "white";
        document.getElementById("severe4").style.backgroundColor = "white";
        document.getElementById("severe").style.backgroundColor = "white";
        document.getElementById("severe6").style.backgroundColor = "white";
        document.getElementById("severe7").style.backgroundColor = "white";

    } else if (BMIM > 35 && BMIM <= 40 && age > 2) {
        document.getElementById("severe6").style.backgroundColor = "#289df6aa";
        document.getElementById("severe1").style.backgroundColor = "white";
        document.getElementById("severe2").style.backgroundColor = "white";
        document.getElementById("severe3").style.backgroundColor = "white";
        document.getElementById("severe4").style.backgroundColor = "white";
        document.getElementById("severe5").style.backgroundColor = "white";
        document.getElementById("severe").style.backgroundColor = "white";
        document.getElementById("severe7").style.backgroundColor = "white";

    } else if (BMIM > 40 && age > 2) {
        document.getElementById("severe7").style.backgroundColor = "#289df6aa";
        document.getElementById("severe1").style.backgroundColor = "white";
        document.getElementById("severe2").style.backgroundColor = "white";
        document.getElementById("severe3").style.backgroundColor = "white";
        document.getElementById("severe4").style.backgroundColor = "white";
        document.getElementById("severe5").style.backgroundColor = "white";
        document.getElementById("severe6").style.backgroundColor = "white";
        document.getElementById("severe").style.backgroundColor = "white";
    }

}
// US

function racunUS() {
    var age2 = document.getElementById("age1").value;
    var male2 = document.getElementById("m1").checked;
    var female2 = document.getElementById("f1").checked;
    var height2 = document.getElementById("height1").value;
    var weight2 = document.getElementById("weight1").value;


    var BMIU = ((weight2 * 703) / (Math.pow(height2, 2)) * 1);
    document.getElementById("rez1").innerHTML = BMIU.toFixed(2);

    if (age2 < 2) {
        alert("Age must be over 2!");
        location.reload();
    }

    if (BMIU < 16 && age2 >= 2) {
        document.getElementById("severe").style.backgroundColor = "#289df6aa";

        document.getElementById("severe1").style.backgroundColor = "white";
        document.getElementById("severe2").style.backgroundColor = "white";
        document.getElementById("severe3").style.backgroundColor = "white";
        document.getElementById("severe4").style.backgroundColor = "white";
        document.getElementById("severe5").style.backgroundColor = "white";
        document.getElementById("severe6").style.backgroundColor = "white";
        document.getElementById("severe7").style.backgroundColor = "white";

    } else if (BMIU >= 16 && BMIU <= 17 && age2 >= 2) {

        document.getElementById("severe1").style.backgroundColor = "#289df6aa";
        document.getElementById("severe").style.backgroundColor = "white";
        document.getElementById("severe2").style.backgroundColor = "white";
        document.getElementById("severe3").style.backgroundColor = "white";
        document.getElementById("severe4").style.backgroundColor = "white";
        document.getElementById("severe5").style.backgroundColor = "white";
        document.getElementById("severe6").style.backgroundColor = "white";
        document.getElementById("severe7").style.backgroundColor = "white";


    } else if (BMIU > 17 && BMIU <= 18.5 && age2 >= 2) {
        document.getElementById("severe2").style.backgroundColor = "#289df6aa";
        document.getElementById("severe1").style.backgroundColor = "white";
        document.getElementById("severe").style.backgroundColor = "white";
        document.getElementById("severe3").style.backgroundColor = "white";
        document.getElementById("severe4").style.backgroundColor = "white";
        document.getElementById("severe5").style.backgroundColor = "white";
        document.getElementById("severe6").style.backgroundColor = "white";
        document.getElementById("severe7").style.backgroundColor = "white";


    } else if (BMIU > 18.5 && BMIU <= 25 && age2 >= 2) {
        document.getElementById("severe3").style.backgroundColor = "#289df6aa";
        document.getElementById("severe1").style.backgroundColor = "white";
        document.getElementById("severe2").style.backgroundColor = "white";
        document.getElementById("severe").style.backgroundColor = "white";
        document.getElementById("severe4").style.backgroundColor = "white";
        document.getElementById("severe5").style.backgroundColor = "white";
        document.getElementById("severe6").style.backgroundColor = "white";
        document.getElementById("severe7").style.backgroundColor = "white";

    } else if (BMIU > 25 && BMIU <= 30 && age2 >= 2) {
        document.getElementById("severe4").style.backgroundColor = "#289df6aa";
        document.getElementById("severe1").style.backgroundColor = "white";
        document.getElementById("severe2").style.backgroundColor = "white";
        document.getElementById("severe3").style.backgroundColor = "white";
        document.getElementById("severe").style.backgroundColor = "white";
        document.getElementById("severe5").style.backgroundColor = "white";
        document.getElementById("severe6").style.backgroundColor = "white";
        document.getElementById("severe7").style.backgroundColor = "white";


    } else if (BMIU > 30 && BMIU <= 35 && age2 >= 2) {
        document.getElementById("severe5").style.backgroundColor = "#289df6aa";
        document.getElementById("severe1").style.backgroundColor = "white";
        document.getElementById("severe2").style.backgroundColor = "white";
        document.getElementById("severe3").style.backgroundColor = "white";
        document.getElementById("severe4").style.backgroundColor = "white";
        document.getElementById("severe").style.backgroundColor = "white";
        document.getElementById("severe6").style.backgroundColor = "white";
        document.getElementById("severe7").style.backgroundColor = "white";

    } else if (BMIU > 35 && BMIU <= 40 && age2 >= 2) {
        document.getElementById("severe6").style.backgroundColor = "#289df6aa";
        document.getElementById("severe1").style.backgroundColor = "white";
        document.getElementById("severe2").style.backgroundColor = "white";
        document.getElementById("severe3").style.backgroundColor = "white";
        document.getElementById("severe4").style.backgroundColor = "white";
        document.getElementById("severe5").style.backgroundColor = "white";
        document.getElementById("severe").style.backgroundColor = "white";
        document.getElementById("severe7").style.backgroundColor = "white";

    } else if (BMIU > 40 && age2 >= 2) {
        document.getElementById("severe7").style.backgroundColor = "#289df6aa";
        document.getElementById("severe1").style.backgroundColor = "white";
        document.getElementById("severe2").style.backgroundColor = "white";
        document.getElementById("severe3").style.backgroundColor = "white";
        document.getElementById("severe4").style.backgroundColor = "white";
        document.getElementById("severe5").style.backgroundColor = "white";
        document.getElementById("severe6").style.backgroundColor = "white";
        document.getElementById("severe").style.backgroundColor = "white";
    }
}