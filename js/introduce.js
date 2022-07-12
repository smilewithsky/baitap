const tools = [
    {
        id : 1 ,
        image : "../images/introduce/custom-about-img-item-1.png",
        textHeading : 'Kỹ thuật',
        title: 'Điều quan trọng là sử dụng bơ cacao. Đó là chìa khóa để thành công hơn, tại sao không sống trơn tru? Tại sao sống thô? Một số khác. Cảm ơn cuộc sống cao nhất, chúng tôi thở ...'
    }
    ,
    {
        id : 2 ,
        image : "../images/introduce/custom-about-img-item-2.png",
        textHeading : 'Thiết kế',
        title: 'Điều quan trọng là sử dụng bơ cacao. Đó là chìa khóa để thành công hơn, tại sao không sống trơn tru? Tại sao sống thô? Một số khác. Cảm ơn cuộc sống cao nhất, chúng tôi thở ...'
    }
    ,
    {
        id : 3 ,
        image : "../images/introduce/custom-about-img-item-3.png",
        textHeading : 'Chiến lược',
        title: 'Điều quan trọng là sử dụng bơ cacao. Đó là chìa khóa để thành công hơn, tại sao không sống trơn tru? Tại sao sống thô? Một số khác. Cảm ơn cuộc sống cao nhất, chúng tôi thở ...'
    }
]

function renderListService(data){
    let src = "" ;
    data.forEach(function(item){
        src = src + `
        <div class="col l-4 m-6 c-12">
            <div class="customer-item">
                <div class="customer-icon">
                    <img src="${item.image}" alt="">
                </div>
                <div class="customer-content">
                    <h3 class="customer-text-heading">
                        ${item.textHeading}
                    </h3>
                    <p class="customer-descipt">
                        ${item.title}
                    </p>
                </div>
            </div>
        </div>
    `
    })

    const customeList = document.getElementById('customerId-list') ;
    customeList.innerHTML = src ;

    return customeList
}

renderListService(tools);