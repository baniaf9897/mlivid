
$('.carousel').carousel({
    interval: false
}); 

var imageCollections;
 $.getJSON('../data/imageCollections.json', function(data) {   

    imageCollections = data;

    var carouselInner = $(".carousel-inner")[0];

    imageCollections.forEach(collection =>{

        var carousel_item = document.createElement("div");
        carousel_item.classList += "carousel-item";
        if(collection.id == 0){
            carousel_item.classList += " active";
            showImagesOfCollection(collection);
        }

        var img = document.createElement("img");
        img.src  = collection.thumbnail;
        img.classList += "d-block";

        var carousel_caption = document.createElement("div");
        carousel_caption.classList += "carousel-caption d-none d-md-block";

        var carousel_caption_background = document.createElement("div");
        carousel_caption_background.classList += "carousel-caption-background";

        var name = document.createElement("h5");
        name.innerText = collection.name;

        var description = document.createElement("p");
        description.innerText = collection.description;

        carousel_caption_background.appendChild(name);
        carousel_caption_background.appendChild(description);

        carousel_caption.appendChild(carousel_caption_background);

        carousel_item.appendChild(img);
        carousel_item.appendChild(carousel_caption);
        carouselInner.appendChild(carousel_item);
    });





 });

$('.cover').click( function(e) {
    $('.collapse').collapse('hide');
});

$(".carousel").on('slide.bs.carousel', function (event) {

    var active = $(event.target).find('.carousel-inner > .item.active');
    var from = active.index();
    var next = $(event.relatedTarget);
    var to = next.index();
    var direction = event.direction;

    if(imageCollections !== null){
        showImagesOfCollection(imageCollections[to - 2]);
    };
  });




  function showImagesOfCollection(collection){
 
    var collection_images = $("#images_grid")[0];
    collection_images.innerHTML = "";

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

/*
if($(".image_container") !== null){
    var button_list = $(".vertical_list")[0];
    button_list.innerHTML = "";

    $.getJSON('../data/imageCollections.json', function(data) {         
        var imageCollections = data;
        
        imageCollections.forEach(collection => {
            var container = document.createElement("li");
            var button = document.createElement("button");
        
            button.innerText = collection.name;
        
            container.appendChild(button);
            button_list.appendChild(container);

            button.addEventListener('click', function(){
                generateDOM(collection);
               // adaptButtonList(collection.id, imageCollections);
            });
        });
    });
};

function generateDOM(collection){
    var image_container = $(".image_container")[0];
    var heading = $(".collection_heading")[0];
    var description = $(".collection_description")[0];
    var collection_images = $("#images_grid")[0];
    
    //remove all childs first
    collection_images.innerHTML = "";

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
};


function adaptButtonList(currentId, imageCollections){
   
    var button_list = $(".vertical_list")[0];
    button_list.innerHTML = ""


    console.log(imageCollections);
    console.log(currentId);

    for(var i = -1; i < 2; i++){

        if(currentId + i >= 0 && currentId + i < imageCollections.length){
            
            console.log(currentId + i);
            var collection = imageCollections[currentId +i];

            var container = document.createElement("li");
            var button = document.createElement("button");
        
            button.addEventListener('click', function(){
                generateDOM(collection);
            });
            button.innerText = collection.name;
        
            container.appendChild(button);
            button_list.appendChild(container);
        }
    }
}*/