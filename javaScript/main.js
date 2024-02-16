// sleect images section 1
let image_primary = document.querySelector('#image-primary')

let list_img_1 = document.querySelector('#list-img-1')
let list_img_2 = document.querySelector('#list-img-2')
let list_img_3 = document.querySelector('#list-img-3')
let list_img_4 = document.querySelector('#list-img-4')

// select cart shopping
let cart = document.querySelector('#cart')
let modal_cart = document.querySelector('.modalCart')
let modal_cart_id = document.querySelector('#modalCart')
let btn_main = document.querySelector('#btn__main')

    // cart notification

let notification = document.querySelector('.header__cart--notification')
let quantityToBuy = document.querySelector('.modalInf__contentCard--amount')

// total rpice
let totalPrice = document.querySelector('.modalInf__contentCard--totalPrice')

// modal main mobile
let modal_mobile = document.querySelector('.modal')
let btn_close_mobile = document.querySelector('#close_modal-mobile')

// btn next and previous
let btn_next = document.querySelector('#btn-next')
let btn_previous = document.querySelector('#btn-previous')
let img_next = document.querySelector('.wrapper1__arrow--right')
let img_previous = document.querySelector('.wrapper1__arrow--left')

// select buttons minus and plus
let minus = document.querySelector('.minus')
let btn_minus = document.querySelector('.wrapper2__content3--amount-minus')
let plus = document.querySelector('.plus')
let btn_plus = document.querySelector('.wrapper2__content3--amount-plus')
let number_products = document.querySelector('#numberProducts')

//select button add to card
let btn_addToCart = document.querySelector('.wrapper2__content4')
let addToCard = document.querySelector('.wrapper2__content4--addCart')

// root images mousemove
let imagesSection1 =

    [
        'images/image-product-1.jpg',
        '../images/image-product-2.jpg',
        '../images/image-product-3.jpg',
        '../images/image-product-4.jpg'
    ]

function changeImagehover(event, id_string, img_principal, position_img) {

    if (event == id_string) {
        img_principal.setAttribute('src', position_img)
    }
}

// function change image

let i = 0
function nextImage(imgChange, arr) {
    if (i > 2) {
        i = 0
    } else {
        i++
    }
    imgChange.setAttribute('src', arr[i])
}

function previousImage(imgChange, arr) {
    if (i == 0) {
        i = 3
    } else {
        i--
    }
    imgChange.setAttribute('src', arr[i])
}

// function increase in the number of products

function increaseProducts () {
    i++
    number_products.value = i
}

function decreaseProducts () {
    i--
    if (i <= 0) {
        i = 0
    }
    number_products.value = i
}

//  evnts handlers

document.addEventListener('click', evt => {

// on/off modal mobile

    if (evt.target.id == btn_main.id) {
        modal_mobile.classList.add('modal_mobile-show')
    }

    if (evt.target.id == btn_close_mobile.id) {
        modal_mobile.classList.remove('modal_mobile-show')
    }

// modal cart 

    if (evt.target.id == cart.id) {
        modal_cart.classList.toggle('modalCart-show')
    }

// change image wrapper1

    if (evt.target.id == btn_next.id || evt.target == img_next) {
        nextImage(image_primary, imagesSection1)
    }

    if (evt.target.id == btn_previous.id || evt.target == img_previous) {
        previousImage(image_primary, imagesSection1)
    }

//  increase in the number of products

    if (evt.target == plus || evt.target == btn_plus) {
        increaseProducts()
    }
    if (evt.target == minus || evt.target == btn_minus) {
        decreaseProducts()
    }

    // ----
    let infContent = document.querySelector('.modalInf__content1')
    if (i > 0) {
            notification.style.opacity = 1
            notification.textContent = i
            infContent.style.display = 'flex'
            document.querySelector('.modalInf__empty').style.display = 'none'
            if (i > 0 && (evt.target == addToCard || btn_addToCart)) {
                quantityToBuy.textContent = i
            }
        }
    if (i == 0) {
        notification.style.opacity = 0
        infContent.style.display = 'none'
        document.querySelector('.modalInf__empty').style.display = 'flex'
    }

    let img_delete = document.querySelector('.img_delete')
    if(evt.target == img_delete) {
        infContent.style.display = 'none'
        document.querySelector('.modalInf__empty').style.display = 'flex'
    }

    // ---- total price

    let totalAmount = parseInt(i) * 125

    totalPrice.textContent = '$' + parseInt(totalAmount)

})

document.addEventListener('mousemove', evt => {

    changeImagehover(evt.target.id, list_img_1.id, image_primary, imagesSection1[0])
    changeImagehover(evt.target.id, list_img_2.id, image_primary, imagesSection1[1])
    changeImagehover(evt.target.id, list_img_3.id, image_primary, imagesSection1[2])
    changeImagehover(evt.target.id, list_img_4.id, image_primary, imagesSection1[3])

})
