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




function changeLanguageForIdentifyingInformation() {
    var lang = localStorage.getItem("langObj");
    console.log("e " + JSON.parse(lang).code)
    var language = JSON.parse(lang);
    var page = language.page31;
    console.log(page);
    // document.getElementById("opt5").innerHTML = page.opt5;
    document.getElementById("opt6").innerHTML = page.opt6;
    document.getElementById("opt7").innerHTML = page.opt7;
    document.getElementById("invitationbyNumber").innerHTML = page.opt8;
    document.getElementById("invitationByName").innerHTML = page.opt9;
    document.getElementById("confirm").innerHTML = page.confirm;


}



function OnClickForButton() {
    var elements = document.getElementsByClassName('accordion-item accordion-active');
    var id = elements[0].dataset.actabId;
    if (id == "0") {
        var value = document.getElementById('invitationbyNumber').value;
    } else {
        if (id == "1") {
            var value = document.getElementById('invitationByName').value;
        }
    }
}

function focusFunction() {
    var elements = document.getElementsByClassName('accordion-item accordion-active');
    var id = elements[0].dataset.actabId;
    if (id == "0") {
        document.getElementById("invitationbyNumber").placeholder = '';

    } else {
        if (id == "1") {
            // Focus = Changes the background color of input to yellow
            document.getElementById("invitationByName").placeholder = '';
        }
    }
}

function blurFunction() {
    var elements = document.getElementsByClassName('accordion-item accordion-active');
    var id = elements[0].dataset.actabId;
    if (id == "0") {
        document.getElementById("invitationbyNumber").placeholder = 'הקלד מספר הזמנה';

    } else {
        if (id == "1") {
            // No focus = Changes the background color of input to red
            document.getElementById("invitationByName").placeholder = " שם משפחה ופרטי כפי שהוקלד בהזמנה "
        }
    }
}

function changeLanguageForOrderDetails() {
    var lang = localStorage.getItem("langObj");
    console.log("e " + JSON.parse(lang).code)
    var language = JSON.parse(lang);
    var page = language.page41;
    console.log(page);

    document.getElementById("title1").innerHTML = page.title1;
    document.getElementById("next1").innerHTML = page.next1;
    document.getElementById("again1").innerHTML = page.again1;



}

function changeLanguageForNewInfo() {
    var lang = localStorage.getItem("langObj");
    console.log("e " + JSON.parse(lang).code)
    var language = JSON.parse(lang);
    var page = language.page9;
    console.log(page);
    document.getElementById("title").innerHTML = page.title;

    document.getElementById("opt1").innerHTML = page.opt1;
    document.getElementById("opt2").innerHTML = page.opt2;
    document.getElementById("opt4").innerHTML = page.opt4;
    document.getElementById("opt5").innerHTML = page.opt5;
    document.getElementById("ok").innerHTML = page.ok;
    document.getElementById("opt3").innerHTML = page.opt3;



}

function changeLanguageForReceiptCode() {
    var lang = localStorage.getItem("langObj");
    console.log("e " + JSON.parse(lang).code)
    var language = JSON.parse(lang);
    var page = language.page10;
    console.log(page);
    document.getElementById("title").innerHTML = page.title;

    document.getElementById("subtitle").innerHTML = page.subtitle;




}

function changeLanguageForCitizenShip() {
    var lang = localStorage.getItem("langObj");
    console.log("e " + JSON.parse(lang).code)
    var language = JSON.parse(lang);
    var page = language.page41;
    console.log(page);
    document.getElementById("titlecitizen").innerHTML = page.titlecitizen;

    document.getElementById("choose").innerHTML = page.choose;
    document.getElementById("citizen").innerHTML = page.citizen;
    document.getElementById("nocitizen").innerHTML = page.nocitizen;




}

function changeLanguageForNumberOfPeopleInRoom1() {
    var lang = localStorage.getItem("langObj");
    console.log("e " + JSON.parse(lang).code)
    var language = JSON.parse(lang);
    var page = language.page41;
    console.log(page);
    document.getElementById("title").innerHTML = page.title;

    document.getElementById("choose").innerHTML = page.choose;
    document.getElementById("opt1").innerHTML = page.opt1;
    document.getElementById("opt2").innerHTML = page.opt2;
    document.getElementById("opt3").innerHTML = page.opt3;




}

function changeLanguageForNumberOfPeopleInRoom2() {
    var lang = localStorage.getItem("langObj");
    console.log("e " + JSON.parse(lang).code)
    var language = JSON.parse(lang);
    var page = language.page14;
    console.log(page);
    document.getElementById("title").innerHTML = page.title;

    document.getElementById("subtitle").innerHTML = page.subtitle;
    document.getElementById("opt1").innerHTML = page.opt1;
    document.getElementById("opt2").innerHTML = page.opt2;
    document.getElementById("ok").innerHTML = page.ok;




}

function changeLanguageForTypingFullName() {
    var lang = localStorage.getItem("langObj");
    console.log("e " + JSON.parse(lang).code)
    var language = JSON.parse(lang);
    var page = language.page15;
    console.log(page);
    document.getElementById("info").innerHTML = page.title;

    document.getElementById("inputtitle").innerHTML = page.inputtitle;

    document.getElementById("ok").innerHTML = page.ok;




}


function OnClickForButton2() {

    var value = document.getElementById('TypingName').value;

}

function focusFunctionforTypingName() {

    document.getElementById("TypingName").placeholder = '';

}

function blurFunctionforTypingName() {

    document.getElementById("TypingName").placeholder = "הקלדת שם משפחה ושם פרטי";


}

function changeLanguageForChooseDate() {
    var lang = localStorage.getItem("langObj");
    console.log("e " + JSON.parse(lang).code)
    var language = JSON.parse(lang);
    var page = language.page33;
    console.log(page);
    document.getElementById("chosedate").innerHTML = page.title1;

    document.getElementById("dateText1").innerHTML = page.dateText1;
    document.getElementById("dateText2").innerHTML = page.dateText2;

    document.getElementById("ok").innerHTML = page.ok;




}

function changeLanguageForChooseRoom() {
    var lang = localStorage.getItem("langObj");
    console.log("e " + JSON.parse(lang).code)
    var language = JSON.parse(lang);
    var page = language.page9;
    console.log(page);
    document.getElementById("title").innerHTML = page.title2;

    document.getElementById("opt4").innerHTML = page.opt4;
    document.getElementById("opt5").innerHTML = page.opt5;
    document.getElementById("opt3").innerHTML = page.opt3;

    document.getElementById("ok").innerHTML = page.ok;




}