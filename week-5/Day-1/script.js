
var div = document.createElement('div');
var p = document.createElement('p');
var img = document.createElement('img');
img.src = "flag.gif";

div.append(p);
document.body.append(div);

p.innerText = 10;

    setTimeout(function(count = 10, show = (count)=>{p.innerText = count;}){
        setTimeout(()=>{
            count--;
            show(count);
            setTimeout(()=>{
                count--;
                show(count);
                setTimeout(()=>{
                    count--;
                    show(count);
                    setTimeout(()=>{
                        count--;
                        show(count);
                        setTimeout(()=>{
                            count--;
                            show(count);
                            setTimeout(()=>{
                                count--;
                                show(count);
                                setTimeout(()=>{
                                    count--;
                                    show(count);
                                    setTimeout(()=>{
                                        count--;
                                        show(count);
                                        setTimeout(()=>{
                                            count--;
                                            show(count);
                                            setTimeout(()=>{
                                                count--;
                                                show(count);
                                                setTimeout(()=>{
                                                    div.removeChild(p);
                                                    div.append(img);
                                                },0);
                                            },1000);
                                        },1000);
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    }, 0);