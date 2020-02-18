var images = document.getElementsByClassName('imgToSlide')
var i = 0 

for(i = 0; i < images.length; i++){
    images[i].style.display = 'none'
    
}



/*
images = 3
images length = 3

i = 0
0(1) = display = none
1(2) = display = show

1(2) = display = none
2(3) = display = show

2

*/
var i = 0 
let firstLoopCompleted = false
if(screen.width >= 800){
setInterval(() => {
    //images[i].style.right = '200px'
    images[i].style.right = '100vw'
    //alert('abc')
    ///images[i].style.display = 'none'
    
    
    i+=1
    if(i >= images.length){
        i = 0
        //firstLoopCompleted = true
    }
    /*
    if(firstLoopCompleted){
        images[i].style.left = '0px'

    }
    */
    images[i].style.display = 'inline'
    images[i].style.right = '0vw'
    images[i - 1].style.right = '-100vw'
    
}, 4000)

}else{
    setInterval(() => {
        //images[i].style.right = '200px'
        //images[i].style.right = '100vw'
        //alert('abc')
        images[i].style.display = 'none'
        
        
        i+=1
        if(i >= images.length){
            i = 0
            //firstLoopCompleted = true
        }
        /*
        if(firstLoopCompleted){
            images[i].style.left = '0px'

        }
        */
        images[i].style.width = '100vw'
        images[i].style.display = 'inline'
        //images[i].style.right = '0vw'
        //images[i - 1].style.right = '-100vw'
        
    }, 4000)
    
}