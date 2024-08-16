function change(){
    let h=document.querySelector(".hour");
    let m=document.querySelector(".min");
    let s=document.querySelector(".sec");
    const date=new Date();
    h.innerText=String(date.getHours()).padStart(2,'0');
    m.innerText=String(date.getMinutes()).padStart(2,'0');
    s.innerText=String(date.getSeconds()).padStart(2,'0');
}
setInterval(change,100);
change();