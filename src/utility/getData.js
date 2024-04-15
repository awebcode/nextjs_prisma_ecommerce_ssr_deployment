"use server"
import { headers } from "next/headers";
// Assuming you're using process.env.URL to access the URL

let apiUrl;
if (process.env.NODE_ENV === 'production') {
    apiUrl = process.env.URL_PROD;
} else {
    apiUrl = process.env.URL;
}

// Now `apiUrl` will contain the appropriate URL based on the environment

// customer product
export const getProductClinet = async () => {
  const data = await fetch(`${apiUrl}/customer/product`, {
    cache: "no-cache",
  });
  const response = await data.json();
  return response;
};

export const getSingleProductClient = async (product_Id) => {
  const config = { method: "PATCH" };

  const data = await fetch(
    `${apiUrl}/customer/product?product_id=${product_Id}`,
    config
  );
  const response = await data.json();
  return response;
};

// for product ............................
export const getProduct = async () => {
  const headerlist = headers();
  const id = headerlist.get("id");
  const data = await fetch(`${apiUrl}/product?user_id=${id}`);
  return data.json();
};

export const getSingleProduct = async (product_Id) => {
  const headerlist = headers();
  const userInfo = headerlist.get("id");
  const config = { method: "PATCH" };
  const data = await fetch(
    `${apiUrl}/product?user_id=${userInfo}&product_id=${product_Id}`,
    config
  );
  return data.json();
};

// for cetagory....................
export const getCetagory = async () => {
  const headerlist = headers();
  const id = headerlist.get("id");
  const data = await fetch(`${apiUrl}/category?user_id=${id}`);
  return data.json();
};
export const getSingleCategory = async (category_id, user_id) => {
  const config = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
  };
  const data = await fetch(
    `${apiUrl}/category?user_id=${user_id}&category_id=${category_id}`,
    config
  );
  return data.json();
};

// .....................  every single request
export const header_info = async () => {
  const headerlist = headers();

  const user_id = headerlist.get("id");
  console.log(user_id, "user id form mid");
  return user_id;
};

// ................ customer information.......................

export const getSingelCustomer = async (user_id) => {
  const data = await fetch(
    `${apiUrl}/customer/users/login?user_id=${user_id}`
  );
  const response = await data.json();
  return response;
};
