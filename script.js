
var a=Math.random(6)*6+1;
var b=Math.floor(a)

var image='dice'+b+'.png'
document.getElementsByTagName('img')[0].src=image
console.log(image);

// document.getElementById('id1').innerHTML=b

var c=Math.random(6)*6+1;
var d=Math.floor(c)

var image2='/dice'+d+'.png'
document.getElementsByTagName('img')[1].src=image2
console.log(image2);

// document.getElementsByTagName('h1')[2].innerHTML=d

if(d>b)
    {
        document.getElementsByTagName('h1')[1].innerHTML="Player 2 Wins 😎"
    }
    else if (d==b)
        {
            document.getElementsByTagName('h1')[1].innerHTML="🤝 Match Draw!"
        }
        else{
            document.getElementsByTagName('h1')[1].innerHTML="😎 Player 1 Wins"
        }
