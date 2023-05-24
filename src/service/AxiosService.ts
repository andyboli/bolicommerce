import axios from "axios";
import proxy from "http-proxy-middleware";

import {
  PostProductsRequestParams,
  PostProductsRequestResponse,
} from "../entities";

const postProducts = async (
  requestParams: PostProductsRequestParams
): Promise<{ data: PostProductsRequestResponse }> => {
  const endpoint = process.env.REACT_APP_POST_PRODUCTS_ENDPOINT as string;

  return axios.post(
    endpoint,
    {
      data: requestParams,
    },
    { headers: { "Access-Control-Allow-Origin": "*" } }
  );
};

const AxiosService = {
  postProducts,
};

export default AxiosService;
