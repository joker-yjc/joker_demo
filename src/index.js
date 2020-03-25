import _ from 'lodash';
import "./styles/index.css";
import jokerImg from "./images/joker.jpg"
function component() {
  import('./b.js')
  var element = document.createElement('div');
  document.body.style.background = `url(${jokerImg})`;
  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack!'], ' ');
  console.log(1234);
  
  return element;
}

document.body.appendChild(component());