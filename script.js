const Container = document.querySelector(".container")


const getProducts = async () => {
    const res = await fetch('https://dummyjson.com/products')
    const data = await res.json()
    const Data = data.products
    Data.forEach(ele => {
        Container.innerHTML += 
        `<div class="group">
             <div class="content-img">  <img class="product-img" src= "${ele.images[0]}"></div>
              <div class="product-information">
                  <h1>${ele.title}</h1>
                  <p>${ele.description}</p>
                  <span class="current-price">${(((ele.price * ele.discountPercentage) / 100).toFixed())}$ <span class = "price-befor-discount">${ele.price}$</span> </span>
                 </div>
            
                <div class="btn">
                   <button class="add-cart"><img class="bag" src="./Bag_alt.png">Add to cart</button>
                   <button class="favorite"><img class="favorite-product" src= "./Favorite.png"></button>


                </div>
        </div>`



    });
}

getProducts()


