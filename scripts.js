const draggable = document.getElementById('draggable');

draggable.addEventListener('mousedown', (event) => {
    let offsetX = event.clientX - draggable.getBoundingClientRect().left;
    let offsetY = event.clientY - draggable.getBoundingClientRect().top;

    function mouseMoveHandler(e) {
        draggable.style.left = `${e.clientX - offsetX}px`;
        draggable.style.top = `${e.clientY - offsetY}px`;
    }

    function mouseUpHandler() {
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    }

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
});

// 点击事件
draggable.addEventListener('click', () => {
    //alert('你点击了我！');
});