function f1(){
    console.log(this === window)
}

document.getElementsByTagName('body')[0].onclick = f1

function f2(){
    console.log(this === document)
}
f2()

document.getElementsByTagName('body')[0].onclick = f2

const f3 = () => console.log(this === window)

f3()

//arraow function o this não varia
//this = léxico