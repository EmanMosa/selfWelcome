function getLanguage(lang) {
    console.log("here test" + lang)
    localStorage.clear();
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

function choiceEntries(id) {
    localStorage.setItem("choice", id);
    window.document.location = './IDScanner.html'


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

function CheckIfCustomerExists() {
    var Invitation = (localStorage.getItem('invitationByName')).toUpperCase();
    getDataFromMiniHotel();
    result = localStorage.getItem('responseFromMiniHotel');
    parser = new DOMParser();
    xmlDoc = parser.parseFromString(result, "text/xml");
    var length = xmlDoc.getElementsByTagName("Reservations")[0].children.length;
    //console.log(length);
    IsFound = false;
    i = 0;
    while (IsFound != true && i < length) {

        var fullname = (xmlDoc.getElementsByTagName("Reservations")[0].children[i].attributes['Namef'].value + " " + xmlDoc.getElementsByTagName("Reservations")[0].children[i].attributes['Namep'].value);

        if ((fullname.toUpperCase()) == Invitation) {
            IsFound = true;
            console.log(IsFound);
            localStorage.setItem('Reservation', (new XMLSerializer()).serializeToString(xmlDoc.getElementsByTagName("Reservations")[0].children[i]));
            return true;
        } else {
            i++;
            if (i == length) {

                return false;
            }
        }

    }
    //  return false;
}

function checkInChoice() {
    //check if customer exists
    var Status = localStorage.getItem('imageScanStatus');
    var fullname = localStorage.getItem('invitationByName');

    if (Status == 'true') {
        if (fullname != null) {
            var IsFound = CheckIfCustomerExists();
            if (IsFound == false) {
                window.document.location = './CustomerNotFound.html';
            } else if (IsFound == true) {
                window.document.location = './OrderDetails.html';
            }
        } else {
            window.document.location = './CustomerNotFound.html';
        }
    } else if (Status == 'false') {
        window.document.location = './CustomerNotFound.html';
    }

}

function checkchoice() {
    var choice = localStorage.getItem("choice");
    if (choice == "checkIn") {
        checkInChoice();
    } else if ((choice == "walkIn" || choice == "dayUse")) {
        //if the User choice walkin or DayUse
        window.document.location = './CitizenShip.html';

    }
}

function previewFile() {
    const preview = document.getElementById('img');
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();
    localStorage.removeItem('invitationByName');
    reader.addEventListener("load", function() {
        // convert image file to base64 string
        //preview.src = reader.result;
        localStorage.setItem("orginalImage", reader.result);
        var imageStr = reader.result;
        imageStr = imageStr.substr(23, imageStr.length)
        console.log(imageStr);
        localStorage.setItem("image", imageStr);
        getData();
        checkchoice();




    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
    //getData();
    //checkchoice();


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

function ShowMe() {


    if (localStorage.getItem("counter") >= 3) {
        document.getElementsByClassName('page-button')[1].style.visibility = "visible"

        document.getElementsByClassName('page-button')[0].onclick = "";

        localStorage.setItem("counter", 1)
    } else {
        document.getElementsByClassName('page-button')[1].style.visibility = "hidden"
    }
}




function ChangeFontByLanguage() {
    var lang = localStorage.getItem("langObj");
    var elm = document.getElementById("opt6");
    var elm2 = document.getElementById("opt7");

    var language = JSON.parse(lang);
    if (language.code == "EN" || language.code == "RU") {
        elm.style["font-size"] = "60%";
        elm2.style["font-size"] = "66%";

    }


}




function changeLanguageForIdentifyingInformation() {
    var lang = localStorage.getItem("langObj");
    console.log("e " + JSON.parse(lang).code)
    var language = JSON.parse(lang);
    var page = language.page31;
    console.log(page);
    document.getElementById("opt5").innerHTML = page.opt5;
    document.getElementById("opt6").innerHTML = page.opt6;
    document.getElementById("opt7").innerHTML = page.opt7;
    ChangeFontByLanguage();

    document.getElementById("invitationbyNumber").innerHTML = page.opt8;
    document.getElementById("invitationbyNumber").placeholder = page.opt8;;

    document.getElementById("invitationByName").innerHTML = page.opt9;
    document.getElementById("invitationByName").placeholder = page.opt9;

    document.getElementById("confirm").innerHTML = page.confirm;


}


function getDateNow() {
    DateNow = new Date();
    day = String(DateNow.getDate());
    month = String(DateNow.getMonth());
    year = String(DateNow.getFullYear());
    if (month < 10)
        day = '0' + String(DateNow.getMonth());

    if (day < 10)
        month = '0' + String(DateNow.getDate());
    date = year + '-' + month + '-' + day;

    localStorage.setItem('Date', date);
}

function getDataFromMiniHotel() {
    var d = $.Deferred();
    var array = [];
    getDateNow();
    from = localStorage.getItem('Date');
    to = from;
    var Query = "<DateRange from=" + "'" + from + "'" + " to=" + "'" + to + "'" + " /> ";
    //var Query = "<DateRange from='2020-03-05' to='2020-03-06' /> ";

    var xmlRequest =
        "<?xml version='1.0' encoding='UTF-8' ?>" +
        "<AvailRaterq xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'>" +
        "<Authentication username=' " +
        'test' +
        "' password='" +
        '2222' +
        "' ResponseType = '03' />" +
        "<Hotel id='" +
        'testhotel' +
        "' Currency='ILS'/>" +
        "" +
        Query +
        "" +
        " <Guests adults='2' child='1' babies='1' />" +
        "<Prices rateCode='TOURISTRATE'><Price boardCode='*ALL*' /></Prices>" +
        "</AvailRaterq>";

    var Url = 'http://api.minihotelpms.com/gds';
    $.ajax({
        url: Url,
        type: "POST",
        crossDomain: true,
        data: xmlRequest,
        async: false,
        success: function(result) {
            //console.log('Succes: ' + result);
            localStorage.setItem('responseFromMiniHotel', result);
        },
        error: function(jqXHR, status) {
            console.log("Error: ", jqXHR.responseText + " " + status);
        }

    });
}

function ReceiptCodeForUser() {
    var code = Math.floor(Math.random() * 99999) + 10000;
    console.log(code);
    localStorage.setItem('Code', code);
    console.log(localStorage['Code']);
    //document.getElementById('code').placeholder = localStorage['Code'];

}

function setDataToNewInfoPage() {
    parser = new DOMParser();
    Reservation = parser.parseFromString(localStorage.getItem('Reservation'), "text/xml");

    document.getElementById('roomType').innerHTML = Reservation.documentElement.attributes['RoomType'].value;
    document.getElementById('roomNumber').innerHTML = Reservation.documentElement.attributes['RoomNumber'].value;

}

function getReservationFromMiniHotelByInvitationType(invitationType) {
    var Invitation = (localStorage.getItem(invitationType)).toUpperCase();

    getDataFromMiniHotel();
    result = localStorage.getItem('responseFromMiniHotel');
    // console.log(result);
    parser = new DOMParser();
    xmlDoc = parser.parseFromString(result, "text/xml");
    // console.log(xmlDoc.getElementsByTagName("Reservations"));

    //console.log(xmlDoc.getElementsByTagName("Reservations"));
    // console.log(xmlDoc.getElementsByTagName("Reservations")[0].children[0].attributes['ResNumber'].value);
    var length = xmlDoc.getElementsByTagName("Reservations")[0].children.length;
    //console.log(length);
    IsFound = false;
    i = 0;
    while (IsFound != true && i < length) {
        console.log(i);
        if (invitationType == 'invitationbyNumber') {
            if ((xmlDoc.getElementsByTagName("Reservations")[0].children[i].attributes['ResNumber'].value).toUpperCase() == Invitation) {
                IsFound = true;
                console.log(IsFound);
                localStorage.setItem('Reservation', (new XMLSerializer()).serializeToString(xmlDoc.getElementsByTagName("Reservations")[0].children[i]));
                window.document.location = './NewInfo.html';
            } else {
                i++;
                if (i == length) {
                    // Reservation not found
                    window.document.location = './IdentifyingInformation.html';
                }
            }
        } else if (invitationType == 'invitationByName') {
            var fullname = (xmlDoc.getElementsByTagName("Reservations")[0].children[i].attributes['Namef'].value + " " + xmlDoc.getElementsByTagName("Reservations")[0].children[i].attributes['Namep'].value);
            if (fullname.toUpperCase() == Invitation) {
                IsFound = true;
                console.log(IsFound);
                localStorage.setItem('Reservation', (new XMLSerializer()).serializeToString(xmlDoc.getElementsByTagName("Reservations")[0].children[i]));
                window.document.location = './NewInfo.html';
            } else {
                i++;
                if (i == length) {
                    // Reservation not found
                    window.document.location = './IdentifyingInformation.html';
                }
            }
        }

    }

    // window.document.location = './NewInfo.html';

}



function OnClickForButtonForIdentifyingInformation() {
    var elements = document.getElementsByClassName('accordion-item accordion-active');
    var id = elements[0].dataset.actabId;
    if (id == "0") {
        var value = document.getElementById('invitationbyNumber').value;
        localStorage.setItem('invitationbyNumber', value);
        getReservationFromMiniHotelByInvitationType('invitationbyNumber');

    } else {
        if (id == "1") {
            var value = document.getElementById('invitationByName').value;
            localStorage.setItem('invitationByName', value);
            getReservationFromMiniHotelByInvitationType('invitationByName');
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
    var lang = localStorage.getItem("langObj");
    console.log("e " + JSON.parse(lang).code)
    var language = JSON.parse(lang);
    var page = language.page31;
    console.log(page);

    var elements = document.getElementsByClassName('accordion-item accordion-active');
    var id = elements[0].dataset.actabId;
    if (id == "0") {
        // document.getElementById("invitationbyNumber").innerHTML = page.opt8;
        document.getElementById("invitationbyNumber").placeholder = page.opt8;;

    } else {
        if (id == "1") {
            //document.getElementById("invitationByName").innerHTML = page.opt9;

            // No focus = Changes the background color of input to red
            document.getElementById("invitationByName").placeholder = page.opt9;
        }
    }



}

function EditStyleForOrderDetails() {
    var lang = localStorage.getItem("langObj");
    var language = JSON.parse(lang);
    var next1 = document.getElementById("next1");
    var again1 = document.getElementById("again1");
    if (language.code == "EN" || language.code == "RU" || language.code == "AR") {
        next1.style["font-size"] = "14px";
        next1.style["height"] = "56px;"
        again1.style["font-size"] = "16px";

    }
}

function changeLanguageForOrderDetails() {
    var lang = localStorage.getItem("langObj");
    // console.log("e " + JSON.parse(lang).code)
    var language = JSON.parse(lang);
    document.getElementById("welcomeMsg").innerHTML = language.welcomeMsg;
    var page = language.page41;
    console.log(page);
    document.getElementById("title1").innerHTML = page.title1;
    document.getElementById("next1").innerHTML = page.next1;
    document.getElementById("again1").innerHTML = page.again1;
    EditStyleForOrderDetails();


}

function ChangeTextToLeft() {
    var lang = localStorage.getItem("langObj");

    var elementimage4 = document.getElementById("imagenewinfo4");
    var elementopt4 = document.getElementById("opt4");
    var elementroomtype = document.getElementById("roomType");

    var elementimag2 = document.getElementById("imagenewinfo2");
    var elementopt2 = document.getElementById("opt2");
    var elementroomNumber = document.getElementById("roomNumber");

    var elementimage1 = document.getElementById("imagenewinfo1");
    var elementopt1 = document.getElementById("opt1");
    var elementguestNumber = document.getElementById("guestNumber");

    var elementimage5 = document.getElementById("imagenewinfo5");
    var elementopt5 = document.getElementById("opt5");
    var elementprice = document.getElementById("price");


    var language = JSON.parse(lang);
    if (language.code == "EN" || language.code == "RU") {
        elementimage4.style["left"] = "10%";
        elementopt2.style["left"] = "27%";
        elementroomtype.style["left"] = "27%";

        elementimag2.style["left"] = "10%";
        elementopt4.style["left"] = "27%";
        elementroomNumber.style["left"] = "27%";

        elementimage1.style["left"] = "10%";
        elementopt1.style["left"] = "27%";
        elementguestNumber.style["left"] = "27%";

        elementimage5.style["left"] = "10%";
        elementopt5.style["left"] = "27%";
        elementprice.style["left"] = "27%";


    }

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
    //document.getElementById("opt3").innerHTML = page.opt3;
    ChangeTextToLeft();



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

function choiceForCitizenShip(id) {
    var choice = localStorage.getItem("choice");

    if (id == "citizenImg") {
        if (choice == "walkIn") {
            window.document.location = 'NumberOfPeopleInRoom2.html';


        } else if (choice == "dayUse") {
            window.document.location = 'NumberOfPeopleInRoom1.html';
        }

    } else if (id == "nocitizenImg") {
        if (choice == "walkIn") {
            window.document.location = 'NumberOfPeopleInRoom2.html';


        } else if (choice == "dayUse") {
            window.document.location = 'NumberOfPeopleInRoom1.html';
        }
    }
}

function changeLanguageForNumberOfPeopleInRoom1() {
    var lang = localStorage.getItem("langObj");
    console.log("e " + JSON.parse(lang).code)
    var language = JSON.parse(lang);
    var page = language.page13;
    console.log(page);
    document.getElementById("title").innerHTML = page.title;

    document.getElementById("choose").innerHTML = page.choose;
    document.getElementById("opt1").innerHTML = page.opt1;
    document.getElementById("opt2").innerHTML = page.opt2;
    document.getElementById("opt3").innerHTML = page.opt3;




}

function choiceForNumberOfPeopleInRoom1(id) {
    if (id == "onePerson") {
        window.document.location = 'ChooseDate.html';

    } else if (id == "couple") {
        window.document.location = 'ChooseDate.html';

    } else if (id == "group") {
        window.document.location = 'ChooseDate.html';

    }
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

function ButtonForNumberOfPeopleInRoom2page() {
    var countEl = document.getElementById("Numcount");
    console.log("people = ", document.getElementById("Numcount").innerText);
    console.log("room = ", document.getElementById("Numcount2").innerText);
    nextPageForNumberOfPeopleInRoom2(document.getElementById("Numcount2").innerText, document.getElementById("Numcount").innerText);

}


function initFunction() {
    localStorage.setItem('max', 10);
    localStorage.setItem('min', 1);
    localStorage.setItem('count', 1);

    localStorage.setItem('count2', 1);

}

function PlusForNumberOfPeople() {
    if (parseInt(localStorage['count']) <= parseInt(localStorage['max'])) {
        localStorage['count']++;
        document.getElementById("Numcount").innerText = localStorage['count'];
    } else {
        document.getElementById("Numcount").innerText = localStorage['count'];
    }


}

function MinusForNumberOfPeople() {
    if (parseInt(localStorage['count']) > parseInt(localStorage['min'])) {
        localStorage['count']--;
        document.getElementById("Numcount").innerText = localStorage['count'];
    } else {
        document.getElementById("Numcount").innerText = localStorage['count'];
    }
}



function PlusForNumberOfRoom() {
    if (parseInt(localStorage['count2']) <= parseInt(localStorage['max'])) {
        localStorage['count2']++;
        document.getElementById("Numcount2").innerText = localStorage['count2'];
    } else {
        document.getElementById("Numcount2").innerText = localStorage['count2'];
    }


}

function MinusForNumberOfRoom() {
    if (parseInt(localStorage['count2']) > parseInt(localStorage['min'])) {
        localStorage['count2']--;
        document.getElementById("Numcount2").innerText = localStorage['count2'];
    } else {
        document.getElementById("Numcount2").innerText = localStorage['count2'];
    }
}

function nextPageForNumberOfPeopleInRoom2(room, people) {
    localStorage.removeItem('ListForRooms');
    localStorage.removeItem('myFavoriteSandwich');

    localStorage.setItem('room', room);
    localStorage.setItem('people', people);
    localStorage.setItem("helpValue", localStorage.getItem("room"));
    window.document.location = "./choose-room.html";

}

function changeLanguageForTypingFullName() {
    var lang = localStorage.getItem("langObj");
    console.log("e " + JSON.parse(lang).code)
    var language = JSON.parse(lang);
    var page = language.page15;
    console.log(page);
    document.getElementById("info").innerHTML = page.title;

    document.getElementById("TypingName").innerHTML = page.inputtitle;
    document.getElementById("TypingName").placeholder = page.inputtitle;;

    document.getElementById("ok").innerHTML = page.ok;




}


function ButtonForTypingFullName() {

    var value = document.getElementById('TypingName').value;
    window.document.location = './payment.html';

}


function focusFunctionforTypingName() {

    document.getElementById("TypingName").placeholder = '';

}

function blurFunctionforTypingName() {
    var lang = localStorage.getItem("langObj");
    console.log("e " + JSON.parse(lang).code)
    var language = JSON.parse(lang);
    var page = language.page15;
    console.log(page);
    document.getElementById("TypingName").placeholder = page.inputtitle;


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

function getDateFromChooseDate() {
    var start = document.getElementById("start");
    var exit = document.getElementById("exit");

    window.document.location = './TypingFullName.html'
}

function ChangeimageToLeftForChooseRoom() {
    var lang = localStorage.getItem("langObj");
    var title = document.getElementById("title");
    var single = document.getElementById("roomTybe1");
    var couple = document.getElementById("roomTybe2");
    var group = document.getElementById("roomTybe3");
    var apartment = document.getElementById("roomTybe4");
    var rightSecT1 = document.getElementById("rightSecT1");
    var rightSecT2 = document.getElementById("rightSecT2");
    var rightSecT3 = document.getElementById("rightSecT3");
    var rightSecT4 = document.getElementById("rightSecT4");
    var leftSecT1 = document.getElementById("leftSecT1");
    var leftSecT2 = document.getElementById("leftSecT2");
    var leftSecT3 = document.getElementById("leftSecT3");
    var leftSecT4 = document.getElementById("leftSecT4");

    var changePos = document.getElementById("changePos");

    var singleText = document.getElementById("singleText");
    var coupleText = document.getElementById("coupleText");
    var groupText = document.getElementById("groupText");
    var apartmentText = document.getElementById("apartmentText");


    var language = JSON.parse(lang);
    if (language.code == "EN" || language.code == "RU") {
        title.style["transform"] = "translate(12%, 50%)";
        single.style["left"] = "16%";
        couple.style["left"] = "16%";
        group.style["left"] = "16%";
        apartment.style["left"] = "16%";
        changePos.style["transform"] = "translate(-12%, -3%)"
        rightSecT1.style["left"] = "2%";
        rightSecT1.style["text-align"] = "left";
        rightSecT2.style["left"] = "2%";
        rightSecT3.style["left"] = "2%";
        rightSecT4.style["left"] = "2%";
        leftSecT1.style["width"] = "48%";
        leftSecT2.style["width"] = "48%";
        leftSecT3.style["width"] = "48%";
        leftSecT4.style["width"] = "48%";
        leftSecT1.style["left"] = "78%";
        leftSecT3.style["left"] = "78%";
        leftSecT2.style["left"] = "78%";
        leftSecT4.style["left"] = "78%";
        singleText.style["text-align"] = "left";
        coupleText.style["text-align"] = "left";
        groupText.style["text-align"] = "left";
        apartmentText.style["text-align"] = "left";



    }
    if (language.code == "AR") {
        singleText.style["text-align"] = "right";
        coupleText.style["text-align"] = "right";
        groupText.style["text-align"] = "right";
        apartmentText.style["text-align"] = "right";

    }

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

    document.getElementById("opt41").innerHTML = page.opt4;
    document.getElementById("opt51").innerHTML = page.opt5;

    document.getElementById("opt42").innerHTML = page.opt4;
    document.getElementById("opt52").innerHTML = page.opt5;

    document.getElementById("opt43").innerHTML = page.opt4;
    document.getElementById("opt53").innerHTML = page.opt5;

    //document.getElementById("opt3").innerHTML = page.opt3;

    document.getElementById("ok").innerHTML = page.ok;
    ChangeimageToLeftForChooseRoom();



}

function RoomChoice(id) {
    localStorage.setItem('RoomChoice', id);

    // e.preventDefault()

}
//not compleate
function ButtonForChooseRoom() {
    for (i = 0; i < localStorage.getItem("helpValue"); i++) {

        localStorage.setItem('helpValue', (localStorage.getItem("helpValue")) - 1);
        var existing = localStorage.getItem('ListForRooms');

        // If no existing data, create an array
        // Otherwise, convert the localStorage string to an array
        existing = existing ? existing.split(',') : [];

        // Add new data to localStorage Array
        existing.push(localStorage.getItem('RoomChoice'));

        // Save back to localStorage
        localStorage.setItem('ListForRooms', existing.toString());
        if (localStorage.getItem("helpValue") != 0) {
            window.document.location = "./choose-room.html";
        } else {
            break;
        }







    }
    if (localStorage.getItem("helpValue") == 0)
        window.document.location = "./ChooseDate.html";
}

var Authentication = ({
    "UserId": "testuser",
    "Password": "Regul@SdkTest"
});
var Transaction2 = (
    [{
        "Base64ImageString": localStorage.getItem("image"),
        "Format": ".jpg",
        "LightIndex": 6,
        "PageIndex": 0
    }]
);


function getData() {
    var Url = 'https://api.regulaforensics.com/webapi/Authentication/Authenticate';
    $.ajax({
        url: Url,
        dataType: "json",
        contentType: "application/json",
        type: "POST",
        crossDomain: true,
        data: JSON.stringify(Authentication),
        async: false,
        success: function(data, textStatus, request) {
            console.log(request.getResponseHeader('x-Token'));
        },
        error: function(request, textStatus, errorThrown) {
            console.log(request.getResponseHeader('x-Token'));
            var xtoken = request.getResponseHeader('x-Token');
            getData1(xtoken);


        }

    });
}

function getData1(xtoken) {
    var Url = 'https://api.regulaforensics.com/webapi/Transaction2/SubmitTransaction?capabilities=252&authenticity=0';
    $.ajax({
        url: Url,
        dataType: "json",
        contentType: "application/json",
        type: "POST",
        // XToken: "VXNlcklkPXRlc3R1c2VyO0lQPTEzMi43Mi4yMzQuMTEwO0RhdGU9NjM3MTg2NTAwMTAwMDExNjI2",
        crossDomain: true,
        data: JSON.stringify(Transaction2),
        async: false,
        beforeSend: function(xhr) {
            xhr.setRequestHeader("X-Token", xtoken);

        },
        success: function(jqXHR, result) {
            console.log('Succes: ' + result);
        },
        error: function(jqXHR, status) {
            console.log("Error: ", jqXHR.responseText + " " + status);
            var transactionID = jqXHR.responseText;
            getData2(transactionID, xtoken);
        }

    });
}



function getData2(transactionID, xtoken) {
    var Url = "https://api.regulaforensics.com/webapi/Transaction2/GetTransactionResult?transactionId=" + transactionID + "&resultType=15";
    $.ajax({
        url: Url,
        dataType: "xml",
        type: "GET",
        // XToken: "VXNlcklkPXRlc3R1c2VyO0lQPTEzMi43Mi4yMzQuMTEwO0RhdGU9NjM3MTg2NTAwMTAwMDExNjI2",
        crossDomain: true,
        // data: JSON.stringify(Transaction2),
        async: false,
        beforeSend: function(xhr) {
            xhr.setRequestHeader("X-Token", xtoken);

        },

        success: function(jqXHR, result, response) {
            console.log('Succes: ' + response.responseText + ',' + result);
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(response.responseText, "text/xml");
            //var xmlDoc = '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?><!--Regula Reader result file--><DOC_OCR_LEXICAL_ANALYSIS_DATA>    <PageIndex>0</PageIndex>    <Info>                <DateTime>2020-03-04T08:02:45.609Z</DateTime>        <TransactionID>2b5639db-d398-4914-afde-47a5cdbc568d</TransactionID>        <ComputerName>WIN-0CUASKLUHPE</ComputerName>        <UserName>SYSTEM</UserName>        <SDKVersion>4.15.1.4291</SDKVersion>        <Version>14.15.2.19305</Version>        <DeviceType>Virtual Reader</DeviceType>        <DeviceNumber>0x3BD28364</DeviceNumber>        <DeviceLabelSerialNumber>3BD28364-871B-4B51-98061A2A793CFEA5</DeviceLabelSerialNumber>    </Info>    <DateFormat>M/d/yyyy</DateFormat>    <Document_Field_Analysis_Info>                <FieldType>0</FieldType>        <Type>0</Type>        <LCID>0</LCID>        <Field_MRZ>P</Field_MRZ>        <Field_RFID />        <Field_Barcode />        <Field_Visual />        <Matrix1>1</Matrix1>        <Matrix2>0</Matrix2>        <Matrix3>0</Matrix3>        <Matrix4>0</Matrix4>        <Matrix5>0</Matrix5>        <Matrix6>0</Matrix6>        <Matrix7>0</Matrix7>        <Matrix8>0</Matrix8>        <Matrix9>0</Matrix9>        <Matrix10>0</Matrix10>    </Document_Field_Analysis_Info>    <Document_Field_Analysis_Info>                <FieldType>1</FieldType>        <Type>1</Type>        <LCID>0</LCID>        <Field_MRZ>ISR</Field_MRZ>        <Field_RFID />        <Field_Barcode />        <Field_Visual />        <Matrix1>1</Matrix1>        <Matrix2>0</Matrix2>        <Matrix3>0</Matrix3>        <Matrix4>0</Matrix4>        <Matrix5>0</Matrix5>        <Matrix6>0</Matrix6>        <Matrix7>0</Matrix7>        <Matrix8>0</Matrix8>        <Matrix9>0</Matrix9>        <Matrix10>0</Matrix10>    </Document_Field_Analysis_Info>    <Document_Field_Analysis_Info>                <FieldType>2</FieldType>        <Type>2</Type>        <LCID>0</LCID>        <Field_MRZ>A22411393</Field_MRZ>        <Field_RFID />        <Field_Barcode />        <Field_Visual />        <Matrix1>1</Matrix1>        <Matrix2>0</Matrix2>        <Matrix3>0</Matrix3>        <Matrix4>0</Matrix4>        <Matrix5>0</Matrix5>        <Matrix6>0</Matrix6>        <Matrix7>0</Matrix7>        <Matrix8>0</Matrix8>        <Matrix9>0</Matrix9>        <Matrix10>0</Matrix10>    </Document_Field_Analysis_Info>    <Document_Field_Analysis_Info>                <FieldType>3</FieldType>        <Type>3</Type>        <LCID>0</LCID>        <Field_MRZ>M25082</Field_MRZ>        <Field_RFID />        <Field_Barcode />        <Field_Visual />        <Matrix1>2</Matrix1>        <Matrix2>0</Matrix2>        <Matrix3>0</Matrix3>        <Matrix4>0</Matrix4>        <Matrix5>0</Matrix5>        <Matrix6>0</Matrix6>        <Matrix7>0</Matrix7>        <Matrix8>0</Matrix8>        <Matrix9>0</Matrix9>        <Matrix10>0</Matrix10>    </Document_Field_Analysis_Info>    <Document_Field_Analysis_Info>                <FieldType>5</FieldType>        <Type>5</Type>        <LCID>0</LCID>        <Field_MRZ>R94062</Field_MRZ>        <Field_RFID />        <Field_Barcode />        <Field_Visual />        <Matrix1>2</Matrix1>        <Matrix2>0</Matrix2>        <Matrix3>0</Matrix3>        <Matrix4>0</Matrix4>        <Matrix5>0</Matrix5>        <Matrix6>0</Matrix6>        <Matrix7>0</Matrix7>        <Matrix8>0</Matrix8>        <Matrix9>0</Matrix9>        <Matrix10>0</Matrix10>    </Document_Field_Analysis_Info>    <Document_Field_Analysis_Info>                <FieldType>7</FieldType>        <Type>7</Type>        <LCID>0</LCID>        <Field_MRZ>6205567829</Field_MRZ>        <Field_RFID />        <Field_Barcode />        <Field_Visual />        <Matrix1>0</Matrix1>        <Matrix2>0</Matrix2>        <Matrix3>0</Matrix3>        <Matrix4>0</Matrix4>        <Matrix5>0</Matrix5>        <Matrix6>0</Matrix6>        <Matrix7>0</Matrix7>        <Matrix8>0</Matrix8>        <Matrix9>0</Matrix9>        <Matrix10>0</Matrix10>    </Document_Field_Analysis_Info>    <Document_Field_Analysis_Info>                <FieldType>8</FieldType>        <Type>8</Type>        <LCID>0</LCID>        <Field_MRZ>ABU HAMED</Field_MRZ>        <Field_RFID />        <Field_Barcode />        <Field_Visual />        <Matrix1>0</Matrix1>        <Matrix2>0</Matrix2>        <Matrix3>0</Matrix3>        <Matrix4>0</Matrix4>        <Matrix5>0</Matrix5>        <Matrix6>0</Matrix6>        <Matrix7>0</Matrix7>        <Matrix8>0</Matrix8>        <Matrix9>0</Matrix9>        <Matrix10>0</Matrix10>    </Document_Field_Analysis_Info>    <Document_Field_Analysis_Info>                <FieldType>9</FieldType>        <Type>9</Type>        <LCID>0</LCID>        <Field_MRZ>RAFAT</Field_MRZ>        <Field_RFID />        <Field_Barcode />        <Field_Visual />        <Matrix1>0</Matrix1>        <Matrix2>0</Matrix2>        <Matrix3>0</Matrix3>        <Matrix4>0</Matrix4>        <Matrix5>0</Matrix5>        <Matrix6>0</Matrix6>        <Matrix7>0</Matrix7>        <Matrix8>0</Matrix8>        <Matrix9>0</Matrix9>        <Matrix10>0</Matrix10>    </Document_Field_Analysis_Info>    <Document_Field_Analysis_Info>                <FieldType>11</FieldType>        <Type>11</Type>        <LCID>0</LCID>        <Field_MRZ>9IS</Field_MRZ>        <Field_RFID />        <Field_Barcode />        <Field_Visual />        <Matrix1>2</Matrix1>        <Matrix2>0</Matrix2>        <Matrix3>0</Matrix3>        <Matrix4>0</Matrix4>        <Matrix5>0</Matrix5>        <Matrix6>0</Matrix6>        <Matrix7>0</Matrix7>        <Matrix8>0</Matrix8>        <Matrix9>0</Matrix9>        <Matrix10>0</Matrix10>    </Document_Field_Analysis_Info>    <Document_Field_Analysis_Info>                <FieldType>12</FieldType>        <Type>12</Type>        <LCID>0</LCID>        <Field_MRZ>0</Field_MRZ>        <Field_RFID />        <Field_Barcode />        <Field_Visual />        <Matrix1>2</Matrix1>        <Matrix2>0</Matrix2>        <Matrix3>0</Matrix3>        <Matrix4>0</Matrix4>        <Matrix5>0</Matrix5>        <Matrix6>0</Matrix6>        <Matrix7>0</Matrix7>        <Matrix8>0</Matrix8>        <Matrix9>0</Matrix9>        <Matrix10>0</Matrix10>    </Document_Field_Analysis_Info>    <Document_Field_Analysis_Info>                <FieldType>25</FieldType>        <Type>25</Type>        <LCID>0</LCID>        <Field_MRZ>ABU HAMED RAFAT</Field_MRZ>        <Field_RFID />        <Field_Barcode />        <Field_Visual />        <Matrix1>0</Matrix1>        <Matrix2>0</Matrix2>        <Matrix3>0</Matrix3>        <Matrix4>0</Matrix4>        <Matrix5>0</Matrix5>        <Matrix6>0</Matrix6>        <Matrix7>0</Matrix7>        <Matrix8>0</Matrix8>        <Matrix9>0</Matrix9>        <Matrix10>0</Matrix10>    </Document_Field_Analysis_Info>    <Document_Field_Analysis_Info>                <FieldType>26</FieldType>        <Type>26</Type>        <LCID>0</LCID>        <Field_MRZ>9IS</Field_MRZ>        <Field_RFID />        <Field_Barcode />        <Field_Visual />        <Matrix1>2</Matrix1>        <Matrix2>0</Matrix2>        <Matrix3>0</Matrix3>        <Matrix4>0</Matrix4>        <Matrix5>0</Matrix5>        <Matrix6>0</Matrix6>        <Matrix7>0</Matrix7>        <Matrix8>0</Matrix8>        <Matrix9>0</Matrix9>        <Matrix10>0</Matrix10>    </Document_Field_Analysis_Info>    <Document_Field_Analysis_Info>                <FieldType>36</FieldType>        <Type>36</Type>        <LCID>0</LCID>        <Field_MRZ>6205567829</Field_MRZ>        <Field_RFID />        <Field_Barcode />        <Field_Visual />        <Matrix1>1</Matrix1>        <Matrix2>0</Matrix2>        <Matrix3>0</Matrix3>        <Matrix4>0</Matrix4>        <Matrix5>0</Matrix5>        <Matrix6>0</Matrix6>        <Matrix7>0</Matrix7>        <Matrix8>0</Matrix8>        <Matrix9>0</Matrix9>        <Matrix10>0</Matrix10>    </Document_Field_Analysis_Info>    <Document_Field_Analysis_Info>                <FieldType>38</FieldType>        <Type>38</Type>        <LCID>0</LCID>        <Field_MRZ>Israel</Field_MRZ>        <Field_RFID />        <Field_Barcode />        <Field_Visual />        <Matrix1>1</Matrix1>        <Matrix2>0</Matrix2>        <Matrix3>0</Matrix3>        <Matrix4>0</Matrix4>        <Matrix5>0</Matrix5>        <Matrix6>0</Matrix6>        <Matrix7>0</Matrix7>        <Matrix8>0</Matrix8>        <Matrix9>0</Matrix9>        <Matrix10>0</Matrix10>    </Document_Field_Analysis_Info>    <Document_Field_Analysis_Info>                <FieldType>51</FieldType>        <Type>51</Type>        <LCID>0</LCID>        <Field_MRZ>P<ISRABU<HAMED<<RAFAT<<<<<<<<<<<<<<<<<<<<<<< A22411393<9ISR9406270M25082562<0556782<9<<<2</Field_MRZ>        <Field_RFID />        <Field_Barcode />        <Field_Visual />        <Matrix1>0</Matrix1>        <Matrix2>0</Matrix2>        <Matrix3>0</Matrix3>        <Matrix4>0</Matrix4>        <Matrix5>0</Matrix5>        <Matrix6>0</Matrix6>        <Matrix7>0</Matrix7>        <Matrix8>0</Matrix8>        <Matrix9>0</Matrix9>        <Matrix10>0</Matrix10>    </Document_Field_Analysis_Info>    <Document_Field_Analysis_Info>                <FieldType>81</FieldType>        <Type>81</Type>        <LCID>0</LCID>        <Field_MRZ>7</Field_MRZ>        <Field_RFID />        <Field_Barcode />        <Field_Visual />        <Matrix1>2</Matrix1>        <Matrix2>0</Matrix2>        <Matrix3>0</Matrix3>        <Matrix4>0</Matrix4>        <Matrix5>0</Matrix5>        <Matrix6>0</Matrix6>        <Matrix7>0</Matrix7>        <Matrix8>0</Matrix8>        <Matrix9>0</Matrix9>        <Matrix10>0</Matrix10>    </Document_Field_Analysis_Info>';
            console.log(xmlDoc);
            localStorage.setItem('imageScanStatus', true)

            extractFullName(xmlDoc);

        },
        error: function(jqXHR, status) {
            localStorage.setItem('imageScanStatus', false)
            console.log("Error: ", jqXHR.responseText + " " + status);
        }

    });

}

function extractFullName(xmlDoc) {
    var FullName = "";
    // parser = new DOMParser();
    //xmlDoc = parser.parseFromString(xmlDoc, "text/xml");
    x = xmlDoc.documentElement.children;
    for (i = 0; i < x.length; i++) {
        console.log(x[i].children[0] && x[i].children[0].innerHTML);
        if (x[i].children[0] && x[i].children[0].innerHTML == 25) {
            console.log(x[i].children[3].innerHTML);
            FullName = x[i].children[3].innerHTML;
            localStorage.setItem('invitationByName', FullName);
            break;

        }

    }

}

function orderDetailsData() {
    document.getElementById("customer").innerHTML = localStorage.getItem("invitationByName");
    document.getElementById("imageid").src = localStorage.getItem("orginalImage");

}