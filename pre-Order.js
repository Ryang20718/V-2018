  /*
    $(document).ready( function() {
      console.log("hello");
        $('select').change(function() {
			console.log("work");

        });
    });
*/

  /*
  function myFunction() {
    console.log("hello");
  var preOrder = document.getElementById(7824881811516).selected;
  
  if(preOrder){
	document.getElementById("addToCart").innerHTML = "Pre-Order";
  }
  }
  */
  
/*
    $(document).ready( function() {
        $('select').change(function() {

            var preOrder = document.getElementById(7824881647676).selected;
  
  			if(preOrder){
			document.getElementById("addToCart").innerHTML = "Pre-Order";
  			}
        });
    });
  */
  
  /*
              var preOrder = document.getElementById(7824881647676).selected;
  
  			if(preOrder){
			document.getElementById("addToCart").innerHTML = "Pre-Order";
            }else{
            document.getElementById("addToCart").innerHTML = "Add to Cart";
            }
$("select[value='selector']").change(function() {
   // alert("test");
              var preOrder = document.getElementById(7824881647676).selected;
  
  			if(preOrder){
			document.getElementById("addToCart").innerHTML = "Pre-Order";
            }else{
            document.getElementById("addToCart").innerHTML = "Add to Cart";
            }
});
*/
/*
ajax
*/
    $.ajax({
        type: 'GET',
        url: '/products.json',
        dataType: 'json',
        success: function(res){
            console.log(res);
        },
        error: function(status){
             alert(status);
        }
    })

    $.ajax({
        type: 'GET',
        url: 'https://vesselbags.com/collections/pre-order/products.json',
        dataType: 'json',
        success: function(product){
          console.log(product);

        },
        error: function(status){
             alert(status);
        }


    })   
      //pre-Order right now checks specific id   
    /*
    $.ajax({
        type: 'GET',
        url: '/products.json',
        dataType: 'json',
        success: function(product){
          console.log(product);
          console.log(Object.keys(product.products[0].variants).length);
          console.log(Object.keys(product.products).length); 
          for(var index = 0; index < Object.keys(product.products).length; index++){//loop through all variant id
            for(var index2 = 0; index2 < Object.keys(product.products[index].variants).length; index2++){
              console.log(product.products[index].variants[index2].id);
            }
          }
        },
        error: function(status){
             alert(status);
        }
    })  
    */