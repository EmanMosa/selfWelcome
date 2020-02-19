function getData(lang) {
    console.log("here test" + lang)

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var myObj = JSON.parse(xhttp.response);
            if (lang == 'EN') {
                var obj = myObj.EN;
                localStorage.setItem("langObj", JSON.stringify(obj));
                window.document.location = './chooseEntries.html'
                document.getElementById("demo").innerHTML = obj.code;

                console.log(obj.UPS);
            } else if (lang == 'AR') {
                var obj = myObj.AR;
                localStorage.setItem("langObj", JSON.stringify(obj));
                window.document.location = './chooseEntries.html'
                document.getElementById("demo").innerHTML = obj.code;

                console.log(obj.UPS);
            } else if (lang == 'HE') {
                var obj = myObj.HE;
                localStorage.setItem("langObj", JSON.stringify(obj));
                window.document.location = './chooseEntries.html'
                document.getElementById("demo").innerHTML = obj.code;

                console.log(obj.UPS);
            } else if (lang == 'RU') {
                var obj = myObj.RU;
                localStorage.setItem("langObj", JSON.stringify(obj));
                window.document.location = './chooseEntries.html'
                document.getElementById("demo").innerHTML = obj.code;

                console.log(obj.UPS);
            }


        }
    };
    xhttp.open("GET", "lang.json", true);
    xhttp.send();

}

function ChangeLanguageForChooseEntries() {
    var lang = localStorage.getItem("langObj");
    console.log("e " + JSON.parse(lang).code)
    var language = JSON.parse(lang);
    var page3 = language.page3;
    console.log(page3);
    document.getElementById("opt1").innerHTML = page3.opt1;
    document.getElementById("opt2").innerHTML = page3.opt2;
    var page33 = language.page33;
    document.getElementById("checkboxText").innerHTML = page33.checkboxText;
}

function changeLanguageForIDScanner() {
    var lang = localStorage.getItem("langObj");
    console.log("e " + JSON.parse(lang).code)
    var language = JSON.parse(lang);
    var page = language.page41;
    console.log(page);
    document.getElementById("title").innerHTML = page.titlephoto;
    document.getElementById("subtitle3photo").innerHTML = page.subtitle3photo;
    document.getElementById("startphoto").innerHTML = page.startphoto;

}

function changeLanguageForCustomerNotFound() {
    var lang = localStorage.getItem("langObj");
    console.log("e " + JSON.parse(lang).code)
    var language = JSON.parse(lang);
    var page = language.errorMsgs.page312;
    console.log(page);
    document.getElementById("m211").innerHTML = page.m211;
    document.getElementById("m2112").innerHTML = page.m2112;
    document.getElementById("m2113").innerHTML = page.m2113;

}



function clickCounter() {


    if (typeof(localStorage.getItem("counter")) !== "undefined") {
        localStorage.setItem("counter", Number(localStorage.getItem("counter")) + 1);
    } else {
        localStorage.setItem("counter", 1)
    }

}

function hideme() {


    if (localStorage.getItem("counter") >= 3) {
        document.getElementsByClassName('page-button')[1].style.visibility = "visible"

        document.getElementsByClassName('page-button')[0].onclick = "";

        localStorage.setItem("counter", 1)
    } else {
        document.getElementsByClassName('page-button')[1].style.visibility = "hidden"
    }
}