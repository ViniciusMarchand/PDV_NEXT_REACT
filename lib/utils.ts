import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import Cookies from "js-cookie";
import { jwtDecode } from 'jwt-decode';
import { UserToken } from "@/global/Types";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const getCookie = (name: string) => {
  return Cookies.get(name);
}

const createCookie = (name: string, value: string, days?: number) => {
  if(days) {
    Cookies.set(name, value, { expires: days });
  } else {
    Cookies.set(name, value);
  }
}

const getAccessToken = () => {
  return getCookie('accessToken');
}

const getRefreshToken = () => {
  return getCookie('refreshToken');
}

const setAccessToken = (token: string) => {
  createCookie('accessToken', token);
}

const setRefreshToken = (token: string) => {
  createCookie('refreshToken', token);
}

const getUserInfo = (): UserToken | undefined => {
  const accessToken = getAccessToken();

  if(!accessToken) {
    return;
  }

  const tokenInfo: UserToken = jwtDecode(accessToken);
  
  return tokenInfo;
}

const clearCookies = () => {
  Cookies.remove('accessToken');
  Cookies.remove('refreshToken');
};

function delay(ms:number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


export {
  cn,
  getAccessToken,
  getRefreshToken,
  createCookie,
  setAccessToken,
  setRefreshToken,
  getUserInfo,
  clearCookies,
  delay
}
