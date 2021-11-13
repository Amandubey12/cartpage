const MyFunction1 = () => {
    document.getElementById("first").style.display ='grid';
    document.getElementById("second").style.display ='none';
    document.getElementById("third").style.display ='none';
    document.getElementById("product").innerHTML="Poduct categary FOOD"
          }
          const MyFunction2 = () => {
            document.getElementById("first").style.display ='none';
            document.getElementById("second").style.display ='grid';
            document.getElementById("third").style.display ='none';
            document.getElementById("product").innerHTML="Poduct categary Electronics"
                  }
                  const MyFunction3 = () => {
                    document.getElementById("first").style.display ='none';
                    document.getElementById("second").style.display ='none';
                    document.getElementById("third").style.display ='grid';
                    document.getElementById("product").innerHTML="Poduct categary Cloths"
                          }
                           
                                 
                          const addToCart = document.getElementsByClassName('add-to-cart');
                          const productRow = document.getElementsByClassName('product-row');
                          
                          for (var i = 0; i < addToCart.length; i++) {
                            button = addToCart[i];
                            button.addEventListener('click', addToCartClicked)
                          }
                           MyFunction4()
                          
                          
                          
                          
                          