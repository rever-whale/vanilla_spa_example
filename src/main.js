/**
 * 목표 - 찐찐한 프론트엔드 프레임워크
 * 1. 상태가 주입되면 HTML을 Output으로 뱉어주는 함수를 만든다.
 * 1-1. 전달 받은 HTML을 렌더링 해줍니다.
 * 2. 외부의 이벤트를 감지하고, 상태를 변화시킬 수 있는 장치를 만든다. 
 * 2-1. 이벤트 바인딩을 어디서 해줄 것인가? 바깥에 설정은 쉽다. 근데.. 컴포넌트 내부에서 이벤트를 바인해주고 싶다면???
 * 3. 변화된 상태를 1) 렌더링 함수에 다시 주입시켜서 기존 화면을 업데이트 해주는 장치를 만든다. 
 * 4. 3번을 자동화시킨다.
 */

import App from './components/App.js';
import JSFramework from './JSFramework.js';
import { useStore } from './store.js';

// init
const store = useStore();
const $app = document.querySelector('#app');
JSFramework($app, App, store);
