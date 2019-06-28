$(document).ready(function () {

    createdCardsArray = [];
    if (localStorage.getItem('created_cards') === null){
    }else{
        //case local storage already has the object, then 
        //get all the values in it to add to it to get the previous values
        createdCardsArray = JSON.parse(localStorage.getItem('created_cards'));
    }
    
    var item = localStorage.getItem('current_quiz');
    var corname = "";
    if (item == "HTML5") {
        corname = item;
    }else if (item == "C#") {
        corname = item;
    }else if (item == "MS SQL Server") {
        corname = item;
    }else{
        for(var i=0; i<createdCardsArray.length; i++){
            if (createdCardsArray[i].quizTitle == item) {

                corname = item;

                var title = corname + ".json";
                var ans = createdCardsArray[i].quizAns + ".json";
                $.getJSON( title, function( json ) {
                    arr1 = json;
                });
                $.getJSON( ans, function( json ) {
                    arr2 = json;
                });                
            }
        }
    }
    
    
//     if (corname == "javascript") {
//         alert("javascript")
//         //#region  java script
//         var questions = {
//             "status": [[
//                 "The behaviour of the instances present of a class inside a method is defined by ",
//                 " The keyword or the property that you use to refer to an object through which they were invoked is",
//                 "The basic difference between JavaScript and Java is",
//                 "The meaning for Augmenting classes is that:",
//                 "The property of JSON() method is:",
//                 "When a class B can extend another class A, we say that:",
//                 "If A is the superclass and B is the subclass, then subclass inheriting the superclass can be represented as",
//                 "The method that can be used to create new properties and also to modify the attributes of existing properties is",
//                 "The Crockford’s subset does not include which function in JavaScript?",
//                 "What does javascript use instead of == and !=?",


//                 " What is being imposed on each subset to ensure that it conforms to the subset?",
//                 "Why was “The Good Parts” designed as a language subset in JavaScript?",
//                 " Which is the subset that is a secure container designed for the purpose of safely running untrusted JavaScript?",
//                 "Why is this keyword not preferred in JavaScript?",
//                 "Which are the two functions that are not allowed in any secure subset?",
//                 " Which is the object that defines methods that allow complete control over page content?",
//                 "Which was one of the first security subsets proposed?",
//                 "Which is the subset that transforms web content into secure modules that can be safely hosted on a web page?",
//                 "The four kinds of class members are",
//                 " Different kinds of object involved in a class definition are",
                
//                 "The object whose properties are inherited by all instances of the class, and properties whose values are functions behaving like instance methods of the class, is",
//                 "Which variables are used internally in object methods and are also globally visible?",
//                 "The class that represents the regular expressions is",
//                 "How can we make methods available on all objects?",
//                 "What is the procedure to add methods to HTMLElement so that they will be inherited by the objects that represent the HTML tags in the current document?",
//                 " You can refresh the webpage in JavaScript by using",
//                 " The let keyword can be used",
//                 "The main difference between the variables declared with var and with let is",
//                 "Which looping statement allows XML tags to appear in JavaScript programs and adds API for operating on XML data?",
//                 "which method of the iterable object returns an iterator object for the collection"

// ]]
//         }

//         var answers = {
//             "ans": [
//             ["method", "classes", "interfaces"],
//             ["from", "to", "this"],
//             ["no differnce", "function are considered as fields", "function are values , and there is no hard distinction between methods and fields"],
//             ["object inhert prototype properties even in dynamic state", "objects inherit prototype proprties in static state", "object doesnt inhert"],
//             ["in can be innvoked as object.JSON()", "it will automatically invoked by compiler", "it will automatically invoked by JSON.stringfy() method"],
//             ["A is the superclass and B is the subclass", "B is the superclass and A is the subclass", "both A and B are the superclass"],
//             ["B= inherit (A)", "B= A.inherit()", "B.prototype=inherit(A)"],
//             ["object.defineProperty()", "object.defineProperties()", "both (a) and (b)"],
//             ["eval()", "coeval()", "equal"],
//             ["it uses bitwise checking", "it uses === and !== instead", "it uses equals () and notequals() instead"],


//             ["A parser to parse the code", "A parser that parses and adds to the subset", "A static verifier that parses code"],
//             ["to improve programmer flexibality", "to balance the workload", "to improve programmer productivity"],
//             ["Sandbox", "The Good parts", "Both (a) and (b)"],
//             ["highly memory consuming", "Functions should access the global objects", "Functions should not access the global objects"],
//             ["evaluate() and restict()", "eval() and function constractor", "debugger() and test()"],
//             ["the clint-side document object", "the server side document object", "both (a) and (b)"],
//             ["FBJS", "Caja", "ADsafe"],
//             ["ADsafe", "Caja", "dojox.secure"],
//             ["instance method ,instance field , static method, dynamic method","instance fields ,instance method,class fields ,class method", "global method ,instance field , static method, dynamic method"],
//             ["public,private ,protected", "constractor ,function , destractor", "constractor object ,prototype object,instance object"],

//             ["instance object", "constractor object", "prototype object"],
//             ["object properties", "variable properties", "method properties"],
//             ["RegEXpObj", "RegExpclass", "RegExp"],
//             ["Object.add(methods)", "Object.method(add)", "Object.prototype"],
//             ["HTMLElement.prototype()", "HTMLElement.prototype", "HTML.addmethods()"],
//             ["Window.reload", "location.reload", "Window.refresh"],
//             ["as a substitute of var", "as a block statment to define new variable", "all of these"],
//             ["var is paricular function", "let is confined to a particular function but var is not", "var defines values based on conditions but let does not"],
//             ["for loop", "while loop", "for/each loop"],
//             ["iterator()", "_iterator_()", "_iteration_()"]
//             ]
//         }
//         //#endregion


//     } else 
    if (corname == "HTML5") {
        alert("html5")
        //#region html5

        var questions = {
            "status": [[
                "html stands for:",
                "which of the following tag is used to mark a begining of paragraph :",
                "from which tag descriptive list starts :",
                "correct html tag for the largest heading is :",
                "the attribute of <form> tag :",
                "markup tags tell the web browser:",
                "www is based on which model",
                "what are empty elements and is it valid",
                "which of the follwing attributes of text box control allow to limit the maximum character",
                "web pages starts with which of the following tag",
                


                "html is a subset of",
                "which of the following is container",
                "the attribute which define the relationship between current document and hrefed url is",
                "<dt> tag is designed to fit a single line of our web page but <dd> tag will accept a",
                "character encoding is ",
                "from which tag the descriptive list starts",
                "correct html to left align the content inside a table cell is",
                "the tag which allows you to rest other html tags within the description is :",
                "<base> tag is designed to appear only between",
                "how can you open a link in a new browser window ?",


                "A much better approach to establish the base url is to use",
                "the tag used to create a new list item and also include a hyperlink is",
                "can the element <first> be replaced with <first>",
                "any part of the graphic that is not include in another hot zone is considrerd to be part of",
                "which of the tag is used to creats a number list",
                "INPUT is",
                "the map definition file is generally stored in",
                "the least html standard is",
                "the tag used to create a hypertext relationship between current document and another url is",
                "the text inside the <TEXT AREA> tag works like",


            ]]
        }

        var answers = {
            "ans":
            [["hyper text markup language", "high text markup language", "none of this"],
            ["td", "br", "p"],
            ["ll", "dd", "dl"],
            ["h1", "h6", "heading"],
            ["method", "action", "both"],
            ["how to organise the page", "how to display the page", "none of these"],
            ["local-server", "clint-server", "3-tier"],
            ["no,there is no such trms as empty element", "empty elements are elements with no data", "none of these"],
            ["size", "len", "maxlength"],
            ["body", "title", "html"],

            ["SGMT", "SGML", "SGMD"],
            ["SELECT", "BODY", "both"],
            ["REL", "URL", "REV"],
            ["line of text", "full paragraph", "word"],
            ["method used to represent numbers", "method used to represent char", "a system that cosists of code"],
            ["LL", "DD", "DL"],
            ["<tdleft>", "<td align =left", "<td leftalign>"],
            ["CAPTION", "TD", "TR"],
            ["HEAD", "TITLE", "BODY"],
            ["a href=url target =new", "a href=url.new ", "a href=url target =_blank"],


            ["BASE element", "HEAD element", "both"],
            ["Ll", "DL", "DD"],
            ["No", "both are same", "first is coorect only"],
            ["rect", "point", "default"],
            ["Ll", "OL", "Ll and OL"],
            ["format tag", "empty tag", "both"],
            ["CGL-BIN", "RECYCKE-BIN", "BIN"],
            ["XML", "SGML", "HTML 5.0"],
            ["ISINDEX", "LINK", "A"],
            ["P", "T", "PRE"] ]

           
        }

        var correct = {
            "cor": [
                ["hyper text markup language"],
                ["p"],
                ["dl"],
                ["h1"],
                ["both"],
                ["how to display the page"],
                ["clint-server"],
                ["empty elements are elements with no data"],
                ["maxlength"],
                ["html"],

                ["SGML"],
                ["both"],
                ["REL"],
                ["full paragraph"],
                ["a system that cosists of code"],
                ["DL"],
                ["<td align =left"],
                ["CAPTION"],
                ["HEAD"],
                ["a href=url target =_blank"],


                ["BASE element"],
                ["Ll"],
                ["both are same"],
                ["default"],
                ["OL"],
                ["format tag"],
                ["BIN"],
                ["SGML"],
                ["A"],
                ["PRE"]


            ]
        }
        //#endregion


    } else if (corname == "C#") {
        alert("c")
        //#region c#
        var questions = {
            "status": [[

                "CLR is the .net equivalent of ___",
                "the CLR is physically represented by an assemble named ___",
                "SOAP stands for ___",
                "the ___ language allows more than one method in a single class",
                "in c# , a subroutine is called a ___",
                "All c# applications begin excution by calling the ___method",
                "A ___ is an identifier that denotes a storage location . ",
                "___ are reserved , and cannot be used as identifier",
                "Boxing converts a value type on the stack to an ___ on the heap ",
                "The character pair ? : is a ___ available in c# ",


                "in C# , all binary operators are ___",
                "An ___ is a symbol that tells the computer to perform certain mathmetical or logical manipulation",
                "A ___ is any valid c# variable ending with a colon ",
                "c# has ___ operator , useful for making two way decisions",
                "___ causes the loop to continue with the next iteration after skipping any statments in between",
                "An ___ is a group of contiguous or related data items that share a common name",
                "Arrays in c# are ___ objects",
                "Multidimensional arrays are somethimes called ___ Arrays",
                "___ parameters are used to pass results back to the calling method",
                "The formal-parameter- list is always enclosed in ___",

                "___ variables are visible only in the block they are declared .",
                "C# does not support ___ constructors ",
                "A structure in c# provides a unique way of packing together data of ___ types.",
                "struct's data members are ___ by default ",
                "A ___ creates an object by copying variables from another object",
                "the methods that have the same name , but different parameter list and different definitions is called ___",
                "the c# provides special methods known as ___ methods to provide access to data members ",
                "when an instance method declaration includes the abstract modifiers , the method is said to be an ___ ",
                "The theory of ___ implies that user can control the access to a class , method , or variable ",
                "inhertance is ___ in nature ",

]]
        }

        var answers = {
            "ans": [
            ["java virtual machine ", "common language runtime", "common type system"],
            ["mscoree.dll", "mcoree.dll", "msoree.dll"],
            ["simple object access program", "simple object access protocol", "simple object application protocol"],
            ["c#", "j#", "c++"],
            ["function", "metadata", "method"],
            ["class()", "main()", "submain()"],
            ["constant", "Refernce type", "variable"],
            ["Keywords", "literal", "variables"],
            ["Bool type", "instance type", "class type"],
            ["unary operator", "ternary operator", "decision operator"],

            ["center-associative", "right-associative", "left-associative"],
            ["operator", "Expression", "condition"],
            ["goto", "label", "logical"],
            ["looping", "functional", "conditional"],
            ["loop", "Exit", "continue"],
            ["operator", "integer", "Array"],
            ["Reference", "Logical", "Value"],
            ["Square", "Triangle", "Rectangle"],
            ["Input", "value", "Output"],
            ["square", "semicolon", "paranthesis"],


            ["system", "Global", "Local"],
            ["parameterized", "parameter-less", "class"],
            ["Different", "same", "invoking"],
            ["protected", "public", "private"],
            ["copy constractor", "default constractor", "invoking constractor"],
            ["Method overloading", "Method overriding", "Method overwriting"],
            ["loop", "Function", "Accessor"],
            ["Abstract Method", "instance Method", "sealed method"],
            ["Data hiding", "Encapsulation", "information hiding"],
            ["Commutative", "Associative", "Transitive"],

            ]
        }

        var correct = {
            "cor": [

                ["java virtual machine "],
                ["mscoree.dll"],
                ["simple object access protocol"],
                ["c#"],
                ["method"],
                ["main()"],
                ["variable"],
                ["Keywords"],
                ["class type"],
                ["ternary operator"],

                ["left-associative"],
                ["operator"],
                ["label"],
                ["conditional"],
                ["continue"],
                ["Array"],
                ["Reference"],
                ["Rectangle"],
                ["Output"],
                ["paranthesis"],


                ["Local"],
                ["parameter-less"],
                ["Different"],
                ["private"],
                ["copy constractor"],
                ["Method overloading"],
                ["Accessor"],
                ["Abstract Method"],
                ["Encapsulation"],
                ["Transitive"],

            ]
        }
        //#endregion

    } else if (corname == "MS SQL Server") {
        alert("sql")
        //#region sql
        var questions = {
            "status": [[

                "which command is used to remove all rows from a table",
                "what is the language used by most of the DBMS for helping their users to access data ?",
                "the language used in application program to request data from the DBMS is reffered to as the :",
                "A command that lets you change one or more fields in a record is :",
                "the modify operation is likely to be done after",
                "This is an authorization command of SQL :",
                "Which of the following is an aggreate function in sql",
                "the commond used to create database user :",
                "An operation that will increase the length of the list is :",
                "Grant is a command from sql type :",


                "which command is used to add a column to an existing table",
                "which one is not an aggregate function in sql",
                "which one of the following is a valid join type",
                "one of the following steps is not involved in processing a quary",
                "which of the following is an aggregate function in sql",
                "which one of these is an aggregate function in sql",
                "language used by programmers to communicate with database is :",
                "Which of the following is an authorization command in sql ?",
                "Transactions are initated by BEGIN TRANSACTION and terminated",
                "Statment that uses a condition to control iterative excution of a statment block",

                "Complex calculation can be performed using the following operation",
                "An alias is :",
                "one of the main heuristic rule for query optimization",
                "Which of the following is not an SQL command",
                "The DMLs whic require user to specify what data is needed and how to get it , is called",
                "Which of the following clauses is used in the CREAT TRIGGER command to create a row level trigger",
                "which of the following is used to evaluate a query excution strategy ",
                "Which of the following is a data query statment in QUEL",
                "Which type of join returns all rows that satisfy the join condition",
                "which one of the following aggregate SQL function returns number of rows",

]]
        }

        var answers = {
            "ans": [
            ["Delete", "Remove", "Truncate"],
            ["High level language", "Quary language", "SQL"],
            ["DML", "DDL", "Query language"],
            ["insert", "Modify", "Look- up"],
            ["Delete", "Look-up", "insert"],
            ["Access", "Grant", "Allow"],
            ["Union", "Like", "Max"],
            ["Make user", "Create user", "Add user to database"],
            ["Insert", "Look-up", "Modify"],
            ["DDL", "DCL", "DML"],

            ["create", "update", "alter"],
            ["count", "mean", "min"],
            ["nature", "full outer join", "on"],
            ["optimization", "evaluation", "distribution"],
            ["Union", "Like", "Group"],
            ["AVG", "SELECT", "ORDER BY"],
            ["DML", "DDL", "QL"],
            ["Access", "Foriegn key", "None of these"],
            ["By commit transaction ", "by roll back transaction", "either (a) or (b)"],
            ["If statment", "While statment", "Break statment"],


            ["Union", "Aggregation", "Nested if"],
            ["An alternate name given to relation ", "An alternate name given to an inner query", "An alternate name given to a user"],
            ["applying a join first ", "applying any binary operation first", "applying a select and a project first"],
            ["Create", "Drop", "Alter"],
            ["DDL DMLs", "procedure DMLs", "Non-procedure DMLs"],
            ["For Row", "Row Level", "None of these"],
            ["Query tree", "Access plan", "Database catalog"],
            ["RETRIEVE", "SELECT", "GET"],
            ["Inner join", "Oter join", "Semi join"],
            ["AVG", "MIN", "Count"],


            ]
        }

        var correct = {
            "cor": [

                ["Truncate"],
                ["Quary language"],
                ["DML"],
                ["Modify"],
                ["Look-up"],
                ["Grant"],
                ["Max"],
                ["Add user to database"],
                ["Insert"],
                ["DCL"],

                ["alter"],
                ["mean"],
                ["full outer join"],
                ["distribution"],
                ["Group"],
                ["AVG"],
                ["QL"],
                ["None of these"],
                ["either (a) or (b)"],
                ["While statment"],


                ["Aggregation"],
                ["An alternate name given to an inner query"],
                ["applying a select and a project first"],
                ["Alter"],
                ["Non-procedure DMLs"],
                ["Row Level"],
                ["Database catalog"],
                ["RETRIEVE"],
                ["Oter join"],
                ["Count"]

            ]
        }
        //#endregion

    }
    // else if (corname == "javascript") {
    //     alert("press ok when you are ready, js")
        
    //     for(var i=0; i<createdCardsArray.length; i++){
    //         if (createdCardsArray[i].quizTitle == corname) {
    //             var title = corname + ".json";
    //             var ans = createdCardsArray[i].quizAns + ".json";
    //             $.getJSON( title, function( json ) {
    //                 arr1 = json;
    //             });
    //             $.getJSON( ans, function( json ) {
    //                 arr2 = json;
    //             });
    //         }
    //     }
    //     var questions = arr1;
    //     console.log(questions);
    //     var answers = arr2;
    // }
     else {
        var questions = arr1;
        console.log(questions);
        var answers = arr2;

    }

    //#region timer
    countdowndate = (new Date().getTime()) + 5 * 60000;
    distance = 0;


    var interval = null;
    interval = setInterval(updateDiv, 1000);

    function updateDiv() {
        var now = new Date().getTime();
        distance = countdowndate - now;
        var minuts = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("timer").innerHTML = minuts + "m " + seconds + "s ";
        if (minuts == 0 && seconds == 0) {
            //alert("time finish")
            clearInterval(interval);
            document.getElementById("rad1").disabled = true;
            document.getElementById("rad2").disabled = true;
            document.getElementById("rad3").disabled = true;
            document.getElementById("rad4").disabled = true;
            document.getElementById("rad5").disabled = true;
            document.getElementById("rad6").disabled = true;
            document.getElementById("rad7").disabled = true;
            document.getElementById("rad8").disabled = true;
            document.getElementById("rad9").disabled = true;
            document.getElementById("rad10").disabled = true;
            document.getElementById("rad11").disabled = true;
            document.getElementById("rad12").disabled = true;
            document.getElementById("rad13").disabled = true;
            document.getElementById("rad14").disabled = true;
            document.getElementById("rad15").disabled = true;
            document.getElementById("rad16").disabled = true;
            document.getElementById("rad17").disabled = true;
            document.getElementById("rad18").disabled = true;
            document.getElementById("rad19").disabled = true;
            document.getElementById("rad20").disabled = true;
            document.getElementById("rad21").disabled = true;
            document.getElementById("rad22").disabled = true;
            document.getElementById("rad23").disabled = true;
            document.getElementById("rad24").disabled = true;
            document.getElementById("rad25").disabled = true;
            document.getElementById("rad26").disabled = true;
            document.getElementById("rad27").disabled = true;
            document.getElementById("rad28").disabled = true;
            document.getElementById("rad29").disabled = true;
            document.getElementById("rad30").disabled = true;


        }

    }




    //#region 

    var ques1 = document.getElementById("ques1");
    var ques2 = document.getElementById("ques2");
    var ques3 = document.getElementById("ques3");
    var ques4 = document.getElementById("ques4");
    var ques5 = document.getElementById("ques5");
    var ques6 = document.getElementById("ques6");
    var ques7 = document.getElementById("ques7");
    var ques8 = document.getElementById("ques8");
    var ques9 = document.getElementById("ques9");
    var ques10 = document.getElementById("ques10");
    //#endregion


    //#region 
    var lab11 = document.getElementById("ques11");
    var lab12 = document.getElementById("ques12");
    var lab13 = document.getElementById("ques13");

    var lab21 = document.getElementById("ques21");
    var lab22 = document.getElementById("ques22");
    var lab23 = document.getElementById("ques23");

    var lab31 = document.getElementById("ques31");
    var lab32 = document.getElementById("ques32");
    var lab33 = document.getElementById("ques33");

    var lab41 = document.getElementById("ques41");
    var lab42 = document.getElementById("ques42");
    var lab43 = document.getElementById("ques43");

    var lab51 = document.getElementById("ques51");
    var lab52 = document.getElementById("ques52");
    var lab53 = document.getElementById("ques53");

    var lab61 = document.getElementById("ques61");
    var lab62 = document.getElementById("ques62");
    var lab63 = document.getElementById("ques63");

    var lab71 = document.getElementById("ques71");
    var lab72 = document.getElementById("ques72");
    var lab73 = document.getElementById("ques73");

    var lab81 = document.getElementById("ques81");
    var lab82 = document.getElementById("ques82");
    var lab83 = document.getElementById("ques83");

    var lab91 = document.getElementById("ques91");
    var lab92 = document.getElementById("ques92");
    var lab93 = document.getElementById("ques93");

    var lab101 = document.getElementById("ques101");
    var lab102 = document.getElementById("ques102");
    var lab103 = document.getElementById("ques103");
    //#endregion
    //console.log(questions);

    //#region 

function getRandomInt(min, max){
    return Math.floor(Math.random()*(max-min))+min;
}

var init =[];
while (init.length <10){
    var randnum =getRandomInt(0,30);
    if(!init.indexOf(randnum) > -1){
        init.push(randnum);
    }
}

console.log(init);
    var one = init[1];
    var two = init[1];
    var three = init[2];
    var four = init[3];
    var five = init[4];
    var six = init[5];
    var seven = init[6];
    var eight =init[7];
    var nine =init[8];
    var ten = init[9];


    //#endregion

    //#region 
    ques1.innerHTML = questions.status[0][one];
    ques2.innerHTML = questions.status[0][two];
    ques3.innerHTML = questions.status[0][three];
    ques4.innerHTML = questions.status[0][four];
    ques5.innerHTML = questions.status[0][five];
    ques6.innerHTML = questions.status[0][six];
    ques7.innerHTML = questions.status[0][seven];
    ques8.innerHTML = questions.status[0][eight];
    ques9.innerHTML = questions.status[0][nine];
    ques10.innerHTML = questions.status[0][ten];
    //#endregion


    //#region 
    lab11.innerHTML = answers.ans[one][0];
    lab12.innerHTML = answers.ans[one][1];
    lab13.innerHTML = answers.ans[one][2];


    lab21.innerHTML = answers.ans[two][0];
    lab22.innerHTML = answers.ans[two][1];
    lab23.innerHTML = answers.ans[two][2];


    lab31.innerHTML = answers.ans[three][0];
    lab32.innerHTML = answers.ans[three][1];
    lab33.innerHTML = answers.ans[three][2];


    lab41.innerHTML = answers.ans[four][0];
    lab42.innerHTML = answers.ans[four][1];
    lab43.innerHTML = answers.ans[four][2];


    lab51.innerHTML = answers.ans[five][0];
    lab52.innerHTML = answers.ans[five][1];
    lab53.innerHTML = answers.ans[five][2];


    lab61.innerHTML = answers.ans[six][0];
    lab62.innerHTML = answers.ans[six][1];
    lab63.innerHTML = answers.ans[six][2];


    lab71.innerHTML = answers.ans[seven][0];
    lab72.innerHTML = answers.ans[seven][1];
    lab73.innerHTML = answers.ans[seven][2];


    lab81.innerHTML = answers.ans[eight][0];
    lab82.innerHTML = answers.ans[eight][1];
    lab83.innerHTML = answers.ans[eight][2];


    lab91.innerHTML = answers.ans[nine][0];
    lab92.innerHTML = answers.ans[nine][1];
    lab93.innerHTML = answers.ans[nine][2];


    lab101.innerHTML = answers.ans[ten][0];
    lab102.innerHTML = answers.ans[ten][1];
    lab103.innerHTML = answers.ans[ten][2];

    //#endregion

    document.getElementById("sub").onclick = function () {
        //alert("fkl");



        var ans1 = correct.cor[one][0];
        var ans2 = correct.cor[two][0];
        var ans3 = correct.cor[three][0];
        var ans4 = correct.cor[four][0];
        var ans5 = correct.cor[five][0];
        var ans6 = correct.cor[six][0];
        var ans7 = correct.cor[seven][0];
        var ans8 = correct.cor[eight][0];
        var ans9 = correct.cor[nine][0];
        var ans10 = correct.cor[ten][0];


        count = 0;

        //first question
        if (document.getElementById("rad1").checked == true) {
            var question1 = document.getElementById("ques11").innerHTML;
            if (question1 == ans1) {
                count++;
                $("#ques11").css('backgroundColor', 'green');

            } else {
                $("#ques11").css('backgroundColor', 'red');
            }
            $("#ques11").css('color', 'white');

        } else if (document.getElementById("rad2").checked == true) {
            var question1 = document.getElementById("ques12").innerHTML;
            if (question1 == ans1) {
                count++;
                $("#ques12").css('backgroundColor', 'green');
            } else {
                $("#ques12").css('backgroundColor', 'red');
            }
            $("#ques12").css('color', 'white');

        } else if (document.getElementById("rad3").checked == true) {
            var question1 = (document.getElementById("ques13").innerHTML);
            if (question1 == ans1) {
                count++;
                $("#ques13").css('backgroundColor', 'green');
            } else {
                $("#ques13").css('backgroundColor', 'red');
            }
            $("#ques13").css('color', 'white');

        } else {
            var question1 = ("null");

        }

        //second question
        if (document.getElementById("rad4").checked == true) {
            var question2 = (document.getElementById("ques21").innerHTML);
            if (question2 == ans2) {
                count++;
                $("#ques21").css('backgroundColor', 'green');
            } else {
                $("#ques21").css('backgroundColor', 'red');
            }
            $("#ques21").css('color', 'white');

        } else if (document.getElementById("rad5").checked == true) {
            var question2 = (document.getElementById("ques22").innerHTML);
            if (question2 == ans2) {
                count++;
                $("#ques22").css('backgroundColor', 'green');
            } else {
                $("#ques22").css('backgroundColor', 'red');
            }
            $("#ques22").css('color', 'white');
            
        } else if (document.getElementById("rad6").checked == true) {
            var question2 = (document.getElementById("ques23").innerHTML);
            if (question2 == ans2) {
                count++;
                $("#ques23").css('backgroundColor', 'green');
            } else {
                $("#ques23").css('backgroundColor', 'red');

            }
            $("#ques23").css('color', 'white');

        } else {
            var question2 = ("null");
        }



        //third question
        if (document.getElementById("rad7").checked == true) {
            var question3 = (document.getElementById("ques31").innerHTML);
            if (question3 == ans3) {
                count++;
                $("#ques31").css('backgroundColor', 'green');
            } else {
                $("#ques31").css('backgroundColor', 'red');

            }
            $("#ques31").css('color', 'white');

        } else if (document.getElementById("rad8").checked == true) {
            var question3 = (document.getElementById("ques32").innerHTML);
            if (question3 == ans3) {
                count++;
                $("#ques32").css('backgroundColor', 'green');
            } else {
                $("#ques32").css('backgroundColor', 'red');

            }
            $("#ques32").css('color', 'white');

        } else if (document.getElementById("rad9").checked == true) {
            var question3 = (document.getElementById("ques33").innerHTML);
            if (question3 == ans3) {
                count++;
                $("#ques33").css('backgroundColor', 'green');
            } else {
                $("#ques33").css('backgroundColor', 'red');

            }
            $("#ques33").css('color', 'white');

        } else {
            var question3 = ("null");
        }





        //forth question
        if (document.getElementById("rad10").checked == true) {
            var question4 = (document.getElementById("ques41").innerHTML);

            if (question4 == ans4) {
                count++;
                $("#ques41").css('backgroundColor', 'green');
            } else {
                $("#ques41").css('backgroundColor', 'red');

            }
            $("#ques41").css('color', 'white');

        } else if (document.getElementById("rad11").checked == true) {
            var question4 = (document.getElementById("ques42").innerHTML);

            if (question4 == ans4) {
                count++;
                $("#ques42").css('backgroundColor', 'green');
            } else {
                $("#ques42").css('backgroundColor', 'red');

            }
            $("#ques42").css('color', 'white');

        } else if (document.getElementById("rad12").checked == true) {
            var question4 = (document.getElementById("ques43").innerHTML);

            if (question4 == ans4) {
                count++;
                $("#ques43").css('backgroundColor', 'green');
            } else {
                $("#ques43").css('backgroundColor', 'red');

            }
            $("#ques43").css('color', 'white');

        } else {
            var question4 = ("null");
        }


        //fifth question
        if (document.getElementById("rad13").checked == true) {
            var question5 = (document.getElementById("ques51").innerHTML);

            if (question5 == ans5) {
                count++;
                $("#ques51").css('backgroundColor', 'green');
            } else {
                $("#ques51").css('backgroundColor', 'red');

            }
            $("#ques51").css('color', 'white');

        } else if (document.getElementById("rad14").checked == true) {
            var question5 = (document.getElementById("ques52").innerHTML);

            if (question5 == ans5) {
                count++;
                $("#ques52").css('backgroundColor', 'green');
            } else {
                $("#ques52").css('backgroundColor', 'red');

            }
            $("#ques52").css('color', 'white');

        } else if (document.getElementById("rad15").checked == true) {
            var question5 = (document.getElementById("ques53").innerHTML);

            if (question5 == ans5) {
                count++;
                $("#ques53").css('backgroundColor', 'green');
            } else {
                $("#ques53").css('backgroundColor', 'red');

            }
            $("#ques53").css('color', 'white');

        } else {
            var question5 = ("null");
        }


        //sixth question
        if (document.getElementById("rad16").checked == true) {
            var question6 = (document.getElementById("ques61").innerHTML);
            if (question6 == ans6) {
                count++;
                $("#ques61").css('backgroundColor', 'green');
            } else {
                $("#ques61").css('backgroundColor', 'red');

            }
            $("#ques61").css('color', 'white');

        } else if (document.getElementById("rad17").checked == true) {
            var question6 = (document.getElementById("ques62").innerHTML);
            if (question6 == ans6) {
                count++;
                $("#ques62").css('backgroundColor', 'green');
            } else {
                $("#ques62").css('backgroundColor', 'red');

            }
            $("#ques62").css('color', 'white');

        } else if (document.getElementById("rad18").checked == true) {
            var question6 = (document.getElementById("ques63").innerHTML);
            if (question6 == ans6) {
                count++;
                $("#ques63").css('backgroundColor', 'green');
            } else {
                $("#ques63").css('backgroundColor', 'red');

            }
            $("#ques63").css('color', 'white');

        } else {
            var question6 = ("null");
        }


        //seventh question
        if (document.getElementById("rad19").checked == true) {
            var question7 = (document.getElementById("ques71").innerHTML);
            if (question7 == ans7) {
                count++;
                $("#ques71").css('backgroundColor', 'green');
            } else {
                $("#ques71").css('backgroundColor', 'red');
            }
            $("#ques71").css('color', 'white');

        } else if (document.getElementById("rad20").checked == true) {
            var question7 = (document.getElementById("ques72").innerHTML);
            if (question7 == ans7) {
                count++;
                $("#ques72").css('backgroundColor', 'green');
            } else {
                $("#ques72").css('backgroundColor', 'red');
            }
            $("#ques72").css('color', 'white');

        } else if (document.getElementById("rad21").checked == true) {
            var question7 = (document.getElementById("ques73").innerHTML);
            if (question7 == ans7) {
                count++;
                $("#ques73").css('backgroundColor', 'green');
            } else {
                $("#ques73").css('backgroundColor', 'red');
            }
            $("#ques73").css('color', 'white');

        } else {
            var question7 = ("null");
        }


        //eighth question
        if (document.getElementById("rad22").checked == true) {
            var question8 = (document.getElementById("ques81").innerHTML);
            if (question8 == ans8) {
                count++;
                $("#ques81").css('backgroundColor', 'green');
            } else {
                $("#ques81").css('backgroundColor', 'red');
            }
            $("#ques81").css('color', 'white');

        } else if (document.getElementById("rad23").checked == true) {
            var question8 = (document.getElementById("ques82").innerHTML);
            if (question8 == ans8) {
                count++;
                $("#ques82").css('backgroundColor', 'green');
            } else {
                $("#ques82").css('backgroundColor', 'red');
            }
            $("#ques82").css('color', 'white');

        } else if (document.getElementById("rad24").checked == true) {
            var question8 = (document.getElementById("ques83").innerHTML);
            if (question8 == ans8) {
                count++;
                $("#ques83").css('backgroundColor', 'green');
            } else {
                $("#ques83").css('backgroundColor', 'red');
            }
            $("#ques83").css('color', 'white');

        } else {
            var question8 = ("null");
        }


        //ninth question
        if (document.getElementById("rad25").checked == true) {
            var question9 = (document.getElementById("ques91").innerHTML);
            if (question9 == ans9) {
                count++;
                $("#ques91").css('backgroundColor', 'green');
            } else {
                $("#ques91").css('backgroundColor', 'red');
            }
            $("#ques91").css('color', 'white');

        } else if (document.getElementById("rad26").checked == true) {
            var question9 = (document.getElementById("ques92").innerHTML);
            if (question9 == ans9) {
                count++;
                $("#ques92").css('backgroundColor', 'green');
            } else {
                $("#ques92").css('backgroundColor', 'red');
            }
            $("#ques92").css('color', 'white');

        } else if (document.getElementById("rad27").checked == true) {
            var question9 = (document.getElementById("ques93").innerHTML);
            if (question9 == ans9) {
                count++;
                $("#ques93").css('backgroundColor', 'green');
            } else {
                $("#ques93").css('backgroundColor', 'red');
            }
            $("#ques93").css('color', 'white');

        } else {
            var question9 = ("null");
        }



        //tenth question
        if (document.getElementById("rad28").checked == true) {
            var question10 = (document.getElementById("ques101").innerHTML);

            if (question10 == ans10) {
                count++;
                $("#ques101").css('backgroundColor', 'green');
            } else {
                $("#ques101").css('backgroundColor', 'red');
            }
            $("#ques101").css('color', 'white');

        } else if (document.getElementById("rad29").checked == true) {
            var question10 = (document.getElementById("ques102").innerHTML);

            if (question10 == ans10) {
                count++;
                $("#ques102").css('backgroundColor', 'green');
            } else {
                $("#ques102").css('backgroundColor', 'red');
            }
            $("#ques102").css('color', 'white');


        } else if (document.getElementById("rad30").checked == true) {
            var question10 = (document.getElementById("ques103").innerHTML);

            if (question10 == ans10) {
                count++;
                $("#ques103").css('backgroundColor', 'green');
            } else {
                $("#ques103").css('backgroundColor', 'red');
            }
            $("#ques103").css('color', 'white');


        } else {
            var question10 = ("null");
        }

        // alert(question1);
        // alert(question2);
        // alert(question3);
        // alert(question4);
        // alert(question5);
        // alert(question6);
        // alert(question7);
        // alert(question8);
        // alert(question9);
        // alert(question10);
        alert(count);
        $("#timer").css('display', 'none')

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
        if (takenQuizesArray[i].quizName == corname) {
            takenQuizesArray[i].grade = count;
            localStorage.setItem('taken_quizes', JSON.stringify(takenQuizesArray));
        }
    }

        //#region disable radio button

        document.getElementById("rad1").disabled = true;
        document.getElementById("rad2").disabled = true;
        document.getElementById("rad3").disabled = true;
        document.getElementById("rad4").disabled = true;
        document.getElementById("rad5").disabled = true;
        document.getElementById("rad6").disabled = true;
        document.getElementById("rad7").disabled = true;
        document.getElementById("rad8").disabled = true;
        document.getElementById("rad9").disabled = true;
        document.getElementById("rad10").disabled = true;
        document.getElementById("rad11").disabled = true;
        document.getElementById("rad12").disabled = true;
        document.getElementById("rad13").disabled = true;
        document.getElementById("rad14").disabled = true;
        document.getElementById("rad15").disabled = true;
        document.getElementById("rad16").disabled = true;
        document.getElementById("rad17").disabled = true;
        document.getElementById("rad18").disabled = true;
        document.getElementById("rad19").disabled = true;
        document.getElementById("rad20").disabled = true;
        document.getElementById("rad21").disabled = true;
        document.getElementById("rad22").disabled = true;
        document.getElementById("rad23").disabled = true;
        document.getElementById("rad24").disabled = true;
        document.getElementById("rad25").disabled = true;
        document.getElementById("rad26").disabled = true;
        document.getElementById("rad27").disabled = true;
        document.getElementById("rad28").disabled = true;
        document.getElementById("rad29").disabled = true;
        document.getElementById("rad30").disabled = true;
        //#endregion




        

    //#region  correct answers

    if ( document.getElementById("ques11").innerHTML ==ans1){
        $("#ques11").css('backgroundColor', 'green');

    }else if(document.getElementById("ques12").innerHTML ==ans1){
        $("#ques12").css('backgroundColor', 'green');
    }else if(document.getElementById("ques13").innerHTML ==ans1){
        $("#ques13").css('backgroundColor', 'green');
    }else {
    }

    if ( document.getElementById("ques21").innerHTML ==ans2){
        $("#ques21").css('backgroundColor', 'green');
    }else if(document.getElementById("ques22").innerHTML ==ans2){
        $("#ques22").css('backgroundColor', 'green');
    }else if(document.getElementById("ques23").innerHTML ==ans2){
        $("#ques23").css('backgroundColor', 'green');
    }else {
        
    }

    if ( document.getElementById("ques31").innerHTML ==ans3){
        $("#ques31").css('backgroundColor', 'green');

    }else if(document.getElementById("ques32").innerHTML ==ans3){
        $("#ques32").css('backgroundColor', 'green');

    }else if(document.getElementById("ques33").innerHTML ==ans3){
        $("#ques33").css('backgroundColor', 'green');

    }else {
        
    }


    if ( document.getElementById("ques41").innerHTML ==ans4){
        $("#ques41").css('backgroundColor', 'green');
    }else if(document.getElementById("ques42").innerHTML ==ans4){
        $("#ques42").css('backgroundColor', 'green');

    }else if(document.getElementById("ques43").innerHTML ==ans4){
        $("#ques43").css('backgroundColor', 'green');
    }else {
        
    }


    if ( document.getElementById("ques51").innerHTML ==ans5){
        $("#ques51").css('backgroundColor', 'green');

    }else if(document.getElementById("ques52").innerHTML ==ans5){
        $("#ques52").css('backgroundColor', 'green');

    }else if(document.getElementById("ques53").innerHTML ==ans5){
        $("#ques53").css('backgroundColor', 'green');
    }else {
        
    }

    if ( document.getElementById("ques61").innerHTML ==ans6){
        $("#ques61").css('backgroundColor', 'green');

    }else if(document.getElementById("ques62").innerHTML ==ans6){
        $("#ques62").css('backgroundColor', 'green');

    }else if(document.getElementById("ques63").innerHTML ==ans6){
        $("#ques63").css('backgroundColor', 'green');
    }else {
        
    }

    if ( document.getElementById("ques71").innerHTML ==ans7){
        $("#ques71").css('backgroundColor', 'green');

    }else if(document.getElementById("ques72").innerHTML ==ans7){
        $("#ques72").css('backgroundColor', 'green');

    }else if(document.getElementById("ques73").innerHTML ==ans7){
        $("#ques73").css('backgroundColor', 'green');
    }else {
        
    }

    if ( document.getElementById("ques81").innerHTML ==ans8){
        $("#ques81").css('backgroundColor', 'green');

    }else if(document.getElementById("ques82").innerHTML ==ans8){
        $("#ques12").css('backgroundColor', 'green');

    }else if(document.getElementById("ques83").innerHTML ==ans8){
        $("#ques83").css('backgroundColor', 'green');
    }else {
        
    }

    if ( document.getElementById("ques91").innerHTML ==ans9){
        $("#ques91").css('backgroundColor', 'green');

    }else if(document.getElementById("ques92").innerHTML ==ans9){
        $("#ques92").css('backgroundColor', 'green');

    }else if(document.getElementById("ques93").innerHTML ==ans9){
        $("#ques93").css('backgroundColor', 'green');

    }else {
        
    }

    if ( document.getElementById("ques101").innerHTML ==ans10){
        $("#ques101").css('backgroundColor', 'green');

    }else if(document.getElementById("ques102").innerHTML ==ans10){
        $("#ques102").css('backgroundColor', 'green');

    }else if(document.getElementById("ques103").innerHTML ==ans10){
        $("#ques103").css('backgroundColor', 'green');
    }else {
        
    }
    //#endregion



    }


})