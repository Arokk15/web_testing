/* document.body.onload = adding */

/* function adding() {
    const newdiv = document.createElement("div");
    const textcontent = document.createTextNode("hi i am aaron !!!!!!");
    newdiv.appendChild(textcontent)
    const current = document.getElementById("boxes")
    document.insertBefore(newdiv, current)
} */

//var i = 0
//var para = document.createElement("p");
//console.log(para)
//
//para.innerText = "This is a paragraph";
//para.setAttribute("id", "paras" + i)
//
//document.getElementById("boxes").appendChild(para);
//
//var boxr = document.getElementById("boxes")
//boxr.style.overflow="hidden"
//boxr.style.width="200px"
//boxr.style.height="500px"
//     
//function horizontal_view() {
//    var btn_h = document.createElement("div")   /* horizntal scroling */
//    btn_h.style.background = "green"
//    btn_h.style.width = "50px"
//    btn_h.style.height = "50px"
//    btn_h.addEventListener("click", (x) => {
//        console.log("hhhhh")
//        var box = document.getElementById("boxes")
//        box.style.display = "flex"
//    })
//    document.body.appendChild(btn_h)
//}
//
//function adding(count) {
//    var news = document.createElement("div")
//    news.setAttribute("id", "pro_" + count)
//
//    news.style.backgroundColor = "white"
//    news.style.width = "190px"
//    news.style.height = "240px"
//    news.style.borderRadius = "20px"
//    news.style.textAlign = "center"
//    news.style.alignContent = "center"
//    news.style.marginRight = "auto"
//    news.style.marginLeft = "auto"
//    document.getElementById("boxes").appendChild(news);
//    console.log(news)
//
//}
//for (var i = 0; i <= 4; i++) {
//    adding(i)
//}
//horizontal_view()