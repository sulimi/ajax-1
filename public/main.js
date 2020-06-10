// console.log('我是main.js');


// getCSS.onclick = () => {//点击按钮，用Ajax发送请求给服务器server.js
//
//
//     //AJAX
// //第一步  创建
//     const request = new XMLHttpRequest();
// //第二步  发送给服务器server
//     request.open('GET', '/style.css');//获取资源都用GET,专业前端只用两个参数
// //第三步 监听成功失败
//     request.onload = () => {
//         // console.log(request.response);
//
//         //创建style标签
//         const style = document.createElement('style');
//         //填写style内容
//         style.innerHTML = request.response;
//         //插到头里面
//         document.head.appendChild(style);
//     }
//     request.onerror = () => {
//         console.log('失败了');
//     }
// //第四步  发送
//     request.send();
//
//
// }
//
//
// getJS.onclick = () => {
//     const request = new XMLHttpRequest();
//     request.open('GET', '/main2.js');
//     request.onload = () => {
//         const script = document.createElement('script');
//         script.innerHTML = request.response;
//         document.body.appendChild(script);
//     }
//     request.onerror = () => {
//
//     }
//     request.send();
// }
//
// getHTML.onclick = () => {
//     const request = new XMLHttpRequest();
//     request.open('GET', '/index2.html');
//     request.onload = () => {
//         console.log(request.response);
//         const div = document.createElement('div');
//         div.innerHTML = request.response;
//         document.body.appendChild(div);
//     }
//     request.onerror = () => {
//
//     }
//     request.send();
// }


getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/style.css');
    request.onreadystatechange = () => {
        console.log(request.readyState);
        if (request.readyState === 4) {
            console.log('成功、失败下载完成，但是还不知道是成功还是失败');
            console.log(request.status);
            if (request.status >= 200 && request.status < 300) {
                console.log(request.status);
                const style = document.createElement('style');
                style.innerHTML = request.response;
                document.head.appendChild(style);
            } else {
                alert('加载 失败');
            }
        }
    }
    request.send();
}


getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/main2.js');
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const script = document.createElement('script');
                script.innerHTML = request.response;
                document.body.appendChild(script);
            } else {
                alert('加载 失败');
            }
        }
    }
    request.send();
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/index2.html');
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const div = document.createElement('div');
                div.innerHTML = request.response;
                document.body.appendChild(div);
            } else {
                alert('加载 失败');
            }
        }
    }
    request.send();
}

getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/1.xml');
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.responseXML);//自动把xml变成一个DOM对象
            const dom = request.responseXML;
            const text = dom.getElementsByTagName('warning')[0].textContent.trim();
            console.log(text);
        }
    }
    request.send();
}
getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/1.json');
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            // console.log(request.response);
            // const object = JSON.parse(request.response);
            // console.log(object);
            // myName.textContent = object.name;

            //防止JSON.parse出错
            let object
            try {
                object = JSON.parse(request.response);
                myName.textContent = object.name;
            } catch (error) {
                console.log('出错了，错误详情是：');
                console.log(error);
                object = {'name': 'no name'}
            }
            console.log(object);
        }
    }
    request.send();
}

let n=1;
getPAGE.onclick=()=>{
    const request=new XMLHttpRequest();
    request.open('GET', `/page${n+1}`);//这里可以不写路径啊,跟服务器的路由对的上就行
    request.onreadystatechange=()=>{
        if (request.readyState===4&&request.status===200){
            // console.log(request.response);
            const array=JSON.parse(request.response);//变成js数组
            array.forEach(item=>{
                const li=document.createElement('li');
                li.textContent=item.id;
                xxx.appendChild(li);
            })
            n+=1;
        }
    }
    request.send();
}