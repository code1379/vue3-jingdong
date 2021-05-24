import request from "./request";

export const getDetailById = id => {
  return request.get(`/api/shop/${id}`);
};


export const getProductsById = id => {
  return request.get(`/api/shop/${id}/products`)
}