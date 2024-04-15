import {
  CheckMiddlewareOnDashboard,
  CheckMiddlewareForCustomer,
} from "./utility/MiddlewareHelper";

export async function middleware(req, res) {
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    return CheckMiddlewareOnDashboard(req);
  }
  if (req.nextUrl.pathname.startsWith("/cart")) {
    console.log("from cart");
    return CheckMiddlewareForCustomer(req);
  }
  if (req.nextUrl.pathname.startsWith("/checkout")) {
    console.log("from checkout");
    return CheckMiddlewareForCustomer(req);
  }
}
