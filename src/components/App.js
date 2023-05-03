import { useStore } from '../store.js';
import EventButton from './EventButton.js';

export default function App (state) {
  const {name, age, address} = state;
  const store = useStore();

  function onClickButton () {
    store.setStore({
      name: 'jieun',
      age: 36,
      address: '등촌동 찐찐팰리스'
    });  
  }
  
  function onClickButton2 () {
    store.setStore({
      name: 'seonho',
      age: 36,
      address: '등촌동 찐찐팰리스'
    });
  }
  
  return `
    <div>
      <div>
        hello ${name}
        <br/>
        너는 ${age}야
        <br/>
        나는 네가 ${address}에 살고 있다는 사실을 알고 있다 후후후
      </div>
      ${EventButton('clickButton', '찌니 데이터로 변신', onClickButton)}
      ${EventButton('clickButton2', '선호 데이터로 변신', onClickButton2)}
    </div>
  `;
}
