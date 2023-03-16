// 섬머노트 스크립트
$(document).ready(function () {

    $('#summernote').summernote({
        placeholder: '내용을 입력하세요',
        height: 200,
        toolbar: [
            ['fontname', ['fontname']],
            ['fontsize', ['fontsize']],
            ['style', ['style']],
            ['font', ['bold', 'underline', 'clear']],
            ['color', ['color']],
            ['para', ['ul', 'ol', 'paragraph']],
        ],
        fontNames: ['맑은 고딕', '궁서', '굴림체', '굴림', '돋움체', '바탕체'],
        fontSizes: ['8', '9', '10', '11', '12', '14', '16', '18', '20', '24', '28', '30', '36', '50']
    });


    // 로그인 스크립트

    $('.test').click(function () {
        $('#logpop').addClass('show');
    });
    $('body').click(function (event) {
        console.log(event.target);
        // 테스트중
        if (event.target == this) {
            $(".login-popup").removeClass('show');

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





});//jq

