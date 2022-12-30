window.addEventListener("load",SetUp,false);

function SetUp() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    const color_in = [];
    color_in.push([255,255,255]);
    color_in.push([255,0,0]);
    color_in.push([255,255,0]);
    color_in.push([0,255,0]);
    color_in.push([0,255,255]);
    color_in.push([0,0,255]);
    color_in.push([255,0,255]);
    color_in.push([255,0,0]);
    color_in.push([255,255,255]);


    // const n_color_in = color_in.length;
    // const n_color_out = Math.max(200,n_color_in);

    // var color_lcm = lcm(n_color_out-1,n_color_in-1);
    // var color_gcd = findGCD([n_color_in-1,n_color_out-1]);


    happy = interpolate(color_in,100);
    // happy = interpolate(color_in,color_lcm+1,(n_color_in-1)/color_gcd,(n_color_out-1)/color_gcd);
    // console.log(happy);
    Draw(happy);
}


function Draw(color_out) {
    ctx.clearRect(0,0,100,300);
    ctx.beginPath();
    ctx.rect(20, 20, 200, 40);
    ctx.stroke();
    
    for (i = 0; i < color_out.length; i++) {
        color_str = 'rgb('+color_out[i][0]+','+color_out[i][1]+','+color_out[i][2]+')';
        px = 20+i*200/color_out.length;
        DrawRect(color_str,px, 20, 200/color_out.length, 40);
    }
}

function DrawRect(color, x, y, width, height) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

function interpolate(arr, n_color_out) {
    // console.log(nn,a,b)
    var n_color_in = arr.length;
    n_color_out = Math.max(n_color_out,n_color_in);
    var color_gcd = findGCD([n_color_in-1,n_color_out-1]);
    var nn = lcm(n_color_out-1,n_color_in-1)+1;
    var a = (n_color_in-1)/color_gcd;
    var b = (n_color_out-1)/color_gcd
    var tmp = [];
    var result = [];
    
    delta = 1/(b);
    for (j = 0; j < arr.length-1; j++) {
        for (i = 0; i < b; i++) {
            rr = arr[j][0]+(arr[j+1][0]-arr[j][0])*delta*i;
            gg = arr[j][1]+(arr[j+1][1]-arr[j][1])*delta*i;
            bb = arr[j][2]+(arr[j+1][2]-arr[j][2])*delta*i;
            tmp.push([rr,gg,bb])
        }
    }
    tmp.push(arr[arr.length-1]);
    for (i = 0; i < nn; i=i+a) {
        result.push(tmp[i]);
    }
    return result;
}

// function interpolate(arr, nn, a, b) {
//     var tmp = [];
//     var result = [];

//     delta = 1/(nn-1);
//     for (j = 0; j < arr.length-1; j++) {
//     for (i = 0; i < nn; i++) {
//         rr = arr[0][0]+(arr[1][0]-arr[0][0])*delta*i;
//         gg = arr[0][1]+(arr[1][1]-arr[0][1])*delta*i;
//         bb = arr[0][2]+(arr[1][2]-arr[0][2])*delta*i;
//         tmp.push([rr,gg,bb])
//     }
//     }
//     return tmp;
// }

var gcd = (x, y) => !y ? x : gcd(y, x % y);
// 最小公倍數
var lcm = (a, b) => (a / gcd(a, b)) * b;
// 最大公因數
var findGCD = (nums) => gcd(  Math.max(...nums), Math.min(...nums)  );

function clockColor() {
    var color = document.getElementById("clockColor").value
    console.log(hexToRgb(color));
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
    ] : null;
    // return result ? {
    //     r: parseInt(result[1], 16),
    //     g: parseInt(result[2], 16),
    //     b: parseInt(result[3], 16)
    // } : null;
}
