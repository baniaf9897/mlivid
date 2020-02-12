

var imageCollections;

//disable autoplay-carousel shit
$('.carousel').carousel({
    interval: false
}); 

//read json data
 $.getJSON('../data/imageCollections.json', function(data) {   

    imageCollections = data;

    var carouselInner = $(".carousel-inner")[0];

    imageCollections.forEach(collection =>{

        var carousel_item = document.createElement("div");
        carousel_item.classList += "carousel-item";
        //first element is active .... to change, just choose another id (newest one = imageCollections.length - 1)
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
        image_element.onclick = function (event){
            showFullScreenImage(image);
        };

        image_element_container.appendChild(image_element);
        collection_images.appendChild(image_element_container);
    });
  };


function showFullScreenImage(image){
    var modal = $(".modal_background")[0];
    var modal_content = $("#modal")[0];
    console.log(modal_content);
    console.log(modal);

    modal.style.display = "block";
    modal_content.style.backgroundImage = "url('" + image + "')";
}
function hideFullScreenImage(){
    var modal = $(".modal_background")[0];
    modal.style.display = "none";
}