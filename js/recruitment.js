const recruitment = [
    {
        id : 1 ,
        Image : '../../images/recruitment/1539102402-2046803642-tuy-n-d-ng-nhan-vien-ban-hang-d-an.jpg' ,
        header : 'Tuyển Dụng Nhân Viên Bán Hàng Dự Án',
        paragraph : 'Tuyển dụng, phát triển và chăm sóc các khách hàng là nhà thầu thi công mới và tiềm năng trong khu vực. Kết hợp với Bộ phận Tiếp thị và Kinh doanh tổ chức...' ,
        button : 'Xem thêm'
    } ,

    {
        id : 2 ,
        Image : '../../images/recruitment/1539101880-807532733-tuy-n-d-ng-nhan-vien-kinh-doanh-v-gian-giao-v-t-t-xay-d-ng.jpg' ,
        header : 'Tuyển Dụng Nhân Viên Kinh Doanh Về Giàn Giáo, Vật Tư Xây Dựng',
        paragraph : 'Tìm kiếm, xây dựng, gặp gỡ, thiết lập những mối quan hệ kinh doanh mới. Duy trì, chăm sóc những quan hệ kinh doanh hiện có. Nhận đơn đặt hàng, xử lý...' ,
        button : 'Xem thêm'
    } ,

    {
        id : 3 ,
        Image : '../../images/recruitment/1539101723-456916480-tuy-n-d-ng-ch-huy-tr-ng-cong-tr-ng.jpg' ,
        header : 'Tuyển Dụng Chỉ Huy Trưởng Công Trường',
        paragraph : 'Tổ chức thực hiện công tác quản lý điều hành chung của Ban chỉ huy công trường bao gồm việc (xây dựng, đề xuất, triển khai thực hiện, kiểm tra giám sát,...' ,
        button : 'Xem thêm'
    } ,

    {
        id : 4 ,
        Image : '../../images/recruitment/1539101723-456916480-tuy-n-d-ng-ch-huy-tr-ng-cong-tr-ng.jpg' ,
        header : 'Tuyển Dụng Nhân Viên Kinh Doanh',
        paragraph : 'Xây dựng các kênh thông tin phát triển thị trường, tìm kiếm và tư vấn khách hàng về sản phẩm Công Ty đang phân phối. Phối hợp cùng các bộ phận liên quan...' ,
        button : 'Xem thêm'
    },
    {
        id : 5 ,
        Image : '../../images/recruitment/tuy-n-d-ng-nhan-vien-qui-ii-2018-tuyen-dung-1.jpg' ,
        header : 'Tuyển dụng nhân viên Quí II 2018',
        paragraph : 'Để đáp ứng cho sự phát triển ngày càng lớn mạnh của Construction, chúng tôi đang tuyển dụng hơn 10 vị trí có kinh nghiệm như trưởng phòng kinh doanh, trưởng...' ,
        button : 'Xem thêm'
    } ,

    {
        id : 6 ,
        Image : '../../images/recruitment/tuy-n-nhan-vien-qui-i-2018-1808-baiviet-tuyendung-thang2-seo.jpg' ,
        header : 'Tuyển nhân viên Quí I 2018',
        paragraph : 'Nhằm đáp ứng cho sự phát triển ngày càng lớn mạnh của Construction, chúng tôi sẽ tuyển dụng rất nhiều các vị trí có kinh nghiệm. Chúng tôi luôn hân hoan...' ,
        button : 'Xem thêm'
    }
]

function renderNews(data){
    let str = "" ;
    data.forEach(function(item){
        str = str + 
        `
        <div class="col l-6 m-6 c-12 news-column">   
            <div class="news-item">
                <div class="news-image">
                    <img class="news-images" src="${item.Image}" alt="">
                </div>
                <div class="news-content">
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

renderNews(recruitment) ;

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
                images[i].style.minHeight = '290px' ;
            }
        }

        else{
            console.log('error');
        }
    })
}