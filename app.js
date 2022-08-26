const body = document.body
const featuresTitle  =  document.querySelector(".feature-title")
const companyTitle  =  document.querySelector(".company-title")
const featureContent  =  document.getElementById("feature-dropdown")
const MobileFeatureTitle  =  document.querySelector(".mobile-feature-title")
const MobileFeatureContent  =  document.querySelector(".mobile-feature-content")
const MobileCompanyTitle  =  document.querySelector(".mobile-company-title")
const MobileCompanyContent  =  document.querySelector(".mobile-company-content")
const companyContent  =  document.getElementById("company-dropdown")
const imgArrow =  document.getElementById("img-arrow")
const img2Arrow =  document.getElementById("img2-arrow")
const MobileImgArrow =  document.getElementById("mobile-img-arrow")
const MobileImg2Arrow =  document.getElementById("mobile-img2-arrow")
const ham =  document.querySelector('.hamburger')
const mobileNavigation = document.getElementById('navigation')
const menuImg = document.getElementById('menu-img')

featuresTitle.addEventListener('click',(e)=>{
        
        e.preventDefault()
        featureContent.classList.toggle("show")
        if(featureContent.classList.contains("show")){
                imgArrow.src = "./images/icon-arrow-down.svg"
        }
        else{
                imgArrow.src = "./images/icon-arrow-up.svg"
        }
})

companyTitle.addEventListener('click',(e)=>{
        e.preventDefault()
        companyContent.classList.toggle("show")
        if(companyContent.classList.contains("show")){
                img2Arrow.src = "./images/icon-arrow-down.svg"
        }
        else{
                img2Arrow.src = "./images/icon-arrow-up.svg"
        }
})

ham.addEventListener('click',()=>{

        if(mobileNavigation.classList.contains('mobile-nav')){
          menuImg.src = "./images/icon-close-menu.svg"
          mobileNavigation.classList.add('translate')
          mobileNavigation.classList.remove('mobile-nav')
          body.classList.add("body-background")
        }
        else{
          menuImg.src = "./images/icon-menu.svg"
          mobileNavigation.classList.add("mobile-nav")
          mobileNavigation.classList.remove('translate')
          body.classList.remove("body-background")
          MobileFeatureContent.classList.remove("show")
          MobileCompanyContent.classList.remove("show")
        }

        if(MobileFeatureContent.classList.contains('show')){
                MobileImgArrow.src = "./images/icon-arrow-up.svg"
        }
        else{
                MobileImgArrow.src = "./images/icon-arrow-down.svg"
        }

        
        if(MobileCompanyContent.classList.contains('show')){
                MobileImg2Arrow.src = "./images/icon-arrow-up.svg"
        }
        else{
                MobileImg2Arrow.src = "./images/icon-arrow-down.svg"
        }


  })  

MobileFeatureTitle.addEventListener('click',(e)=>{
        e.preventDefault()
        MobileFeatureContent.classList.toggle("show")

        if(MobileFeatureContent.classList.contains('show')){
                MobileImgArrow.src = "./images/icon-arrow-up.svg"
        }
        else{
                MobileImgArrow.src = "./images/icon-arrow-down.svg"
        }
})

MobileCompanyTitle.addEventListener('click',(e)=>{
        e.preventDefault()
        MobileCompanyContent.classList.toggle("show")

        if(MobileCompanyContent.classList.contains('show')){
                MobileImg2Arrow.src = "./images/icon-arrow-up.svg"
        }
        else{
                MobileImg2Arrow.src = "./images/icon-arrow-down.svg"
        }
})

window.addEventListener('click', (e)=>{

        if (!e.target.matches('.feature-title')){      

            if (featureContent.classList.contains('show')) {
                featureContent.classList.remove('show');
            }
            
        }

        if(!e.target.matches('.company-title')){

            if (companyContent.classList.contains('show')) {
                companyContent.classList.remove('show');
            }
        }


})