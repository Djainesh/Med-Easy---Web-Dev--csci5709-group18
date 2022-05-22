/**
 *
 * @version 1.0
 * @author [Chandan Shukla](chandan.shukla@dal.ca)
 */

export const saveShippingInfo = (data) => {

    localStorage.setItem("shippingInfo", JSON.stringify(data));
  };

export const saveCheckoutAmount = (data) => {
  localStorage.setItem("checkoutAmount", JSON.stringify(data));
}