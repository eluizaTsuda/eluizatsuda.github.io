// PROJECTS FILTER
// Set Portfolio Filter Variables
const filterContainer = document.querySelector(".portfolio-filter");
const filterBtns = filterContainer.children;
const totalFilterBtns = filterBtns.length;
const portfolioItems = document.querySelectorAll(".portfolio-item");
const totalPortfolioItems = portfolioItems.length;
const splash = document.querySelector(".splash");

// Set Splash Image Variables
let all = document.querySelector('#all');
let code = document.querySelector('#code');
let data = document.querySelector('#data');


// Add Event Listeners for Splash Image Changes
all.addEventListener('click', () => {
    splash.style.backgroundImage = "url(img/splash_all.png)";
})
code.addEventListener('click', () => {
    splash.style.backgroundImage = "url(img/splash_code.png)";
})
data.addEventListener('click', () => {
    splash.style.backgroundImage = "url(img/splash_data.png)";
})

// Filter and Display Items for the Selected Category
for(let i = 0; i < totalFilterBtns; i++){
    filterBtns[i].addEventListener("click", function(){
        filterContainer.querySelector(".active").classList.remove("active");
        this.classList.add("active");

        const filterValue = this.getAttribute("data-filter");
        for(let k = 0; k < totalPortfolioItems; k++){
            if(filterValue === portfolioItems[k].getAttribute("data-category")){
                portfolioItems[k].classList.remove("hide");
                portfolioItems[k].classList.add("show");
            }
            else {
                portfolioItems[k].classList.remove("show");
                portfolioItems[k].classList.add("hide");
            }
            if (filterValue === "all") {
                portfolioItems[k].classList.remove("hide");
                portfolioItems[k].classList.add("show");
            }
        }
    })
}