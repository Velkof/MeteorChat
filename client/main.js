
$("#chatContainer").ready(function() {
    chatScrollDown();
});

$(".userLink").on("click", function(){
    chatScrollDown();
});

function chatScrollDown(){
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
};

$(".messageForm").on("submit", function () {
    chatScrollDown();
});