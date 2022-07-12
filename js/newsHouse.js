const news = [
    {
        id : 1 ,
        Image : '../images/main/1539014389-175841189-moi-tr-ng-s-ng-tieu-chi-vang-quot-nh-n-di-n-quot-b-t-ng-s-n-cao-c-p.jpg' ,
        time: `<i class="far fa-clock"></i> 
        22:59 - 08/10/2018 ` ,
        header : 'Môi trường sống - tiêu chí vàng để nhận diện bất...',
        paragraph : 'Khi xu thế “sống xanh” đang được theo đuổi trên toàn thế giới thì môi trường và không gian sống đang trở...' ,
        button : 'Xem thêm'
    } ,

    {
        id : 2 ,
        Image : '../images/main/1539014029-1764882275-cach-ch-n-mau-s-n-t-ng-trang-tri-nha.jpg' ,
        time: `<i class="far fa-clock"></i> 
        22:59 - 08/10/2018 ` ,
        header : 'Cách chọn màu sơn tường trang trí nhà',
        paragraph : 'Với những bức tường trong nhà, sự lựa chọn an toàn như màu trắng hay xám có thể mang lại cho bạn sự nhàm chán....' ,
        button : 'Xem thêm'
    } ,

    {
        id : 3 ,
        Image : '../images/main/1539013363-149779901-s-d-ng-ldquo-l-i-thong-t-ng-rdquo-v-a-l-y-sang-v-a-them-khu-vui-ch-i-cho-tr-nh.jpg' ,
        time: `<i class="far fa-clock"></i> 
        22:59 - 08/10/2018 ` ,
        header : 'Sử dụng “lưới thông tầng” vừa lấy sáng vừa thêm khu',
        paragraph : 'Cải tạo căn nhà 2 tầng ở Nga là một nhiệm vụ không hề dễ dàng đối với đội ngũ KTS văn phòng Ruetemple. Người lớn phải...' ,
        button : 'Xem thêm'
    } ,

    {
        id : 4 ,
        Image : '../images/main/1539012400-1105424438-5-v-t-li-u-ph-bi-n-cho-tr-n-nha-vi-t-nam-trong-2018.jpg' ,
        time: `<i class="far fa-clock"></i> 
        22:59 - 08/10/2018 ` ,
        header : '5 vật liệu phổ biến cho trần nhà ở Việt Nam trong 2018',
        paragraph : 'Thị trường vật liệu không ngừng phát triển với những mẫu sản phẩm mới, chất liệu mới đáp ứng đa dạng nhu cầu quý...' ,
        button : 'Xem thêm'
    }
]

function renderNews(data){
    let str = "" ;
    data.forEach(function(item){
        str = str + 
        `
        <div class="col l-3 m-4 c-12 news-column">   
            <div class="news-item">
                <div class="news-image">
                    <img class="news-images" src="${item.Image}" alt="">
                </div>
                <div class="news-content">
                    <p class="news-times">
                        ${item.time}
                    </p>
                    <a class="text-header news-header text-hover">
                        ${item.header}
                    </a>

                    <p class="news-paragraph">
                        ${item.paragraph}
                    </p>

                    <a href="" class="btn btn-primary">${item.button}</a>
                </div>
            </div>
        </div>
        `
    }) ;

    const container = document.querySelector('.news-rows') ;
    console.log(container);
    container.innerHTML = str ;

    return container ;
}

renderNews(news) ;

const itemRow = document.querySelector('.icon-row') ;
console.log('itemRow ', itemRow);
const itemColumn = document.querySelector('.icon-column') ;
console.log('itemColumn ', itemColumn);

const elementIcon = document.querySelectorAll('.icon');
for (let i = 0 ; i<elementIcon.length ; i++){
    const element = elementIcon[i] ;
    element.addEventListener('click' , function(event){
        const itemIcon = document.querySelectorAll('.icon');
        for(let i = 0 ; i < itemIcon.length ; i++) {
            itemIcon[i].classList.remove('icon-active')
        }

        

        const itemRow = document.querySelector('.icon-row');

        const elemnt = event.target ;
        console.log(elemnt);

        const attribute = elemnt.getAttribute('class') ;
        console.log('attribute ',attribute);
        
        if(attribute.includes('icon-row')){
            element.classList.add('icon-active') ;
            const newsItem = document.querySelectorAll('.news-item') ;
            for(let i = 0 ; i < newsItem.length ; i++){
                newsItem[i].classList.add('item-vertical') ;
            }

            const newsColumn = document.querySelectorAll('.news-column') ;
            for(let i = 0 ; i < newsColumn.length ; i++){
                newsColumn[i].classList.add('l-12');
                newsColumn[i].classList.add('m-12');
            }

            const images = document.querySelectorAll('.news-images');
            for(let i = 0 ; i<images.length ; i++){
                images[i].style.minHeight = 'unset' ;
            }
        }

        else if(attribute.includes('icon-column')){
            element.classList.add('icon-active') ;
            const newsItem = document.querySelectorAll('.news-item') ;
            for(let i = 0 ; i < newsItem.length ; i++){
                newsItem[i].classList.remove('item-vertical') ;
            }

            const newsColumn = document.querySelectorAll('.news-column') ;
            for(let i = 0 ; i < newsColumn.length ; i++){
                newsColumn[i].classList.remove('l-12');
                newsColumn[i].classList.remove('m-12');
            }

            const images = document.querySelectorAll('.news-images');
            for(let i = 0 ; i<images.length ; i++){
                images[i].style.minHeight = '186px' ;
            }
        }

        else{
            console.log('error');
        }
    })
}