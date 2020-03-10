class Product {
  title = 'Default';
  imageURL;
  description;
  price;

  constructor(title, image, desc, cijena) {
    this.title = title;
    this.imageURL = image;
    this.description = desc;
    this.price = cijena
  }
}

class ShoppingCart {
  items= [];

  render() {
    const cartEl = document.createElement('section');
    cartEl.innerHTML=`
    <h2>Total \ ${0}</h2>
    <button> Order Now </button>
    `
    cartEl.className='chart'
    return cartEl;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToChart () {
    console.log('Adding product to chart')
    console.log( this.product)
  }

  render() {
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
    prodEl.innerHTML = `
    <div>
    <img src="${this.product.imageURL}" alt="${this.product.title}" >
      <div class="product-item__content">
        <h2>${this.product.title}</h2>
        <h3>${this.product.price}</h3>
        <p>${this.product.description}</p>
        <button>Addo to chart </button>
      </div>
    </div>
    `;
    const addChartButton = prodEl.querySelector('button')
    addChartButton.addEventListener('click',this.addToChart.bind(this))
      return prodEl
    }
}


class ProductList {
  products = [
   new Product(
    'A pillow',
    'https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png',
    ' Jastuk',
    19.99
    ),
  new Product( 
    'A carpet',
    'https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png',
    'Veliki tepih',
     29.99
  )
  ]

  constructor () {}

  render () {
    const prodList = document.createElement('ul');
    prodList.className = 'product-list'
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    return prodList
  }
}

class Shop {
  render() {
    const renderHook = document.getElementById('app');
    const cart = new ShoppingCart();
    const cartEl = cart.render();
    const productList = new ProductList();
    const productListEl = productList.render();
    renderHook.append(cartEl)
    renderHook.append(productListEl)
  }
}


const shop = new Shop();
shop.render();
