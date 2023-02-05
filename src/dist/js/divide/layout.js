/**
 * Created by jmju on 2023-01-26.
 */
const moment = require("moment");

const layout = () => {
    /* 댓글 이벤트 */
    const commentEvent = () => {
        const $currentText = document.getElementById("js__comment__byte");//입력된 텍스트
        const $textArea = document.getElementById("js__comment__textarea");//입력영역
        const $commentBox = document.querySelector(".js__comment__box");//댓글박스
        const $submitButton = document.getElementById("submit");//등록 버튼
        const comment_KEY = "comments";
        let commentArray = [];//빈배열 생성

        $textArea.addEventListener('input', (event) => {
            $currentText.innerText = event.target.value.length;
        });
 
        /* 등록된 댓글 저장 */
        function saveComments() {
            localStorage.setItem(comment_KEY, JSON.stringify(commentArray)); // 배열 저장
        };
               
        /* 리스트 delete */
        function deleteList(event) {
            const list = event.target.parentElement;
            list.remove();
            
            /* 클릭한 버튼의  id값이랑 로컬에 저장된 id값이 같으면 배열에 넣지 않는다. */
            const cleanArr = commentArray.filter(comment => comment.id !== parseInt(list.id));
            
            /* 필터로 만든 배열을 기본 배열에 다시 담아준다.  */
            commentArray = cleanArr;

            /* 저장을 꼭 해줘야함..  */
            saveComments();

            console.log(list.id, cleanArr);
        }

        /* 리스트 append */
        function appendList(object) {
            /* 리스트 태그 생성 */
            const li = document.createElement("li");
            const content = document.createElement("p");
            const deleteButton = document.createElement("button");
            const writeDate = document.createElement("span");
            const commentId = commentArray.length;
            li.id = object.id;

            writeDate.innerHTML = object.date;
            content.innerHTML = object.comment;
            deleteButton.innerText = "X";
            deleteButton.addEventListener("click", deleteList);

            li.prepend(writeDate);
            li.prepend(content);
            li.prepend(deleteButton);
            $commentBox.prepend(li);
        };

        /* 최종 서브밋 */
        function handleSubmit() {
            const commentId = commentArray.length;
            const _commentText = $textArea.value;//text값 가져오기

            $textArea.value = "";

            const object = {
                id : commentId,
                comment : _commentText,
                date : moment().format("YYYY.MM.DD HH:mm:ss"),
            }
            
            commentArray.push(object);

            /* 빈값 체크 */
            if (_commentText != "" && _commentText.length < 100) {
                appendList(object);
            } else {
                alert("텍스트를 1 ~ 100자 이하로 입력해주세요.");
            }
            saveComments();//로컬스토리지 저장
        };

        const localStorage_Key = localStorage.getItem(comment_KEY);

        /* 로컬스토리지 저장된 값이 있으면 불러오기 */
        if(localStorage_Key !== null) {
            const getCommentList = JSON.parse(localStorage_Key);
            commentArray = getCommentList;
            
            getCommentList.forEach(appendList);

            console.log(commentArray, "로컬에 저장된 값");
        };

        /* 등록 버튼 클릭 */
        $submitButton.addEventListener("click", () => {
            handleSubmit();
        });
    };

    /* 상단 스토리 리스트 클릭 */
    const storiesEvent = () => {
        const $storyList = document.querySelectorAll(".js__stories__list");
        const $contentWrapper = document.querySelectorAll(".js__container__wrapper .js__container__inner");
        
        for(let i = 0; i < $storyList.length; i++) {
            $storyList[i].addEventListener("click", function() {
                /* 전체 remove on */
                $contentWrapper.forEach(element => {
                    element.classList.remove("on");
                });

                /* addClass on */
                $contentWrapper[i].classList.add("on");
            });
        };
    };

    const layout_init = () => {
        commentEvent();
        storiesEvent();
    };

    layout_init();
}

export default layout;