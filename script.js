
// ------ Test for input field -----
 $('input').change(function(){

  var d = $(this).val();
  $('.test-div').html(d);

 });




// ----------


const products = [
  { type: 'length',
    name: 'IN-CM',
    conv: '1in= 2.54cm',
    title: 'Inches to Centimeters'
  },
  { type: 'length',
    name: 'CM-IN',
    conv: '1cm= 0.39in',
    title: 'Centimeters to Inches'
  },
  { type: 'length',
    name: 'FT-CM',
    conv: '1ft= 30.48cm',
    title: 'Feet to Centimeters'
  },
  { type: 'length',
    name: 'MT-FT',
    conv: '1mt= 3.28ft',
    title: 'Meters to Feet'
  },
  { type: 'weight',
    name: 'OU-GM',
    conv: '1ou= 28.35gm',
    title: 'Ounces to Grams'
  },
  { type: 'weight',
    name: 'LB-GM',
    conv: '1lb= 453.59gm',
    title: 'Pounds to Grams'
  },
  { type: 'weight',
    name: 'LB-KG',
    conv: '1lb= 0.45kg',
    title: 'Pounds to Kilograms'
  },
  { type: 'weight',
    name: 'KG-LB',
    conv: '1kg= 2.20lb',
    title: 'Kilograms to Pounds'
  },
  { type: 'temperature',
    name: 'CL-FH',
    conv: '1°c= 33.8°f',
    title: 'Celsius to Fahrenheit'
  },
  { type: 'temperature',
    name: 'FH-CL',
    conv: '1°f= -17.2°c',
    title: 'Fahrenheit to Celsius'
  },
  { type: 'volume',
    name: 'GL-LT',
    conv: '1g= 3.79l',
    title: 'Gallons to Liters'
  },
  { type: 'volume',
    name: 'LT-GL',
    conv: '1l= 0.26g',
    title: 'Liters to Gallons'
  },
  { type: 'volume',
    name: 'PT-LT',
    conv: '1p= 0.47l',
    title: 'Pints to Liters'
  },
  { type: 'volume',
    name: 'LT-PT',
    conv: '1l= 2.11p',
    title: 'Liters to Pints'
  }
];
// Vue

const shoppingCart = new Vue ({
  el: '#conversionApp',
  data: {
    title: "Conversion App",
    products: products,
    type: '',
    quantity: ''
  },
  methods: {
    // shows only selections of that type
    selection: function(){
    this.type = event.target.value;
    }
  },
  // displays product types in selection menu only once
  computed: {
    selectType: function(){
      const types = [];
      this.products.forEach((item)=>{
        if(!types.includes(item.type)){
          types.push(item.type);
        }
      });
      return types;
    }
  }
}); //end Vue

// -- Conversion  Formula functions ---
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

// lb to kg
function lbKg(x){
  const lb = x;
  const kg = lb/2.20462;
  return kg.toFixed(2);
}

// kg to lb
function kgLb(x){
  const kg = x;
  const lb = 2.20462 * kg;
  return lb.toFixed(2);
}

// cl to fh
function clFh(x){
  const c = x;
  const f = (c * (9/5)) + 32;
  return f.toFixed(1);
}

// fh to cl
function fhCl(x){
  const f = x;
  const c = (f - 32) * (5/9);
  return c.toFixed(1);
}

// gl to lt
function glLt(x){
  const g = x;
  const l = g * 3.78541;
  return l.toFixed(2);
}

// lt to gl
function ltGl(x){
  const l = x;
  const g = l/3.78541;
  return g.toFixed(2);
}

//pt to lt
function ptLt(x){
  const p = x;
  const l = p/2.11338;
  return l.toFixed(2);
}

// lt to pt
function ltPt(x){
  const l = x;
  const p = l * 2.11338;
  return p.toFixed(2);
}
// --- end conversions formulas ---

// Input on change function for conversions
$('li').change(function(){
   const input = event.target;
   const li = input.parentNode;
// Inch to Centi
  if($(this).attr('data-name') === "IN-CM"){
    const val = input.value;
    const span = li.querySelector('span');
    span.textContent = val + 'in= ' + inCm(val) + 'cm';
    li.insertBefore(span, input);
    }
  // Centi to Inch
  else if($(this).attr('data-name') === "CM-IN"){
    const val = input.value;
    const span = li.querySelector('span');
    span.textContent = val + 'cm= ' + cmIn(val) + 'in';
    li.insertBefore(span, input);
    }
  // Feet to Centi
  else if($(this).attr('data-name') === "FT-CM"){
    const val = input.value;
    const span = li.querySelector('span');
    span.textContent = val + 'ft= ' + ftCm(val) + 'cm';
    li.insertBefore(span, input);
    }
  // Meter to Feet
    else if($(this).attr('data-name') === "MT-FT"){
      const val = input.value;
      const span = li.querySelector('span');
      span.textContent = val + 'mt= ' + mtFt(val) + 'ft';
      li.insertBefore(span, input);;
      }
  // Ounce to Gram
    else if($(this).attr('data-name') === "OU-GM"){
      const val = input.value;
      const span = li.querySelector('span');
      span.textContent = val + 'ou= ' + ouGm(val) + 'gm';
      li.insertBefore(span, input);
      }
  // Pound to Gram
    else if($(this).attr('data-name') === "LB-GM"){
        const val = input.value;
        const span = li.querySelector('span');
        span.textContent = val + 'lb= ' + lbGm(val) + 'gm';
        li.insertBefore(span, input);
      }
  // Pound to Kilo
    else if($(this).attr('data-name') === "LB-KG"){
      const val = input.value;
      const span = li.querySelector('span');
      span.textContent = val + 'lb= ' + lbKg(val) + 'kg';
      li.insertBefore(span, input);
      }
  // Kilo to Pound
    else if($(this).attr('data-name') === "KG-LB"){
      const val = input.value;
      const span = li.querySelector('span');
      span.textContent = val + 'kg= ' + kgLb(val) + 'lb';
      li.insertBefore(span, input);
      }
  // Celsius to Fahrenheit
    else if($(this).attr('data-name') === "CL-FH"){
      const val = input.value;
      const span = li.querySelector('span');
      span.textContent = val + '°c= ' + clFh(val) + '°f';
      li.insertBefore(span, input);
      }
  // Fahrenheit to Celsius
    else if($(this).attr('data-name') === "FH-CL"){
      const val = input.value;
      const span = li.querySelector('span');
      span.textContent = val + '°f= ' + fhCl(val) + '°c';
      li.insertBefore(span, input);
      }
  // Gallon to Liter
    else if($(this).attr('data-name') === "GL-LT"){
      const val = input.value;
      const span = li.querySelector('span');
      span.textContent = val + 'g= ' + glLt(val) + 'l';
      li.insertBefore(span, input);
      }
  // Liter to Gallon
    else if($(this).attr('data-name') === "LT-GL"){
      const val = input.value;
      const span = li.querySelector('span');
      span.textContent = val + 'l= ' + ltGl(val) + 'g';
      li.insertBefore(span, input);
      }
  // Pint to Liter
    else if($(this).attr('data-name') === "PT-LT"){
      const val = input.value;
      const span = li.querySelector('span');
      span.textContent = val + 'p= ' + ptLt(val) + 'l';
      li.insertBefore(span, input);
      }
  // Liter to Pint
    else if($(this).attr('data-name') === "LT-PT"){
      const val = input.value;
      const span = li.querySelector('span');
      span.textContent = val + 'l= ' + ltPt(val) + 'p';
      li.insertBefore(span, input);
      }

}); //  end conversions
