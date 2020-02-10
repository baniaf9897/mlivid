$('.cover').click( function(e) {
    $('.collapse').collapse('hide');
});

if($(".image_container") !== null){
    var button_list = $(".vertical_list")[0];

    $.getJSON('../data/imageCollections.json', function(data) {         
        var imageCollections = data;
        
        imageCollections.forEach(collection => {
            var container = document.createElement("li");
            var button = document.createElement("button");
          
            button.addEventListener('click', function(){
                log(collection);
            });
            button.innerText = collection.name;
        
            container.appendChild(button);
            button_list.appendChild(container);
        });
    });
};


function log(collection){
    var image_container = $(".image_container")[0];
    image_container.style.backgroundImage = "url('" + collection.thumbnail + "')"
    console.log("Hello btn : ", collection.id);


}