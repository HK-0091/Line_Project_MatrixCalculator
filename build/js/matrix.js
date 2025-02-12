let outputBoxA = document.querySelector("#outputBoxA");
let randomBoxA = document.querySelector("#randomBoxA");
let resetBoxA = document.querySelector("#resetBoxA");
let outputBoxB = document.querySelector("#outputBoxB");
let randomBoxB = document.querySelector("#randomBoxB");
let resetBoxB = document.querySelector("#resetBoxB");
let modalAlert = document.querySelector(".modalAlert");
let modalOff = document.querySelector(".modalOff");
let resultButtonAddition = document.getElementById('resultButtonAddition');
let resultButtonSubtraction = document.getElementById('resultButtonSubtraction');
let resultButtonMultiplication = document.getElementById('resultButtonMultiplication');

//행열박스A
function matrixResultA(colsNum, rowsNum) {
    let rowsBoxNumberA = document.querySelector("#rowsBoxNumberA");
    let colsBoxNumberA = document.querySelector("#colsBoxNumberA");
    let boxC1 = document.querySelector("#boxC1");
    let rowsBoxAInner = "";
    boxC1.innerHTML = "";
    let i = 0;
    while (i < rowsNum) {
        rowsBoxAInner = '<div class="matrixResultAllBox">';
        let j = 0;
        while (j < colsNum) {
            rowsBoxAInner += `<input type="number" value="0" placeholder="0" id="colBoxA${i}${j}" class="matrixResultBox">`
            j++;
        }
        rowsBoxAInner += '</div>'
        boxC1.innerHTML += rowsBoxAInner;
        i++;
    }
}

//랜덤숫자A
function randomNumberPrintA(colsNum, rowsNum) {
    let rowsBoxNumberA = document.querySelector("#rowsBoxNumberA");
    let colsBoxNumberA = document.querySelector("#colsBoxNumberA");
    i = 0;
    while (i < rowsNum) {
        j = 0;
        while (j < colsNum) {
            document.getElementById(`colBoxA${i}${j}`).value = Number(Math.floor(Math.random() * 100) + 1);
            j++;
        }
        i++;
    }
}

//행열박스B
function matrixResultB(colsNumB, rowsNumB) {
    let rowsBoxNumberB = document.querySelector("#rowsBoxNumberB");
    let colsBoxNumberB = document.querySelector("#colsBoxNumberB");
    let boxC2 = document.querySelector("#boxC2");
    let rowsBoxBInner = "";
    boxC2.innerHTML = "";
    let i = 0;
    while (i < rowsNumB) {
        rowsBoxBInner = '<div class="matrixResultAllBox">';
        let j = 0;
        while (j < colsNumB) {
            rowsBoxBInner += `<input type="number" value="0" placeholder="0" id="colBoxB${i}${j}" class="matrixResultBox">`
            j++;
        }
        rowsBoxBInner += '</div>'
        boxC2.innerHTML += rowsBoxBInner;
        i++;
    }
}

//랜덤숫자B
function randomNumberPrintB(colsNumB, rowsNumB) {
    let rowsBoxNumberB = document.querySelector("#rowsBoxNumberB");
    let colsBoxNumberB = document.querySelector("#colsBoxNumberB");
    i = 0;
    while (i < rowsNumB) {
        j = 0;
        while (j < colsNumB) {
            document.getElementById(`colBoxB${i}${j}`).value = Number(Math.floor(Math.random() * 100) + 1);
            j++;
        }
        i++;
    }
}

//공통박스
function listingBoxes(value1, value2) {
    let rowsBoxNumberB = document.querySelector("#rowsBoxNumberB");
    let colsBoxNumberB = document.querySelector("#colsBoxNumberB");
    let rowsBoxNumberA = document.querySelector("#rowsBoxNumberA");
    let colsBoxNumberA = document.querySelector("#colsBoxNumberA");
    let boxC3 = document.querySelector("#boxC3");
    let rowsBoxCInner = "";
    boxC3.innerHTML = "";
    if (rowsBoxNumberA.value == rowsBoxNumberB.value && colsBoxNumberA.value == colsBoxNumberB.value) {
        let i = 0;
        while (i < value2) {
            rowsBoxCInner = '<div class="matrixResultAllBox">';
            let j = 0;
            while (j < value1) {
                rowsBoxCInner += `<input type="number" value="0" placeholder="0" id="colBoxC${i}${j}" class="matrixResultBox">`
                j++;
            }
            rowsBoxCInner += '</div>'
            boxC3.innerHTML += rowsBoxCInner;
            i++;
        }
    } else {
        modalAlert.style.display = 'block';
    }

}

function numberAddition(colsNumC, rowsNumC) {
    listingBoxes(colsNumC, rowsNumC)
    i = 0;
    while (i < rowsNumC) {
        j = 0;
        while (j < colsNumC) {
            document.getElementById(`colBoxC${i}${j}`).value =
                Number(document.getElementById(`colBoxA${i}${j}`).value) +
                Number(document.getElementById(`colBoxB${i}${j}`).value);
            j++;
        }
        i++;
    }
}

function numberSubtraction(colsNumC, rowsNumC) {
    listingBoxes(colsNumC, rowsNumC)
    i = 0;
    while (i < rowsNumC) {
        j = 0;
        while (j < colsNumC) {
            document.getElementById(`colBoxC${i}${j}`).value =
                Number(document.getElementById(`colBoxA${i}${j}`).value) -
                Number(document.getElementById(`colBoxB${i}${j}`).value);
            j++;
        }
        i++;
    }
}

//곱하기
function numberMultiplication(rowsNumA, colsNumB, colsNumA) {
    listingBoxes(colsNumB, colsNumA)
    let resultArray = [];
    let i = 0;
    while (i < rowsNumA) {
        let j = 0;
        let tempArray = [];
        while (j < colsNumB) {
            let k = 0;
            let tempNumber = 0;
            while (k < colsNumA) {
                tempNumber += document.querySelector(`#colBoxA${i}${k}`).value * document.querySelector(`#colBoxB${k}${j}`).value;
                k++;
            }
            tempArray.push(tempNumber);
            j++;
        }
        i++;
        resultArray.push(tempArray);
    }
    i = 0;
    while (i < rowsNumA) {
        j = 0;
        while (j < colsNumB) {
            document.getElementById(`colBoxC${i}${j}`).value = resultArray[i][j];
            j++;
        }
        i++;
    }
}

//모달창
modalOff.addEventListener('click', () => {
    modalAlert.style.display = 'none';
})


//실행!
outputBoxA.addEventListener("click", function () { matrixResultA(colsBoxNumberA.value, rowsBoxNumberA.value) });
resetBoxA.addEventListener("click", function () { boxC1.innerHTML = "" });
randomBoxA.addEventListener("click", function () { randomNumberPrintA(colsBoxNumberA.value, rowsBoxNumberA.value); });
outputBoxB.addEventListener("click", function () { matrixResultB(colsBoxNumberB.value, rowsBoxNumberB.value) });
resetBoxB.addEventListener("click", function () { boxC2.innerHTML = "" });
randomBoxB.addEventListener("click", function () { randomNumberPrintB(colsBoxNumberB.value, rowsBoxNumberB.value); });
resultButtonAddition.addEventListener("click", function () { numberAddition(colsBoxNumberB.value, rowsBoxNumberB.value) });
resultButtonSubtraction.addEventListener("click", function () { numberSubtraction(colsBoxNumberB.value, rowsBoxNumberB.value) });
resultButtonMultiplication.addEventListener("click", function () { numberMultiplication(rowsBoxNumberA.value, colsBoxNumberB.value, colsBoxNumberA.value) });