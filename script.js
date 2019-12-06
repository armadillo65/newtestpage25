$(document).ready(function(){

// ------ Test for input field -----
 $('input').change(function(){

  var d = $(this).val();
  $('.test-div').html(d);

 });




// ----------


const products = [
  { type: 'fruit',
    name: 'apple pie',
    price: 0.69,
    count: 1
  },
  { type: 'fruit',
    name: 'banana',
    price: 0.29,
    count: 1
  },
  { type: 'vegetable',
    name: 'broccoli',
    price: 2.99,
    count: 1
  },
  { type: 'vegetable',
    name: 'kale',
    price: 2.49,
    count: 1
  },
  { type: 'bath',
    name: 'soap',
    price: 3.99,
    count: 1
  }
];

// Vue
const shoppingCart = new Vue ({
  el: '#shoppingCart',
  data: {
    title: "Shopping Cart",
    products: products,
    type: '',
    quantity: ''
  },
  methods: {
    // shows only selections of that type
    selection: function(){
    this.type = event.target.value;
    },

    createNew: function(){

      }
  },
  // displays product types in selection menu only once
  computed: {
    selectType: function(){
      const types = [];
      this.products.forEach((item)=>{
        if(!types.includes(item.type)){
          types.push(item.type);
        }
      });
      return types;
    }
  }
}); //end Vue





// Clear cart button click
$('#clear-cart').click(function(){
  emptyCart();
  displayCart();
});

var cart = [];

var Item = function(name, price, count){
  this.name = name;
  this.price = price;
  this.count = count;
};

function addItemToCart(name, price, count){
  for(var i in cart){
    if(cart[i].name === name){
      cart[i].count += count;
      saveCart();
      return;
    }
  }
  var item = new Item(name, price, count);
  console.log(item)  
  cart.push(item);
  saveCart();
};

// Display Cart
function displayCart(){
  var cartArray = listCart();
  var output = "";
  for (var i in cartArray){
      output += "<li>Product: " + cartArray[i].name + " - " +
                                  cartArray[i].count + " @ $" +
                                  cartArray[i].price + " = $" +
                                  cartArray[i].total +
                                  "<button class='add-item' data-name=" +
                                  cartArray[i].name +
                                  ">+</button>" +
                                  "<button class='remove-item' data-name=" +
                                  cartArray[i].name +
                                  ">-</button>" +
                                  "<button class='delete-item' data-name=" +
                                  cartArray[i].name +
                                  ">x</button></li>";

  }
    // Show cart on screen
  $('#show-cart').html(output);
  // Total Cart Cost
  $('#total-cart').html(cartTotalCost());
  // Total Units in Cart
    $('#units-cart').html(countItems());
// Remove btn func
  $('.remove-item').click(function(){
    var name = $(this).attr('data-name');
    removeItemFromCart(name);
    displayCart();
  });
// Delete btn func
  $('.delete-item').click(function(){
    var name = $(this).attr('data-name');
    clearItemFromCart(name);
    displayCart();
  });
// Add btn func
  $('.add-item').click(function(){
    var name = $(this).attr('data-name');
    addItemToCart(name, 0, 1); // needs name to reference, and 1 to add a unit.  0 is placeholder

    displayCart();                // for the price which will not chnage
  });

}; // ---  end Display function ------


// Remove 1 unit of an item from cart
function removeItemFromCart(name, price, count){
  for(var i in cart){
    if(cart[i].name === name){
      cart[i].count -= 1;
       if(cart[i].count == 0){
       cart.splice(i, 1);
       }
      break;
    }
  }
};

// Remove ALL units of an Item
function clearItemFromCart(name){
  for(var i in cart){
    if(cart[i].name === name){
    cart.splice(i, 1);
    break;
    }
  }
  //saveCart();
};

// Clear Entire Cart
function emptyCart(name, price, count){
  cart = [];
  //saveCart();
};

// Total Cart Unit Count
function countItems(){
  var totalCount = 0;
  for(var i in cart){
    totalCount += cart[i].count;
  }
  return totalCount;
};

// Cart Total Cost
function cartTotalCost(){
  var cartTotal = 0;
  for(var i in cart){
    cartTotal += cart[i].price * cart[i].count;
    }
    return cartTotal.toFixed(2);
};


function listCart(){
  var cartCopy = [];
  for (var i in cart){
    var item = cart[i];
    var itemCopy = {};
    for (var x in item){
      itemCopy[x] = item[x];
    }
    itemCopy.total = (item.price * item.count).toFixed(2);
    cartCopy.push(itemCopy);
  }
  return cartCopy;
};



// Save cart- to local storage (can leave cart and return later, or use on another page)
// so it's not erased on a page load
function saveCart(){
  console.log("item saved")
  localStorage.setItem("shopCart", JSON.stringify(cart));  // takes ("name", value), use JSON to record as a string
}

// Load cart
function loadCart(){
  cart = JSON.parse(localStorage.getItem("shopCart"));
}
loadCart();  // loads cart from local storage
displayCart(); // displays the cart after loading


// -------------
$('.add-to-cart').click(function(){
  event.preventDefault();
  var name = $(this).attr('data-name');
  var price = Number($(this).attr('data-price'));
  addItemToCart(name, price, 1);
  saveCart();
  displayCart();
}); // end Add To Cart


}); // end doc ready
