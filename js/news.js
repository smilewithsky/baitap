const news = [
    {
        id : 5 ,
        Image : '../images/main/1539010228-83699099-s-n-graphenstone-ndash-gi-i-phap-s-n-xanh-cho-ngoi-nha.jpg' ,
        time: `<i class="far fa-clock"></i> 
        22:59 - 08/10/2018 ` ,
        header : 'Sơn Graphenstone – Giải pháp sơn xanh cho ngôi nhà',
        paragraph : 'Lần đầu tiên trên thị trường một loại sơn được kết hợp từ vôi và chất graphene tạo ra dòng sơn Eco – nano cao cấp...' ,
        button : 'Xem thêm'
    } ,

    {
        id : 6 ,
        Image : '../images/main/1539009976-814382583-th-tr-ng-nha-2019-c-n-h-trung-c-p-va-binh-dan-chi-m-ch-o.jpg' ,
        time: `<i class="far fa-clock"></i> 
        22:59 - 08/10/2018 ` ,
        header : 'Thị trường nhà ở 2019: Căn hộ trung cấp và bình dân',
        paragraph : 'Nhiều đơn vị tư vấn và phân phối bất động sản dự báo thị trường nhà ở năm 2019 về cơ bản vẫn tiếp tục xu thế phục hồi...' ,
        button : 'Xem thêm'
    } ,

    {
        id : 7 ,
        Image : '../images/main/1539009828-1065676506-phat-tri-n-o-th-thong-minh-vi-t-nam-h-ng-t-i-t-ng-tr-ng-xanh.jpg' ,
        time: `<i class="far fa-clock"></i> 
        21:43 - 08/10/2018 ` ,
        header : 'Phát triển đô thị thông minh ở Việt Nam hướng tới tăng',
        paragraph : 'Ngày 1/8, tại Quyết định 950/QĐ-TTg, Thủ tướng Chính phủ đã phê duyệt Đề án Phát triển đô thị thông minh...' ,
        button : 'Xem thêm'
    } ,

    {
        id : 8 ,
        Image : '../images/main/1539009643-1813289537-keo-dan-g-ch-v-t-li-u-m-i-c-a-chu-ng-trong-xay-d-ng.jpg' ,
        time: `<i class="far fa-clock"></i> 
        21:40 - 08/10/2018` ,
        header : 'Keo dán gạch - vật liệu mới được ưa chuộng trong xây',
        paragraph : 'Các trào lưu kiến trúc hiện đại như hightech, tối giản, kiến trúc xanh… nhanh chóng cập nhật ở Việt Nam, kéo theo...' ,
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