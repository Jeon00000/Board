// 섬머노트 스크립트
$(document).ready(function () {

    $('#summernote').summernote({
        placeholder: '댓글 쓰기',
        height: 150,
        toolbar: [
            // ['fontname', ['fontname']],
            // ['fontsize', ['fontsize']],
            // ['style', ['style']],
            // ['font', ['bold', 'underline', 'clear']],
            // ['color', ['color']],
            // ['para', ['ul', 'ol', 'paragraph']],
        ],
        fontNames: ['맑은 고딕', '궁서', '굴림체', '굴림', '돋움체', '바탕체'],
        fontSizes: ['8', '9', '10', '11', '12', '14', '16', '18', '20']
    });


    // 로그인 스크립트

    $('.login-test').click(function () {
        $('.login-dim').addClass('show');
    });
    $('.login-dim').click(function (event) {
        if (event.target == this) {
            $(".login-dim").removeClass('show');

        }
    });




    // 자세히 보기버튼

    const $preElement = $('pre');
    const $postBtnElement = $('.post-btn');
    $postBtnElement.hide();
    //pre.each() 모든 pre요소 각각반복
    $preElement.each(function () {
        const $this = $(this);
        if ($this[0].scrollHeight >= 4 * parseFloat($this.css('line-height'))) {
            $this.addClass('is-expandable');
        }
    });
    $('.is-expandable + .post-btn').show();

    $('.is-expandable + .post-btn').on('click', function () {
        $(this).prev().toggleClass('is-expanded');
        $(this).text(function (i, text) {
            return text === "자세히 보기" ? "간략히 보기" : "자세히 보기";
        });
    });

    // 댓글버튼 누르기
    const viewButtons = document.querySelectorAll("#post-list");
    viewButtons.forEach(button => {
        button.addEventListener("click", function () {
            // 해당 게시글의 정보를 가져옵니다.
            const content = this.closest(".post-box").querySelector("pre").innerText;
            const date = this.closest(".post-box").querySelector("#post-date").innerText;
            // 게시글 보기 페이지에 정보를 삽입합니다.
            document.querySelector("#view-date").innerText = date;
            document.querySelector("#view-content").innerText = content;

            // 게시글 보기 페이지를 표시합니다.
            document.querySelector(".post-container").style.display = "none";
            document.querySelector(".post-view").style.display = "flex";
        });
    });

    //글쓰기버튼-----------------------

    // 게시글 정보를 저장할 객체 배열
    let articles = [];

    // 글쓰기 버튼 클릭 시
    document.querySelector('.button-4').addEventListener('click', function (e) {
        e.preventDefault();
        const title = document.querySelector('.note-editable p').innerHTML;
        if (!title) {
            alert('내용을 입력해주세요.');
            return;
        }
        const article = { title, id: Date.now() };
        articles.push(article);
        saveData();
        renderList();
        // document.querySelector('.note-editable p').innerHTML = '';
    });
    // 저장된 데이터 로드하기
    function loadData() {
        const data = localStorage.getItem('articles');
        if (data) {
            articles = JSON.parse(data);
        }
    }
    // 데이터 저장하기
    function saveData() {
        localStorage.setItem('articles', JSON.stringify(articles));
    }

    // 리스트 렌더링하기
    function renderList() {
        const list = document.querySelector('#list');
        list.innerHTML = '';
        articles.forEach(function (article) {
            const item = document.createElement('li');
// ---------------------------------------------------
            // Date를 게시글 작성시간으로 표시
            // 게시글 작성 시간을 저장한 timestamp 값
            const postTime = new Date(article.id); // timestamp
            // 현재 시간을 가져옵니다.
            const now = new Date();
            // 게시글 작성 시간과 현재 시간의 차이를 계산합니다.
            const timeDiff = now - postTime;
            // 차이 값을 일, 시간, 분, 초로 계산합니다.
            const day = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            const hour = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minute = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            const second = Math.floor((timeDiff % (1000 * 60)) / 1000);
            // 시간을 표시합니다.
            const postDate = document.querySelector('#post-date');
            if (day > 0) {
                postDate.textContent = `${day}일 전`;
            } else if (hour > 0) {
                postDate.textContent = `${hour}시간 전`;
            } else if (minute > 0) {
                postDate.textContent = `${minute}분 전`;
            } else {
                postDate.textContent = `${second}초 전`;
            }
// -------------------------------------------------------
            const link = document.createElement('p');
            link.textContent = `${article.title}    ${postDate.textContent}`;
            // link.setAttribute('href', `#${article.id}`);
            item.appendChild(link);
            const delButton = document.createElement('button');
            delButton.textContent = '삭제';
            delButton.addEventListener('click', function (e) {
                e.preventDefault();
                const index = articles.findIndex(function (element) {
                    return element.id === article.id;
                });
                if (index !== -1) {
                    articles.splice(index, 1);
                    saveData();
                    renderList();
                }
            });
            item.appendChild(delButton);
            list.appendChild(item);
        });
    }


    // --------------------글쓰기 버튼




});//jq

