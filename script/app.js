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
    var heading = $(".collection_heading")[0];
    var description = $(".collection_description")[0];
    var collection_images = $("#images_grid")[0];
    console.log(collection_images);
    image_container.style.backgroundImage = "url('" + collection.thumbnail + "')"
    heading.innerText = collection.name;
    description.innerText = collection.description;


    collection.images.forEach(image =>{

        var image_element_container = document.createElement("div");
        image_element_container.classList += "tile";
        var image_element = document.createElement("img");
        image_element.src  = image;
        image_element.classList += "cover";
        
        image_element_container.appendChild(image_element);
        collection_images.appendChild(image_element_container);
    });
}