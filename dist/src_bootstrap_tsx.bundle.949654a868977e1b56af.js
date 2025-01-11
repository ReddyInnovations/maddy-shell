"use strict";
(self["webpackChunkmaddy_shell"] = self["webpackChunkmaddy_shell"] || []).push([["src_bootstrap_tsx"],{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist/integration/react */ "./node_modules/redux-persist/es/integration/react.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "webpack/sharing/consume/default/react-intl/react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locale/messages */ "./src/locale/messages.ts");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./redux/store */ "./src/redux/store.ts");
/* harmony import */ var _styles_globalStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/globalStyles */ "./src/styles/globalStyles.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes */ "./src/routes.tsx");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux-persist */ "webpack/sharing/consume/default/redux-persist/redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");











const locale = navigator.language.split('-')[0];
const persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_8__.persistStore)(_redux_store__WEBPACK_IMPORTED_MODULE_5__.store);
const App = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.BrowserRouter, {
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_0__.Provider, {
    store: _redux_store__WEBPACK_IMPORTED_MODULE_5__.store,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_2__.PersistGate, {
      loading: null,
      persistor: persistor,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_intl__WEBPACK_IMPORTED_MODULE_3__.IntlProvider, {
        locale: locale,
        messages: _locale_messages__WEBPACK_IMPORTED_MODULE_4__["default"][locale],
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_6__.GlobalStyles, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_routes__WEBPACK_IMPORTED_MODULE_7__["default"], {})]
      })
    })
  })
});
_c2 = App;
_c = App;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);
var _c;
__webpack_require__.$Refresh$.register(_c, "App");
var _c2;
__webpack_require__.$Refresh$.register(_c2, "App");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/bootstrap.tsx":
/*!***************************!*\
  !*** ./src/bootstrap.tsx ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "./src/App.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




const container = document.getElementById('root');
const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_0__.createRoot)(container);
console.log('omr : vemireddy login app Started');
debugger;
root.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_App__WEBPACK_IMPORTED_MODULE_1__["default"], {}));

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/Misc/Loader.tsx":
/*!****************************************!*\
  !*** ./src/components/Misc/Loader.tsx ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "webpack/sharing/consume/default/styled-components/styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



// Spinner animation

const spin = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}"]);

// Spinner style for the loader
const Spinner = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Loader__Spinner",
  componentId: "sc-1wixc5w-0"
})(["border:4px solid rgba(0,0,0,0.1);border-top:4px solid #3498db;border-radius:50%;width:40px;height:40px;animation:", " 1s linear infinite;"], spin);

// Container for the loader, can be placed anywhere (button, screen, etc.)
_c = Spinner;
const LoaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Loader__LoaderContainer",
  componentId: "sc-1wixc5w-1"
})(["display:flex;justify-content:center;align-items:center;position:", ";top:0;left:0;right:0;bottom:0;z-index:9999;", ""], props => props.fullScreen ? 'fixed' : 'absolute', props => props.fullScreen && `
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      justify-content: center;
      align-items: center;
      flex-direction: column;
  `);

// Optional loading text style
_c2 = LoaderContainer;
const LoadingText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Loader__LoadingText",
  componentId: "sc-1wixc5w-2"
})(["margin-top:12px;color:#3498db;font-size:14px;font-weight:bold;"]);
_c3 = LoadingText;
const Loader = ({
  text,
  fullScreen = false
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(LoaderContainer, {
    fullScreen: fullScreen,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Spinner, {}), text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(LoadingText, {
      children: text
    })]
  });
};
_c5 = Loader;
_c4 = Loader;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);
var _c, _c2, _c3, _c4;
__webpack_require__.$Refresh$.register(_c, "Spinner");
__webpack_require__.$Refresh$.register(_c2, "LoaderContainer");
__webpack_require__.$Refresh$.register(_c3, "LoadingText");
__webpack_require__.$Refresh$.register(_c4, "Loader");
var _c5;
__webpack_require__.$Refresh$.register(_c5, "Loader");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/locale/messages.ts":
/*!********************************!*\
  !*** ./src/locale/messages.ts ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

const messages = {
  en: {
    loading: 'Loaading...',
    title: "Contact Us",
    fullNameLabel: "Your Full Name",
    emailLabel: "Email Address",
    mobileLabel: "Mobile Number",
    messageLabel: "Write Message",
    buttonLabel: "Send Message",
    successMessageTitle: "Thank you for choosing us!",
    successMessage: "Our team will contact you shortly."
  },
  fr: {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (messages);

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/redux/slices/contactDetailsSlice.ts":
/*!*************************************************!*\
  !*** ./src/redux/slices/contactDetailsSlice.ts ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   setContactDetails: () => (/* binding */ setContactDetails)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "webpack/sharing/consume/default/@reduxjs/toolkit/@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


const initialState = {
  siteTitle: "MaddyTech",
  location: {
    title: "Our Location",
    address: "No 16, 18th Cross 6th Main, BTm 2nd Stage, Bangalore, 560076"
  },
  phone: {
    title: "Urgent Call",
    number1: "+91 8886380746",
    number2: "+91 6301804286"
  },
  email: {
    title: "Email Address",
    address: "vemireddyomr@gmai.com",
    website: "www.maddy.com"
  },
  socialLinks: {
    whatsapp: "https://wa.me/8886380746",
    instagram: "https://www.instagram.com/vemireddy_official",
    linkedin: "https://www.linkedin.com/in/madhava-reddy-vemireddy-9a0826167",
    gmail: "mailto:vemireddyomr@gmail.com"
  },
  profileText: {
    greeting: "Hello, It's Me",
    name: "Madhava Reddy Vemireddy",
    title: "Full Stack Developer",
    description: "I specialize in building responsive frontends with React and scalable backends with .NET C#. My focus is on delivering modern, efficient, and user-friendly web solutions.",
    linkText: "More About Me",
    linkURL: "/about"
  }
};
const contactDetailsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'contactDetails',
  initialState,
  reducers: {
    setContactDetails: (state, action) => {
      return {
        ...state,
        ...action.payload
      };
    }
  }
});
const {
  setContactDetails
} = contactDetailsSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactDetailsSlice.reducer);

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/redux/slices/projectSlice.ts":
/*!******************************************!*\
  !*** ./src/redux/slices/projectSlice.ts ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProject: () => (/* binding */ addProject),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   removeProject: () => (/* binding */ removeProject),
/* harmony export */   updateProject: () => (/* binding */ updateProject)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "webpack/sharing/consume/default/@reduxjs/toolkit/@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


// Define initial state
const initialState = {
  projects: [{
    title: "HCC Turn In Migration",
    details: ["Developed vehicle remarketing tools using ReactJS and Spring for Hyundai and Kia.", "Refactored a monolithic application into microservices using ReactJS, SCSS, and Spring.", "Created XML templates, implemented the service layer, and converted XML to JSON."],
    duration: "Aug. 2021 to Feb. 2022",
    type: "professional"
  }, {
    title: "HCC/TCCI/MBC Demo Program",
    details: ["Developed a demo program for Hyundai, Lexus, Toyota and Mercedes Benz vehicles.", "Created seeding scripts, launched vehicles to new states, and validated prices.", "Ensured compliance with the complete vehicle lifecycle."],
    duration: "Mar. 2022 to Aug. 2022",
    type: "professional"
  }, {
    title: "Bid Buy Migration",
    details: ["Developed a generic vehicle purchasing tool in responsive design.", "Created reusable UI components like Vehicle Summary Prices and Transport Options.", "Integrated user selections with APIs to process auction vehicle purchases."],
    duration: "Sep. 2022 to Apr. 2023",
    type: "professional"
  }, {
    title: "Search 2.0 Migration",
    details: ["Developed a generic vehicle filter tool with a responsive design.", "Created reusable components like Filter Modal and Saved Search Modal.", "Implemented functionality for filtering vehicles and saving searches."],
    duration: "May. 2023 to Dec. 2023",
    type: "professional"
  }, {
    title: "Chase Seller Removed Vehicles",
    details: ["Implemented a feature to automatically remove vehicles meeting seller removal conditions.", "Stored audit information for tracking purposes."],
    duration: "Jan. 2024 to Mar. 2024",
    type: "professional"
  }, {
    title: "HCC Loan Pay Off",
    details: ["Developed a Loan Pay Off tool using ASP.NET framework.", "Created APIs to fetch loan details, payment method fees, and process loan payoff requests."],
    duration: "Apr. 2024 to Oct. 2024",
    type: "professional"
  }, {
    title: "Retail IMS Project",
    details: ["Developing a Retail Inventory Management System (IMS) to streamline retail inventory processes.", "Building secure APIs and responsive interfaces using React and ASP.NET."],
    duration: "Nov. 2023 to Present",
    type: "professional"
  }, {
    title: "IRASAH Training Institute",
    details: ["A static React app featuring services, contact forms, and responsive design."],
    url: "https://irasah.com",
    duration: "Completed: 2024",
    type: "personal"
  }, {
    title: "Account Management API",
    details: ["Developed RESTful APIs for user authentication, product management, and notifications."],
    url: "https://maddyhub.onrender.com/index.html",
    duration: "Hosted: 2024",
    type: "personal"
  }]
};

// Create the slice
const projectSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'projects',
  initialState,
  reducers: {
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },
    updateProject: (state, action) => {
      const {
        index,
        updatedProject
      } = action.payload;
      state.projects[index] = updatedProject;
    },
    removeProject: (state, action) => {
      const index = action.payload;
      state.projects.splice(index, 1);
    }
  }
});

// Export the actions
const {
  addProject,
  updateProject,
  removeProject
} = projectSlice.actions;

// Export the reducer
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectSlice.reducer);

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/redux/slices/servicesSlice.ts":
/*!*******************************************!*\
  !*** ./src/redux/slices/servicesSlice.ts ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   setServices: () => (/* binding */ setServices)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "webpack/sharing/consume/default/@reduxjs/toolkit/@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


const initialState = {
  services: [{
    label: 'Consulting & Staffing',
    description: 'We offer comprehensive employment services such as payroll and benefits administration, HR management, and assistance.',
    icon: 'icon1',
    url: '/consulting-staffing'
  }, {
    label: 'Product Development',
    description: 'Looking for a fast, creative, and experienced product design company?',
    icon: 'icon2',
    url: '/product-development'
  }, {
    label: 'UX / UI Design Strategy',
    description: 'Complex problems solved by Service Design Thinking.',
    icon: 'icon3',
    url: '/ux-ui-design-strategy'
  }, {
    label: 'Web Design And Development',
    description: 'We want to help them easily find you and discover all that you have to offer.',
    icon: 'icon4',
    url: '/web-design-development'
  }, {
    label: 'Mobile App Development',
    description: 'Your digital partner to create inspirational design and robust solution for Web, Mobile & Cloud.',
    icon: 'icon5',
    url: '/mobile-app-development'
  }, {
    label: 'Digital Marketing',
    description: 'Are you looking for your company\'s domain to appear on the top of the 1st page in Google?',
    icon: 'icon6',
    url: '/digital-marketing'
  }, {
    label: 'Branding',
    description: 'Good branding can set you apart from the crowd and bring your company\'s vision to life.',
    icon: 'icon7',
    url: '/branding'
  }, {
    label: 'Outdoor Marketing',
    description: 'We make sure your brand is heard and seen in every possible way and yes we measure as well!',
    icon: 'icon8',
    url: '/outdoor-marketing'
  }]
};
const servicesSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'services',
  initialState,
  reducers: {
    setServices: (state, action) => {
      return {
        ...state,
        ...action.payload
      };
    }
  }
});
const {
  setServices
} = servicesSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (servicesSlice.reducer);

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/redux/slices/technologySlice.ts":
/*!*********************************************!*\
  !*** ./src/redux/slices/technologySlice.ts ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "webpack/sharing/consume/default/@reduxjs/toolkit/@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


const initialState = {
  technologies: [{
    url: '',
    label: 'Master Programs'
  }, {
    url: '',
    label: 'Cloud Computing'
  }, {
    url: '',
    label: 'Data Science AI'
  }, {
    url: '',
    label: 'DevOps'
  }, {
    url: '',
    label: 'Software Testing'
  }, {
    url: '',
    label: 'Programming'
  }, {
    url: '',
    label: 'Web Designing'
  }]
};
const technologySlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'technology',
  initialState,
  reducers: {}
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (technologySlice.reducer);

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/redux/store.ts":
/*!****************************!*\
  !*** ./src/redux/store.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   rootReducer: () => (/* binding */ rootReducer),
/* harmony export */   store: () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "webpack/sharing/consume/default/@reduxjs/toolkit/@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-persist */ "webpack/sharing/consume/default/redux-persist/redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist/lib/storage */ "./node_modules/redux-persist/lib/storage/index.js");
/* harmony import */ var _slices_servicesSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slices/servicesSlice */ "./src/redux/slices/servicesSlice.ts");
/* harmony import */ var _slices_technologySlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slices/technologySlice */ "./src/redux/slices/technologySlice.ts");
/* harmony import */ var _slices_contactDetailsSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slices/contactDetailsSlice */ "./src/redux/slices/contactDetailsSlice.ts");
/* harmony import */ var _slices_projectSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slices/projectSlice */ "./src/redux/slices/projectSlice.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");








const persistConfig = {
  key: 'root',
  // The key under which the persisted state will be stored.
  storage: redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2__["default"] // The storage mechanism (localStorage by default).
};
const rootReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  servicesSlice: _slices_servicesSlice__WEBPACK_IMPORTED_MODULE_3__["default"],
  technologySlice: _slices_technologySlice__WEBPACK_IMPORTED_MODULE_4__["default"],
  contactDetailsSlice: _slices_contactDetailsSlice__WEBPACK_IMPORTED_MODULE_5__["default"],
  projectSlice: _slices_projectSlice__WEBPACK_IMPORTED_MODULE_6__["default"]
});
const persistedReducer = (0,redux_persist__WEBPACK_IMPORTED_MODULE_1__.persistReducer)(persistConfig, rootReducer);
const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/routes.tsx":
/*!************************!*\
  !*** ./src/routes.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Misc_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Misc/Loader */ "./src/components/Misc/Loader.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s2 = __webpack_require__.$Refresh$.signature();
var _s = __webpack_require__.$Refresh$.signature();





// Define route object type

// Define the routes array
const routes = [{
  path: '/',
  label: 'Home',
  Component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_react-icons_fa_index_mjs"), __webpack_require__.e("src_pages_Profile_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Profile */ "./src/pages/Profile.tsx")))
}, {
  path: '/about',
  label: 'About',
  Component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_pages_About_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/About */ "./src/pages/About.tsx")))
}, {
  path: '/skills',
  label: 'Skills',
  Component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("src_components_Card_CardSection_tsx"), __webpack_require__.e("src_pages_Skills_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Skills */ "./src/pages/Skills.tsx")))
}, {
  path: '/education',
  label: 'Education',
  Component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("src_components_Card_CardSection_tsx"), __webpack_require__.e("src_pages_Education_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Education */ "./src/pages/Education.tsx")))
}, {
  path: '/experience',
  label: 'Experience',
  Component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("src_components_Card_CardSection_tsx"), __webpack_require__.e("src_pages_Experience_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Experience */ "./src/pages/Experience.tsx")))
}, {
  path: '/projects',
  label: 'Projects',
  Component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("src_components_Card_CardSection_tsx"), __webpack_require__.e("src_pages_Projects_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Projects */ "./src/pages/Projects.tsx")))
}];

// Define quick links for the header
const quickLinks = [{
  label: 'Home',
  url: '/'
}, {
  label: 'About',
  url: '/about'
}, {
  label: 'Skills',
  url: '/skills'
}, {
  label: 'Education',
  url: '/education'
}, {
  label: 'Experience',
  url: '/experience'
}, {
  label: 'Projects',
  url: '/projects'
}];
const Header = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(_c = () => __webpack_require__.e(/*! import() */ "webpack_container_remote_maddy_widget_Header").then(__webpack_require__.t.bind(__webpack_require__, /*! maddy_widget/Header */ "webpack/container/remote/maddy_widget/Header", 23)));
_c2 = Header;
const Footer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(_c3 = () => __webpack_require__.e(/*! import() */ "webpack_container_remote_maddy_widget_Footer").then(__webpack_require__.t.bind(__webpack_require__, /*! maddy_widget/Footer */ "webpack/container/remote/maddy_widget/Footer", 23)));
_c4 = Footer;
const WhatsAppWidget = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(_c5 = () => __webpack_require__.e(/*! import() */ "webpack_container_remote_maddy_widget_WhatsAppWidget").then(__webpack_require__.t.bind(__webpack_require__, /*! maddy_widget/WhatsAppWidget */ "webpack/container/remote/maddy_widget/WhatsAppWidget", 23)));
_c6 = WhatsAppWidget;
const AppRoutes = () => {
  _s2();
  _s();
  const {
    location,
    siteTitle,
    socialLinks
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.contactDetailsSlice);
  const services = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.servicesSlice.services);
  const technologies = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.technologySlice.technologies);
  const [menuOpen, setMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Misc_Loader__WEBPACK_IMPORTED_MODULE_2__["default"], {
        text: "Loading...",
        fullScreen: true
      }),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Header, {
        menuLinks: quickLinks,
        logoSrc: "mainLogo",
        menuOpen: menuOpen,
        setMenuOpen: setMenuOpen,
        onLoginClick: () => console.log('Login Clicked')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Routes, {
        children: routes.map(({
          path,
          Component
        }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
          path: path,
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Component, {})
        }, path))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Footer, {
        quickLinks: quickLinks,
        socialLinks: socialLinks,
        services: services,
        technologies: technologies,
        logoSrc: "mainLogo",
        companyName: siteTitle,
        address: location.address,
        themeColors: {
          background: "#333333",
          text: "#ffffff",
          accent: "#FFD700",
          linkHover: "#FFA500"
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(WhatsAppWidget, {
        phoneNumber: "8886380746",
        position: {
          bottom: 50,
          right: 30
        },
        backgroundColor: "#25D366",
        iconColor: "white",
        iconSize: 35,
        tooltipText: "Contact us on WhatsApp",
        draggable: true
      })]
    })
  });
};
_s2(AppRoutes, "5yNjUpLiJ+8ev8M66lua+nSv+xk=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector];
});
_c8 = AppRoutes;
_s(AppRoutes, "h4SkC31nkYyNPQRxqUTSHnmxS90=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector];
});
_c7 = AppRoutes;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppRoutes);
var _c, _c2, _c3, _c4, _c5, _c6, _c7;
__webpack_require__.$Refresh$.register(_c, "Header$React.lazy");
__webpack_require__.$Refresh$.register(_c2, "Header");
__webpack_require__.$Refresh$.register(_c3, "Footer$React.lazy");
__webpack_require__.$Refresh$.register(_c4, "Footer");
__webpack_require__.$Refresh$.register(_c5, "WhatsAppWidget$React.lazy");
__webpack_require__.$Refresh$.register(_c6, "WhatsAppWidget");
__webpack_require__.$Refresh$.register(_c7, "AppRoutes");
var _c8;
__webpack_require__.$Refresh$.register(_c8, "AppRoutes");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/styles/globalStyles.ts":
/*!************************************!*\
  !*** ./src/styles/globalStyles.ts ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalStyles: () => (/* binding */ GlobalStyles)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "webpack/sharing/consume/default/styled-components/styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


const GlobalStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)(["[data-color-mode*='dark'],[data-color-mode*='dark'] body{--gradient-from:#1c1e20;--gradient-to:#0d1117;--color-rgb:255 255 255;}[data-color-mode*='light'],[data-color-mode*='light'] body{--gradient-from:#e5eaf0;--gradient-to:#fff;--color-rgb:0 0 0;}body{font-size:14px;margin:0;padding:0;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;min-height:100vh;&::before{content:\"\";position:absolute;width:100%;top:0px;--gradient-stops:var(--gradient-from),var(--gradient-to);background-image:linear-gradient(to bottom,var(--gradient-stops));}}html{min-height:100%;}*{box-sizing:border-box;}"]);

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

}]);
//# sourceMappingURL=src_bootstrap_tsx.bundle.949654a868977e1b56af.js.map