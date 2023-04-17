import axios from "axios";

import {
  PostProductsRequestParams,
  PostProductsRequestResponse,
} from "../entities";

const postProducts = async (
  requestParams: PostProductsRequestParams
): Promise<{ data: PostProductsRequestResponse }> => {
  const endpoint = process.env.REACT_APP_POST_PRODUCTS_ENDPOINT as string;

  return axios.post(endpoint, {
    data: requestParams,
  });
};

const deleteProducts = async (): Promise<{
  data: PostProductsRequestResponse;
}> => {
  const endpoint = process.env.REACT_APP_POST_PRODUCTS_ENDPOINT as string;

  return axios.delete(endpoint);
};

const AxiosService = {
  postProducts,
  deleteProducts,
};

export default AxiosService;
