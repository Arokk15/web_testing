var products = [
    {
        title: "black tshirt",
        vandor: "yoode",
        rate: "250"
    },
    {
        title: "red tshirt",
        vandor: "smaaro",
        rate: "250"
    },
    {
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


var website_detials = {
    title_name: "MANOWNING",
    contact_no: 6383811591,
    mail_id: "manowning@gmail.com",
    addr: "vazhavalai,moolachel,thuckalay"
}




var title = document.querySelector("#titles")
title.innerHTML = website_detials.title_name

var pro_len = products.length

function adding(count, p_title, p_vantor, p_rate) {
    var pro_con = document.createElement("div")
    pro_con.setAttribute("id", "pro_con" + count)
    document.getElementById("boxes").appendChild(pro_con);

    var news = document.createElement("div")
    news.setAttribute("id", "pro_" + count)
    
    news.style.backgroundColor = "#EFEFEF"
    news.style.width = "190px"
    news.style.height = "240px"
    news.style.borderRadius = "20px"
    news.style.textAlign = "center"
    news.style.alignContent = "center"
    news.style.marginRight = "10px"
    news.style.marginLeft = "10px"
    news.style.marginTop = "10px"
    news.style.marginBottm = "10px"
    document.getElementById("pro_con" + count).appendChild(news);
    //console.log(news)
    var detial_margin = "20px"
    var title = document.createElement("h2")
    title.setAttribute("id", "title_" + count)
    title.innerHTML = p_title
    title.style.marginLeft = detial_margin
    title.style.marginRight = '0px'
    title.style.marginTop = "0px"
    title.style.marginBottom = "0px"
    document.getElementById("pro_con" + count).appendChild(title);
    var vantor = document.createElement("h2")
    vantor.setAttribute("id", "title_" + count)
    vantor.innerHTML = p_vantor
    vantor.style.marginLeft = detial_margin
    vantor.style.marginRight = "0px"
    vantor.style.marginTop = "0px"
    vantor.style.marginBottom = "0px"
    document.getElementById("pro_con" + count).appendChild(vantor);
    var rate = document.createElement("h2")
    rate.setAttribute("id", "title_" + count)
    rate.innerHTML = p_rate
    rate.style.marginLeft = detial_margin
    rate.style.marginRight = "0px"
    rate.style.marginTop = "0px"
    rate.style.marginBottom = "0px"
    document.getElementById("pro_con" + count).appendChild(rate);

}




for (var i = 0; i < pro_len; i++) {
    var pro_t = products[i].title
    var pro_v = products[i].vandor
    var pro_r = products[i].rate
    adding(i, pro_t, pro_v, pro_r)
}





