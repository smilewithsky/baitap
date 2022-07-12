const images = [
    {
        id: 1 ,
        image : "../../images/imagePage/1538416449-1029318273-slide-1.jpg" ,
        alt: "ảnh số 1",
    }
    ,
    {
        id: 2 ,
        image : "../../images/imagePage/1540089158-1863031249-uhd-tv.jpg" ,
        alt: "ảnh số 2",
    }
    ,
    {
        id: 3 ,
        image : "../../images/imagePage/1540089187-260118531-nh-bia-1.jpg" ,
        alt: "ảnh số 3",
    }
    ,
    {
        id: 4 ,
        image : "../../images/imagePage/1540089286-555041341-nh-i-dien-3.jpg" ,
        alt: "ảnh số 4",
    }
    ,
    {
        id: 5 ,
        image : "../../images/imagePage/1540089302-1575357102-nh-i-dien-4.jpg" ,
        alt: "ảnh số 5",
    }
    ,
    {
        id: 6 ,
        image : "../../images/imagePage/1540197400-852497126-nh-1.jpg" ,
        alt: "ảnh số 6",
    }
    ,
    {
        id: 7 ,
        image : "../../images/imagePage/1540089335-646335404-nh-i-dien-6.jpg" ,
        alt: "ảnh số 7",
    }
    ,
    {
        id: 8 ,
        image : "../../images/imagePage/1540089316-2080635156-nh-i-dien-5.jpg" ,
        alt: "ảnh số 8",
    }
    ,
    {
        id: 9 ,
        image : "../../images/imagePage/1540089254-569105242-nh-bia-3.jpg" ,
        alt: "ảnh số 9",
    }
]

// function renderInit(){
// console.log('1');
// }

function renderImage(data){
    let str = "" ;
    data.forEach(item => {
        {
            str = str + 
            `
            <div class="col l-4 m-6 c-12">
                <div class="images-container">
                    <div class="image-item">
                        <img class="images-zoom" src="${item.image}" alt="${item.alt}">
                    </div>
                </div>
            </div>
            `
        }
    })

    const rowImage = document.querySelector('#row-image') ;
    rowImage.innerHTML = str ;
    return rowImage ;
}

renderImage(images) ;

const modal = document.querySelector('.modal');
const exit = document.querySelector('.exit')
console.log('modal ',modal);
const caption = document.querySelector('.modal-captions') ;
let modalImage = document.querySelector('#modal-img')
const listImage = document.querySelectorAll('.image-item > .images-zoom') ;
for (let i = 0 ; i < images.length ; i++){
    const item = listImage[i] ;
    item.addEventListener('click' ,function(event){
        console.log('event ',event.target );
        modalImage.src = this.src;
        caption.innerHTML = this.alt ;
        modal.style.display = "flex" ;
    })
}

exit.addEventListener('click' , function(event){
    modal.style.display = "none" ;
})



// mediumZoom('.video' , {
//     margin : 50 ,
//     background : '#000',
// })