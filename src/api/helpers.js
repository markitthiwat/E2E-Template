import { use } from 'chai';
import fetch from 'node-fetch';

export async function httpGet(url) {
  return fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    }
  });
}

export async function httpGetWithToken(url, token) {
  return fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      ChannelCode: 'M',
      Authorization: 'Bearer ' + token,
    }
  });
} 

export async function httpPost(url, body) {
  const headers = {
      Accept: 'application/json',
      ChannelCode: 'M',
      'Content-Type': 'application/json',
  }
  
  return fetch(url, { method: 'POST', headers: headers, body: JSON.stringify(body) });
}

export async function httpPostWithToken(url, body, token) {
  const headers = {
      Accept: 'application/json',
      ChannelCode: 'M',
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
  }
  return fetch(url, { method: 'POST', headers: headers, body: JSON.stringify(body) });
}

export async function httpPut(url, body) {
  return fetch(url, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}

export async function httpDelete(url) {
  return fetch(url, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
    },
  });
}

export async function getResponseAndBody(apiFunctionCall) {
  const response = await apiFunctionCall;
  const responseBody = await response.json();
  if (!response.ok) {
    throw new Error(`response: ${JSON.stringify(responseBody)}`);
  }

  return {
    response,
    responseBody,
  };
}

export async function httpFormPostWithToken(url, body, token) {
  const headers = {
      Accept: '*/*',
      ChannelCode: 'M',
      Authorization: 'Bearer ' + token,
  };

  return fetch(url, { method: 'POST', headers: headers, body: body });
}