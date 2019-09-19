
// inch to cm
function inCm(x){
  const inch = x;
  const cm = 2.54 * inch;
  return cm.toFixed(2);
}
// cm to inch
function cmIn(x){
  const cm = x;
  const inch = cm/2.54;
  return inch.toFixed(2);
}
// ft to cm
function ftCm(x){
  const inch = x;
  const cm = 30.48 * inch;
  return cm.toFixed(2);
}
// mt to ft
function mtFt(x){
  const mt = x;
  const ft = 3.28084 * mt;
  return ft.toFixed(2);
}

// ou to gm
function ouGm(x){
  const ou = x;
  const gm = 28.3495 * ou;
  return gm.toFixed(2);
}

// lb to gm
function lbGm(x){
  const lb = x;
  const gm = 453.592 * lb;
  return gm.toFixed(2);
}


const ul = document.querySelector('ul');

ul.addEventListener('click',(event)=>{

  const input = event.target;
  const li = input.parentNode;

  if(event.target.className === "in-cm"){
    const val = input.value;
    const span = li.querySelector('span');;
    span.textContent = 'in= ' + inCm(val) + 'cm';
    li.appendChild(span);
    }
  else if(event.target.className === "cm-in"){
    const val = input.value;
    const span = li.querySelector('span');;
    span.textContent = 'cm= ' + cmIn(val) + 'in';
    li.appendChild(span);
    }
  else if(event.target.className === "ft-cm"){
    const val = input.value;
    const span = li.querySelector('span');
    span.textContent = 'ft= ' + ftCm(val) + 'cm';
    li.appendChild(span);
    }
    else if(event.target.className === "mt-ft"){
      const val = input.value;
      const span = li.querySelector('span');
      span.textContent = 'mt= ' + mtFt(val) + 'ft';
      li.appendChild(span);
      }

    else if(event.target.className === "ou-gm"){
      const val = input.value;
      const span = li.querySelector('span');
      span.textContent = 'ou= ' + ouGm(val) + 'gm';
      li.appendChild(span);
      }
    else if(event.target.className === "lb-gm"){
        const val = input.value;
        const span = li.querySelector('span');
        span.textContent = 'lb= ' + lbGm(val) + 'gm';
        li.appendChild(span);
        }

});
