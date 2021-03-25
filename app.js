

window.addEventListener("load",function(){
    document.querySelector(".preloader").classList.add("opacity-0");
    setTimeout(() =>{
        document.querySelector(".preloader").style.display="none";
    },1000)
})


// Poltfolio item filter 

const filterContainer = document.querySelector(".portfolio-filter"),
      filterBtns=filterContainer.children,
      totalFilterBtns = filterBtns.length,
      portfolioItems = document.querySelectorAll(".portfolio-items"),
      totalPortfolioItem=portfolioItems.length;

      for(let i=0; i<totalFilterBtns; i++){
            filterBtns[i].addEventListener("click", function(){
                filterContainer.querySelector(".active").classList.remove("active")
                this.classList.add("active");

                const filterValue = this.getAttribute("data-filter");
                for(let k=0; k<totalPortfolioItem; k++){
                    if(filterValue === portfolioItems[k].getAttribute("data-category")){
                        portfolioItems[k].classList.add("show");
                        portfolioItems[k].classList.remove("hide");
                    }
                    else{
                        portfolioItems[k].classList.add("hide");
                        portfolioItems[k].classList.remove("show");
                    }
                    if(filterValue==="all"){
                        portfolioItems[k].classList.add("show");
                        portfolioItems[k].classList.remove("hide");
                    }
                }
            })
        }


// Portfolio Lightbox
    const lightbox = document.querySelector(".lightbox"),
          lightboxImg = lightbox.querySelector(".lightbox-img"),
          lightboxClose = lightbox.querySelector(".lightbox-close"),
          lightboxText = lightbox.querySelector(".caption-text"),
          lightboxCounter = lightbox.querySelector(".caption-counter");
    let itemIndex=0;

    for(let i=0; i<totalPortfolioItem; i++){
        portfolioItems[i].addEventListener("click", function(){
            itemIndex=i;
            changeItem();
            toggleLightbox();
        })
    }

    function nextItem(){
        if(itemIndex === totalPortfolioItem-1){
            itemIndex=0;
        }
        else{
            itemIndex++;
        }
        changeItem();
    }
    function prevItem(){
        if(itemIndex === 0){
            itemIndex= totalPortfolioItem-1;
        }
        else{
            itemIndex--;
        }
        changeItem();
    }

    function toggleLightbox(){
        lightbox.classList.toggle("open");
    }
            

    function changeItem(){
        imgSrc=portfolioItems[itemIndex].querySelector(".port-img img").getAttribute("src");
        console.log(imgSrc);
        lightboxImg.src=imgSrc;
        lightboxText.innerHTML=portfolioItems[itemIndex].querySelector("h4").innerHTML;
        lightboxCounter.innerHTML= (itemIndex+1) + " of " + totalPortfolioItem;
    }

    // Close Lightbox
    lightbox.addEventListener("click", function(event){
        if(event.target === lightboxClose || event.target === lightbox){
            toggleLightbox();
        }
    })

    // Aside Navbar
    const nav = document.querySelector(".nav"),
          navList = nav.querySelectorAll("li"),
          totalNavList = navList.length,
          allSection = document.querySelectorAll(".section");
          totalSection = allSection.length;

    for(let i = 0; i<totalNavList; i++){
        // console.log(navList[i]);
        const a = navList[i].querySelector("a");
        // console.log(a);
        a.addEventListener("click",function(){
            // Remove Back Section Class
            for(let i = 0; i<totalSection; i++){
                allSection[i].classList.remove("back-section")
            }
            for(let j = 0; j<totalNavList; j++){
                // Add Back Section Class
                if(navList[j].querySelector("a").classList.contains("active")){
                    allSection[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            // console.log(this);
            this.classList.add("active");
            showSection(this);

            if(window.innerWidth < 1200){
                asideSectionTogglerBtn();
            }
        })
    }

    function showSection(element){
        // console.log(element);
        for(let i = 0; i<totalSection; i++){
            allSection[i].classList.remove("active")
        }
        const target = element.getAttribute("href").split("#")[1];
            //   console.log(target);

        document.querySelector("#"+target).classList.add("active");
    }

    function updateNav(element){
        for(let i = 0; i<totalNavList; i++){
            navList[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];

            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
                navList[i].querySelector("a").classList.add("active")
            }
        }
    }

    document.querySelector(".hire-me").addEventListener("click",function(){
        const sectionIndex=this.getAttribute("data-section-index");
        showSection(this);
        updateNav(this);
        for(let i = 0; i<totalSection; i++){
            allSection[i].classList.remove("back-section")
        }
        allSection[sectionIndex].classList.add("back-section");
    })

    const navTogglerBtn = document.querySelector(".nav-toggler"),
          aside = document.querySelector(".aside");

    navTogglerBtn.addEventListener("click",() =>{
        asideSectionTogglerBtn();
    })

    function asideSectionTogglerBtn(){
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for(let i = 0; i<totalSection; i++){
            allSection[i].classList.toggle("open")
        }
    }

