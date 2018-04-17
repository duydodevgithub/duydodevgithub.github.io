
// greeting based on time 
var d = new Date();
d = d.getHours();
if(d > 18) {
    $("#sayHello").html("Good Evening!" + "<div>Welcome to my page</div>");
} else if (d > 12) {
    $("#sayHello").html("Good Afternoon!" + "<div>Welcome to my page</div>");
} else if (d > 0) {
    $("#sayHello").html("Good Morning!" + "<div>Welcome to my page</div>");
} else {
    $("#sayHello").html("Welcome to my page!");    
}