/**
 *
 * @version 1.0
 * @author [Dhruv Soni](dh554152@dal.ca)(Banner ID:-B00867642)
 */

//This method will find out the cart items associated with the loggedIn User
const user = require("../models/userModel");
const cartItems = async (req, res) => {
  user.findOne({ email: req.params.email }, (err, userInfo) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err,
      });
    }
    console.log("userInfo====", userInfo.cart.length);
    if (userInfo.cart.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "Your Cart is Empty" });
    }

    return res.status(200).json({ success: true, CartItems: userInfo.cart });
  });
};

//This method works as adding items into cart.

const addCart = async (req, res) => {
  //Finding through email address
  user.findOne({ email: req.body.email }, (err, userInfo) => {
    if (err) {
      res.status(200).json({ message: err });
    }

    let duplicate = false;
    console.log("userInfo====", userInfo);

    if (userInfo.cart.length == 0) {
      user.findOneAndUpdate(
        { email: req.body.email },
        {
          $push: {
            cart: {
              id: req.body.productID,
              Name: req.body.Name,
              Price: req.body.Price,
              Brands: req.body.Brands,
              Dose: req.body.Dose,
              ImageURL: req.body.Image,
              quantity: 1,
            },
          },
        },
        { new: true, upsert: true },
        (error, doc) => {
          if (error) {
            return res.status(400).json({ success: false, message: error });
          } else {
            return res.status(200).json({
              success: true,
              cart: doc,
              message: "Added to Cart Successfully",
            });
          }
        }
      );
    } else if (userInfo.cart.length > 0) {
      userInfo.cart.forEach((item) => {
        if (item.id == req.body.productID) {
          duplicate = true;
        }
      });

      if (duplicate) {
        user.findOneAndUpdate(
          //Finding Product with Email given in body in user model
          { email: req.body.email, "cart.id": req.body.productID },
          { $inc: { "cart.$.quantity": 1 } },

          { new: true, upsert: true, returnOriginal: false },
          (error, updatedValue) => {
            if (error) {
              return res.status(400).json({ success: false, message: error });
            } else {
              console.log("Updated Value: ", updatedValue.cart);
              return res.status(200).json({
                success: true,
                cart: updatedValue,
                message: "Added to Cart Successfully",
              });
            }
          }
        );
      } else {
        user.findOneAndUpdate(
          //Finding Product with Email given in body in user model
          { email: req.body.email },
          {
            $push: {
              cart: {
                id: req.body.productID,
                Name: req.body.Name,
                Price: req.body.Price,
                Brands: req.body.Brands,
                ImageURL: req.body.Image,
                Dose: req.body.Dose,
                quantity: 1,
              },
            },
          },
          { new: true, upsert: true },
          (error, doc) => {
            if (error) {
              return res.json({ success: false, message: error });
            } else {
              return res.status(200).json({
                success: true,
                cart: doc,
                message: "Added to Cart Successfully",
              });
            }
          }
        );
      }
    }
  });
};

//This method check items in cart and increase the quantity of that item in the cart
const updateCartItems = async (req, res) => {
  //Finding Product with Id given in Params in user model
  user.findOneAndUpdate(
    { "cart.id": req.params.productID },
    { $inc: { "cart.$.quantity": 1 } },

    { new: true, upsert: true, returnOriginal: false },

    (error, updatedValue) => {
      if (error) {
        return res.status(400).json({ success: false, message: error });
      } else {
        return res.status(200).json({ success: true, cart: updatedValue });
      }
    }
  );
};

//This method check items in cart and decrease the quantity of that item in the cart
const decreaseCartItems = async (req, res) => {
  //Finding Product with Id given in Params in user model
  console.log(req.params.productID);
  user.findOneAndUpdate(
    { "cart.id": req.params.productID },
    { $inc: { "cart.$.quantity": -1 } },

    { new: true, upsert: true, returnOriginal: false },

    (error, updatedValue) => {
      if (error) {
        return res.status(400).json({ success: false, message: error });
      } else {
        return res.status(200).json({ success: true, cart: updatedValue });
      }
    }
  );
};

//This method check items in cart and remove that particular product/item from the cart.

const removeCartItems = async (req, res) => {
  //Finding Product with Id given in Params in user model
  user.findOneAndUpdate(
    { "cart.id": req.params.productID },
    { $pull: { cart: { id: req.params.productID } } },

    { new: true },

    (error, updatedValue) => {
      console.log("updatedValue===++++++++++", updatedValue);
      if (error) {
        return res.status(400).json({ success: false, message: error });
      } else if (updatedValue.cart.length === 0) {
        console.log("Inside");
        return res
          .status(400)
          .json({ success: false, message: "Your Cart is Empty" });
      } else {
        return res.status(200).json({ success: true, CartItems: updatedValue });
      }
    }
  );
};

module.exports = {
  cartItems,
  addCart,
  updateCartItems,
  decreaseCartItems,
  removeCartItems,
};
