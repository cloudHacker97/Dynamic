// Global var.
const allSections = Array.from(document.querySelectorAll('section'));
const ulSelect = document.querySelector('#navbar__list');



// making the dynamic nav bar 
function creatMagicNav (){
    
    for (let i=0;i < allSections.length; i++){
        // creating the li element 
        const li = document.createElement('li');
        // appending the li to the ul 
        const liVar = ulSelect.append(li);
        // get the id of each index in the array
        sectionId = allSections[i].id;
        // making the inner html with he sections id  
        liTag = li.innerHTML = `<a href="#${sectionId}">${sectionId}</a>`;
    }
} 

creatMagicNav()

// start smooth scroll

// collecting the a attribute from li and make an array so i can use forEach
const liList = document.querySelectorAll('li a');
// checking that it's the array that i need 
// console.log(liList);
//using forEach on the liList array 
liList.forEach(a => {
    // adding event listener to prevent the default scrolling on click
    a.addEventListener('click', e =>{
        e.preventDefault();
        // targeting the href value in a var.
        let liSection =  e.target.attributes.href.value;
        // selecting each section and store it in var
        let soloSection = document.querySelector(liSection);
        // adding scrollIntoView method to each section with  behavior
        soloSection.scrollIntoView({
            behavior : "smooth",
            Block : "center",
        })
    })
})


function scroll (){
    //getting the forEach loop to target each section alone 
    allSections.forEach(i => {
        // making the if  condition to make the boundaries of each section 
    if (i.getBoundingClientRect().top < 0 && i.getBoundingClientRect().bottom > 0){
        // if section does not have an active class
        if (!i.classList.contains('your-active-class')){
            i.classList.add('your-active-class');
                // if it does have an active class 
            }else {
                i.classList.remove('your-active-class')
            }
    }
})
}
  

// calling the function in an event listener to active on scroll 
window.addEventListener('scroll', scroll);

// var. for the icon 
const theIcon = document.getElementById('icon')

//array of the li 
const liArray = Array.from(document.querySelectorAll('li'));
function list (){
    //looping over the array and targeting each li 
    liArray.forEach (x => {
        // if it block turn it to none 
        if(x.style.display == 'block'){
            x.style.display = 'none'
            //if it none turn it to block 
        }else {
            x.style.display = 'block'
        }
    })
}

theIcon.addEventListener("click", list);