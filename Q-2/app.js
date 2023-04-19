function elemCreator(elemType, callback) {
    const elem = document.createElement(elemType);
    elem.innerHTML="New Element";
    document.body.appendChild(elem);
    callback(elem);
  }

const callback = function(elem) {
    elem.style.backgroundColor = 'red';
  };
  
  elemCreator('div', callback);
  