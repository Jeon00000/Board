fetch('./data/hire.json')
.then((res)=>res.json())
.then((res)=>{
    const rs = res.hirelist;
    let div = "";

    for(let i = 0; i < rs.length; i++){
        div += `<li class="s-list">
        <a href="#">
            <div class="inner">
                <div class="cate2">채용공고</div>
                <div class="date"><i class="fa-regular fa-clock"></i>${rs[i].date}</div>
                <strong>
                    <span>${rs[i].title}</span>
                </strong>
                <p>${rs[i].content}</p>
            </div>
        </a>
    </li>`;
    }

    document.getElementById("row2").innerHTML = div;

})