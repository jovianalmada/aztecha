exports.getIndex = (req, res, next) => {
  //   Product.fetchAll((products) => {
  //     res.render("shop/index", {
  //       prods: products,
  //       pageTitle: "Shop",
  //       path: "/",
  //     });
  //   });
  res.render("site/index", {
    pageTitle: "Welcome to A-Z Techa Solutions!",
    path: "/",
  });
};

exports.getAbout = (req, res, next) => {
  res.render("site/about", {
    pageTitle: "About A-Z Techa Solutions!",
    path: "/about",
  });
};

exports.getServices = (req, res, next) => {
  res.render("site/services", {
    pageTitle: "Services from A-Z Techa Solutions!",
    path: "/services",
  });
};
