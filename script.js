// script.js
document.addEventListener('DOMContentLoaded', function() {
    const recordSleepButton = document.getElementById('recordSleepButton');
    const datePicker = document.getElementById('datePicker');
    const dateList = document.getElementById('dateList');

    recordSleepButton.addEventListener('click', function() {
        const selectedDate = datePicker.value;
        if (selectedDate) {
            // 创建一个新的列表项
            const listItem = document.createElement('li');
            listItem.textContent = selectedDate;
            dateList.appendChild(listItem);

            // 显示正向反馈弹出框
            showFeedback('耶，又早睡一天！');

            // 清空选择的日期
            datePicker.value = '';
        } else {
            alert('请先选择一个日期');
        }
    });

    function showFeedback(message) {
        // 创建弹出框元素
        const feedback = document.createElement('div');
        feedback.className = 'feedback active';
        feedback.innerHTML = `
            <p>${message}</p>
            <button id="closeFeedbackButton">wlp收到</button>
        `;

        // 添加到页面
        document.body.appendChild(feedback);

        // 关闭弹出框
        const closeButton = document.getElementById('closeFeedbackButton');
        closeButton.addEventListener('click', function() {
            feedback.remove();
        });
    }
});
