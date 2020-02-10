$('.cover').click( function(e) {
    $('.collapse').collapse('hide');
});

if($(".image_container") !== null){
    var image_container = $(".image_container");
    $.getJSON('../data/imageCollections.json', function(data) {         
        var imageCollections = data;
        
        imageCollections.forEach(collection => {
            var container = document.createElement("div");
            container.innerHTML=collection.name;
            document.getElementsByClassName("image_container")[0].appendChild(container);
        });
    });
};