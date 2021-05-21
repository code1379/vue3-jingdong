const DevURL =
  "https://www.fastmock.site/mock/5386707dae8536c1f61303c4fa5bf915/jingdong";
const ProdURL = ""
const isDev = process.env.NODE_ENV === "development"; 
const BASE_URL = isDev ? DevURL : ProdURL
const TIMEOUT = 5000

export {
  BASE_URL,
  TIMEOUT
}
