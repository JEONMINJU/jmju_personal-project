/**
 * Created by jmju on 2023-01-26.
 */
const layout = () => {
    /* 댓글 이벤트 */
    const commentEvent = () => {
        const currentText = document.getElementsByClassName("js__comment__byte");
        const textArea = document.getElementById("js__comment__textarea");

        /* 
            1. textarea의 입력되는 value값의 length를   
            2. js__comment__byte 에 뿌려준다.
            3.
        */

        textArea.addEventListener('input', () => {
            console.log("여기2@@@@@")

        });

        for (let i = 0; i < currentText.length; i++) {
            currentText[i].innerText

            console.log(currentText[i])
        };


        console.log(document.getElementById("header"));
    };

    const layout_init = () => {
        commentEvent();
    };

    layout_init();
}

export default layout;