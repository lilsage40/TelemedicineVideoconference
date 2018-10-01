
//ajouter une conversation a la liste afichee
function addToConversationsContainer(conversation){
    var HTML = "<p id='title-"+conversation.id+"'>"+conversation.title+"</p>";
    var HTML = "<div class='conversation' id='conv-"+conversation.id +"'>"+ HTML +"</div>";
    $("#conversations-list").append(HTML);
    $("#conv-"+conversation.id).on('click',function(e){
        onConversation(e.target);
        $("conv-"+conversation.id).css('background-color','red');
    });
}


//ajouter le stream d'un utilisateur à la liste des streams
function addUserVideo(userId){
    $("#video-list").append(
        "<video id='vid-"+userId+"' class='video-item' autoplay muted playsinline></video>"
    );
}

//mettre en evidence l'utilisateur ayant la main (active user)
function highlightActiveUser(exActiveUserId,activUserId){
    $("#vid-"+activUserId).css("box-shadow","#0aff00");
    $("#vid-"+exActiveUserId).css("box-shadow","");
}

//suprimer le stream d'un utilisateur
function removeUserVideo(userId){
    $("#video-list").remove("#vid-"+userId);
}

//retirer une conversation de la list affichee
function removeConversation(convId){
    $("#conv-"+convId).remove();
}

//cacher la liste des conversation
function hideConverationList(){
    $("#converations-list").hide();
}

//affichee la liste des conversation 
function showConversationList(){
    $("#conversations-list").show();
}

function onConversation(conv){
    console.log(conv.id);
    var id = conv.id.split('-')[1];
    console.log("id = "+id);
    var convId = parseInt(id);
    console.log("requesting to join conversation "+convId);
    join(convId);
}

function onLogIn(){
    var userName = $("#username").val();
    // var userName = "faysal";
    var passWord = $("#password").val();
    // var passWord = "f";
    login(userName,passWord);
}

function onLogOut(){
    $("#login").prop("disabled",false);
    $("#logout").prop("disabled",true);
}


function setEventListeners(){
    $("#login").on('click',onLogIn);
    $("#logout").on('click',onLogOut);
}

function showSignIn(){
    $("#sign-in").show();
    $("#conference").hide();
    $("#conversations").hide();
}