const readAll = document.querySelector(".readAll");
const nCount = document.querySelector(".Ncount");
const notification = document.querySelectorAll(".notification");
const dot = document.querySelectorAll(".dot");
const unread = document.querySelectorAll(".unread");

readAll.addEventListener("click", ()=>{
    nCount.innerHTML = 0;
    
    notification.forEach(
        (e)=>{
            e.classList.remove("unread");
        }
    )

    dot.forEach(
        (e)=>{
            e.classList.remove("dot")
        }
    )
})
