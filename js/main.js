let count = 1 ;
setInterval(() => {
    const btnCheck = document.getElementById('radio' + count);
    btnCheck.checked = true ;
    count++ ;
    if(count > 2){
        count = 1 ;
    }
}, 3000);

const service = [
    {
        id : 1 ,
        icon : '<i class="fas fa-pen"></i>',
        textHeading : 'Tư vấn xây dựng',
        title: 'Cửa lối vào EU cuối tuần miễn phí hơn một salad. Cho đến khi các thành viên của quam id lorem lobortis, người chơi vào những thời điểm của cuộc sống.'
    }
    ,
    {
        id : 2 ,
        icon : '<i class="fas fa-calculator"></i>',
        textHeading : 'Thiết kế kiến trúc',
        title: 'Cửa lối vào EU cuối tuần miễn phí hơn một salad. Cho đến khi các thành viên của quam id lorem lobortis, người chơi vào những thời điểm của cuộc sống.'
    }
    ,
    {
        id : 3 ,
        icon : '<i class="fas fa-lightbulb"></i>',
        textHeading : 'Hệ thống điện',
        title: 'Cửa lối vào EU cuối tuần miễn phí hơn một salad. Cho đến khi các thành viên của quam id lorem lobortis, người chơi vào những thời điểm của cuộc sống.'
    }
    ,
    {
        id : 4 ,
        icon : '<i class="fas fa-users"></i>',
        textHeading : 'Ký kết chung',
        title: 'Cửa lối vào EU cuối tuần miễn phí hơn một salad. Cho đến khi các thành viên của quam id lorem lobortis, người chơi vào những thời điểm của cuộc sống.'
    }
    ,
    {
        id : 5 ,
        icon : '<i class="fas fa-wrench"></i>',
        textHeading : 'Dịch vụ tái thiết',
        title: 'Cửa lối vào EU cuối tuần miễn phí hơn một salad. Cho đến khi các thành viên của quam id lorem lobortis, người chơi vào những thời điểm của cuộc sống.'
    }
    ,
    {
        id : 6 ,
        icon : '<i class="fas fa-tint"></i>',
        textHeading : 'Dịch vụ đường ống dẫn nước',
        title: 'Cửa lối vào EU cuối tuần miễn phí hơn một salad. Cho đến khi các thành viên của quam id lorem lobortis, người chơi vào những thời điểm của cuộc sống.'
    }
]

function renderListService(data){
    let src = "" ;
    data.forEach(function(item){
        src = src + `
        <div class="col l-4 m-6 c-12">
            <div class="service-item">
                <div class="service-icon">
                    ${item.icon}
                </div>
                <div class="service-content">
                    <h3 class="service-text-heading">
                        ${item.textHeading}
                    </h3>
                    <p class="service-descipt">
                        ${item.title}
                    </p>
                </div>
            </div>
        </div>
    `
    })

    const serviecList = document.getElementById('serviceId-list') ;
    serviecList.innerHTML = src ;

    return serviecList
}

renderListService(service);

$('.contracted-silder').owlCarousel({
    loop:true,
    nav: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

const itemExpand = document.querySelectorAll('.why-item-content') ;
const whyContainer = document.querySelectorAll('.why-item-content') ;
console.log('itemExpand' , itemExpand);
for (let i = 0; i < itemExpand.length ; i++){
    itemExpand[i].addEventListener('click', function(event){
        console.log('event' , event.target);
        for (let j = 0; j < itemExpand.length ; j++){
            whyContainer[j].classList.remove('why-item-content--active') ;
        }
        const parentContent = event.target.parentElement ;
        parentContent.classList.add('why-item-content--active');
    })
}
