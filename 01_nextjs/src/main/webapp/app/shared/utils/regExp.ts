const getRegExpKorean = () => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/

const getRegExpPassword = () =>
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,20}$/

const getRegExpEmail = () =>
  /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i

const getRegExpRemoveEmpty = () => /\\n|\\r\\n|\\n\\r|\\r/g

export {
  getRegExpKorean,
  getRegExpPassword,
  getRegExpEmail,
  getRegExpRemoveEmpty,
}
