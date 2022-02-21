async function apiCall(url) {


    //add api call logic here

    try{
        let res = await fetch(url)

        let data =await res.json();
        return data;
    }catch(err){
        console.log(err)
    }


}


function appendArticles(articles, main) {

    //add append logic here
    articles.forEach((element) => {

        let div = document.createElement("div");
        div.setAttribute("id","flex")


        let p = document.createElement("p")
        p.innerText=element.content

        

        let p2 = document.createElement("p")
        p2.innerText=element.description



        let image = document.createElement("img")
        image.src=element.urlToImage


        div.append(p,p2,image)

        div.onclick = () => {
        localStorage.setItem("article",JSON.stringify(element))

        }





        main.append(div);
    });


}

export { apiCall, appendArticles }