import axiosConfig from '../config/http';
import { APIS_ENDPOINTS } from '../config/SERVICE-CONSTANTS';

export const productBakery = async() => {
   const resp = await axiosConfig.get(APIS_ENDPOINTS.products.bakery);
   return resp
}
export const Dessert= async() => {
    const resp = await axiosConfig.get(APIS_ENDPOINTS.products.dessert);
    return resp
 }