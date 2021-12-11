let result ='';
const area = document.getElementById('area');
let move = 0;
const wrapper = document.getElementById('content');
const win = document.getElementById('win');
const btnClose = document.getElementById('btn-close');
const overlay = document.getElementById('overlay');

area.addEventListener('click', e =>{
    if (e.target.className = 'box'){
        move % 2 === 0 ?e.target.innerHTML='+':
        e.target.innerHTML='0';
        move++;
        check();
    }
})
const check = () =>{
    const boxes = document.getElementsByClassName('box');
    const arr = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    for (let i = 0; i < arr.length; i++) {
        if( boxes[arr[i][0]].innerHTML== '+'&& boxes[arr[i][1]].innerHTML== '+'&& boxes[arr[i][2]].innerHTML== '+'
         ){
             result = 'крестики';
    }else if(boxes[arr[i][0]].innerHTML== '0'&& boxes[arr[i][1]].innerHTML== '0'&& boxes[arr[i][2]].innerHTML== '0'
         ){ result='нолики';
         prepareResult(result);
        }
    }
}
    const prepareResult = winer =>{
        console.log(winer);
       wrapper.innerHTML = `победили ${winer} !`;
       win.style.display = 'block'; 
       location.reload();
    }
    const closeModal = () =>{
    win.style.display = 'none';
    location.erload();
    }
    overlay.addEventListener('click', closeModal);
    btnClose.addEventListener('click', closeModal);
  


    //мой //