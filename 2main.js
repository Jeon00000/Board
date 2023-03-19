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
        console.log(event.target);
        // 테스트중
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



});//jq

