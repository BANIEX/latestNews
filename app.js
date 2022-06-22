let currentNews = new XMLHttpRequest();
currentNews.onload = function(){
    if(currentNews.readyState==4) {
    

    let data = JSON.parse(currentNews.responseText);
    // console.log(data.articles);
    let dataArticles = data.articles;
    console.log(dataArticles)
    
    let sub_container = document.getElementsByClassName("sub_container")[0];
    for(let i = 0; i < data.articles.length; i++){
        
        let imageDiv = document.createElement("div");
        imageDiv.id = `imageDiv${i}`;
        imageDiv.className = `imageDiv`;

        let image = document.createElement("img");
        image.id = `image${i}`;

        imageDiv.appendChild(image);




        let newsHeading = document.createElement("div");
        newsHeading .id = `newsHeading${i}`;
        newsHeading.className = `newsHeading`;


        let datePosted = document.createElement("div");
        datePosted.id = `datePosted${i}`;
        datePosted.className = `datePosted`;

        
        let contentText = document.createElement("div");
        contentText.id = `contentText${i}`;
        contentText.className = `contentText`;

        let readMore = document.createElement("div");
        readMore.id = `readMore${i}`;
        readMore.className = `readMore`;

        

        let readMoreLinkTag = document.createElement("a");
        

        readMoreLinkTag.id = `readMoreLink${i}`;
        readMoreLinkTag.className = `readMoreLink`;

        let readMoreText = document.createTextNode("Read more...")


        readMoreLinkTag.append(readMoreText)
        readMore.append(readMoreLinkTag);







        let newDiv = document.createElement("div");
        newDiv.id = `news${i}`;
        newDiv.className = 'news';
        newDiv.appendChild(imageDiv);
        newDiv.appendChild(newsHeading);
        newDiv.appendChild(datePosted);


        newDiv.appendChild(contentText);
        newDiv.appendChild(readMore);


        sub_container.appendChild(newDiv);

        document.getElementById(`readMoreLink${i}`).href = data.articles[i].url;
        document.getElementById(`image${i}`).src = data.articles[i].urlToImage;
        document.getElementById(`newsHeading${i}`).innerText = data.articles[i].title;
        document.getElementById(`datePosted${i}`).innerText = data.articles[i].publishedAt;

        // document.getElementById(`contentText${i}`).innerText = data.articles[i].content.substr(0, 200);m

        let currentImage = document.getElementById(`image${i}`);
        let currentNewsDiv = document.getElementById(`news${i}`);
        if(data.articles[i].content){
            document.getElementById(`contentText${i}`).innerText = data.articles[i].content.substr(0, 200);
            if ( !currentImage.complete ){
                console.log(currentImage.src);
                currentNewsDiv.remove();
            }
           
            if (typeof currentImage.naturalWidth != "undefined" && currentImage.naturalWidth == 0) {
                currentNewsDiv.remove();
            }
            
        }
        else{
            if ( !currentImage.complete ){
                console.log(currentImage.src);
                currentNewsDiv.remove();
            }
           
            if (typeof currentImage.naturalWidth != "undefined" && currentImage.naturalWidth == 0) {
                currentNewsDiv.remove();
            }
            
            
        }
    
    }
    };

};
currentNews.open( "GET", "https://newsapi.org/v2/top-headlines?country=ng&apiKey=91386c9e7b2941f0a05dbcd939f18f0f")
currentNews.send()