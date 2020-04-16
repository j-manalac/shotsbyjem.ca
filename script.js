//Array of photo objects
const photos = [
    {
        name: 'Ghost Mantis Reflection',
        category: 'Insects',
        price: 40,
        image: 'images/GhostMantisShadows1.jpg',
        description: 'A male ghost mantis looking at its reflection'
    },
    {
        name: 'Ghost Mantis',
        price: 40,
        category: 'Insects',
        image: 'images/GhostMantisShadows3.jpg',
        description: 'A curious mantis looking into the distance'
    },
    {
        name: 'Orchid Mantis',
        price: 40,
        category: 'Insects',
        image: 'images/OrchidMantisShadows.jpg',
        description: 'An orchid mantis cleaning itself'
    },
    {
        name: 'Thirsty Orchid Mantis',
        price: 40,
        category: 'Insects',
        image: 'images/OrchidMantisShadows2.jpg',
        description: 'An orchid mantis drinking'
    },
    {
        name: 'Berries',
        price: 20,
        category: 'Nature',
        image: 'images/berries.jpg',
        description: 'Wild berries found in Southern Ontario'
    },
    {
        name: 'Black Agama Lizard',
        price: 30,
        category: 'Wildlife',
        image: 'images/lizard1.jpg',
        description: 'A rare black reptile found in Africa'
    },
    {
        name: 'Smooth Green Snake',
        price: 30,
        category: 'Wildlife',
        image: 'images/snake1.jpg',
        description: 'A curious green snake'
    },
    {
        name: 'Emerald Tree Boa',
        price: 30,
        category: 'Wildlife',
        image: 'images/snake2.jpg',
        description: 'A boa awaiting its next meal'
    },
    {
        name: 'Striking Green Tree Python',
        price: 30,
        category: 'Wildlife',
        image: 'images/snake3.jpg',
        description: 'A python keeping an eye on its prey'
    },
    {
        name: 'Eyelash Viper',
        price: 30,
        category: 'Wildlife',
        image: 'images/venomSnake.jpg',
        description: 'A viper found after rainfall'
    },
    {
        name: 'Snow Leopard',
        price: 30,
        category: 'Wildlife',
        image: 'images/SnowLeopard.jpg',
        description: 'A captive snow leopard cub'
    },
    {
        name: 'Milky Way',
        price: 30,
        category: 'Nature',
        image: 'images/milkyWay.jpg',
        description: 'Long exposure taken in the Torrence Sky Reserve'
    }
];


//Array of side menu items
//When click these side menu items, filter the images to show
//only those where sideItems.name == photos.category
const categories = [
    {
        name: 'All Products'
    },
    {
        name: 'Wildlife'
    },
    {
        name: 'Insects'
    },
    {
        name: 'Nature'
    }
];
//Create dropdown for filter by category in navbar
function insertDropdown() {
    //find the li of the "Filter by Category" anchor
    let navbar = document.querySelector('#dropdownMenu');
    //create container for dropdown
    let dropdown = document.createElement('div');
    dropdown.classList.add('dropdown-menu');
    dropdown.setAttribute('aria-labelledby', 'navbarDropdown');
    //create a button for each category
    categories.forEach(category => {
        let filterOptions = document.createElement('button');
        filterOptions.classList.add('dropdown-item');
        //set name for each dropdown item
        const options = document.createTextNode(category.name);
        filterOptions.appendChild(options);
        //create anchor to index.html inside each button so page reloads when filtered
        /*const anchor = document.createElement('a');
        anchor.href = 'index.html';
        filterOptions.appendChild(anchor); */
        //add each category button to the dropdown menu
        dropdown.appendChild(filterOptions);
        //if a filter option is clicked, filter cards accordingly
        filterOptions.addEventListener('click', function() {
            filterSelection(category.name);
        }); 
    });
    //add dropdown menu to li of dropdown
    navbar.appendChild(dropdown);
    
}
//Create side menu div 
function filterSelection(category) {
    document.querySelector('.display-4').innerHTML = `Showing: ${category}`;
    var x = document.querySelectorAll('.product');
    if (category === 'All Products') {
        category = '';
    }
    //add the "show" class to filtered elements,
    //remove the "show" class from the elements
    //that are not selected
    //the "show" class has a css style to block display
    for (let i = 0; i < x.length; i++) {
        addClass(x[i], 'show-filter');
        if (x[i].className.indexOf(category) > -1) {
            removeClass(x[i], 'show-filter');
        }
    }
}
//show filtered elements
function addClass(element, name) {
    let arr1 = element.className.split(' ');
    let arr2 = name.split(' ');
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) === -1) {
            element.className += ' ' + arr2[i];
        }
    }
}

//Hide elements that are not selected
function removeClass(element, name) {
    let arr1 = element.className.split(' ');
    let arr2 = name.split(' ');
    for (let i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(' ');
}

let cardContainer;

//create cards for each product
let createCard = (photo) => {
    const productsContainer = document.querySelector('.row');
    const photoUrls = photos.map(p => p.image);
    photoUrls.forEach(url => {
        const pload = document.createElement('link');
        pload.rel = 'preload';
        pload.href = url;
        pload.as = 'image';
        document.head.appendChild(pload);
    });
    /*
    while (productsContainer.firstChild) {
        productsContainer.removeChild(productsContainer.lastChild);
    } */
        //create a container for the image
        const col = document.createElement('div');
        col.className = 'col-md-4';
        col.classList.add('product');
        col.classList.add(photo.category);
        col.classList.add('d-flex');
        //create card
        const card = document.createElement('div'); 
        card.classList.add('card');
        //create the image element
        const img = document.createElement('img');
        //set the image source to be the product image
        img.src = photo.image;
        //add alt attribute for each image
        img.alt = photo.name;
        //insert the image into the image container
        card.appendChild(img);

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        
        //add the name for the product
        const cardTitle = document.createElement('h4');
        cardTitle.innerText = photo.name;
        cardTitle.classNAme = 'card-title';

        //add the category, price and description for the product
        const cardCategory = document.createElement('div');
        cardCategory.innerText = photo.category;
        cardCategory.className = 'card-category';
        
        //add the price for the product
        const cardPrice = document.createElement('div');
        cardPrice.innerText = `$${photo.price}`;

        //add the description for the product
        const desc = document.createElement('div');
        desc.innerText = photo.description;
        desc.className = 'card-description'

        //add elements to card for the product
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardCategory);
        cardBody.appendChild(desc);
        cardBody.appendChild(cardPrice);
        card.appendChild(cardBody);
        col.appendChild(card);
        productsContainer.appendChild(col);
}
let initListOfPhotos = () => {
    if (cardContainer) {
        document.getElementById('card-container').replaceWith(cardContainer);
        return;
    }

    cardContainer = document.getElementById('card-container');
    photos.forEach((photo) => {
        createCard(photo);
    });
};


//when page is loaded, call the functions above
document.addEventListener('DOMContentLoaded', () => {
    initListOfPhotos();
    insertDropdown();
    //when page is loaded, the page defaults to showing all products
    //filterSelection('All Products');
});