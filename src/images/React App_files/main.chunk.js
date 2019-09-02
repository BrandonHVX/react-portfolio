(window["webpackJsonpbrandonsidebar"] = window["webpackJsonpbrandonsidebar"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".App {\n  text-align: center;\n}\n\n/* ---------------------------------------------------\n    SIDEBAR STYLE\n----------------------------------------------------- */\n\n.wrapper {\n  display: flex;\n  width: 100%;\n\n  perspective: 1500px;\n}\n\n.nav-pills .nav-link.active,\n.nav-pills .show > .nav-link {\n  color: #fff;\n  background-color: #00387d;\n}\n\n.nav-link {\n  color: #00387d;\n  text-decoration: none;\n  border: solid 1px #00387d;\n  background-color: transparent;\n  margin: 0.5rem;\n}\n\n#sidebar {\n  min-width: 250px;\n  max-width: 250px;\n  position: fixed;\n  overflow: hidden;\n  height: 100vh;\n  text-align: center;\n  font-size: 14px;\n  background: #00387d;\n  color: #fff;\n  overflow: \"scroll\";\n  transition: all 0.6s cubic-bezier(0.945, 0.02, 0.27, 0.665);\n  transform-origin: bottom left;\n}\n\n#sidebar.active {\n  margin-left: -250px;\n  transform: rotateY(100deg);\n}\n\n#sidebar .sidebar-header {\n  padding: 20px;\n  display: flex;\n  justify-content: center;\n  background: #00387d;\n}\n\n#sidebar ul.components {\n  padding: 20px 0;\n  border-bottom: 1px solid #47748b;\n}\n\n#sidebar ul p {\n  color: #fff;\n  padding: 10px;\n}\n\n#sidebar ul li a {\n  padding: 10px;\n  font-size: 1.1em;\n  display: block;\n}\n#sidebar ul li a:hover {\n  color: #7386d5;\n  background: #fff;\n}\n\n#sidebar ul li.active > a,\na[aria-expanded=\"true\"] {\n  color: #fff;\n  background: #6d7fcc;\n}\n\na[data-toggle=\"collapse\"] {\n  position: relative;\n}\n\n.dropdown-toggle::after {\n  display: block;\n  position: absolute;\n  top: 50%;\n  right: 20px;\n  transform: translateY(-50%);\n}\n\nul ul a {\n  font-size: 0.9em !important;\n  padding-left: 30px !important;\n  background: #6d7fcc;\n}\n\nul.CTAs {\n  padding: 20px;\n}\n\nul.CTAs a {\n  text-align: center;\n  font-size: 0.9em !important;\n  display: block;\n  border-radius: 5px;\n  margin-bottom: 5px;\n}\n\na.download {\n  background: #fff;\n  color: #7386d5;\n}\n\na.article,\na.article:hover {\n  background: #6d7fcc !important;\n  color: #fff !important;\n}\n\n/* ---------------------------------------------------\n    CONTENT STYLE\n----------------------------------------------------- */\n#content {\n  width: 100%;\n  padding: 20px;\n  min-height: 100vh;\n  transition: all 0.3s;\n}\n\n#sidebarCollapse {\n  width: 40px;\n  height: 40px;\n  background: #f5f5f5;\n  cursor: pointer;\n}\n\n#sidebarCollapse span {\n  width: 80%;\n  height: 2px;\n  margin: 0 auto;\n  display: block;\n  background: #555;\n  transition: all 0.8s cubic-bezier(0.81, -0.33, 0.345, 1.375);\n  transition-delay: 0.2s;\n}\n\n#sidebarCollapse span:first-of-type {\n  transform: rotate(45deg) translate(2px, 2px);\n}\n#sidebarCollapse span:nth-of-type(2) {\n  opacity: 0;\n}\n#sidebarCollapse span:last-of-type {\n  transform: rotate(-45deg) translate(1px, -1px);\n}\n\n#sidebarCollapse.active span {\n  transform: none;\n  opacity: 1;\n  margin: 5px auto;\n}\n\n/* ---------------------------------------------------\n    MEDIAQUERIES\n----------------------------------------------------- */\n@media (max-width: 767px) {\n  #sidebar {\n    margin-left: -250px;\n    transform: rotateY(90deg);\n  }\n  #sidebar.active {\n    margin-left: 0;\n    transform: none;\n  }\n  #sidebarCollapse span:first-of-type,\n  #sidebarCollapse span:nth-of-type(2),\n  #sidebarCollapse span:last-of-type {\n    transform: none;\n    opacity: 1;\n    margin: 5px auto;\n  }\n  #sidebarCollapse.active span {\n    margin: 0 auto;\n  }\n  #sidebarCollapse.active span:first-of-type {\n    transform: rotate(45deg) translate(2px, 2px);\n  }\n  #sidebarCollapse.active span:nth-of-type(2) {\n    opacity: 0;\n  }\n  #sidebarCollapse.active span:last-of-type {\n    transform: rotate(-45deg) translate(1px, -1px);\n  }\n}\n\n@media (min-width: 768px) {\n  .navbar {\n    display: none;\n  }\n}\n\n.profile {\n  min-height: 355px;\n  display: inline-block;\n}\nfigcaption.ratings {\n  margin-top: 20px;\n}\nfigcaption.ratings a {\n  color: #f1c40f;\n  font-size: 11px;\n}\nfigcaption.ratings a:hover {\n  color: #f39c12;\n  text-decoration: none;\n}\n.divider {\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n}\n.emphasis {\n  border-top: 4px solid transparent;\n}\n.emphasis:hover {\n  border-top: 4px solid #1abc9c;\n}\n.emphasis h2 {\n  margin-bottom: 0;\n}\nspan.tags {\n  background: #1abc9c;\n  border-radius: 2px;\n  color: #f5f5f5;\n  font-weight: bold;\n  padding: 2px 4px;\n}\n.dropdown-menu {\n  background-color: #34495e;\n  box-shadow: none;\n  -webkit-box-shadow: none;\n  width: 250px;\n  margin-left: -125px;\n  left: 50%;\n}\n.dropdown-menu .divider {\n  background: none;\n}\n.dropdown-menu > li > a {\n  color: #f5f5f5;\n}\n.dropup .dropdown-menu {\n  margin-bottom: 10px;\n}\n.dropup .dropdown-menu:before {\n  content: \"\";\n  border-top: 10px solid #34495e;\n  border-right: 10px solid transparent;\n  border-left: 10px solid transparent;\n  position: absolute;\n  bottom: -10px;\n  left: 50%;\n  margin-left: -10px;\n  z-index: 10;\n}\n\n.header {\n  height: 380px;\n  width: 100%;\n  background-color: #f39c12;\n  position: absolute;\n  z-index: -10;\n}\n\n.main {\n  position: absolute;\n\n  top: 30vh;\n}\n\n/* Tabs*/\nsection {\n  padding: 60px 0;\n}\n\nsection .section-title {\n  text-align: center;\n  color: #007b5e;\n  margin-bottom: 50px;\n  text-transform: uppercase;\n}\n#tabs {\n  background: #007b5e;\n  color: #eee;\n}\n#tabs h6.section-title {\n  color: #eee;\n}\n\n#tabs .nav-tabs .nav-item.show .nav-link,\n.nav-tabs .nav-link.active {\n  color: #f3f3f3;\n  background-color: transparent;\n  border-color: transparent transparent #f3f3f3;\n  border-bottom: 4px solid !important;\n  font-size: 20px;\n  font-weight: bold;\n}\n#tabs .nav-tabs .nav-link {\n  border: 1px solid transparent;\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n  color: #eee;\n  font-size: 20px;\n}\n\n/* //////// IMAGE 6 ///////// */\n\n.box13 {\n  position: relative;\n  transition: all 0.2s ease-out 0s;\n}\n.box13 .box-content,\n.box13:after {\n  position: absolute;\n\n  left: 20px;\n  right: 20px;\n}\n.box13:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  background: #463f9f;\n  top: 0px;\n  left: 1px;\n  right: 1px;\n  height: 10rem;\n  bottom: 0px;\n  opacity: 0;\n  transform: rotate3d(-1, 1, 0, 100deg);\n  transition: all 0.4s ease-in-out 0s;\n}\n.box13:hover:after {\n  opacity: 0.9;\n  transform: rotate3d(0, 0, 0, 0deg);\n}\n.box13 img {\n  width: 100%;\n\n  height: auto;\n}\n.box13 .box-content {\n  top: 45%;\n  opacity: 0;\n  z-index: 1;\n  transform: translate(10%, -30%);\n  transition: all 0.2s ease-out 0s;\n}\n.box13:hover .box-content {\n  opacity: 1;\n  transform: translate(0, -50%);\n  transition-delay: 0.2s;\n}\n.box13 .title {\n  display: block;\n  font-size: 22px;\n  font-weight: 700;\n  color: #39b54a;\n  margin: 0 0 10px;\n}\n.box13 .post {\n  display: block;\n  font-size: 15px;\n  color: #f7f7b9;\n  margin-bottom: 20px;\n}\n.box13 .social {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n.box13 .social li {\n  display: inline-block;\n}\n.box13 .social li a {\n  display: block;\n  width: 35px;\n  height: 35px;\n  background: #f7f7b9;\n  border-radius: 50%;\n  font-size: 17px;\n  color: #1b1462;\n  line-height: 35px;\n  margin-right: 5px;\n  transition: all 0.4s ease-in-out 0s;\n}\n.box14 .icon li,\n.box14 .post {\n  display: inline-block;\n}\n.box13 .social li a:hover {\n  color: #f7f7b9;\n  background: #39b54a;\n}\n@media only screen and (max-width: 990px) {\n  .box13 {\n    margin-bottom: 30px;\n  }\n\n  .box13:after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    background: #463f9f;\n    top: 0px;\n    left: 1px;\n    right: 1px;\n    height: 15.5rem;\n    bottom: 0px;\n    opacity: 0;\n    transform: rotate3d(-1, 1, 0, 100deg);\n    transition: all 0.4s ease-in-out 0s;\n  }\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/nav.css":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/nav.css ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".round-img {\n  border-radius: 220px;\n  width: 130px;\n  display: flex;\n  justify-items: center;\n}\n/* /////////////////////////////////// */\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  color: #292929;\n  font-weight: bold;\n}\na.theme-link {\n  color: #292929;\n  text-decoration: underline;\n  text-decoration-color: rgba(41, 41, 41, 0.3);\n}\na.theme-link:hover {\n  color: #54b689;\n  text-decoration-color: rgba(84, 182, 137, 0.8);\n}\n.single-col-max-width {\n  max-width: 820px;\n}\nhr {\n  border-color: rgba(0, 0, 0, 0.08);\n}\n.btn {\n  font-weight: bold;\n  padding: 0.375rem 1rem;\n  height: 2.5rem;\n  transition: all 0.4s ease-in-out;\n  font-size: 1rem;\n}\n@media (prefers-reduced-motion: reduce) {\n  .btn {\n    transition: none;\n  }\n}\n.btn:focus,\n.btn.focus {\n  box-shadow: none !important;\n}\n.btn-primary {\n  color: #fff;\n}\n.form-control {\n  padding-top: 0.875rem;\n  padding-bottom: 0.875rem;\n  height: 2.5rem;\n  border-color: #c2c2c2;\n}\n.form-control::-webkit-input-placeholder {\n  color: #8f8f8f;\n}\n.form-control:-moz-placeholder {\n  color: #8f8f8f;\n}\n.form-control::-moz-placeholder {\n  color: #8f8f8f;\n}\n.form-control:-ms-input-placeholder {\n  color: #8f8f8f;\n}\n.error {\n  color: #d9603c;\n}\n.form-group label.error {\n  font-size: 0.875rem;\n  padding: 0.5rem 0;\n}\n.form-group .btn {\n  line-height: 1;\n}\n.custom-select {\n  border-color: #c2c2c2;\n  height: 2.5rem;\n  color: #8f8f8f;\n}\n.theme-bg-light {\n  background: #fafafa !important;\n}\n.theme-bg-dark {\n  background: #223142 !important;\n}\n.table-bordered th,\n.table-bordered td {\n  border-color: rgba(0, 0, 0, 0.08);\n}\n.header {\n  position: fixed;\n  left: 0;\n  top: 0;\n  height: 100vh;\n  width: 280px;\n  background: #54b689;\n  color: #fff;\n  overflow-y: auto;\n  scrollbar-color: rgba(0, 0, 0, 0.2) #54b689;\n  scrollbar-width: thin;\n}\n.header::-webkit-scrollbar {\n  width: 6px;\n  background-color: #54b689;\n}\n.header::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 0, 0.2);\n  border-radius: 0.5rem;\n}\n.header .blog-name {\n  font-weight: bold;\n  font-size: 1.5rem;\n  color: #fff;\n}\n.header .blog-name a {\n  color: #fff;\n}\n.header .blog-name a:hover {\n  text-decoration: none;\n}\n.header .btn-primary {\n  background: rgba(0, 0, 0, 0.3);\n  border-color: transparent;\n  font-size: 1rem;\n}\n.header .btn-primary:hover {\n  background: rgba(0, 0, 0, 0.4);\n  border-color: transparent;\n}\n.header .navbar {\n  padding: 1.5rem 1rem;\n}\n.header .navbar-dark .navbar-toggler {\n  border-radius: 2px;\n  -webkit-opacity: 0.8;\n  -moz-opacity: 0.8;\n  opacity: 0.8;\n  border: 1px solid rgba(255, 255, 255, 0.8);\n  padding: 0.25rem 0.6rem;\n}\n.header .navbar-dark .navbar-toggler:hover {\n  -webkit-opacity: 1;\n  -moz-opacity: 1;\n  opacity: 1;\n}\n.header .navbar-dark .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(256,256,256, 1)' stroke-width='3' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\");\n}\n.header .nav-item {\n  font-weight: bold;\n}\n.header .nav-item.active .nav-link {\n  color: rgba(0, 0, 0, 0.5);\n}\n.header .nav-item.active .nav-link:hover {\n  text-decoration: none;\n}\n.header .nav-item .nav-link {\n  color: rgba(255, 255, 255, 0.8);\n}\n.header .nav-item .nav-link:hover {\n  color: rgba(0, 0, 0, 0.6);\n}\n.header .nav-item .nav-link[aria-expanded=\"true\"] {\n  color: rgba(0, 0, 0, 0.5);\n}\n.header .nav-item .dropdown-menu {\n  position: static;\n  background: #48a97c;\n  border: none;\n  border-radius: 0;\n  padding: 0;\n  margin: 0;\n}\n.header .nav-item .dropdown-menu .dropdown-item {\n  color: #fff;\n  padding: 0.5rem;\n  font-size: 0.875rem;\n  padding-left: 2.25rem;\n  font-weight: bold;\n}\n.header .nav-item .dropdown-menu .dropdown-item:hover,\n.header .nav-item .dropdown-menu .dropdown-item:active,\n.header .nav-item .dropdown-menu .dropdown-item:focus,\n.header .nav-item .dropdown-menu .dropdown-item.active {\n  background: #40976f;\n}\n.profile-section .profile-image {\n  max-width: 160px;\n}\n.profile-section .bio {\n  font-size: 0.875rem;\n}\n.profile-section .bio a {\n  color: #fff;\n  text-decoration: underline;\n}\n.profile-section .bio a:hover {\n  color: rgba(0, 0, 0, 0.6);\n}\n.social-list a {\n  width: 32px;\n  height: 32px;\n  padding-top: 5px;\n  display: inline-block;\n  text-align: center;\n  border-radius: 50%;\n  transition: all 0.4s ease-in-out;\n  background-color: #fff;\n}\n@media (prefers-reduced-motion: reduce) {\n  .social-list a {\n    transition: none;\n  }\n}\n.social-list a:hover {\n  color: #40976f;\n  background-color: rgba(255, 255, 255, 0.8);\n}\n.main-wrapper {\n  margin-left: 280px;\n  background: #fff;\n}\n.main-wrapper .container-single-col {\n  max-width: 820px;\n}\n.cta-section .heading {\n  font-size: 2rem;\n  font-weight: bold;\n}\n.promo-section {\n  margin-bottom: 40px;\n}\n.promo-section .promo-image {\n  max-width: 320px;\n}\n.promo-section .promo-section-inner {\n  background: #54b689;\n}\n.footer.theme-bg-light {\n  color: #828282;\n}\n.footer.theme-bg-light a {\n  color: #828282;\n}\n.footer.theme-bg-light a:hover {\n  color: #767575;\n}\n.footer.theme-bg-dark {\n  color: rgba(255, 255, 255, 0.7);\n}\n.footer.theme-bg-dark a {\n  color: rgba(255, 255, 255, 0.7);\n}\n.footer.theme-bg-dark a:hover {\n  color: rgba(255, 255, 255, 0.8);\n}\n.dark-mode-toggle .toggle-name {\n  color: #fff;\n  font-size: 0.875rem;\n}\n.dark-mode-toggle .toggle {\n  display: none;\n}\n.dark-mode-toggle .toggle + .toggle-btn {\n  outline: 0;\n  display: block;\n  width: 70px;\n  height: 30px;\n  position: relative;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  padding: 2px;\n  transition: all 0.2s ease-in-out;\n  border: 3px solid rgba(255, 255, 255, 0.4);\n  border-radius: 16px;\n}\n@media (prefers-reduced-motion: reduce) {\n  .dark-mode-toggle .toggle + .toggle-btn {\n    transition: none;\n  }\n}\n.dark-mode-toggle .toggle + .toggle-btn::selection {\n  background: none;\n}\n.dark-mode-toggle .toggle + .toggle-btn:after,\n.dark-mode-toggle .toggle + .toggle-btn:before {\n  position: relative;\n  display: block;\n  content: \"\";\n  width: 50%;\n  height: 100%;\n}\n.dark-mode-toggle .toggle + .toggle-btn:after {\n  left: 0;\n  transition: all 0.2s ease-in-out;\n  background: rgba(255, 255, 255, 0.4);\n  content: \"\";\n  border-radius: 16px;\n}\n@media (prefers-reduced-motion: reduce) {\n  .dark-mode-toggle .toggle + .toggle-btn:after {\n    transition: none;\n  }\n}\n.dark-mode-toggle .toggle + .toggle-btn:before {\n  display: none;\n}\n.dark-mode-toggle .toggle:checked + .toggle-btn {\n  border: 4px solid rgba(255, 255, 255, 0.9);\n  border: 3px solid #54b689;\n  background: rgba(0, 0, 0, 0.2);\n}\n.dark-mode-toggle .toggle:checked + .toggle-btn:after {\n  left: 50%;\n  background: rgba(255, 255, 255, 0.9);\n  background: #54b689;\n}\n.section-title {\n  font-size: 2rem;\n  position: relative;\n  padding-left: 1.5rem;\n}\n.section-title:before {\n  content: \"\";\n  display: inline-block;\n  width: 5px;\n  height: 100%;\n  background: #54b689;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.profile-teaser .name {\n  font-size: 3rem;\n}\n.profile-teaser .profile-image {\n  max-width: 400px;\n}\n.profile-teaser .tagline {\n  font-size: 1.5rem;\n  font-weight: 300;\n}\n.overview-section .item {\n  margin-bottom: 2rem;\n}\n.overview-section .item-desc {\n  color: #4f4f4f;\n  font-size: 0.875rem;\n}\n.overview-section .item-icon {\n  font-size: 1.875rem;\n  color: #54b689;\n}\n.overview-section .item-icon .fa-angular {\n  color: #ca3327;\n}\n.overview-section .item-icon .fa-js-square {\n  color: #f1de4f;\n}\n.overview-section .item-icon .fa-react {\n  color: #62d4fa;\n}\n.overview-section .item-icon .fa-vuejs {\n  color: #64b687;\n}\n.overview-section .item-icon .nodejs {\n  color: #55ac63;\n}\n.overview-section .item-icon .fa-python {\n  color: #456e9c;\n}\n.overview-section .item-icon .fa-php {\n  color: #777baf;\n}\n.overview-section .item-icon .fa-java {\n  color: #2e68ab;\n}\n.overview-section .item-icon .fa-html5,\n.overview-section .item-icon .fa-html5-alt {\n  color: #de6e3c;\n}\n.overview-section .item-icon .fa-css3,\n.overview-section .item-icon .fa-css3-alt {\n  color: #53a7dc;\n}\n.overview-section .item-icon .fa-sass {\n  color: #bf6b97;\n}\n.overview-section .item-icon .fa-less {\n  color: #324b7c;\n}\n.overview-section .item-icon .fa-gulp {\n  color: #c9514e;\n}\n.overview-section .item-icon .fa-grunt {\n  color: #efac42;\n}\n.overview-section .item-icon .fa-npm {\n  color: #bb443e;\n}\n.overview-section .item-title {\n  font-size: 1rem;\n}\n.testimonial-carousel .item {\n  padding: 1.5rem;\n  padding-left: 3rem;\n  border: 1px solid rgba(0, 0, 0, 0.025);\n  background: #fafafa;\n  height: 100%;\n  position: relative;\n}\n.testimonial-carousel .item:before {\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 40px 40px 0 0;\n  border-color: #54b689 transparent transparent transparent;\n  -webkit-transform: rotate(360deg);\n}\n.testimonial-carousel .source-profile img {\n  max-width: 60px;\n}\n.testimonial-carousel .fa-quote-left {\n  position: absolute;\n  left: 0.35rem;\n  top: 0.3rem;\n  color: #fff;\n  font-size: 0.75rem;\n}\n.testimonial-carousel .source-holder {\n  position: relative;\n  padding-left: 76px;\n  height: 60px;\n}\n.testimonial-carousel .source-holder .source-profile {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.testimonial-carousel .source-holder .meta {\n  padding-top: 0.5rem;\n}\n.owl-theme .owl-dots .owl-dot.active span,\n.owl-theme .owl-dots .owl-dot:hover span {\n  background: #292929;\n}\n.owl-theme .owl-nav.disabled + .owl-dots {\n  margin-top: 1rem;\n}\n\n.project-card {\n  border-radius: 0;\n\n  border: 1px solid rgba(0, 0, 0, 0.025);\n  position: relative;\n\n  z-index: 0;\n}\n.project-card:hover .link-mask {\n  visibility: visible;\n  background: #00387dee;\n}\n\n.project-card:hover .link-mask-text {\n  display: block;\n}\n.project-card .card-img {\n  border-radius: 0;\n}\n.project-card .card-title {\n  font-size: 1.125rem;\n}\n.project-card .card-text {\n  font-size: 0.875rem;\n}\n.project-card .card-img-holder {\n  margin-top: 0px;\n  overflow: hidden;\n  vertical-align: bottom;\n}\n.project-card .link-mask {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  visibility: hidden;\n  transition: all 0.4s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .project-card .link-mask {\n    transition: none;\n  }\n}\n.project-card .link-mask .link-mask-link {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n.project-card .link-mask-text {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  vertical-align: middle;\n  color: #fff;\n  display: none;\n}\n.project-card .link-mask-text .btn {\n  top: 50%;\n  margin-top: -20px;\n  position: relative;\n}\n.blog-post-card {\n  background: #fafafa;\n  border: 1px solid rgba(0, 0, 0, 0.025);\n  height: 100%;\n  border-radius: 0;\n}\n.blog-post-card .card-title {\n  font-size: 1.125rem;\n}\n.blog-post-card .card-text,\n.blog-post-card .more-link {\n  font-size: 0.875rem;\n}\n.blog-post-card .card-footer {\n  border-top: none;\n  background: none;\n  padding-top: 0;\n}\n.filters {\n  list-style: none;\n  font-size: 0.875rem;\n}\n.filters .type {\n  display: inline-block;\n  padding: 0.275rem 0.25rem;\n  cursor: pointer;\n  margin-right: 2rem;\n  color: #8f8f8f;\n  font-weight: bold;\n}\n.filters .type:last-child {\n  margin-right: 0;\n}\n.filters .type.active {\n  border-top: 2px solid #54b689;\n  color: #54b689;\n  font-weight: bold;\n}\n.filters .type.active:hover {\n  border-top: 2px solid #54b689;\n}\n.filters .type:hover {\n  color: #292929;\n}\n.project-meta {\n  border: 1px solid rgba(0, 0, 0, 0.025);\n  font-size: 0.875rem;\n}\n.project-meta .client-name {\n  font-size: 1.5rem;\n}\n.project-meta .subheading {\n  font-size: 1rem;\n}\n.project-meta .client-meta {\n  font-size: 1rem;\n}\n.project-meta .client-meta .svg-inline--fa {\n  color: #4f4f4f;\n}\n.metric .inner {\n  border: 1px solid rgba(0, 0, 0, 0.025);\n  height: 100%;\n}\n.metric-desc {\n  font-size: 0.875rem;\n  color: #8f8f8f;\n}\n.metric-name {\n  color: #54b689;\n  font-weight: bold;\n}\n.metric-data {\n  font-weight: bold;\n  font-size: 2rem;\n}\n.metric-data .unit {\n  font-size: 1rem;\n  color: #8f8f8f;\n}\n.client-quote {\n  padding: 1.5rem;\n  padding-left: 3rem;\n  border: 1px solid rgba(0, 0, 0, 0.025);\n  background: #fafafa;\n  height: 100%;\n  position: relative;\n}\n.client-quote:before {\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 40px 40px 0 0;\n  border-color: #54b689 transparent transparent transparent;\n  -webkit-transform: rotate(360deg);\n}\n.client-quote .source-profile img {\n  max-width: 60px;\n}\n.client-quote .fa-quote-left {\n  position: absolute;\n  left: 0.35rem;\n  top: 0.3rem;\n  color: #fff;\n  font-size: 0.75rem;\n}\n.client-quote .source-holder {\n  position: relative;\n  padding-left: 76px;\n  height: 60px;\n}\n.client-quote .source-holder .source-profile {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.client-quote .source-holder .meta {\n  padding-top: 0.5rem;\n}\n.pricing-table .pricing-package-title {\n  font-size: 1rem;\n  color: #54b689;\n  background: #fafafa;\n  text-align: center;\n  padding: 1rem;\n}\n.pricing-table .price-number {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n.pricing-table .pricing-desc-row {\n  vertical-align: inherit;\n}\n.pricing-table tbody th {\n  background: #fafafa;\n  padding: 1rem;\n  width: 30%;\n  font-size: 0.875rem;\n}\n.pricing-table tbody td {\n  padding: 1rem;\n  width: 23.3333333%;\n  text-align: center;\n  font-size: 0.875rem;\n}\n.pricing-table tbody td .pricing-package-desc {\n  font-size: 0.875rem;\n  line-height: 1;\n}\n.pricing-table .pricing-desc-row td {\n  text-align: left;\n  line-height: 1.4;\n}\n.pricing-table tfoot td {\n  padding: 1rem;\n  text-align: center;\n}\n.pricing-table .btn {\n  height: inherit;\n}\n.pricing-tab {\n  display: block;\n  text-align: center;\n  padding: 0.5rem;\n  width: 100%;\n  border-radius: 4px;\n  font-weight: bold;\n  background: #e1e0e0;\n  color: #4f4f4f;\n}\n.pricing-tab:hover {\n  text-decoration: none;\n  color: #4f4f4f;\n}\n.pricing-tab.active {\n  background: #54b689;\n  color: #fff;\n}\n.faq-accordion .card-toggle {\n  color: #4f4f4f;\n  text-decoration: none;\n  display: block;\n}\n.faq-accordion .card-toggle:hover {\n  color: #292929;\n}\n.faq-accordion .card-title {\n  position: relative;\n  padding-right: 2rem;\n  font-size: 1rem;\n}\n.faq-accordion .card-title .svg-inline--fa {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.faq-accordion .card-body {\n  font-size: 0.875rem;\n}\n.resume-wrapper {\n  border: 1px solid rgba(0, 0, 0, 0.025);\n}\n.resume-section-heading {\n  position: relative;\n  padding-left: 1rem;\n  font-size: 1.125rem;\n  letter-spacing: 0.15rem;\n  color: #54b689;\n}\n.resume-section-heading:before {\n  content: \"\";\n  display: inline-block;\n  width: 5px;\n  height: 100%;\n  background: #54b689;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.resume-name {\n  font-size: 2.75rem;\n  font-weight: 900;\n  letter-spacing: 0.4rem;\n  color: #54b689;\n}\n.resume-tagline {\n  font-size: 1.25rem;\n  font-weight: 300;\n}\n.resume-contact {\n  border-left: 1px solid rgba(0, 0, 0, 0.08);\n  font-size: 0.75rem;\n}\na.resume-link {\n  color: #4f4f4f;\n}\na.resume-link:hover {\n  color: #54b689;\n}\n.resume-profile-image {\n  max-width: 120px;\n}\n.resume-intro {\n  font-size: 0.875rem;\n}\n.resume-main .item-title {\n  font-size: 1rem;\n}\n.resume-main .item-meta {\n  font-size: 0.75rem;\n}\n.resume-main .item-content {\n  font-size: 0.875rem;\n}\n.resume-aside {\n  border-left: 1px solid rgba(0, 0, 0, 0.08);\n}\n.resume-aside .item {\n  font-size: 0.875rem;\n}\n.resume-aside .item-title {\n  font-size: 1rem;\n}\n.resume-education-list,\n.resume-awards-list {\n  font-size: 0.875rem;\n}\n.resume-degree-time-org,\n.resume-degree-time {\n  font-size: 0.75rem;\n}\n.resume-lang-list,\n.resume-interests-list {\n  font-size: 0.875rem;\n}\n.resume-social-list {\n  font-size: 0.75rem;\n}\n.blog-list .item .title {\n  font-size: 1.275rem;\n}\n.blog-list .item .title a {\n  color: #292929;\n}\n.blog-list .item .title a:hover {\n  color: #292929;\n}\n.blog-list .item .post-thumb {\n  max-width: 110px;\n  border-radius: 2px;\n}\n.blog-list .item .intro {\n  font-size: 0.875rem;\n}\n.blog-list .item .more-link {\n  font-size: 0.8125rem;\n}\n.meta {\n  color: #8f8f8f;\n  font-size: 0.8125rem;\n}\n.meta span {\n  display: inline-block;\n}\n.meta span a {\n  color: #8f8f8f;\n}\n.meta span a:hover {\n  color: #4f4f4f;\n}\n.meta span:after {\n  content: \"\";\n  display: inline-block;\n  width: 3px;\n  height: 3px;\n  border-radius: 50%;\n  background: #8f8f8f;\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n  position: relative;\n  top: -3px;\n}\n.meta span:last-child:after {\n  display: none;\n}\n.blog-nav .nav-link {\n  background: #54b689;\n  color: #fff;\n  font-size: 1rem;\n  padding: 1rem;\n  font-weight: bold;\n  position: relative;\n}\n.blog-nav .nav-link:hover {\n  background: #40976f;\n}\n.blog-nav .nav-link-prev {\n  border-right: 1px solid #317355;\n}\n.blog-nav .arrow-prev {\n  position: absolute;\n  left: 1rem;\n  top: 1.25rem;\n  color: #fff;\n}\n.blog-nav .arrow-next {\n  position: absolute;\n  right: 1rem;\n  top: 1.25rem;\n  color: #fff;\n}\n.blog-post .title {\n  font-weight: bold;\n  font-size: 2rem;\n}\n.blog-post .blog-post-body p,\n.blog-post .blog-post-body li {\n  font-size: 1.125rem;\n  line-height: 1.6;\n}\n.blog-post .blog-post-body h1 {\n  font-size: 2.125rem;\n}\n.blog-post .blog-post-body h2 {\n  font-size: 2rem;\n}\n.blog-post .blog-post-body h3 {\n  font-size: 1.75rem;\n}\n.blog-post .blog-post-body h4 {\n  font-size: 1.5rem;\n}\n.blog-post .blog-post-body h5 {\n  font-size: 1.25rem;\n}\n.blog-post .blog-post-body h6 {\n  font-size: 1.125rem;\n}\n.blog-post .image-caption {\n  color: #8f8f8f;\n  font-size: 0.875rem;\n}\n.blog-post .image-caption a {\n  color: #8f8f8f;\n  text-decoration: underline;\n}\n.blog-post .image-caption a:hover {\n  color: #4f4f4f;\n}\n.blog-post .blockquote {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  border-left: 2px solid #292929;\n  font-size: 1.5rem;\n}\n.blog-post .blockquote p {\n  font-size: 1.5rem;\n}\n@media (min-width: 768px) {\n  .theme-btn-cta {\n    width: inherit;\n    display: inline-block;\n  }\n  .cta-section .form-inline .form-control {\n    width: 360px;\n  }\n  .project-thumb {\n    max-width: 200px;\n  }\n  .pricing-table td,\n  .pricing-table th {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 992px) {\n  .profile-teaser .profile-image {\n    max-width: 250px;\n  }\n  .project-thumb {\n    max-width: 200px;\n  }\n}\n@media (min-width: 1000px) {\n  .profile-teaser .profile-image {\n    max-width: 400px;\n  }\n  .project-thumb {\n    max-width: 400px;\n  }\n  .row {\n    min-width: 300px;\n  }\n}\n@media (max-width: 991.98px) {\n  .header {\n    position: static;\n    width: inherit;\n    height: auto;\n  }\n  .header .blog-name {\n    width: 100%;\n    position: absolute;\n    left: 0;\n    top: 1.2rem;\n  }\n  .header .btn-primary {\n    width: 100%;\n  }\n  .header .navbar {\n    padding: 1rem;\n  }\n  .main-wrapper {\n    margin-left: 0;\n  }\n  .resume-aside {\n    border-left: 0;\n  }\n}\n@media (max-width: 767.98px) {\n  .signup-form .form-group {\n    width: 100%;\n    margin-bottom: 0.5rem;\n  }\n  .signup-form .form-control {\n    width: 100%;\n  }\n  .signup-form .btn-primary {\n    width: 100%;\n  }\n  .profile-teaser .profile-image {\n    max-width: 100%;\n  }\n  .header .nav-item .dropdown-menu .dropdown-item {\n    padding-left: 1.875rem;\n  }\n  .resume-contact {\n    border-left: 0;\n  }\n  .mobile-is-hidden {\n    display: none;\n  }\n}\n@media (max-width: 575.98px) {\n  .header .nav-item .dropdown-menu .dropdown-item {\n    padding-left: 1.875rem;\n  }\n  .link-mask {\n    display: none !important;\n  }\n  .mobile-is-hidden {\n    display: none;\n  }\n}\nbody.dark-mode {\n  background: #151e29;\n}\nbody.dark-mode .theme-bg-light {\n  background: #151e29 !important;\n}\nbody.dark-mode h1,\nbody.dark-mode h2,\nbody.dark-mode h3,\nbody.dark-mode h4,\nbody.dark-mode h5,\nbody.dark-mode h6 {\n  color: rgba(255, 255, 255, 0.95);\n}\nbody.dark-mode hr {\n  border-color: rgba(255, 255, 255, 0.08);\n}\nbody.dark-mode .meta {\n  color: rgba(255, 255, 255, 0.4);\n}\nbody.dark-mode .blockquote-footer {\n  color: rgba(255, 255, 255, 0.4);\n}\nbody.dark-mode .text-muted {\n  color: rgba(255, 255, 255, 0.4) !important;\n}\nbody.dark-mode .copyright {\n  color: rgba(255, 255, 255, 0.4);\n}\nbody.dark-mode a.theme-link {\n  color: rgba(255, 255, 255, 0.95);\n  text-decoration-color: rgba(255, 255, 255, 0.4);\n}\nbody.dark-mode a.theme-link:hover {\n  color: #54b689;\n  text-decoration-color: #54b689;\n}\nbody.dark-mode .btn-secondary {\n  background: #2f435c;\n  border-color: #2f435c;\n}\nbody.dark-mode .btn-secondary:hover {\n  background: #384f6c;\n  border-color: #384f6c;\n}\nbody.dark-mode .table {\n  color: rgba(255, 255, 255, 0.7);\n}\nbody.dark-mode .table td,\nbody.dark-mode .table th {\n  border-color: rgba(255, 255, 255, 0.05);\n}\nbody.dark-mode .table thead th {\n  border-color: rgba(255, 255, 255, 0.05);\n}\nbody.dark-mode .table-bordered td,\nbody.dark-mode .table-bordered th {\n  border: 1px solid rgba(255, 255, 255, 0.05);\n}\nbody.dark-mode .table-striped tbody tr:nth-of-type(odd) {\n  background: rgba(0, 0, 0, 0.15);\n}\nbody.dark-mode .header {\n  background: #1e2a3a;\n  scrollbar-color: rgba(255, 255, 255, 0.05) #1e2a3a;\n}\nbody.dark-mode .header::-webkit-scrollbar {\n  background: #1e2a3a;\n}\nbody.dark-mode .header::-webkit-scrollbar-thumb {\n  background-color: rgba(255, 255, 255, 0.05);\n  border-radius: 0.5rem;\n}\nbody.dark-mode .header .nav-item.active .nav-link {\n  color: #54b689;\n}\nbody.dark-mode .header .nav-item.active .nav-link:hover {\n  color: #54b689;\n}\nbody.dark-mode .header .nav-item .nav-link {\n  color: rgba(255, 255, 255, 0.7);\n}\nbody.dark-mode .header .nav-item .nav-link:hover {\n  color: #fff;\n}\nbody.dark-mode .header .nav-item .dropdown-menu {\n  background: rgba(0, 0, 0, 0.1);\n}\nbody.dark-mode .header .nav-item .dropdown-menu .dropdown-item:hover,\nbody.dark-mode .header .nav-item .dropdown-menu .dropdown-item:focus,\nbody.dark-mode .header .nav-item .dropdown-menu .dropdown-item:active {\n  background: rgba(0, 0, 0, 0.2);\n}\nbody.dark-mode .header .nav-item .dropdown-menu .dropdown-item.active {\n  color: #54b689;\n  background: rgba(0, 0, 0, 0.2);\n}\nbody.dark-mode .header .btn-primary {\n  background: #54b689;\n}\nbody.dark-mode .social-list a {\n  background: #54b689;\n}\nbody.dark-mode .social-list a .svg-inline--fa {\n  color: #fff;\n}\nbody.dark-mode .main-wrapper {\n  background: #111821;\n  color: rgba(255, 255, 255, 0.7);\n}\nbody.dark-mode .main-wrapper > .cta-section {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n  background: none !important;\n}\nbody.dark-mode .about-me-section {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n  background: none !important;\n}\nbody.dark-mode .overview-section .item-desc {\n  color: rgba(255, 255, 255, 0.7);\n}\nbody.dark-mode .testimonial-carousel .item {\n  background: #151e29;\n}\nbody.dark-mode .project-card {\n  background: #151e29;\n  border: none;\n}\nbody.dark-mode .project-card:hover .link-mask {\n  background: rgba(0, 0, 0, 0.5);\n}\nbody.dark-mode .blog-post-card {\n  background: #151e29;\n  border: none;\n}\nbody.dark-mode .blog-post .blockquote {\n  border-color: #54b689;\n}\nbody.dark-mode .filters .type {\n  color: rgba(255, 255, 255, 0.4);\n}\nbody.dark-mode .filters .type.active {\n  color: #54b689;\n}\nbody.dark-mode .filters .type.active:hover {\n  color: #54b689;\n}\nbody.dark-mode .filters .type:hover {\n  color: rgba(255, 255, 255, 0.7);\n}\nbody.dark-mode .pricing-table {\n  background: #151e29;\n}\nbody.dark-mode .pricing-table tbody th {\n  background: #151e29;\n}\nbody.dark-mode .pricing-table .pricing-package-title {\n  background: #151e29;\n}\nbody.dark-mode .faq-accordion .card-toggle {\n  color: rgba(255, 255, 255, 0.7);\n}\nbody.dark-mode .faq-accordion .card-toggle:hover {\n  color: rgba(255, 255, 255, 0.95);\n}\nbody.dark-mode .faq-accordion .card-toggle[aria-expanded=\"true\"] {\n  color: rgba(255, 255, 255, 0.95);\n}\nbody.dark-mode a.resume-link {\n  color: rgba(255, 255, 255, 0.7);\n}\nbody.dark-mode .project-meta .client-meta .svg-inline--fa {\n  color: rgba(255, 255, 255, 0.95);\n}\nbody.dark-mode .metric-data {\n  color: rgba(255, 255, 255, 0.95);\n}\nbody.dark-mode .metric-data .unit {\n  color: rgba(255, 255, 255, 0.4);\n}\nbody.dark-mode .metric-desc {\n  color: rgba(255, 255, 255, 0.7);\n}\nbody.dark-mode .client-quote {\n  background: #151e29;\n}\nbody.dark-mode .blog-list .item .title a {\n  color: rgba(255, 255, 255, 0.95);\n}\nbody.dark-mode .owl-theme .owl-dots .owl-dot span {\n  background: rgba(255, 255, 255, 0.4);\n}\nbody.dark-mode .owl-theme .owl-dots .owl-dot.active span,\nbody.dark-mode .owl-theme .owl-dots .owl-dot:hover span {\n  background: rgba(255, 255, 255, 0.95);\n}\nbody {\n  overflow-x: hidden;\n}\n.config-trigger {\n  position: absolute;\n  top: 30px;\n  left: -36px;\n  width: 36px;\n  height: 36px;\n  background: #223142;\n  color: #fff;\n  text-align: center;\n  border-radius: 4px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  text-decoration: none;\n}\n.config-trigger:hover {\n  background: #111820;\n  text-decoration: none;\n}\n.config-trigger:hover .fa-cog {\n  color: #fff;\n}\n.config-trigger .fa-cog {\n  font-size: 1.25rem;\n  display: block;\n  color: #fff;\n}\n.dark-mode .config-trigger {\n  background: #000;\n}\n.config-panel {\n  position: absolute;\n  top: 50px;\n  right: -190px;\n  z-index: 30;\n  width: 190px;\n}\n.config-panel .panel-inner {\n  position: relative;\n  background: #223142;\n  color: #fff;\n  padding: 15px;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.dark-mode .config-panel .panel-inner {\n  background: #000;\n}\n.config-panel .panel-title {\n  font-weight: 600;\n  margin-bottom: 10px;\n  font-size: 14px;\n  text-transform: uppercase;\n  color: #fff;\n}\n.config-panel label {\n  color: #fff;\n}\n.config-panel #color-options {\n  margin-bottom: 0px;\n}\n.config-panel #color-options li a {\n  display: block;\n  width: 20px;\n  height: 20px;\n  border: 2px solid transparent;\n  margin-top: 5px;\n}\n.config-panel #color-options li a:hover {\n  -webkit-opacity: 0.9;\n  -moz-opacity: 0.9;\n  opacity: 0.9;\n  border: 2px solid rgba(255, 255, 255, 0.9);\n}\n.config-panel #color-options li.list-inline-item {\n  margin-right: 5px;\n}\n.config-panel #color-options li.active a {\n  border: 2px solid #fff;\n}\n.config-panel #color-options li.theme-1 a {\n  background: #54b689;\n}\n.config-panel #color-options li.theme-2 a {\n  background-color: #5bc3d5;\n}\n.config-panel #color-options li.theme-3 a {\n  background-color: #3b7eeb;\n}\n.config-panel #color-options li.theme-4 a {\n  background-color: #5ecca9;\n}\n.config-panel #color-options li.theme-5 a {\n  background-color: #eea73b;\n}\n.config-panel #color-options li.theme-6 a {\n  background-color: #5469c9;\n}\n.config-panel #color-options li.theme-7 a {\n  background-color: #5d6ba7;\n}\n.config-panel #color-options li.theme-8 a {\n  background-color: #6c51a4;\n}\n.config-panel #color-options li.theme-9 a {\n  background-color: #d67553;\n}\n.config-panel #color-options li.theme-10 a {\n  background-color: #5fcb71;\n}\n.config-panel .close {\n  position: absolute;\n  right: 5px;\n  top: 5px;\n  color: #fff;\n}\n.config-panel .close .fa {\n  color: #fff;\n}\n\n.webapp {\n  margin-bottom: 40px;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);



/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Nav */ "./src/components/Nav.js");
/* harmony import */ var _components_TopNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/TopNav */ "./src/components/TopNav.js");
/* harmony import */ var _components_AboutMe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/AboutMe */ "./src/components/AboutMe.js");
/* harmony import */ var _components_WebDev__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/WebDev */ "./src/components/WebDev.js");
/* harmony import */ var _components_ProjectsTabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ProjectsTabs */ "./src/components/ProjectsTabs.js");
/* harmony import */ var _components_projects_Posted__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/projects/Posted */ "./src/components/projects/Posted.js");
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-lottie */ "./node_modules/react-lottie/dist/index.js");
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_lottie__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _images_BrandonPic_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/BrandonPic.jpg */ "./src/images/BrandonPic.jpg");
/* harmony import */ var _images_BrandonPic_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_BrandonPic_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _images_greeting_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/greeting.json */ "./src/images/greeting.json");
var _images_greeting_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./images/greeting.json */ "./src/images/greeting.json", 1);
var _jsxFileName = "/Users/HBGines/Desktop/BrandonCode/react-portfolio/src/App.js";













const text = {
  fontSize: "12px",
  marginTop: "20px"
};
const col = {
  marginTop: "20px"
};
const jumbo = {
  backgroundColor: "transparent "
};
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: _images_greeting_json__WEBPACK_IMPORTED_MODULE_12__,
  rendererSettings: {
    preserveAspectRatio: ""
  }
};
const routes = [{
  path: "/",
  exact: true,
  main: () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AboutMe__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  })
}, {
  path: "/portfolio",
  exact: true,
  main: () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ProjectsTabs__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  })
}, {
  path: "/resume",
  exact: true,
  main: () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, "Resume")
}, {
  path: "/blog",
  exact: true,
  main: () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, "Blog")
}, {
  path: "/posted",
  exact: true,
  main: () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_projects_Posted__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  })
}, {
  path: "/synergy",
  exact: true,
  main: () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, "Synergy")
}, {
  path: "/nyx",
  exact: true,
  main: () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, "Nyx")
}];

const IndexPage = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 87
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
  xs: 6,
  md: 4,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 88
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 89
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
  xs: 12,
  md: 8,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 91
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 92
  },
  __self: undefined
}, routes.map((route, index) => // Render more <Route>s with the same paths as
// above, but different components this time.
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Route"], {
  key: index,
  path: route.path,
  exact: route.exact,
  component: route.main,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 96
  },
  __self: undefined
}))))));

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ "./src/components/AboutMe.js":
/*!***********************************!*\
  !*** ./src/components/AboutMe.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AboutMe; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_ae_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/ae.svg */ "./src/images/ae.svg");
/* harmony import */ var _images_ae_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_ae_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_ps_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/ps.svg */ "./src/images/ps.svg");
/* harmony import */ var _images_ps_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_ps_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_ai_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/ai.svg */ "./src/images/ai.svg");
/* harmony import */ var _images_ai_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_ai_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_xd_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/xd.svg */ "./src/images/xd.svg");
/* harmony import */ var _images_xd_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_xd_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_Pr_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/Pr.svg */ "./src/images/Pr.svg");
/* harmony import */ var _images_Pr_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_Pr_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_rails_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/rails.svg */ "./src/images/rails.svg");
/* harmony import */ var _images_rails_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_rails_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_sass_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/sass.svg */ "./src/images/sass.svg");
/* harmony import */ var _images_sass_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_sass_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _images_node_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/node.svg */ "./src/images/node.svg");
/* harmony import */ var _images_node_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_node_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _images_slack_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/slack.svg */ "./src/images/slack.svg");
/* harmony import */ var _images_slack_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_slack_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _images_git_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/git.svg */ "./src/images/git.svg");
/* harmony import */ var _images_git_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_images_git_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _images_npm_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/npm.png */ "./src/images/npm.png");
/* harmony import */ var _images_npm_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_images_npm_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _images_vuejs_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../images/vuejs.svg */ "./src/images/vuejs.svg");
/* harmony import */ var _images_vuejs_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_images_vuejs_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _images_js_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../images/js.svg */ "./src/images/js.svg");
/* harmony import */ var _images_js_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_images_js_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _images_ruby_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../images/ruby.png */ "./src/images/ruby.png");
/* harmony import */ var _images_ruby_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_images_ruby_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _images_html5_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../images/html5.svg */ "./src/images/html5.svg");
/* harmony import */ var _images_html5_svg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_images_html5_svg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _images_bootstrap_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../images/bootstrap.svg */ "./src/images/bootstrap.svg");
/* harmony import */ var _images_bootstrap_svg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_images_bootstrap_svg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _images_greeting_json__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../images/greeting.json */ "./src/images/greeting.json");
var _images_greeting_json__WEBPACK_IMPORTED_MODULE_17___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../images/greeting.json */ "./src/images/greeting.json", 1);
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-lottie */ "./node_modules/react-lottie/dist/index.js");
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_lottie__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _images_BrandonPic_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../images/BrandonPic.jpg */ "./src/images/BrandonPic.jpg");
/* harmony import */ var _images_BrandonPic_jpg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_images_BrandonPic_jpg__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _TopNav__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./TopNav */ "./src/components/TopNav.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _images_react_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../images/react.svg */ "./src/images/react.svg");
/* harmony import */ var _images_react_svg__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_images_react_svg__WEBPACK_IMPORTED_MODULE_22__);
var _jsxFileName = "/Users/HBGines/Desktop/BrandonCode/react-portfolio/src/components/AboutMe.js";























const text = {
  fontSize: "12px",
  marginTop: "20px",
  marginRight: "10px"
};
const col = {
  marginTop: "20px"
};
const jumbo = {
  backgroundColor: "transparent "
};
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: _images_greeting_json__WEBPACK_IMPORTED_MODULE_17__,
  rendererSettings: {
    preserveAspectRatio: ""
  }
};
class AboutMe extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TopNav__WEBPACK_IMPORTED_MODULE_20__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_21__["Container"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_21__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_21__["Jumbotron"], {
      style: jumbo,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lottie__WEBPACK_IMPORTED_MODULE_18___default.a, {
      options: defaultOptions,
      width: 340,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, "I'm a software engineer specialised in frontend and backend development for complex scalable web apps. I write about software development on my blog. Want to know how I may help your project? Check out my project portfolio and online resume."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_21__["Button"], {
      variant: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, "Learn more")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, "About Me"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_21__["Row"], {
      style: text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_21__["Col"], {
      style: col,
      xs: 6,
      md: 4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _images_js_svg__WEBPACK_IMPORTED_MODULE_13___default.a,
      width: 40,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _images_react_svg__WEBPACK_IMPORTED_MODULE_22___default.a,
      width: 40,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _images_vuejs_svg__WEBPACK_IMPORTED_MODULE_12___default.a,
      width: 40,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }))), "Vanilla Javascript, React.JS and Vue.js"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_21__["Col"], {
      style: col,
      xs: 6,
      md: 4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _images_node_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
      width: 40,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _images_npm_png__WEBPACK_IMPORTED_MODULE_11___default.a,
      width: 40,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }))), "Node.js and npm"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_21__["Col"], {
      style: col,
      xs: 6,
      md: 4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _images_ruby_png__WEBPACK_IMPORTED_MODULE_14___default.a,
      width: 38,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _images_rails_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
      width: 38,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }))), "List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_21__["Col"], {
      style: col,
      xs: 6,
      md: 4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _images_html5_svg__WEBPACK_IMPORTED_MODULE_15___default.a,
      width: 40,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _images_react_svg__WEBPACK_IMPORTED_MODULE_22___default.a,
      width: 40,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _images_bootstrap_svg__WEBPACK_IMPORTED_MODULE_16___default.a,
      width: 40,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _images_sass_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
      width: 40,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }))), "List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_21__["Col"], {
      style: col,
      xs: 6,
      md: 4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _images_ps_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
      width: 40,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _images_ai_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
      width: 40,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _images_xd_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
      width: 40,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }))), "List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_21__["Col"], {
      style: col,
      xs: 6,
      md: 4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _images_Pr_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
      width: 40,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _images_ae_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
      width: 40,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }))), "List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_21__["Col"], {
      style: col,
      xs: 6,
      md: 4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _images_git_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
      width: 40,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _images_slack_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
      width: 40,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: this
    }))), "List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor."))));
  }

}

/***/ }),

/***/ "./src/components/Nav.js":
/*!*******************************!*\
  !*** ./src/components/Nav.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Nav; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_BrandonPic_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/BrandonPic.jpg */ "./src/images/BrandonPic.jpg");
/* harmony import */ var _images_BrandonPic_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_BrandonPic_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_linked_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/linked.svg */ "./src/images/linked.svg");
/* harmony import */ var _images_linked_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_linked_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_twitter_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/twitter.svg */ "./src/images/twitter.svg");
/* harmony import */ var _images_twitter_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_twitter_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_git_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/git.svg */ "./src/images/git.svg");
/* harmony import */ var _images_git_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_git_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _nav_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav.css */ "./src/components/nav.css");
/* harmony import */ var _nav_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nav_css__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/HBGines/Desktop/BrandonCode/react-portfolio/src/components/Nav.js";







const social = {
  width: 30,
  marginRight: "5px"
};
const sidebarbody = {
  display: "flex",
  justifyContent: "center"
};
class Nav extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "nav flex-sm-column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
      id: "sidebar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "sidebar-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _images_BrandonPic_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,
      className: "round-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    })), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      style: {
        color: "white"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, "Brandon Gines"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "Full Stack Web Developer"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _images_linked_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
      style: social,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _images_twitter_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
      style: social,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _images_git_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
      style: social,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: sidebarbody,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      class: "list-unstyled components",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      to: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "About"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      to: "/portfolio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "Projects"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      to: "/resume",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "Resume"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      to: "/contact",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "Contact")))))));
  }

}

/***/ }),

/***/ "./src/components/ProjectsTabs.js":
/*!****************************************!*\
  !*** ./src/components/ProjectsTabs.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyTabs; });
/* harmony import */ var _Users_HBGines_Desktop_BrandonCode_react_portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _WebDev__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WebDev */ "./src/components/WebDev.js");
/* harmony import */ var _Videos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Videos */ "./src/components/Videos.js");
/* harmony import */ var _AboutMe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AboutMe */ "./src/components/AboutMe.js");
/* harmony import */ var _TopNav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TopNav */ "./src/components/TopNav.js");

var _jsxFileName = "/Users/HBGines/Desktop/BrandonCode/react-portfolio/src/components/ProjectsTabs.js";






const nav = {
  borderColor: "#00387d",
  textAlign: "center"
};
const text = {
  fontSize: "12px",
  marginTop: "20px",
  marginRight: "10px"
};
const jumbo = {
  backgroundColor: "transparent "
};
const navtabs = {
  display: "flex",
  borderColor: "black",
  justifyContent: "center"
};
const navlinks = {
  borderColor: "blue"
};
function MyTabs(props) {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("1"),
        _useState2 = Object(_Users_HBGines_Desktop_BrandonCode_react_portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        activeTab = _useState2[0],
        setActiveTab = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TopNav__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Jumbotron"], {
    style: jumbo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Projects"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "I'm a software engineer specialised in frontend and backend development for complex scalable web apps. I write about software development on my blog. Want to know how I may help your project? Check out my project portfolio and online resume.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Container, {
    defaultActiveKey: "first",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    variant: "pills",
    style: navtabs,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "first",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Web Development")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "second",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Video Production")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "third",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Digital Design")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    eventKey: "fourth",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Motion Graphics"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "first",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_WebDev__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
    eventKey: "second",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Videos__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  })))))));
}

/***/ }),

/***/ "./src/components/TopNav.js":
/*!**********************************!*\
  !*** ./src/components/TopNav.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TopNav; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _images_BrandonPic_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/BrandonPic.jpg */ "./src/images/BrandonPic.jpg");
/* harmony import */ var _images_BrandonPic_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_BrandonPic_jpg__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/HBGines/Desktop/BrandonCode/react-portfolio/src/components/TopNav.js";




function TopNav() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
    collapseOnSelect: true,
    expand: "lg",
    bg: "dark",
    variant: "dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Brand, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "React-Bootstrap"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Toggle, {
    "aria-controls": "responsive-navbar-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Collapse, {
    id: "responsive-navbar-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
    className: "mr-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "well profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "col-sm-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "col-xs-12 col-sm-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_BrandonPic_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    className: "round-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Brandon Gines"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "About: "), " Web Designer / UI.", " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Hobbies: "), " Read, out with friends, listen to music, draw and learn new things.", " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    class: "active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "About Me")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
    href: "/portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Projects")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
    href: "/resume",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Resume")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
    href: "/blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Blog")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Contact"))))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
    href: "#deets",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "More deets"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
    eventKey: 2,
    href: "#memes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Dank memes")))));
}

/***/ }),

/***/ "./src/components/Videos.js":
/*!**********************************!*\
  !*** ./src/components/Videos.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Videos; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_bta_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/bta.svg */ "./src/images/bta.svg");
/* harmony import */ var _images_bta_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_bta_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_salon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/salon.svg */ "./src/images/salon.svg");
/* harmony import */ var _images_salon_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_salon_svg__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/HBGines/Desktop/BrandonCode/react-portfolio/src/components/Videos.js";



const video = {
  zIndex: 9999
};
class Videos extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);
    this.state = {
      lightboxOpen: false
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      class: "projects-list px-3 py-8 p-md-8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "project-cards row isotope",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "isotope-item col-md-6 mb-8 webapp frontend",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "card project-card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "row no-gutters ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _images_bta_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
      class: "card-img",
      alt: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "link-mask",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      class: "link-mask-link",
      href: "project.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "link-mask-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      class: "btn btn-secondary",
      onClick: () => {
        this.setState({
          lightboxOpen: true
        });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      class: "fas fa-eye mr-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }), "Play Video"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "isotope-item col-md-6 mb-8 webapp frontend",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "card project-card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "row no-gutters ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _images_salon_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
      class: "card-img",
      alt: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "link-mask",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      class: "link-mask-link",
      href: "project.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "link-mask-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      class: "fas fa-eye mr-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }), "View Case Study")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "isotope-item col-md-6 mb-8 mobileapp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "card project-card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "row no-gutters",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "col-lg-4 card-img-holder",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _images_bta_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
      class: "card-img",
      alt: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "col-lg-8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "card-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      class: "card-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "project.html",
      class: "theme-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, "NYX News")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      class: "card-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      class: "card-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      class: "text-muted",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, "Client: Google"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "link-mask",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      class: "link-mask-link",
      href: "project.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "link-mask-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      class: "fas fa-eye mr-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }), "View Case Study")))))));
  }

}

/***/ }),

/***/ "./src/components/WebDev.js":
/*!**********************************!*\
  !*** ./src/components/WebDev.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WebDev; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_nyx_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/nyx-logo.png */ "./src/images/nyx-logo.png");
/* harmony import */ var _images_nyx_logo_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_nyx_logo_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_syn_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/syn-logo.png */ "./src/images/syn-logo.png");
/* harmony import */ var _images_syn_logo_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_syn_logo_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_posted_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/posted-logo.png */ "./src/images/posted-logo.png");
/* harmony import */ var _images_posted_logo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_posted_logo_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/HBGines/Desktop/BrandonCode/react-portfolio/src/components/WebDev.js";





const isotope = {
  position: "relative",
  height: "1000px"
};
const moblie = {
  position: "absolute",
  left: "0px",
  top: "0px"
};
class WebDev extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      class: "projects-list px-3 py-8 p-md-8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "project-cards row isotope",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "isotope-item col-md-6 mb-8 webapp frontend",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "card project-card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "row no-gutters ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "col-lg-4 card-img-holder",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _images_posted_logo_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      class: "card-img",
      alt: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "col-lg-8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "card-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      class: "card-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: "/posted",
      class: "theme-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "Posted")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      class: "card-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, "Project intro lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      class: "card-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      class: "text-muted",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "Client: Google"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "link-mask",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      class: "link-mask-link",
      href: "project.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "link-mask-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      class: "btn btn-outline-info",
      style: {
        color: "white",
        borderColor: "white"
      },
      to: "/posted",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      class: "fas fa-eye mr-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }), "View Case Study"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "isotope-item col-md-6 mb-8 webapp frontend",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "card project-card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "row no-gutters",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "col-lg-4 card-img-holder",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _images_syn_logo_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      class: "card-img",
      alt: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "col-lg-8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "card-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      class: "card-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: "/synergy",
      class: "theme-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, "Synergy")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      class: "card-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      class: "card-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      class: "text-muted",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, "Client: Dropbox"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "link-mask",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      class: "link-mask-link",
      href: "project.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "link-mask-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      class: "btn btn-outline-info",
      style: {
        color: "white",
        borderColor: "white"
      },
      to: "/synergy",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      class: "fas fa-eye mr-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }), "View Case Study"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "isotope-item col-md-6 mb-8 mobileapp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "card project-card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "row no-gutters",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "col-lg-4 card-img-holder",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _images_nyx_logo_png__WEBPACK_IMPORTED_MODULE_1___default.a,
      class: "card-img",
      alt: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "col-lg-8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "card-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      class: "card-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: "/nyx",
      class: "theme-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, "NYX News")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      class: "card-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      class: "card-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      class: "text-muted",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, "Client: Google"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "link-mask",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      class: "link-mask-link",
      href: "project.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "link-mask-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      class: "btn btn-outline-info",
      style: {
        color: "white",
        borderColor: "white"
      },
      to: "/nyxnews",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      class: "fas fa-eye mr-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }), "View Case Study"))))))));
  }

}

/***/ }),

/***/ "./src/components/nav.css":
/*!********************************!*\
  !*** ./src/components/nav.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./nav.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/nav.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./nav.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/nav.css",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./nav.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/nav.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/projects/Posted.js":
/*!*******************************************!*\
  !*** ./src/components/projects/Posted.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Posted; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_ae_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/ae.svg */ "./src/images/ae.svg");
/* harmony import */ var _images_ae_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_ae_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_ps_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/ps.svg */ "./src/images/ps.svg");
/* harmony import */ var _images_ps_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_ps_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_ai_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/ai.svg */ "./src/images/ai.svg");
/* harmony import */ var _images_ai_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_ai_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_xd_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/xd.svg */ "./src/images/xd.svg");
/* harmony import */ var _images_xd_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_xd_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_Pr_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/Pr.svg */ "./src/images/Pr.svg");
/* harmony import */ var _images_Pr_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_Pr_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_rails_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/rails.svg */ "./src/images/rails.svg");
/* harmony import */ var _images_rails_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_rails_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_sass_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../images/sass.svg */ "./src/images/sass.svg");
/* harmony import */ var _images_sass_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_sass_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _images_node_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../images/node.svg */ "./src/images/node.svg");
/* harmony import */ var _images_node_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_node_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _images_slack_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../images/slack.svg */ "./src/images/slack.svg");
/* harmony import */ var _images_slack_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_slack_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _images_git_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../images/git.svg */ "./src/images/git.svg");
/* harmony import */ var _images_git_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_images_git_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _images_npm_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../images/npm.png */ "./src/images/npm.png");
/* harmony import */ var _images_npm_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_images_npm_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _images_vuejs_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../images/vuejs.svg */ "./src/images/vuejs.svg");
/* harmony import */ var _images_vuejs_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_images_vuejs_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _images_js_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../images/js.svg */ "./src/images/js.svg");
/* harmony import */ var _images_js_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_images_js_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _images_ruby_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../images/ruby.png */ "./src/images/ruby.png");
/* harmony import */ var _images_ruby_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_images_ruby_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _images_html5_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../images/html5.svg */ "./src/images/html5.svg");
/* harmony import */ var _images_html5_svg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_images_html5_svg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _images_bootstrap_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../images/bootstrap.svg */ "./src/images/bootstrap.svg");
/* harmony import */ var _images_bootstrap_svg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_images_bootstrap_svg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _images_post_it_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../images/post-it.png */ "./src/images/post-it.png");
/* harmony import */ var _images_post_it_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_images_post_it_png__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _images_react_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../images/react.svg */ "./src/images/react.svg");
/* harmony import */ var _images_react_svg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_images_react_svg__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
var _jsxFileName = "/Users/HBGines/Desktop/BrandonCode/react-portfolio/src/components/projects/Posted.js";




















const text = {
  fontSize: "12px",
  marginTop: "20px",
  marginRight: "10px"
};
const col = {
  marginTop: "20px"
};
function Posted() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_19__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_19__["Jumbotron"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Posted"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_post_it_png__WEBPACK_IMPORTED_MODULE_17___default.a,
    style: {
      width: "100%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "User Story"), "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information. calling extra attention to featured content or information."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Technology Stack"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_19__["Row"], {
    style: text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_19__["Col"], {
    style: col,
    xs: 6,
    md: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_js_svg__WEBPACK_IMPORTED_MODULE_13___default.a,
    width: 40,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_react_svg__WEBPACK_IMPORTED_MODULE_18___default.a,
    width: 40,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_vuejs_svg__WEBPACK_IMPORTED_MODULE_12___default.a,
    width: 40,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }))), "Vanilla Javascript, React.JS and Vue.js"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_19__["Col"], {
    style: col,
    xs: 6,
    md: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_node_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
    width: 40,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_npm_png__WEBPACK_IMPORTED_MODULE_11___default.a,
    width: 40,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }))), "Node.js and npm"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_19__["Col"], {
    style: col,
    xs: 6,
    md: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_ruby_png__WEBPACK_IMPORTED_MODULE_14___default.a,
    width: 38,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_rails_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    width: 38,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }))), "List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_19__["Col"], {
    style: col,
    xs: 6,
    md: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_html5_svg__WEBPACK_IMPORTED_MODULE_15___default.a,
    width: 40,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_react_svg__WEBPACK_IMPORTED_MODULE_18___default.a,
    width: 40,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_bootstrap_svg__WEBPACK_IMPORTED_MODULE_16___default.a,
    width: 40,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_sass_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
    width: 40,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }))), "List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_19__["Col"], {
    style: col,
    xs: 6,
    md: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_ps_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    width: 40,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_ai_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    width: 40,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_xd_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    width: 40,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }))), "List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_19__["Col"], {
    style: col,
    xs: 6,
    md: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_Pr_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    width: 40,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_ae_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
    width: 40,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }))), "List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_19__["Col"], {
    style: col,
    xs: 6,
    md: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_git_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
    width: 40,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_slack_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
    width: 40,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }))), "List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, "Product Gallery")));
}

/***/ }),

/***/ "./src/images/BrandonPic.jpg":
/*!***********************************!*\
  !*** ./src/images/BrandonPic.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/BrandonPic.e8d546bb.jpg";

/***/ }),

/***/ "./src/images/Pr.svg":
/*!***************************!*\
  !*** ./src/images/Pr.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Pr.3372c693.svg";

/***/ }),

/***/ "./src/images/ae.svg":
/*!***************************!*\
  !*** ./src/images/ae.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ae.a73563c8.svg";

/***/ }),

/***/ "./src/images/ai.svg":
/*!***************************!*\
  !*** ./src/images/ai.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ai.c3562bb4.svg";

/***/ }),

/***/ "./src/images/bootstrap.svg":
/*!**********************************!*\
  !*** ./src/images/bootstrap.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/bootstrap.0217430a.svg";

/***/ }),

/***/ "./src/images/bta.svg":
/*!****************************!*\
  !*** ./src/images/bta.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/bta.6d074a43.svg";

/***/ }),

/***/ "./src/images/git.svg":
/*!****************************!*\
  !*** ./src/images/git.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/git.935dde0f.svg";

/***/ }),

/***/ "./src/images/greeting.json":
/*!**********************************!*\
  !*** ./src/images/greeting.json ***!
  \**********************************/
/*! exports provided: v, fr, ip, op, w, h, nm, ddd, assets, fonts, layers, markers, chars, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"v\":\"5.5.2\",\"fr\":60,\"ip\":0,\"op\":645,\"w\":1526,\"h\":581,\"nm\":\"Comp 1\",\"ddd\":1,\"assets\":[],\"fonts\":{\"list\":[{\"fName\":\"LeagueSpartan-Bold\",\"fFamily\":\"League Spartan\",\"fStyle\":\"Bold\",\"ascent\":85.99853515625},{\"fName\":\"CenturyGothic\",\"fFamily\":\"Century Gothic\",\"fStyle\":\"Regular\",\"ascent\":73.5992431640625}]},\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":5,\"nm\":\"hello, my name is \",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":41,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":616,\"s\":[100]},{\"t\":636,\"s\":[0]}],\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[352,63.5,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"t\":{\"d\":{\"k\":[{\"s\":{\"s\":52,\"f\":\"CenturyGothic\",\"t\":\"HELLO, MY NAME IS \",\"j\":2,\"tr\":172,\"lh\":62.4,\"ls\":0,\"fc\":[0,0,0]},\"t\":0}]},\"p\":{},\"m\":{\"g\":1,\"a\":{\"a\":0,\"k\":[0,0],\"ix\":2}},\"a\":[]},\"ip\":0,\"op\":639,\"st\":0,\"cp\":true,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":5,\"nm\":\"Brandon\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":41,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":616,\"s\":[99]},{\"t\":636,\"s\":[0]}],\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[660,286.5,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[120,120,100],\"ix\":6}},\"ao\":0,\"t\":{\"d\":{\"k\":[{\"s\":{\"s\":199,\"f\":\"LeagueSpartan-Bold\",\"t\":\"BRANDON\",\"j\":2,\"tr\":0,\"lh\":238.8,\"ls\":0,\"fc\":[0,0,0]},\"t\":0}]},\"p\":{},\"m\":{\"g\":1,\"a\":{\"a\":0,\"k\":[0,0],\"ix\":2}},\"a\":[]},\"ip\":0,\"op\":639,\"st\":0,\"cp\":true,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":5,\"nm\":\"design & create\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":434,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":444,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":612,\"s\":[100]},{\"t\":640,\"s\":[0]}],\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[323.494,378.89,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"t\":{\"d\":{\"k\":[{\"s\":{\"s\":52,\"f\":\"CenturyGothic\",\"t\":\"DESIGN & CREATE\",\"j\":2,\"tr\":172,\"lh\":62.4,\"ls\":0,\"fc\":[0,0,0]},\"t\":0}]},\"p\":{},\"m\":{\"g\":1,\"a\":{\"a\":0,\"k\":[0,0],\"ix\":2}},\"a\":[]},\"ip\":434,\"op\":640,\"st\":442,\"cp\":true,\"bm\":0},{\"ddd\":1,\"ind\":4,\"ty\":5,\"nm\":\"motion graphics\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"rx\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":434,\"s\":[-90]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":463,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":612,\"s\":[0]},{\"t\":640,\"s\":[90]}],\"ix\":8},\"ry\":{\"a\":0,\"k\":0,\"ix\":9},\"rz\":{\"a\":0,\"k\":0,\"ix\":10},\"or\":{\"a\":0,\"k\":[0,0,0],\"ix\":7},\"p\":{\"a\":0,\"k\":[756.622,533.653,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"t\":{\"d\":{\"k\":[{\"s\":{\"s\":143,\"f\":\"LeagueSpartan-Bold\",\"t\":\"MOTION GRAPHICS\",\"j\":2,\"tr\":0,\"lh\":171.6,\"ls\":0,\"fc\":[0,0.01,1]},\"t\":0}]},\"p\":{},\"m\":{\"g\":1,\"a\":{\"a\":0,\"k\":[0,0],\"ix\":2}},\"a\":[]},\"ip\":434,\"op\":640,\"st\":483,\"cp\":true,\"bm\":0},{\"ddd\":0,\"ind\":5,\"ty\":5,\"nm\":\"produce & film\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":236,\"s\":[1]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":245,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":403,\"s\":[100]},{\"t\":434,\"s\":[3]}],\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[304.494,390.89,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"t\":{\"d\":{\"k\":[{\"s\":{\"s\":52,\"f\":\"CenturyGothic\",\"t\":\"PRODUCE & FILM\",\"j\":2,\"tr\":172,\"lh\":62.4,\"ls\":0,\"fc\":[0,0,0]},\"t\":0}]},\"p\":{},\"m\":{\"g\":1,\"a\":{\"a\":0,\"k\":[0,0],\"ix\":2}},\"a\":[]},\"ip\":236,\"op\":434,\"st\":202,\"cp\":true,\"bm\":0},{\"ddd\":1,\"ind\":6,\"ty\":5,\"nm\":\"video content\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":236,\"s\":[0]},{\"t\":265,\"s\":[100]}],\"ix\":11},\"rx\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":236,\"s\":[-90]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":265,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":417,\"s\":[0]},{\"t\":448,\"s\":[90]}],\"ix\":8},\"ry\":{\"a\":0,\"k\":0,\"ix\":9},\"rz\":{\"a\":0,\"k\":0,\"ix\":10},\"or\":{\"a\":0,\"k\":[0,0,0],\"ix\":7},\"p\":{\"a\":0,\"k\":[641.258,540.754,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"t\":{\"d\":{\"k\":[{\"s\":{\"s\":143,\"f\":\"LeagueSpartan-Bold\",\"t\":\"VIDEO CONTENT\",\"j\":2,\"tr\":0,\"lh\":171.6,\"ls\":0,\"fc\":[1,0.6,0]},\"t\":0}]},\"p\":{},\"m\":{\"g\":1,\"a\":{\"a\":0,\"k\":[0,0],\"ix\":2}},\"a\":[]},\"ip\":236,\"op\":449,\"st\":244,\"cp\":true,\"bm\":0},{\"ddd\":0,\"ind\":7,\"ty\":5,\"nm\":\"i love to Code & design  \",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":45,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":64,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":205,\"s\":[100]},{\"t\":236,\"s\":[0]}],\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[481.673,391.255,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"t\":{\"d\":{\"k\":[{\"s\":{\"s\":52,\"f\":\"CenturyGothic\",\"t\":\"I LOVE TO CODE & DESIGN  \",\"j\":2,\"tr\":172,\"lh\":62.4,\"ls\":0,\"fc\":[0,0,0]},\"t\":0}]},\"p\":{},\"m\":{\"g\":1,\"a\":{\"a\":0,\"k\":[0,0],\"ix\":2}},\"a\":[]},\"ip\":45,\"op\":236,\"st\":45,\"cp\":true,\"bm\":0},{\"ddd\":1,\"ind\":8,\"ty\":5,\"nm\":\"web applications\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":63,\"s\":[0]},{\"t\":93,\"s\":[99]}],\"ix\":11},\"rx\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":63,\"s\":[-90]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":92,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":223,\"s\":[0]},{\"t\":254,\"s\":[90]}],\"ix\":8},\"ry\":{\"a\":0,\"k\":0,\"ix\":9},\"rz\":{\"a\":0,\"k\":0,\"ix\":10},\"or\":{\"a\":0,\"k\":[0,0,0],\"ix\":7},\"p\":{\"a\":0,\"k\":[764.595,540.842,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"t\":{\"d\":{\"k\":[{\"s\":{\"s\":143,\"f\":\"LeagueSpartan-Bold\",\"t\":\"WEB APPLICATIONS\",\"j\":2,\"tr\":0,\"lh\":171.6,\"ls\":0,\"fc\":[0.884,0,0]},\"t\":0}]},\"p\":{},\"m\":{\"g\":1,\"a\":{\"a\":0,\"k\":[0,0],\"ix\":2}},\"a\":[]},\"ip\":63,\"op\":254,\"st\":63,\"cp\":true,\"bm\":0}],\"markers\":[],\"chars\":[{\"ch\":\"W\",\"size\":143,\"style\":\"Bold\",\"w\":112.1,\"data\":{\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[69.791,0],[90.738,0],[114.404,-83.084],[93.457,-83.084],[79.257,-26.083],[78.754,-26.083],[63.647,-83.084],[49.347,-83.084],[34.241,-26.083],[33.737,-26.083],[19.537,-83.084],[-1.511,-83.084],[22.156,0],[43.204,0],[56.497,-46.628]],\"c\":true},\"ix\":2},\"nm\":\"W\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false}],\"nm\":\"W\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}]},\"fFamily\":\"League Spartan\"},{\"ch\":\"E\",\"size\":143,\"style\":\"Bold\",\"w\":58,\"data\":{\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[53.577,-83.084],[6.042,-83.084],[6.042,0],[53.577,0],[53.577,-16.617],[24.976,-16.617],[24.976,-33.334],[52.368,-33.334],[52.368,-49.951],[24.976,-49.951],[24.976,-66.467],[53.577,-66.467]],\"c\":true},\"ix\":2},\"nm\":\"E\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false}],\"nm\":\"E\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}]},\"fFamily\":\"League Spartan\"},{\"ch\":\"B\",\"size\":143,\"style\":\"Bold\",\"w\":66.6,\"data\":{\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,13.696],[10.373,1.813],[0,7.654],[14.301,0]],\"o\":[[0,0],[0,0],[17.221,0],[0,-13.394],[7.05,-3.625],[0,-15.811],[0,0]],\"v\":[[6.042,-83.084],[6.042,0],[37.564,0],[64.755,-23.163],[47.031,-44.11],[57.404,-61.935],[31.824,-83.084]],\"c\":true},\"ix\":2},\"nm\":\"B\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,-5.942],[8.157,0]],\"o\":[[0,0],[0,0],[8.258,0],[0,6.949],[0,0]],\"v\":[[24.976,-50.555],[24.976,-68.481],[26.486,-68.481],[39.075,-60.022],[26.486,-50.555]],\"c\":true},\"ix\":2},\"nm\":\"B\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":2,\"ty\":\"sh\",\"ix\":3,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,-7.654],[8.963,0]],\"o\":[[0,0],[0,0],[8.963,0],[0,6.546],[0,0]],\"v\":[[24.976,-14.603],[24.976,-34.241],[30.917,-34.241],[44.815,-23.868],[30.917,-14.603]],\"c\":true},\"ix\":2},\"nm\":\"B\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false}],\"nm\":\"B\",\"np\":6,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}]},\"fFamily\":\"League Spartan\"},{\"ch\":\" \",\"size\":143,\"style\":\"Bold\",\"w\":27.3,\"data\":{},\"fFamily\":\"League Spartan\"},{\"ch\":\"A\",\"size\":143,\"style\":\"Bold\",\"w\":78.4,\"data\":{\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[48.239,-83.084],[30.716,-83.084],[-2.82,0],[17.523,0],[23.666,-16.617],[55.289,-16.617],[61.432,0],[81.775,0]],\"c\":true},\"ix\":2},\"nm\":\"A\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[48.843,-33.234],[30.112,-33.234],[39.377,-57.404],[39.578,-57.404]],\"c\":true},\"ix\":2},\"nm\":\"A\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false}],\"nm\":\"A\",\"np\":5,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}]},\"fFamily\":\"League Spartan\"},{\"ch\":\"P\",\"size\":143,\"style\":\"Bold\",\"w\":66.6,\"data\":{\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,17.12],[16.214,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[16.214,0],[0,-17.221],[0,0]],\"v\":[[6.042,-83.084],[6.042,0],[24.976,0],[24.976,-30.817],[36.356,-30.817],[64.755,-57.504],[36.356,-83.084]],\"c\":true},\"ix\":2},\"nm\":\"P\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,-8.56],[7.452,0]],\"o\":[[0,0],[0,0],[7.452,0],[0,8.459],[0,0]],\"v\":[[24.976,-45.923],[24.976,-67.978],[30.313,-67.978],[44.815,-56.9],[30.313,-45.923]],\"c\":true},\"ix\":2},\"nm\":\"P\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false}],\"nm\":\"P\",\"np\":5,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}]},\"fFamily\":\"League Spartan\"},{\"ch\":\"L\",\"size\":143,\"style\":\"Bold\",\"w\":56.5,\"data\":{\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[24.976,-83.084],[6.042,-83.084],[6.042,0],[53.577,0],[53.577,-16.617],[24.976,-16.617]],\"c\":true},\"ix\":2},\"nm\":\"L\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false}],\"nm\":\"L\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}]},\"fFamily\":\"League Spartan\"},{\"ch\":\"I\",\"size\":143,\"style\":\"Bold\",\"w\":30.8,\"data\":{\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[24.976,-83.084],[6.042,-83.084],[6.042,0],[24.976,0]],\"c\":true},\"ix\":2},\"nm\":\"I\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false}],\"nm\":\"I\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}]},\"fFamily\":\"League Spartan\"},{\"ch\":\"C\",\"size\":143,\"style\":\"Bold\",\"w\":75.3,\"data\":{\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[9.668,0],[0,11.179],[-19.034,0],[0,0],[0,0],[18.027,0],[0,-23.868],[-23.465,0],[0,0],[0,0]],\"o\":[[-19.034,0],[0,-11.078],[9.668,0],[0,0],[0,0],[-23.566,0],[0,23.767],[18.027,0],[0,0],[0,0]],\"v\":[[50.253,-17.12],[22.861,-41.592],[50.253,-65.964],[66.568,-60.828],[74.625,-76.941],[47.333,-84.595],[2.316,-41.391],[47.333,1.511],[74.625,-6.143],[66.568,-22.256]],\"c\":true},\"ix\":2},\"nm\":\"C\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false}],\"nm\":\"C\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}]},\"fFamily\":\"League Spartan\"},{\"ch\":\"T\",\"size\":143,\"style\":\"Bold\",\"w\":61,\"data\":{\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[0.806,-66.467],[20.544,-66.467],[20.544,0],[39.478,0],[39.478,-66.467],[59.216,-66.467],[59.216,-83.084],[0.806,-83.084]],\"c\":true},\"ix\":2},\"nm\":\"T\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false}],\"nm\":\"T\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}]},\"fFamily\":\"League Spartan\"},{\"ch\":\"O\",\"size\":143,\"style\":\"Bold\",\"w\":87.7,\"data\":{\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-24.271],[-24.573,0],[0,24.271],[23.062,0]],\"o\":[[0,24.271],[23.868,0],[0,-24.271],[-22.861,0]],\"v\":[[2.316,-41.592],[44.211,1.511],[86.005,-41.592],[44.211,-84.595]],\"c\":true},\"ix\":2},\"nm\":\"O\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,12.387],[-14.603,0],[0,-12.387],[15.106,0]],\"o\":[[0,-12.387],[14.703,0],[0,12.387],[-15.509,0]],\"v\":[[22.76,-41.592],[44.211,-66.367],[65.561,-41.592],[44.211,-16.818]],\"c\":true},\"ix\":2},\"nm\":\"O\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false}],\"nm\":\"O\",\"np\":5,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}]},\"fFamily\":\"League Spartan\"},{\"ch\":\"N\",\"size\":143,\"style\":\"Bold\",\"w\":82.6,\"data\":{\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[24.976,-51.562],[25.177,-51.562],[58.209,0],[77.142,0],[77.142,-83.084],[58.209,-83.084],[58.209,-31.522],[58.008,-31.522],[24.976,-83.084],[6.042,-83.084],[6.042,0],[24.976,0]],\"c\":true},\"ix\":2},\"nm\":\"N\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false}],\"nm\":\"N\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}]},\"fFamily\":\"League Spartan\"},{\"ch\":\"S\",\"size\":143,\"style\":\"Bold\",\"w\":65.2,\"data\":{\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[15.106,0],[0,-15.509],[-9.97,-4.935],[0,-6.042],[4.129,0],[0,0],[0,0],[-19.437,0],[0,19.839],[9.265,3.928],[0,4.633],[-6.445,0],[0,0],[0,0]],\"o\":[[-13.394,0],[0,8.661],[9.869,4.935],[0,7.755],[-9.265,0],[0,0],[0,0],[16.214,0],[0,-10.876],[-9.467,-4.028],[0,-4.532],[8.56,0],[0,0],[0,0]],\"v\":[[36.658,-84.595],[9.567,-59.216],[25.378,-37.866],[44.11,-24.17],[32.126,-16.013],[11.783,-25.378],[2.316,-9.467],[33.536,1.511],[64.856,-25.278],[45.419,-47.937],[28.098,-59.921],[37.967,-67.374],[54.785,-61.633],[62.439,-76.74]],\"c\":true},\"ix\":2},\"nm\":\"S\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false}],\"nm\":\"S\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}]},\"fFamily\":\"League Spartan\"},{\"ch\":\"I\",\"size\":52,\"style\":\"Regular\",\"w\":22.61,\"data\":{\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[7.715,0],[14.893,0],[14.893,-71.826],[7.715,-71.826]],\"c\":true},\"ix\":2},\"nm\":\"I\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false}],\"nm\":\"I\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}]},\"fFamily\":\"Century Gothic\"},{\"ch\":\" \",\"size\":52,\"style\":\"Regular\",\"w\":27.69,\"data\":{},\"fFamily\":\"Century Gothic\"},{\"ch\":\"L\",\"size\":52,\"style\":\"Regular\",\"w\":46.19,\"data\":{\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[8.74,0],[43.555,0],[43.555,-6.934],[15.918,-6.934],[15.918,-71.826],[8.74,-71.826]],\"c\":true},\"ix\":2},\"nm\":\"L\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false}],\"nm\":\"L\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}]},\"fFamily\":\"Century Gothic\"},{\"ch\":\"O\",\"size\":52,\"style\":\"Regular\",\"w\":86.91,\"data\":{\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[5.766,-3.336],[3.339,-5.891],[0,-6.901],[-7.329,-7.291],[-10.651,0],[-7.313,7.324],[0,10.515],[7.329,7.259],[10.879,0]],\"o\":[[-5.766,3.337],[-3.339,5.892],[0,10.352],[7.329,7.292],[10.521,0],[7.313,-7.324],[0,-10.612],[-7.329,-7.259],[-6.711,0]],\"v\":[[24.23,-68.628],[10.574,-54.785],[5.566,-35.596],[16.56,-9.131],[43.53,1.807],[70.28,-9.18],[81.25,-35.938],[70.256,-62.744],[42.944,-73.633]],\"c\":true},\"ix\":2},\"nm\":\"O\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-4.826,-2.769],[-2.657,-4.61],[0,-5.701],[2.657,-4.691],[4.744,-2.704],[5.575,0],[5.917,5.881],[0,8.536],[-2.673,4.691],[-4.761,2.769],[-5.315,0]],\"o\":[[4.825,2.769],[2.657,4.61],[0,5.734],[-2.657,4.691],[-4.744,2.704],[-8.347,0],[-5.917,-5.88],[0,-5.766],[2.673,-4.691],[4.76,-2.769],[5.412,0]],\"v\":[[58.618,-62.496],[69.842,-51.428],[73.828,-35.962],[69.842,-20.324],[58.74,-9.232],[43.262,-5.176],[21.864,-13.996],[12.988,-35.62],[16.998,-51.306],[28.149,-62.496],[43.262,-66.65]],\"c\":true},\"ix\":2},\"nm\":\"O\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false}],\"nm\":\"O\",\"np\":5,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}]},\"fFamily\":\"Century Gothic\"},{\"ch\":\"V\",\"size\":52,\"style\":\"Regular\",\"w\":70.21,\"data\":{\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[34.082,0],[35.645,0],[66.895,-71.826],[59.082,-71.826],[34.888,-16.335],[11.084,-71.826],[3.271,-71.826]],\"c\":true},\"ix\":2},\"nm\":\"V\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false}],\"nm\":\"V\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}]},\"fFamily\":\"Century Gothic\"},{\"ch\":\"E\",\"size\":52,\"style\":\"Regular\",\"w\":53.61,\"data\":{\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[8.789,0],[49.658,0],[49.658,-7.031],[15.967,-7.031],[15.967,-35.254],[49.658,-35.254],[49.658,-42.285],[15.967,-42.285],[15.967,-64.795],[49.951,-64.795],[49.951,-71.826],[8.789,-71.826]],\"c\":true},\"ix\":2},\"nm\":\"E\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false}],\"nm\":\"E\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}]},\"fFamily\":\"Century Gothic\"},{\"ch\":\"T\",\"size\":52,\"style\":\"Regular\",\"w\":42.58,\"data\":{\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[17.627,-64.795],[17.627,0],[24.951,0],[24.951,-64.795],[40.967,-64.795],[40.967,-71.826],[1.611,-71.826],[1.611,-64.795]],\"c\":true},\"ix\":2},\"nm\":\"T\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false}],\"nm\":\"T\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}]},\"fFamily\":\"Century Gothic\"},{\"ch\":\"C\",\"size\":52,\"style\":\"Regular\",\"w\":81.3,\"data\":{\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[5.403,2.654],[6.705,0],[7.373,-7.178],[0,-10.514],[-6.087,-7.063],[-12.566,0],[-5.355,2.49],[-3.581,4.558],[0,0],[10.059,0],[6.006,5.859],[0,8.757],[-2.686,4.639],[-4.883,2.751],[-5.73,0],[-4.379,-2.1],[-3.125,-4.069],[0,0]],\"o\":[[-5.404,-2.653],[-11.101,0],[-7.373,7.178],[0,9.994],[7.259,8.366],[6.608,0],[5.354,-2.49],[0,0],[-6.771,7.878],[-9.148,0],[-6.006,-5.859],[0,-5.794],[2.686,-4.639],[4.883,-2.75],[5.241,0],[4.378,2.1],[0,0],[-3.451,-4.785]],\"v\":[[62.354,-69.653],[44.189,-73.633],[16.479,-62.866],[5.42,-36.328],[14.551,-10.742],[44.287,1.807],[62.231,-1.929],[75.635,-12.5],[69.971,-16.797],[44.727,-4.98],[21.997,-13.77],[12.988,-35.693],[17.017,-51.343],[28.369,-62.427],[44.287,-66.553],[58.716,-63.403],[69.971,-54.15],[75.635,-58.496]],\"c\":true},\"ix\":2},\"nm\":\"C\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false}],\"nm\":\"C\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}]},\"fFamily\":\"Century Gothic\"},{\"ch\":\"D\",\"size\":52,\"style\":\"Regular\",\"w\":74.41,\"data\":{\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-4.964,2.605],[-3.109,5.469],[0,7.195],[3.922,6.023],[6.966,2.441],[10.742,0],[0,0],[0,0]],\"o\":[[8.952,0],[4.964,-2.604],[3.108,-5.469],[0,-8.333],[-3.923,-6.022],[-4.851,-1.725],[0,0],[0,0],[0,0]],\"v\":[[31.592,0],[52.466,-3.906],[64.575,-16.016],[69.238,-35.01],[63.354,-56.543],[47.021,-69.238],[23.633,-71.826],[8.74,-71.826],[8.74,0]],\"c\":true},\"ix\":2},\"nm\":\"D\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[-4.492,-1.366],[-3.353,-4.911],[0,-6.927],[3.092,-4.57],[5.403,-1.756],[9.928,0],[0,0]],\"o\":[[0,0],[10.319,0],[5.989,1.822],[3.352,4.911],[0,6.602],[-3.093,4.57],[-3.841,1.236],[0,0],[0,0]],\"v\":[[15.625,-64.795],[20.703,-64.795],[42.92,-62.746],[56.934,-52.647],[61.963,-34.888],[57.324,-18.13],[44.58,-8.641],[23.926,-6.787],[15.625,-6.787]],\"c\":true},\"ix\":2},\"nm\":\"D\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false}],\"nm\":\"D\",\"np\":5,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}]},\"fFamily\":\"Century Gothic\"},{\"ch\":\"&\",\"size\":52,\"style\":\"Regular\",\"w\":75.68,\"data\":{\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[3.833,-2.817],[0,0],[0,0],[-1.695,2.718],[0,2.409],[1.302,2.035],[2.473,1.205],[2.995,0],[3.19,-2.733],[0,-3.579],[-1.122,-2.261],[-3.934,-4.75],[2.261,-3.598],[0,-3.582],[-3.353,-3.175],[-5.534,0],[-3.744,1.465],[-5.984,4.819],[0,0],[0,0],[2.48,2.468],[1.955,1.798],[-3.125,2.768],[0,0]],\"o\":[[0,0],[0,0],[4.987,-4.231],[1.695,-2.718],[0,-2.278],[-1.302,-2.034],[-2.474,-1.204],[-4.753,0],[-2.767,2.342],[0,2.05],[1.122,2.261],[-6.961,5.504],[-2.261,3.598],[0,4.755],[3.352,3.175],[4.166,0],[3.743,-1.465],[0,0],[0,0],[-1.785,-2.089],[-3.142,-3.14],[2.808,-2.01],[0,0],[-2.197,2.007]],\"v\":[[54.041,-19.327],[46.907,-26.562],[36.018,-37.988],[46.041,-48.413],[48.584,-56.104],[46.631,-62.573],[40.967,-67.432],[32.764,-69.238],[20.85,-65.138],[16.699,-56.256],[18.382,-49.789],[25.964,-39.272],[12.132,-25.62],[8.74,-14.849],[13.77,-2.956],[27.1,1.807],[38.965,-0.391],[53.556,-9.817],[63.083,0],[73.096,0],[66.698,-6.835],[59.052,-14.243],[67.95,-21.41],[63.086,-26.562]],\"c\":true},\"ix\":2},\"nm\":\"&\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[1.601,2.767],[0,1.302],[-1.6,1.237],[-2.547,0],[-1.616,-1.204],[0,-1.66],[1.239,-1.855],[3.489,-2.702]],\"o\":[[-0.654,-1.139],[0,-1.692],[1.599,-1.237],[2.676,0],[1.616,1.205],[0,1.433],[-1.761,2.605],[-2.91,-3.288]],\"v\":[[24.809,-52.441],[23.828,-56.104],[26.228,-60.498],[32.446,-62.354],[38.885,-60.547],[41.309,-56.25],[39.45,-51.318],[31.575,-43.359]],\"c\":true},\"ix\":2},\"nm\":\"&\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":2,\"ty\":\"sh\",\"ix\":3,\"ks\":{\"a\":0,\"k\":{\"i\":[[-1.953,-2.051],[0,0],[3.848,-1.66],[2.544,0],[2.316,2.101],[0,2.736],[-1.893,2.719],[-6.103,4.592]],\"o\":[[0,0],[-4.973,3.979],[-2.446,1.042],[-3.359,0],[-2.316,-2.1],[0,-2.312],[1.892,-2.719],[2.409,2.767]],\"v\":[[37.244,-26.625],[48.573,-14.952],[35.34,-6.494],[27.855,-4.932],[19.343,-8.083],[15.869,-15.337],[18.708,-22.884],[30.701,-33.852]],\"c\":true},\"ix\":2},\"nm\":\"&\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false}],\"nm\":\"&\",\"np\":6,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}]},\"fFamily\":\"Century Gothic\"},{\"ch\":\"S\",\"size\":52,\"style\":\"Regular\",\"w\":49.8,\"data\":{\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-3.548,-2.327],[-4.362,0],[-3.955,3.841],[0,5.209],[2.311,3.581],[6.217,4.59],[0.944,0.912],[0.651,1.465],[0,1.562],[-1.839,1.758],[-2.898,0],[-1.904,-1.139],[-2.702,-3.58],[0,0],[2.946,1.677],[3.385,0],[2.718,-1.481],[1.497,-2.571],[0,-3.125],[-2.539,-3.385],[-5.99,-4.524],[-2.246,-3.19],[0,-2.409],[1.106,-1.888],[2.116,-1.123],[2.409,0],[4.297,7.91],[0,0]],\"o\":[[3.548,2.327],[5.664,0],[3.955,-3.841],[0,-3.613],[-2.312,-3.58],[-5.241,-3.873],[-1.726,-1.725],[-0.652,-1.465],[0,-2.571],[1.839,-1.758],[2.246,0],[1.904,1.14],[0,0],[-3.288,-4.492],[-2.946,-1.676],[-3.191,0],[-2.718,1.482],[-1.498,2.572],[0,3.939],[1.465,2.019],[5.957,4.492],[1.627,2.312],[0,2.116],[-1.107,1.888],[-2.116,1.123],[-5.632,0],[0,0],[2.995,5.469]],\"v\":[[11.133,-1.685],[22.998,1.807],[37.427,-3.955],[43.359,-17.529],[39.893,-28.32],[27.1,-40.576],[17.822,-47.754],[14.258,-52.539],[13.281,-57.08],[16.04,-63.574],[23.145,-66.211],[29.37,-64.502],[36.279,-57.422],[42.139,-61.865],[32.788,-71.118],[23.291,-73.633],[14.429,-71.411],[8.105,-65.332],[5.859,-56.787],[9.668,-45.801],[20.85,-35.986],[33.154,-24.463],[35.596,-17.383],[33.936,-11.377],[29.102,-6.86],[22.314,-5.176],[7.422,-17.041],[1.318,-13.379]],\"c\":true},\"ix\":2},\"nm\":\"S\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false}],\"nm\":\"S\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}]},\"fFamily\":\"Century Gothic\"},{\"ch\":\"G\",\"size\":52,\"style\":\"Regular\",\"w\":87.21,\"data\":{\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[5.371,2.197],[6.087,0],[5.957,-3.304],[3.418,-5.859],[0,-6.803],[-5.957,-6.966],[-13.281,0],[-6.527,6.527],[-0.066,11.101],[0,0],[0,0],[0,0],[5.11,-4.166],[7.389,0],[5.11,2.783],[2.897,4.867],[0,5.404],[-2.8,4.736],[-5.095,2.767],[-5.632,0],[-4.769,-2.034],[-4.004,-3.938],[0,0]],\"o\":[[-5.371,-2.197],[-7.52,0],[-5.957,3.304],[-3.418,5.859],[0,9.148],[7.747,9.05],[10.938,0],[6.526,-6.526],[0,0],[0,0],[0,0],[-0.945,6.641],[-5.111,4.167],[-6.087,0],[-5.111,-2.783],[-2.898,-4.866],[0,-5.273],[2.799,-4.736],[5.094,-2.766],[4.524,0],[4.768,2.035],[0,0],[-5.111,-4.85]],\"v\":[[62.305,-70.337],[45.117,-73.633],[24.902,-68.677],[10.84,-54.932],[5.713,-35.938],[14.648,-11.768],[46.191,1.807],[72.388,-7.983],[82.275,-34.424],[51.318,-34.424],[51.318,-27.49],[74.219,-27.49],[65.137,-11.279],[46.387,-5.029],[29.59,-9.204],[17.578,-20.679],[13.232,-36.084],[17.432,-51.099],[29.272,-62.354],[45.361,-66.504],[59.302,-63.452],[72.461,-54.492],[78.027,-59.766]],\"c\":true},\"ix\":2},\"nm\":\"G\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false}],\"nm\":\"G\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}]},\"fFamily\":\"Century Gothic\"},{\"ch\":\"N\",\"size\":52,\"style\":\"Regular\",\"w\":73.97,\"data\":{\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[16.211,0],[16.211,-54.388],[63.623,0],[65.234,0],[65.234,-71.826],[58.154,-71.826],[58.154,-16.768],[10.352,-71.826],[8.789,-71.826],[8.789,0]],\"c\":true},\"ix\":2},\"nm\":\"N\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false}],\"nm\":\"N\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}]},\"fFamily\":\"Century Gothic\"},{\"ch\":\"V\",\"size\":143,\"style\":\"Bold\",\"w\":78.4,\"data\":{\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[32.025,0],[46.93,0],[81.775,-83.084],[60.425,-83.084],[39.478,-28.5],[18.53,-83.084],[-2.82,-83.084]],\"c\":true},\"ix\":2},\"nm\":\"V\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false}],\"nm\":\"V\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}]},\"fFamily\":\"League Spartan\"},{\"ch\":\"D\",\"size\":143,\"style\":\"Bold\",\"w\":73.8,\"data\":{\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,24.271],[22.76,0]],\"o\":[[0,0],[0,0],[22.861,0],[0,-24.17],[0,0]],\"v\":[[6.042,-83.084],[6.042,0],[30.112,0],[72.006,-41.592],[30.112,-83.084]],\"c\":true},\"ix\":2},\"nm\":\"D\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,-13.898],[13.998,0]],\"o\":[[0,0],[0,0],[14.099,0],[-0.101,13.898],[0,0]],\"v\":[[24.976,-16.919],[24.976,-66.165],[27.896,-66.165],[51.562,-41.492],[27.896,-16.919]],\"c\":true},\"ix\":2},\"nm\":\"D\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false}],\"nm\":\"D\",\"np\":5,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}]},\"fFamily\":\"League Spartan\"},{\"ch\":\"P\",\"size\":52,\"style\":\"Regular\",\"w\":59.18,\"data\":{\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[-3.255,0.781],[-2.539,3.109],[0,4.785],[2.604,3.142],[4.102,1.009],[8.203,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[8.919,0],[4.459,-1.074],[2.539,-3.108],[0,-4.752],[-2.605,-3.141],[-2.865,-0.716],[0,0],[0,0]],\"v\":[[8.691,0],[15.869,0],[15.869,-33.398],[20.996,-33.398],[39.258,-34.57],[49.756,-40.845],[53.564,-52.686],[49.658,-64.526],[39.6,-70.752],[22.998,-71.826],[8.691,-71.826]],\"c\":true},\"ix\":2},\"nm\":\"P\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-2.132,-0.845],[-1.302,-1.998],[0,-2.403],[1.302,-1.997],[2.278,-0.893],[4.915,0],[0,0],[0,0]],\"o\":[[4.85,0],[2.132,0.845],[1.302,1.998],[0,2.47],[-1.302,1.998],[-2.279,0.893],[0,0],[0,0],[0,0]],\"v\":[[28.564,-64.795],[39.038,-63.528],[44.189,-59.264],[46.143,-52.661],[44.189,-45.96],[38.818,-41.623],[28.027,-40.283],[15.869,-40.43],[15.869,-64.795]],\"c\":true},\"ix\":2},\"nm\":\"P\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false}],\"nm\":\"P\",\"np\":5,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}]},\"fFamily\":\"Century Gothic\"},{\"ch\":\"R\",\"size\":52,\"style\":\"Regular\",\"w\":60.69,\"data\":{\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-3.418,1.516],[-1.839,2.966],[0,3.912],[2.669,3.21],[4.264,0.978],[7.975,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[6.022,-0.032],[3.418,-1.515],[1.839,-2.966],[0,-4.694],[-2.67,-3.21],[-2.832,-0.652],[0,0],[0,0]],\"v\":[[9.131,0],[16.309,0],[16.309,-33.35],[20.367,-33.35],[46.198,0],[55.078,0],[29.248,-33.35],[43.408,-35.672],[51.294,-42.394],[54.053,-52.71],[50.049,-64.566],[39.648,-70.848],[23.438,-71.826],[9.131,-71.826]],\"c\":true},\"ix\":2},\"nm\":\"R\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-2.119,-0.846],[-1.305,-1.969],[0,-2.409],[1.288,-2.002],[2.299,-0.911],[4.793,0],[0,0],[0,0]],\"o\":[[4.922,0],[2.119,0.847],[1.304,1.97],[0,2.475],[-1.288,2.002],[-2.299,0.912],[0,0],[0,0],[0,0]],\"v\":[[28.976,-64.795],[39.539,-63.525],[44.675,-59.302],[46.631,-52.734],[44.699,-46.02],[39.319,-41.65],[28.682,-40.282],[16.309,-40.381],[16.309,-64.795]],\"c\":true},\"ix\":2},\"nm\":\"R\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false}],\"nm\":\"R\",\"np\":5,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}]},\"fFamily\":\"Century Gothic\"},{\"ch\":\"U\",\"size\":52,\"style\":\"Regular\",\"w\":65.48,\"data\":{\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.879,-2.799],[-4.134,-2.766],[-5.795,0],[-3.76,2.93],[-1.254,3.955],[0,6.413],[0,0],[0,0],[0,0],[0.488,-1.823],[1.465,-1.79],[2.18,-1.009],[2.376,0],[2.702,1.286],[1.302,1.904],[0.358,2.832],[0,5.144],[0,0],[0,0]],\"o\":[[0,7.292],[1.399,4.558],[4.134,2.766],[5.338,0],[3.76,-2.93],[1.253,-3.955],[0,0],[0,0],[0,0],[0,5.664],[-0.684,2.539],[-1.465,1.791],[-2.181,1.009],[-2.734,0],[-2.702,-1.286],[-1.302,-1.904],[-0.195,-1.27],[0,0],[0,0],[0,0]],\"v\":[[8.984,-28.467],[10.303,-13.33],[18.604,-2.344],[33.496,1.807],[47.144,-2.588],[54.663,-12.915],[56.543,-28.467],[56.543,-71.826],[49.365,-71.826],[49.365,-28.467],[48.633,-17.236],[45.41,-10.742],[39.941,-6.543],[33.105,-5.029],[24.951,-6.958],[18.945,-11.743],[16.455,-18.848],[16.162,-28.467],[16.162,-71.826],[8.984,-71.826]],\"c\":true},\"ix\":2},\"nm\":\"U\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false}],\"nm\":\"U\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}]},\"fFamily\":\"Century Gothic\"},{\"ch\":\"F\",\"size\":52,\"style\":\"Regular\",\"w\":48.49,\"data\":{\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[8.74,0],[15.918,0],[15.918,-35.254],[44.727,-35.254],[44.727,-42.285],[15.918,-42.285],[15.918,-64.795],[44.727,-64.795],[44.727,-71.826],[8.74,-71.826]],\"c\":true},\"ix\":2},\"nm\":\"F\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false}],\"nm\":\"F\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}]},\"fFamily\":\"Century Gothic\"},{\"ch\":\"M\",\"size\":52,\"style\":\"Regular\",\"w\":91.89,\"data\":{\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[12.402,0],[19.458,-51.758],[45.157,0],[46.992,0],[72.388,-51.367],[79.485,0],[86.523,0],[76.187,-71.826],[75.037,-71.826],[46.118,-12.891],[16.919,-71.826],[15.752,-71.826],[5.469,0]],\"c\":true},\"ix\":2},\"nm\":\"M\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false}],\"nm\":\"M\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}]},\"fFamily\":\"Century Gothic\"},{\"ch\":\"M\",\"size\":143,\"style\":\"Bold\",\"w\":94.6,\"data\":{\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[74.725,0],[93.658,0],[86.206,-83.084],[66.064,-83.084],[47.635,-35.147],[29.205,-83.084],[9.064,-83.084],[1.611,0],[20.544,0],[24.472,-49.246],[24.976,-49.246],[41.995,-0.504],[53.275,-0.504],[70.294,-49.246],[70.798,-49.246]],\"c\":true},\"ix\":2},\"nm\":\"M\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false}],\"nm\":\"M\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}]},\"fFamily\":\"League Spartan\"},{\"ch\":\"G\",\"size\":143,\"style\":\"Bold\",\"w\":82.9,\"data\":{\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[9.064,0],[0,14.099],[-11.682,0],[-4.834,-7.755],[0,0],[14.603,0],[0,-23.868],[-22.357,0],[-4.532,21.048]],\"o\":[[0,0],[0,0],[0,0],[0,10.172],[-11.682,0],[0,-14.401],[7.352,0],[0,0],[-7.251,-8.762],[-23.364,0],[0,23.767],[16.315,0],[0,0]],\"v\":[[81.171,-46.527],[42.801,-46.527],[42.801,-31.924],[61.935,-31.924],[43.909,-15.912],[22.76,-41.492],[43.909,-67.474],[62.439,-56.799],[74.826,-70.395],[42.801,-84.595],[2.316,-41.492],[42.801,1.511],[81.171,-28.5]],\"c\":true},\"ix\":2},\"nm\":\"G\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false}],\"nm\":\"G\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}]},\"fFamily\":\"League Spartan\"},{\"ch\":\"R\",\"size\":143,\"style\":\"Bold\",\"w\":71.6,\"data\":{\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,12.488],[15.408,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[10.172,-3.223],[0,-16.315],[0,0]],\"v\":[[6.042,-83.084],[6.042,0],[24.976,0],[24.976,-32.831],[50.354,0],[74.423,0],[45.822,-34.341],[62.842,-58.411],[35.751,-83.084]],\"c\":true},\"ix\":2},\"nm\":\"R\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,-10.373],[7.15,0]],\"o\":[[0,0],[0,0],[7.15,0],[0,10.373],[0,0]],\"v\":[[24.976,-46.225],[24.976,-67.978],[27.191,-67.978],[42.902,-57.101],[27.191,-46.225]],\"c\":true},\"ix\":2},\"nm\":\"R\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false}],\"nm\":\"R\",\"np\":5,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}]},\"fFamily\":\"League Spartan\"},{\"ch\":\"H\",\"size\":143,\"style\":\"Bold\",\"w\":76.2,\"data\":{\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[24.976,-33.334],[51.764,-33.334],[51.764,0],[70.697,0],[70.697,-83.084],[51.764,-83.084],[51.764,-49.951],[24.976,-49.951],[24.976,-83.084],[6.042,-83.084],[6.042,0],[24.976,0]],\"c\":true},\"ix\":2},\"nm\":\"H\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false}],\"nm\":\"H\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}]},\"fFamily\":\"League Spartan\"},{\"ch\":\"A\",\"size\":52,\"style\":\"Regular\",\"w\":73.97,\"data\":{\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[36.328,-71.826],[2.393,0],[10.4,0],[21.59,-23.633],[52.532,-23.633],[63.829,0],[71.582,0],[38.086,-71.826]],\"c\":true},\"ix\":2},\"nm\":\"A\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[49.428,-30.566],[24.872,-30.566],[37.18,-56.566]],\"c\":true},\"ix\":2},\"nm\":\"A\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false}],\"nm\":\"A\",\"np\":5,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}]},\"fFamily\":\"Century Gothic\"},{\"ch\":\"H\",\"size\":52,\"style\":\"Regular\",\"w\":68.31,\"data\":{\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[8.643,0],[15.82,0],[15.82,-34.668],[52.393,-34.668],[52.393,0],[59.57,0],[59.57,-71.826],[52.393,-71.826],[52.393,-41.699],[15.82,-41.699],[15.82,-71.826],[8.643,-71.826]],\"c\":true},\"ix\":2},\"nm\":\"H\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false}],\"nm\":\"H\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}]},\"fFamily\":\"Century Gothic\"},{\"ch\":\",\",\"size\":52,\"style\":\"Regular\",\"w\":27.69,\"data\":{\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[6.25,6.348],[11.084,8.398],[20.996,-10.059],[14.404,-13.184]],\"c\":true},\"ix\":2},\"nm\":\",\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false}],\"nm\":\",\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}]},\"fFamily\":\"Century Gothic\"},{\"ch\":\"Y\",\"size\":52,\"style\":\"Regular\",\"w\":59.18,\"data\":{\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[26.27,-34.326],[26.27,0],[33.35,0],[33.35,-34.326],[56.104,-71.826],[47.803,-71.826],[29.713,-42.204],[11.335,-71.826],[3.076,-71.826]],\"c\":true},\"ix\":2},\"nm\":\"Y\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false}],\"nm\":\"Y\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}]},\"fFamily\":\"Century Gothic\"}]}");

/***/ }),

/***/ "./src/images/html5.svg":
/*!******************************!*\
  !*** ./src/images/html5.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/html5.e1fe015c.svg";

/***/ }),

/***/ "./src/images/js.svg":
/*!***************************!*\
  !*** ./src/images/js.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/js.3f9ca62f.svg";

/***/ }),

/***/ "./src/images/linked.svg":
/*!*******************************!*\
  !*** ./src/images/linked.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/linked.9f2574ba.svg";

/***/ }),

/***/ "./src/images/node.svg":
/*!*****************************!*\
  !*** ./src/images/node.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/node.c675a4b6.svg";

/***/ }),

/***/ "./src/images/npm.png":
/*!****************************!*\
  !*** ./src/images/npm.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEABAMAAACuXLVVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAIVBMVEUAAADVAADVAADVAADVAAD////jVVXxqqrocnLeOTkAAAApvHalAAAABHRSTlMAquNyrCQOEwAAAAFiS0dEAIgFHUgAAAAHdElNRQfhDBAGIxbK1WabAAAA2ElEQVR42u3awQnCMBiA0YgT6EyCXaBuoBMI4r07uK4ICRhN2mKRVnzvlvInfD01h4YAAAAAAAAAAAAA/L3dzAQIECBAgAABywloqw5xYl8fOceRYzuaAAECBAgQIGDhAdmB5YBsXzHgdV++FiBAgAABAgQIECBAgIDfDzhFswXU5wUIECBAgAABHwZcnnXx4e2xuBYD6vNJ2tcU128Bw8o3oqkECBAgQIAAAWEzaBtHm+wKkA4Y3t9vxM/fq/43+D4BAgQIECBAwHrq9xwAAAAAAAAAAJbtDrXx0oG/KEpDAAAALnpUWHRkYXRlOmNyZWF0ZQAAeNozMjA01zU00jU0CzEwszI2tTIy1DYwsDIwAABByAUN7eCllQAAAC56VFh0ZGF0ZTptb2RpZnkAAHjaMzIwNNc1NNI1NAsxMLMyNrUyMtQ2MLAyMAAAQcgFDcTfDR0AAAAASUVORK5CYII="

/***/ }),

/***/ "./src/images/nyx-logo.png":
/*!*********************************!*\
  !*** ./src/images/nyx-logo.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/nyx-logo.ddf39560.png";

/***/ }),

/***/ "./src/images/post-it.png":
/*!********************************!*\
  !*** ./src/images/post-it.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/post-it.901e2599.png";

/***/ }),

/***/ "./src/images/posted-logo.png":
/*!************************************!*\
  !*** ./src/images/posted-logo.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/posted-logo.3fd560a8.png";

/***/ }),

/***/ "./src/images/ps.svg":
/*!***************************!*\
  !*** ./src/images/ps.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ps.6f2afdbb.svg";

/***/ }),

/***/ "./src/images/rails.svg":
/*!******************************!*\
  !*** ./src/images/rails.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/rails.25a6dd09.svg";

/***/ }),

/***/ "./src/images/react.svg":
/*!******************************!*\
  !*** ./src/images/react.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/react.f0793d9f.svg";

/***/ }),

/***/ "./src/images/ruby.png":
/*!*****************************!*\
  !*** ./src/images/ruby.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ruby.5afbac2e.png";

/***/ }),

/***/ "./src/images/salon.svg":
/*!******************************!*\
  !*** ./src/images/salon.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/salon.c40b3fb2.svg";

/***/ }),

/***/ "./src/images/sass.svg":
/*!*****************************!*\
  !*** ./src/images/sass.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/sass.4e3c2a4c.svg";

/***/ }),

/***/ "./src/images/slack.svg":
/*!******************************!*\
  !*** ./src/images/slack.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/slack.99df04fb.svg";

/***/ }),

/***/ "./src/images/syn-logo.png":
/*!*********************************!*\
  !*** ./src/images/syn-logo.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/syn-logo.4a92243e.png";

/***/ }),

/***/ "./src/images/twitter.svg":
/*!********************************!*\
  !*** ./src/images/twitter.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/twitter.b8a1c35e.svg";

/***/ }),

/***/ "./src/images/vuejs.svg":
/*!******************************!*\
  !*** ./src/images/vuejs.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/vuejs.c8490286.svg";

/***/ }),

/***/ "./src/images/xd.svg":
/*!***************************!*\
  !*** ./src/images/xd.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/xd.0b5a7c42.svg";

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/HBGines/Desktop/BrandonCode/react-portfolio/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/HBGines/Desktop/BrandonCode/react-portfolio/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/HBGines/Desktop/BrandonCode/react-portfolio/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map