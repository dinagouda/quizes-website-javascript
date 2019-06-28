$(document).ready(function () {
    
    //create users array 
    var takenQuizesArray = [];
    //check if the object in the local storage is already created 
    //or this is the first time creating it(local storage is empty)
    if (localStorage.getItem('taken_quizes') === null){
        //case local storage is empty, leave the array empty
        //this step is for avoiding 'array is null' exception
    }else{
        //case local storage already has the object, then 
        //get all the values in it to add to it to get the previous values
        takenQuizesArray = JSON.parse(localStorage.getItem('taken_quizes'))
    }
    for(var i=0; i<takenQuizesArray.length; i++){
        //find the current user to get the courses he took
        if (takenQuizesArray[i].loggedUserMail == userMail) {
            createQuizItem(takenQuizesArray[i].quizName, takenQuizesArray[i].grade);
        }
    }


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


    //create users array 
    usersArray = checkItemInLocalStorage('user');
    for (var i = 0; i < usersArray.length; i++) {
        if (usersArray[i].email == userMail) {
            $('#name span').text(usersArray[i].fname + " " + usersArray[i].lname);
            $('#email span').text(userMail);
        }        
    }
    
    var items = $('.list-group-item span');
    console.log(items)
    for(var i=0; i<items.length; i++){
        if (items[i].innerText < 3) {
            $(items[i]).parent().css('background-color', "#FF3925")
            $(items[i]).parent().css('color', "white")
        }else if (items[i].innerText >= 3 && items[i].innerText < 4) {
            $(items[i]).parent().css('background-color', "#FF9600")
            $(items[i]).parent().css('color', "white")
        }else if (items[i].innerText >= 4 && items[i].innerText < 6) {
            $(items[i]).parent().css('background-color', "#FFE500")
            $(items[i]).parent().css('color', "white")
        }else if (items[i].innerText >= 6 && items[i].innerText < 8) {
            $(items[i]).parent().css('background-color', "#CDF03A")
            $(items[i]).parent().css('color', "white")
        }else if (items[i].innerText >= 8) {
            $(items[i]).parent().css('background-color', "#2CE574")
            $(items[i]).parent().css('color', "white")
        }
    }
})

function createQuizItem(quizName, quizGrade) {
    var newQuizCard = document.createElement('li');
    newQuizCard.innerHTML = "<li class='list-group-item'><i class='fas fa-file-alt'></i> "+ quizName +" : <span>" + quizGrade + "</span></li>"
    $(newQuizCard).css("list-style", 'none');
    $('#grade_list_group').append(newQuizCard);
}
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