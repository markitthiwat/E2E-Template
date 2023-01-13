import { httpPost, httpPostWithToken, httpFormPostWithToken } from '../../helpers';
import { getApiAddressUrl, getMerchantApiAddressUrl } from '../helpers';

const API_PATH = '/path';

export async function callPostFunction(functionName, params) {
  const apiBaseUrl = getApiAddressUrl();
  return httpPost(`${apiBaseUrl}/${functionName}`, params);
}

export async function callPostFunctionWithToken(functionName, params, token) {
  const apiBaseUrl = getApiAddressUrl() + API_PATH;
  return httpPostWithToken(`${apiBaseUrl}/${functionName}`, params, token);
}

export async function callMerchantPostFunctionWithToken(functionName, params, token) {
  const apiBaseUrl = getMerchantApiAddressUrl() + API_PATH;
  return httpPostWithToken(`${apiBaseUrl}/${functionName}`, params, token);
}

export async function callPostFormFunctionWithToken(functionName, params, token) {
  const apiBaseUrl = getApiAddressUrl() + API_PATH;
  return httpFormPostWithToken(`${apiBaseUrl}/${functionName}`, params, token);
}
