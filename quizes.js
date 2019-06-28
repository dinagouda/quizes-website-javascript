function checkItemInLocalStorage(key) {
    var arrayToCheck = [];

    if (localStorage.getItem(key) === null){
        //case local storage is empty, leave the array empty
        //this step is for avoiding 'array is null' exception
    }else{
        //case local storage already has the object, then 
        //get all the values in it to add to it to get the previous values
        arrayToCheck = JSON.parse(localStorage.getItem(key))
    }    
    return arrayToCheck;
}
$(document).ready(function () {


    //create users array 
    var takenQuizesArray = checkItemInLocalStorage('taken_quizes');
    
    //user class to store taken quizes
    function quiz(loggedUserMail, btnId, quizName, grade, taken) {
        this.loggedUserMail = loggedUserMail;
        this.btnId = btnId;
        this.quizName = quizName;
        this.grade = grade;
        this.taken = taken;
    }


    createdCardsArray = [];

    if (localStorage.getItem('created_cards') === null){
    }else{
        //case local storage already has the object, then 
        //get all the values in it to add to it to get the previous values
        createdCardsArray = JSON.parse(localStorage.getItem('created_cards'));
        console.log(createdCardsArray)
        for(var i=0; i<createdCardsArray.length; i++){
            var newQuizCard = document.createElement('div');
            $(newQuizCard).attr('class', 'col-12 col-md-6 col-lg-3');
            // console.log(createdCardsArray[i])
            newQuizCard.innerHTML = createdCardsArray[i].cardVar;
            $('#created_quiz_row').append(newQuizCard);
            $('#card1.created_p:last-of-type').css('background-image', 'url('+ createdCardsArray[i].cardImgUrl +')')
        }
    }


    $('#sign_out').click(function () {
        logUserOut();
    })

    shown = false;
    $('#bas').click(function () {
        if (shown) {
            $('.dropdown').dropdown('hide');
            shown = false;    
        }else{
            $('.dropdown').dropdown('show');
            shown = true; 
        }
    })
    

    var question = JSON.parse(text);
    $('#q1').text(question.questions[0].q);
    $('#l1').text(question.questions[0].a1);
    $('#l2').text(question.questions[0].a2);
    $('#l3').text(question.questions[0].a3);

    $('#check_ans').click(function () {

        if (document.getElementById('r1').checked) {
            if (document.getElementById('l1').innerText == question.questions[0].ca) {
                alert('true')
            }else{
                alert('wrong')
            }
        }else if (document.getElementById('r2').checked) {
            if (document.getElementById('l2').innerText == question.questions[0].ca) {
                alert('true')
            }else{
                alert('wrong')
            }
        }else if (document.getElementById('r3').checked) {
            if (document.getElementById('l3').innerText == question.questions[0].ca) {
                alert('true')
            }else{
                alert('wrong')
            }
        }
    })

    //create users array 
    usersArray = checkItemInLocalStorage('user');
    
    //create users array 
    usersLogedinArray = [];
    userMail = '';
    //check if the object in the local storage is already created 
    //or this is the first time creating it(local storage is empty)
    if (localStorage.getItem('user_signed') === null){
        //case local storage is empty, leave the array empty
        //this step is for avoiding 'array is null' exception
    }else{
        //case local storage already has the object, then 
        //get all the values in it to add to it to get the previous values
        usersLogedinArray = JSON.parse(localStorage.getItem('user_signed'));
        userMail = usersLogedinArray.email;
    }

    function qq(qname) {
        this.qname = qname;
    }

    //check if the user is logged in 
    if (usersLogedinArray.signed) {
        //log the user in if he is logged in
        logUserIn(userMail);
        /*this part disables the quizes he took before*/
        //get all the buttons of the quizes
        var takenQuizesBtns = $('.start_quiz');
        //loop over the taken quizes array
        for(var i=0; i<takenQuizesArray.length; i++){
            //find the current user to get the courses he took
            if (takenQuizesArray[i].loggedUserMail == userMail) {
                //loop over the buttons of quizes to disables the taken ones for this user
                for (var index = 0; index < takenQuizesBtns.length; index++) {
                    var itemId = $(takenQuizesBtns[index]).attr('id');
                    if(takenQuizesArray[i].btnId == itemId){
                        $(takenQuizesBtns[index]).prop('disabled', true);
                    }
                }
            }
        }
    }else{
        $('#bas').css('display', 'none');
    }


    $('#login_btn').click(function () {

        var userEmail = $('#exampleInputEmail1').val();
        var found = false;
        var username = '';
        for (var index = 0; index < usersArray.length; index++) {
            if (usersArray[index].email == userEmail) {
                //if we found the email already exists 
                //set the variable to true and break the loop
                found = true;
                break;
            }
        }
        if (found) {
            logUserIn(userEmail);
        }else{
            alert('this email doesn`t exist, signup')
        }
       document.location.replace("quizes.html");
    })


    $('#create_quiz_btn').click(function () {
        document.location.assign("quizes_page.html");
    });

    /*start quiz buttons of the card */

    //array of all start_quiz buttons
    var startQuizBtns = $('.start_quiz');
    $(startQuizBtns).click(function () {
        if (usersLogedinArray.signed) {
            var quizName = $(this).prev().prev().text();
            for(var i=0; i<usersArray.length; i++){
                if (usersArray[i].email == userMail) {
                    var quizName = $(this).prev().prev().text();
                    var takenQuiz = new quiz(userMail, $(this).attr('id'), quizName, 50, true);
                    takenQuizesArray.push(takenQuiz);
                    $(this).prop('disabled', true);
                    localStorage.setItem('taken_quizes', JSON.stringify(takenQuizesArray));
                    localStorage.setItem('current_quiz', quizName);
                    document.location.assign('quiz.html');
                }
            }
        }else{
            $('#exampleModal').modal('show');
        }
    })
})
//this function is called to do the changes if the user is loggedin
//profile is added and login/signup buttons are removed
function logUserIn(mail) {
    $('#exampleModal').modal('hide');
    $('#nav_login_btn').css('display', 'none');
    $('#nav_signup_btn').css('display', 'none');
    $('#bas').css('display', 'inline');
    $('#nav_quiz_btn').css('display', 'inline');
    $('#profile_btn').css('display', 'inline');
    $('#profile_name').text(mail);
    usersLogedinArray.signed = true;
    usersLogedinArray.email = mail;
    localStorage.setItem('user_signed', JSON.stringify(usersLogedinArray));
}

function logUserOut() {
    $('#nav_login_btn').css('display', 'inline');
    $('#nav_signup_btn').css('display', 'inline');
    $('#profile_btn').css('display', 'none');
    $('#nav_quiz_btn').css('display', 'none');
    usersLogedinArray.signed = false;
    localStorage.setItem('user_signed', JSON.stringify(usersLogedinArray));
    $('.dropdown').dropdown('hide');
    shown = false;
    document.location.replace("quizes.html");
}

text = '{ "questions" : [' +
    '{ "id":"1" , "q":"How many Bytes are stored by ‘Long’ Data type in C# .net?" ,' + 
    ' "a1":"8", "a2":" 4", "a3":" 2", "ca":"8" },' +

    '{ "id":"2" , "q":"Choose “.NET class” name from which data type “UInt” is derived ?" ,' +
    '"a1":"System.Int16", "a2":"System.UInt32", "a3":"System.UInt64", "ca":"System.UInt64" },' +

    '{ "id":"3" , "q":"Correct Declaration of Values to variables ‘a’ and ‘b’?" ,' +
    '"a1":"int a = 32, b = 40.6", "a2":"int a = 42; b = 40;", "a3":"int a = 32; int b = 40;", "ca":"int a = 32; int b = 40;" },' +

    '{ "id":"4" , "q":"Arrange the following data type in order of increasing" ,' +
    '"a1":"long short int sbyte", "a2":"sbyte short int long", "a3":"short sbyte int long", "ca":"short sbyte int long" },' +

    '{ "id":"5" , "q":"Which data type should be more preferred for storing a simple number like 35 to improve execution speed of a program?" ,' +
    '"a1":"sbyte", "a2":"short", "a3":"int", "ca":"int" },' +
    
    '{ "id":"3" , "q":"q three ??" , "a1":"answer 1", "a2":"answer 2", "a3":"answer 3" } ]}'; 