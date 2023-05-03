// utils
function deepCopy (any) {
  try {
    return JSON.parse(JSON.stringify(any));
  } catch (e) {
    console.error('deepCopy가 실패했습니다.');
    return any;
  }
}

export { deepCopy };
