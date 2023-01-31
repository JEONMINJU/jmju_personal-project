/**
 * Created by jmju on 2023-01-26.
 */
const layout = () => {
    /* 댓글 이벤트 */
    const commentEvent = () => {
        const $currentText = document.getElementById("js__comment__byte");//입력된 텍스트
        const textArea = document.getElementById("js__comment__textarea");//입력영역
        const $commentBox = document.querySelector(".js__comment__box");//댓글박스
        const $submitButton = document.getElementById("submit");//등록 버튼

        textArea.addEventListener('input', (event) => {
            $currentText.innerText = event.target.value.length;
        });
  
        /* 리스트 append */
        function appendList(_commentText) {
            const li = document.createElement("li");
            const span = document.createElement("span");
            span.innerHTML = _commentText;
            li.appendChild(span);
            $commentBox.appendChild(li);
        }

        /* 텍스트 value */
        function getTextValue() {
            const _commentText = textArea.value;
            appendList(_commentText);

            textArea.value = "";
        }

        /* 등록 버튼 클릭 */
        $submitButton.addEventListener("click", () => {
            getTextValue()
        });
    };

    const layout_init = () => {
        commentEvent();
    };

    layout_init();
}

export default layout;