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

    for (var i = 0; i < usersArray.length; i++) {
        if (usersArray[i].email == userMail) {
            if (usersArray[i].isAdmin == true) {
                $('#create_quiz_container').css('display', 'block');
            }
        }
    }

    // createdCardsArray = [];
    function createdCards(cardVar, cardImgUrl, quizTitle, quizAns) {
        this.cardVar = cardVar;
        this.cardImgUrl = cardImgUrl;
        this.quizTitle = quizTitle;
        this.quizAns = quizAns;
    }

    // if (localStorage.getItem('created_cards') === null){
    // }else{
    //     //case local storage already has the object, then 
    //     //get all the values in it to add to it to get the previous values
    //     createdCardsArray = JSON.parse(localStorage.getItem('created_cards'));
    //     console.log(createdCardsArray)
    //     for(var i=0; i<createdCardsArray.length; i++){
    //         var newQuizCard = document.createElement('div');
    //         $(newQuizCard).attr('class', 'col-12 col-md-6 col-lg-3');
    //         // console.log(createdCardsArray[i])
    //         newQuizCard.innerHTML = createdCardsArray[i].cardVar;
    //         $('#created_quiz_row').append(newQuizCard);
    //     }
    // }

    $('#create_quiz_div').click(function() {
        $('#exampleModal').modal('show');
    })
    $('#upload').click(function () {
        var fileImage = document.getElementById('fileItemImage').files[0];
        imgUrl = "images/" + fileImage.name;
        quizAns = $('#quiz_ans').val();
        $('.quiz_card_img').css('background-image', 'url('+ imgUrl +')')
    })

    
    $('#create_quiz_create_btn').click(function () {
        var createdCardTitle = $('#create_quiz_title').val();
        var createdCardDesc = $('#create_quiz_desc').val();

        var newQuizCard = document.createElement('div');
        $(newQuizCard).attr('class', 'col-12 col-md-6 col-lg-3');
        newQuizCard.innerHTML = "<div class='card' style='height: 500px'> " +
        "<p class='card_img created_p' id='card1'></p>" + 
        "<div class='card-body'>" + 
            "<h5 class='card-title'>"+ createdCardTitle +"</h5>" + 
            "<p class='card-text'>"+ createdCardDesc +" , you have 5 minutes to finish the exam.</p>"+
            "<input id='"+ createdCardTitle +"_quiz_btn_start' type='button' class='btn btn-primary start_quiz' value='Start Quiz'></div></div>";

        var nodeTxt = newQuizCard.innerHTML;
        var newCard = new createdCards(nodeTxt, imgUrl, createdCardTitle, quizAns);
        createdCardsArray.push(newCard);
        localStorage.setItem('created_cards', JSON.stringify(createdCardsArray));
        $('#exampleModal').modal('hide');
        document.location.reload(); 
    })
})