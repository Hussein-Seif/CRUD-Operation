
var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");
var productDesc = document.getElementById("productDescription");
var productNameValidiation =document.getElementById("productNameValidiation");
var productPriceValidiation = document.getElementById("productPriceValidiation");


function validateProductName()
{

    var regex = /^[A-Z][a-z]{2,8}$/;
    if (regex.test(productName.value) == true)
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


function validateProductPrice()
{

    var regex = /^(([1-9][0-9]{2,8})|([1-9][0-9]{3})|(10000))$/;
    if (regex.test(productPrice.value) == true)
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

}

function displayProduct(anyArray) {
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
    porductList.value=""
    ;productPrice.value="";
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
