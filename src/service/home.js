import request from './request'

export const getNearByMarkets = () => {
  return request.get("/api/shop/hot-list");

}
