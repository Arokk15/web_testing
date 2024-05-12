var products = [
    {
        image:"https://smaaro.com/cdn/shop/files/black1_2dc547fa-b20f-463d-8144-3a2fd60b8777.jpg?v=1707647998&width=360",
        title: "black tshirt",
        vandor: "yoode",
        rate: "250"
    },
    {
        image:"https://smaaro.com/cdn/shop/files/black3_4fbb8d41-6e97-4bff-a978-f07a3eda438f.jpg?v=1707647998&width=600",
        title: "red tshirt",
        vandor: "smaaro",
        rate: "250"
    },
    {
        image:"https://smaaro.com/cdn/shop/files/black1_2dc547fa-b20f-463d-8144-3a2fd60b8777.jpg?v=1707647998&width=360",
        title: "blue tshirt",
        vandor: "yoode",
        rate: "250"
    },
    {
        title: "green tshirt",
        vandor: "smaaro",
        rate: "250"
    },
    {
        title: "gray tshirt",
        vandor: "smaaro",
        rate: "250"
    },
    {
        title: "pale blue tshirt",
        vandor: "smaaro",
        rate: "250"
    },

]


//console.log(document.querySelector("#continer").childElementCount)
var pro_len = products.length
var product_data=products
console.log(product_data)
var content_count=document.querySelector("#continer").childElementCount


function add_products_in_data(a){
    


    for(var i=0;i<pro_len;i++){
        var create_produte=document.createElement("div")
        var image=document.createElement("img")
        var title_pro=document.createElement("h2")
        var vandor_pro=document.createElement("h2")
        var price_pro=document.createElement("h2")
        
        create_produte.setAttribute("class","product")
        create_produte.setAttribute("id","product_"+content_count+"_"+i)

        title_pro.setAttribute("class","product_title_"+content_count)
        title_pro.setAttribute("id","product_title_id_"+content_count+"_"+i)

        vandor_pro.setAttribute("class","product_vandor_"+content_count)
        vandor_pro.setAttribute("id","product_vandor_id_"+content_count+"_"+i)

        price_pro.setAttribute("class","product_rate_"+content_count)
        price_pro.setAttribute("id","product_rate_id_"+content_count+"_"+i)
        
        image.setAttribute("class","product_image")
        image.setAttribute("id","product_image_id"+content_count+"_"+i)
        image.setAttribute("src",product_data[i].image)
        
        title_pro.innerHTML=product_data[i].title
        vandor_pro.innerHTML=product_data[i].vandor
        price_pro.innerHTML=product_data[i].rate
        
        create_produte.appendChild(image)
        create_produte.appendChild(title_pro)
        create_produte.appendChild(vandor_pro)
        create_produte.appendChild(price_pro)
        a.appendChild(create_produte)
    
        
    }
}


function collection(col_title){



    var collection_title=document.createElement("h2")
    
    var content=document.querySelector("#continer")
    var create_collection=document.createElement("div")
    var product_container=document.createElement("div")



    collection_title.setAttribute("class","collection_title")
    collection_title.setAttribute("id","collection_title_"+content_count)
    collection_title.innerHTML=col_title
    create_collection.setAttribute("class","collection")
    create_collection.setAttribute("id","collection_"+content_count)
    create_collection.setAttribute("style","margin-left:auto;margin-right:auto")
    product_container.setAttribute("id","product_container_"+content_count)
    product_container.setAttribute("class","product_container")

    

    content.appendChild(create_collection)
    create_collection.appendChild(collection_title)
    create_collection.appendChild(product_container)
    
    add_products_in_data(product_container)


}
collection("collection 0 ( add_products_in_data )")
collection("collection 1")



/* for(j in product_data[i]){
            console.log(j)
            var detials=document.createElement("h2")
            var v=j
            v=String(v)
            detials.innerHTML=products[d].v

            creare_produte.appendChild(detials)

        }
 */
  