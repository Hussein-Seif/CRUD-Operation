
var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");
var productDesc = document.getElementById("productDescription");
var productNameValidiation =document.getElementById("productNameValidiation");
var productPriceValidiation = document.getElementById("productPriceValidiation");
var productDescrValidiation = document.getElementById("productDescrValidiation");

var prodNameRegex =/^[A-Z][a-z]{2,8}$/;
var proPriceRegex =/^(([1-9][0-9]{2,8})|([1-9][0-9]{3})|(10000))$/;
var prodDescRegex =/^[A-Za-z]*$/;

// validateProductName ****************************

function validateProductName()
{

    if (prodNameRegex.test(productName.value) == true)
    {
       
        productName.classList.add("is-valid");
        productName.classList.remove("is-invalid");
         productNameValidiation.classList.replace("d-block","d-none");

    }
    else{
        productName.classList.add("is-invalid");
       
         productName.classList.remove("is-valid");
       
         productNameValidiation.classList.replace("d-none","d-block");
    }

}
productName.addEventListener("keyup",validateProductName)
/*....................................*/


//validateProductPrice


function validateProductPrice()
{

 
    if (proPriceRegex.test(productPrice.value) == true)
    {
       
        productPrice.classList.add("is-valid");
        productPrice.classList.remove("is-invalid");
        productPriceValidiation.classList.replace("d-block","d-none");
        
    }
    else{
       
       
        productPrice.classList.add("is-invalid");
        productPrice.classList.remove("is-valid");
         productPriceValidiation.classList.replace("d-none","d-block");
    }

}
productPrice.addEventListener("keyup",validateProductPrice)



/*....................................*/


//validateProductDescription


function validateProductDescription()
{

 
    if (prodDescRegex.test(productDesc.value) == true)
    {
       
        productDescription.classList.add("is-valid");
        productDescription.classList.remove("is-invalid");
        productDescrValidiation.classList.replace("d-block","d-none");
        
    }
    else{
       
       
        productDescription.classList.add("is-invalid");
        productDescription.classList.remove("is-valid");
        productDescrValidiation.classList.replace("d-none","d-block");
    }

}
productDescription.addEventListener("keyup",validateProductDescription)






// check if there any storded 
var porductList ;

if (localStorage.getItem("ourProduct")==null)
{
    porductList= [];
}
else{
    porductList = JSON.parse(localStorage.getItem("ourProduct"));
    
    displayProduct(porductList);
};




function addProduct() //----------> full The Array      typm
 {
     if ( (prodNameRegex.test(productName.value) &&proPriceRegex.test(productPrice.value) && prodDescRegex.test(productDesc.value))==true)
  {
     var product =
    {
        name: productName.value,
        price: productPrice.value,
        category: productCategory.value,
        des: productDescription.value,

    }
   
    porductList.push(product);
    localStorage.setItem("ourProduct",JSON.stringify(porductList));
    displayProduct(porductList);
    clearItem();
    productName.classList.remove("is-valid");
    productPrice.classList.remove("is-valid");
    productDesc.classList.remove("is-valid");
}

}

function displayProduct(anyArray)
 {

    var cartona ="";
    for (var i = 0; i< anyArray.length ; i++)
     {
        cartona += ` <tr>
                    <td> ${i+1}</td>
                    <td> ${anyArray[i].name}</td>
                    <td> ${anyArray[i].price}</td>
                    <td> ${anyArray[i].category}</td>
                    <td> ${anyArray[i].des}</td>

                    <td> <button class="btn btn-outline-warning">Update</button> </td>

                    <td>  <button class="btn btn-outline-danger" onclick =" deleteProduct(${i})">Delete</button> </td>

                     </tr>
                    `
    }
    document.getElementById("tableBody").innerHTML= cartona;
}
function clearItem(){
    productName.value="";
    productPrice.value="";
    productCategory.value="";
    productDescription.value="";
}
function deleteProduct(index){
    porductList.splice(index ,1);
    localStorage.setItem("ourProduct",JSON.stringify(porductList));
    displayProduct(porductList);
}
function deleteAllProduct(index){
    porductList.splice(0);
    localStorage.setItem("ourProduct",JSON.stringify(porductList));
    displayProduct(porductList);
}
var searchInput = document.getElementById("searchTrerm") ;

function searchedProduct()
{
    var searchTrerm= searchInput.value;
    var wantedProducts =[];
    
    for(var i=0 ;i<porductList.length; i++)
        {
    if(porductList[i].name.toLowerCase().includes(searchTrerm.toLowerCase())==true)  
      {
        wantedProducts.push(porductList[i]);
      }
     }


     displayProduct( wantedProducts);


}
