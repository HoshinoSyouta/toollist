var list = document.querySelector('.list');
var sendData = document.querySelector('.send');
var data = JSON.parse(localStorage.getItem('listData')) || [];

sendData.addEventListener('click',addData);
list.addEventListener('click',toggleDone);
updataList(data);

function addData(e){
    // e.preventDefault();
    var txt = document.querySelector('.text').value;
    var todo = {
        content: txt
    };
    data.push(todo);
    updataList(data);
    localStorage.setItem('listData',JSON.stringify(data));
}

function updataList(items){
    str = '';
    var len = items.length;
    for(var i = 0;len > i;i++){
        str += '<li><a href="#" data-index=' +i+ '/>刪除</a><span>'+items[i].content + '</span></li>';
    }
    list.innerHTML = str;
}



function toggleDone(e){
    e.preventDefault();
    if(e.target.nodeName !=='A'){return};
    var index = e.target.dataset.index;
    data.splice(index,1);
    localStorage.setItem('listData',JSON.stringify(data));
    updataList(data);
}