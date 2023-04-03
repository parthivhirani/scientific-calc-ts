var dis = document.getElementById("result");
var upper = document.getElementById("subtext");
var marr = [];
var op = ['+', '-', '*', '/', '%', '.'];
// ****************************************** DISPLAY INTO SCREEN **********************************
function display(val) {
    var oldop = dis.value.slice(-1);
    if (op.includes(val) && op.includes(oldop)) {
        dis.value = dis.value.slice(0, -1);
        dis.value += val;
    }
    else {
        dis.value += val;
    }
}
// ************************************************************************************************
// ************************************ FIRST ROW ************************************************
function textChange() {
    var btntxt = document.getElementById("btntxt").innerHTML;
    if (btntxt == 'DEG') {
        document.getElementById("btntxt").innerHTML = 'RAD';
        document.getElementById("second").disabled = false;
        document.getElementById("second1").disabled = false;
    }
    else {
        document.getElementById("btntxt").innerHTML = 'DEG';
        document.getElementById("second").disabled = true;
        document.getElementById("second1").disabled = true;
    }
}
function fe() {
    var cb = document.getElementById('btn-check');
    if (cb.checked == true) {
        if (dis.value != '') {
            var fE = parseFloat(dis.value);
            dis.value = fE.toExponential();
        }
        else {
            var fE = 0;
            dis.value = fE.toExponential();
        }
    }
}
// ************************************************************************************************
// *************************************** MEMORY FUNCTIONS ***************************************
// localStorage.removeItem("memory");
var memory = JSON.parse(localStorage.getItem('memory'));
function memoryStore() {
    if (dis.value == '') {
        if (memory == null) {
            var data1 = [];
            data1.push(0);
            localStorage.setItem("memory", JSON.stringify(data1));
        }
        else {
            memory.push(0);
            localStorage.setItem("memory", JSON.stringify(memory));
        }
    }
    else {
        memory.push(parseFloat(dis.value));
        localStorage.setItem("memory", JSON.stringify(memory));
    }
    if (marr[marr.length - 1] != parseFloat(dis.value)) {
        marr.push(parseFloat(dis.value));
    }
    document.querySelector('#mc').disabled = false;
    document.querySelector('#mr').disabled = false;
    document.querySelector('#m').disabled = false;
    console.log(marr);
}
function memoryRecall() {
    dis.value = marr[marr.length - 1].toString();
    console.log(marr);
}
function memoryClear() {
    marr.splice(0, marr.length);
    document.querySelector('#mc').disabled = true;
    document.querySelector('#mr').disabled = true;
    document.querySelector('#m').disabled = true;
    console.log(marr);
}
function memoryPlus() {
    marr[marr.length - 1] += parseFloat(dis.value);
    console.log(marr);
}
function memoryminus() {
    marr[marr.length - 1] -= parseFloat(dis.value);
    console.log(marr);
}
function memoryShow() {
    var html = "<table>";
    for (var i = marr.length - 1; i >= 0; i--) {
        html += "<tr>";
        html += "<td>" + marr[i] + "</td>";
        html += "</tr>";
    }
    html += "</table>";
    document.getElementById('memory').innerHTML = html;
}
// ************************************************************************************
// *********************************** TRIGONOMETRY ************************************
document.getElementById("second").addEventListener("click", function (e) {
    e.stopPropagation();
});
document.getElementById("second1").addEventListener("click", function (e) {
    e.stopPropagation();
});
// INSIDE TRIGONOMETRY
function sin() {
    var mode = document.getElementById("btntxt").innerHTML;
    var sinval = document.getElementById('sin').innerHTML;
    if (sinval == 'sin') {
        if (mode == 'RAD') {
            upper.value = 'sinᵣ(' + dis.value + ')';
            dis.value = Math.sin(parseFloat(dis.value)).toString();
        }
        else {
            upper.value = 'sin₀(' + dis.value + ')';
            dis.value = Math.sin(parseFloat(dis.value) * (Math.PI / 180)).toString();
        }
    }
    else if (sinval == 'sin<sup>-1</sup>') {
        upper.value = 'sinᵣ-1(' + dis.value + ')';
        if (parseFloat(dis.value) >= -1 && parseFloat(dis.value) <= 1)
            dis.value = Math.asin(parseFloat(dis.value)).toString();
        else
            dis.value = "Enter value between -1 and 1";
    }
    else if (sinval == 'sinh') {
        upper.value = 'sinh(' + dis.value + ')';
        dis.value = Math.sinh(parseFloat(dis.value)).toString();
    }
}
function cos() {
    var mode = document.getElementById("btntxt").innerHTML;
    var sinval = document.getElementById('sin').innerHTML;
    if (sinval == 'sin') {
        if (mode == 'RAD') {
            upper.value = 'cosᵣ(' + dis.value + ')';
            dis.value = Math.cos(parseFloat(dis.value)).toString();
        }
        else {
            upper.value = 'cos₀(' + dis.value + ')';
            dis.value = Math.cos(parseFloat(dis.value) * (Math.PI / 180)).toString();
        }
    }
    else if (sinval == 'sin<sup>-1</sup>') {
        upper.value = 'cosᵣ-1(' + dis.value + ')';
        if (parseFloat(dis.value) >= -1 && parseFloat(dis.value) <= 1)
            dis.value = Math.acos(parseFloat(dis.value)).toString();
        else
            dis.value = "Enter value between -1 and 1";
    }
    else if (sinval == 'sinh') {
        upper.value = 'cosh(' + dis.value + ')';
        dis.value = Math.cosh(parseFloat(dis.value)).toString();
    }
}
function tan() {
    var mode = document.getElementById("btntxt").innerHTML;
    var sinval = document.getElementById('sin').innerHTML;
    if (sinval == 'sin') {
        if (mode == 'RAD') {
            upper.value = 'tanᵣ(' + dis.value + ')';
            dis.value = Math.tan(parseFloat(dis.value)).toString();
        }
        else {
            upper.value = 'tan₀(' + dis.value + ')';
            dis.value = Math.tan(parseFloat(dis.value) * (Math.PI / 180)).toString();
        }
    }
    else if (sinval == 'sin<sup>-1</sup>') {
        upper.value = 'tanᵣ-1(' + dis.value + ')';
        if (parseFloat(dis.value) >= -1 && parseFloat(dis.value) <= 1)
            dis.value = Math.atan(parseFloat(dis.value)).toString();
        else
            dis.value = "Enter value between -1 and 1";
    }
    else if (sinval == 'sinh') {
        upper.value = 'tanh(' + dis.value + ')';
        dis.value = Math.tanh(parseFloat(dis.value)).toString();
    }
}
function sec() {
    var mode = document.getElementById("btntxt").innerHTML;
    var sinval = document.getElementById('sin').innerHTML;
    if (sinval == 'sin') {
        if (mode == 'RAD') {
            upper.value = 'secᵣ(' + dis.value + ')';
            dis.value = (1 / Math.cos(parseFloat(dis.value))).toString();
        }
        else {
            upper.value = 'sec₀(' + dis.value + ')';
            dis.value = (1 / Math.cos(parseFloat(dis.value) * (Math.PI / 180))).toString();
        }
    }
    else if (sinval == 'sin<sup>-1</sup>') {
        upper.value = 'secᵣ-1(' + dis.value + ')';
        dis.value = Math.acos(1 / parseFloat(dis.value)).toString();
    }
    else if (sinval == 'sinh') {
        upper.value = 'sech(' + dis.value + ')';
        dis.value = (1 / Math.cosh(parseFloat(dis.value))).toString();
    }
}
function cosec() {
    var mode = document.getElementById("btntxt").innerHTML;
    var sinval = document.getElementById('sin').innerHTML;
    if (sinval == 'sin') {
        if (mode == 'RAD') {
            upper.value = 'cscᵣ(' + dis.value + ')';
            dis.value = (1 / Math.sin(parseFloat(dis.value))).toString();
        }
        else {
            upper.value = 'csc₀(' + dis.value + ')';
            dis.value = (1 / Math.sin(parseFloat(dis.value) * (Math.PI / 180))).toString();
        }
    }
    else if (sinval == 'sin<sup>-1</sup>') {
        upper.value = 'cscᵣ-1(' + dis.value + ')';
        dis.value = Math.asin(1 / parseFloat(dis.value)).toString();
    }
    else if (sinval == 'sinh') {
        upper.value = 'csch(' + dis.value + ')';
        dis.value = (1 / Math.sinh(parseFloat(dis.value))).toString();
    }
}
function cot() {
    var mode = document.getElementById("btntxt").innerHTML;
    var sinval = document.getElementById('sin').innerHTML;
    if (sinval == 'sin') {
        if (mode == 'RAD') {
            upper.value = 'cotᵣ(' + dis.value + ')';
            dis.value = (1 / Math.tan(parseFloat(dis.value))).toString();
        }
        else {
            upper.value = 'cot₀(' + dis.value + ')';
            dis.value = (1 / Math.tan(parseFloat(dis.value) * (Math.PI / 180))).toString();
        }
    }
    else if (sinval == 'sin<sup>-1</sup>') {
        upper.value = 'cotᵣ-1(' + dis.value + ')';
        dis.value = Math.atan(1 / parseFloat(dis.value)).toString();
    }
    else if (sinval == 'sinh') {
        upper.value = 'coth(' + dis.value + ')';
        dis.value = (1 / Math.tanh(parseFloat(dis.value))).toString();
    }
}
// **********************************************************************************************
// ********************************** INSIDE FUNCTION *******************************************
function absolute() {
    upper.value = 'abs(' + dis.value + ')';
    dis.value = Math.abs(parseFloat(dis.value)).toString();
}
function ceil() {
    upper.value = 'ceil(' + dis.value + ')';
    dis.value = Math.ceil(parseFloat(dis.value)).toString();
}
function floor() {
    upper.value = 'floor(' + dis.value + ')';
    dis.value = Math.floor(parseFloat(dis.value)).toString();
}
function rand() {
    dis.value = Math.random().toString();
}
function dms() {
    upper.value = "dms(" + dis.value + ")";
    var degree = Math.floor(parseFloat(dis.value));
    var minutes = ((parseFloat(dis.value) - Math.floor(parseFloat(dis.value))) * 60.0);
    var seconds = (minutes - Math.floor(minutes)) * 60.0;
    dis.value = degree + "." + Math.floor(minutes) + seconds.toFixed(0);
}
// function deg() {}
// **********************************************************************************************
// ************************************ INSIDE 2nd **********************************************
var btnCount = 1;
function changeBtn() {
    if (btnCount % 2 == 0) {
        document.getElementById('sqr').innerHTML = 'x<sup>2</sup>';
        document.getElementById('root').innerHTML = '2&#x221A;x';
        document.getElementById('expo').innerHTML = 'x<sup>y</sup>';
        document.getElementById('tenpow').innerHTML = '10<sup>x</sup>';
        document.getElementById('log').innerHTML = 'log';
        document.getElementById('log').disabled = false;
        document.getElementById('ln').innerHTML = 'ln';
        btnCount++;
    }
    else {
        document.getElementById('sqr').innerHTML = 'x<sup>3</sup>';
        document.getElementById('root').innerHTML = '3&#x221A;x';
        document.getElementById('expo').innerHTML = 'y&#x221A;x';
        document.getElementById('tenpow').innerHTML = '2<sup>x</sup>';
        document.getElementById('log').innerHTML = 'log<sub>y</sub>x';
        document.getElementById('log').disabled = true;
        document.getElementById('ln').innerHTML = 'e<sup>x</sup>';
        btnCount++;
    }
}
var btnCountI = 1;
function changeToInverse() {
    if (btnCountI % 2 == 0) {
        document.getElementById('second1').style.backgroundColor = 'white';
        document.getElementById('second1').style.color = 'black';
        document.getElementById('sin').innerHTML = 'sin';
        document.getElementById('cos').innerHTML = 'cos';
        document.getElementById('tan').innerHTML = 'tan';
        document.getElementById('sec').innerHTML = 'sec';
        document.getElementById('cosec').innerHTML = 'csc';
        document.getElementById('cot').innerHTML = 'cot';
        btnCountI++;
    }
    else {
        document.getElementById('second1').style.backgroundColor = 'rgb(0, 90, 158)';
        document.getElementById('second1').style.color = 'white';
        document.getElementById('sin').innerHTML = 'sin<sup>-1</sup>';
        document.getElementById('cos').innerHTML = 'cos<sup>-1</sup>';
        document.getElementById('tan').innerHTML = 'tan<sup>-1</sup>';
        document.getElementById('sec').innerHTML = 'sec<sup>-1</sup>';
        document.getElementById('cosec').innerHTML = 'csc<sup>-1</sup>';
        document.getElementById('cot').innerHTML = 'cot<sup>-1</sup>';
        btnCountI++;
    }
}
var btnCountH = 1;
function changeToHyp() {
    if (btnCountH % 2 == 0) {
        document.getElementById('second').style.backgroundColor = 'white';
        document.getElementById('second').style.color = 'black';
        document.getElementById('sin').innerHTML = 'sin';
        document.getElementById('cos').innerHTML = 'cos';
        document.getElementById('tan').innerHTML = 'tan';
        document.getElementById('sec').innerHTML = 'sec';
        document.getElementById('cosec').innerHTML = 'csc';
        document.getElementById('cot').innerHTML = 'cot';
        btnCountH++;
    }
    else {
        document.getElementById('second').style.backgroundColor = 'rgb(0, 90, 158)';
        document.getElementById('second').style.color = 'white';
        document.getElementById('sin').innerHTML = 'sinh';
        document.getElementById('cos').innerHTML = 'cosh';
        document.getElementById('tan').innerHTML = 'tanh';
        document.getElementById('sec').innerHTML = 'sech';
        document.getElementById('cosec').innerHTML = 'csch';
        document.getElementById('cot').innerHTML = 'coth';
        btnCountH++;
    }
}
// **********************************************************************************************
// ****************************************** ROW: 1 ********************************************
function dlt() {
    if (dis.value == '') {
        upper.value = '';
    }
    dis.value = '';
}
function pop() {
    if (dis.value == 'Error!' || dis.value == 'Infinity' || dis.value == 'NaN') {
        dis.value = '';
    }
    else {
        dis.value = dis.value.slice(0, dis.value.length - 1);
    }
}
// **********************************************************************************************
// ****************************************** ROW: 2 ********************************************
function sqr() {
    var squr = document.getElementById('sqr').innerHTML;
    if (squr == 'x<sup>3</sup>') {
        upper.value = 'cube(' + dis.value + ')';
        dis.value = Math.pow(parseFloat(dis.value), 3).toString();
    }
    else {
        upper.value = 'sqr(' + dis.value + ')';
        dis.value = Math.pow(parseFloat(dis.value), 2).toString();
    }
}
function inverse() {
    upper.value = '1/(' + dis.value + ')';
    dis.value = (1 / parseFloat(dis.value)).toString();
}
function expo() {
    if (dis.value != '') {
        var fE = parseFloat(dis.value);
        dis.value = fE.toExponential();
    }
    else {
        var fE = 0;
        dis.value = fE.toExponential();
    }
}
// **********************************************************************************************
// ****************************************** ROW: 3 ********************************************
function sqroot() {
    var sqRoot = document.getElementById('root').innerHTML;
    if (sqRoot == '2√x') {
        upper.value = '√(' + dis.value + ')';
        dis.value = Math.sqrt(parseFloat(dis.value)).toString();
    }
    else {
        upper.value = 'cuberoot(' + dis.value + ')';
        dis.value = Math.pow(parseFloat(dis.value), 1 / 3).toString();
    }
}
function factorial() {
    if (parseFloat(dis.value) < 100000000000) {
        upper.value = 'fact(' + dis.value + ')';
        var fact = 1;
        if (parseFloat(dis.value) == 0 || parseFloat(dis.value) == 1) {
            fact = 1;
        }
        else {
            for (var i = 1; i <= parseFloat(dis.value); i++) {
                fact *= i;
            }
        }
        dis.value = fact.toString();
    }
    else {
        dis.value = 'Infinity';
    }
}
// **********************************************************************************************
// ****************************************** ROW: 4 ********************************************
function xtoy() {
    var xToY = document.getElementById('expo').innerHTML;
    if (xToY == 'x<sup>y</sup>') {
        dis.value += '**';
    }
    else {
        dis.value = dis.value + "**(1/";
    }
}
// **********************************************************************************************
// ****************************************** ROW: 5 ********************************************
function tentox() {
    var tenToX = document.getElementById('tenpow').innerHTML;
    if (tenToX == '10<sup>x</sup>') {
        upper.value = '10^(' + dis.value + ')';
        dis.value = Math.pow(10, parseFloat(dis.value)).toString();
    }
    else {
        upper.value = '2^(' + dis.value + ')';
        dis.value = Math.pow(2, parseFloat(dis.value)).toString();
    }
}
// **********************************************************************************************
// ****************************************** ROW: 6 ********************************************
function log() {
    upper.value = 'log(' + dis.value + ')';
    dis.value = Math.log10(parseFloat(dis.value)).toString();
}
// **********************************************************************************************
// ****************************************** ROW: 7 ********************************************
function ln() {
    var ln = document.getElementById('ln').innerHTML;
    if (ln == 'ln') {
        upper.value = 'ln(' + dis.value + ')';
        dis.value = Math.log(parseFloat(dis.value)).toString();
    }
    else {
        upper.value = 'e^(' + dis.value + ')';
        dis.value = (Math.pow(Math.E, parseFloat(dis.value))).toString();
    }
}
function plusminus() {
    if (dis.value) {
        if (parseFloat(dis.value) > 0)
            dis.value = (0 - parseFloat(dis.value)).toString();
        else
            dis.value = (Math.abs(parseFloat(dis.value))).toString();
    }
}
function answer() {
    try {
        upper.value = dis.value + '=';
        dis.value = '';
        var x = upper.value.slice(0, -1);
        var y = eval(x);
    }
    catch (_a) {
        y = 'Error!';
    }
    var cb = document.getElementById('btn-check');
    if (cb.checked == true) {
        dis.value = y.toExponential();
    }
    else {
        dis.value = y;
    }
}
// **********************************************************************************************
