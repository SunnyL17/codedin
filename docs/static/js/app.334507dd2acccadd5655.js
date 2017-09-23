webpackJsonp([1],{

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app'

});

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Widget__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Widget___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Widget__);
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'Landing',
    components: {
        'v-wid': __WEBPACK_IMPORTED_MODULE_0__Widget___default.a
    },
    computed: {
        user() {
            return this.$store.state.user;
        }
    },
    methods: {
        computed: {
            user() {
                return this.$store.state.user;
            }
        }

        /*,
        GoBack(){
           this.$store.commit('ShareInfo',{
                  input1:this.user.input1
                  
              }); 
              this.$router.push({path:'/'})      
        }
        */
    }
});

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function () {
    return {
      email: '',
      password: ''

    };
  },
  computed: {
    user() {
      console.log(this.$store.state);
      return this.$store.state.user;
    }
  },
  methods: {
    computed: {
      user() {
        console.log(this.$store.state);
        return this.$store.state.user;
      }
    },
    signIn: function () {
      var self = this;
      __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().signInWithEmailAndPassword(this.email, this.password).then(user => {

        self.$store.commit('ShareInfo', {
          email: this.email

        });
        self.$router.push('/Landing');
      }, err => {
        alert('Oops.' + err.message);
      });
    }
  }
});

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

//
//
//
//
//

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



let config = {
    apiKey: "AIzaSyDg8yfERg5JR7lqrBUG5T5RW35dTNMB-io",
    authDomain: "vue1-51412.firebaseapp.com",
    databaseURL: "https://vue1-51412.firebaseio.com",
    projectId: "vue1-51412",
    storageBucket: "vue1-51412.appspot.com",
    messagingSenderId: "520496306287"

};
let app = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.initializeApp(config);

let db = app.database();
let ProjectRef = db.ref('Projects');

/* harmony default export */ __webpack_exports__["default"] = ({
    firebase: {
        Projects: ProjectRef

    },
    computed: {
        user() {
            return this.$store.state.user;
        },
        filter() {
            return this.Projects.filter(Project => {
                return Project.projectname.includes(this.search);
            });
        }
    },
    data() {
        return {
            Add: false,
            search: '',
            Project: {
                skills: '',
                skillsneed: '',
                projectname: '',
                projectstatement: '',
                contactinfo: '',
                user: ''
            }
        };
    },
    methods: {
        AddProject() {
            var self = this;
            if (self.user.email !== '') {
                self.Add = !self.Add;
            } else {

                alert('Vaild User!');
            }
        },
        deleteProject: function (Project) {

            if (confirm('Are you sure?') === true) {
                ProjectRef.child(Project['.key']).remove();
            } else {
                console.log('user decides not to');
            }
        },
        NewProject() {
            var self = this;
            console.log(self.user.email);
            __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('https://vue1-51412.firebaseio.com/Projects.json', self.Project, self.Project.user = self.user.email).then(function (data) {
                console.log(data);
            }).then(response => self.Add = false);
        },
        computed: {
            user() {
                return this.$store.state.user;
            }
        }

    }
});

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(35);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    data: function () {
        return {
            email: '',
            password: ''

        };
    },
    methods: {
        signUp: function () {
            var self = this;
            __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().createUserWithEmailAndPassword(this.email, this.password).then(function (user) {
                alert('You account has been created! Lets Login!');
                self.$router.push('/Login');
            }, function (err) {
                alert('Oops.' + err.message);
            });
        }
    }
});

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            imageUrl: '',
            logoUrl: 'klj',
            imageSrc: undefined,
            User: {
                localpic: ''
            }
        };
    },
    methods: {
        postPic() {
            var self = this;
            __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('https://vue1-51412.firebaseio.com/Projects.json', self.logoUrl).then(function (data) {
                console.log('image src store');
            });
        },
        previewThumbnail: function (event) {
            console.log('it works 1');
            var self = this;
            var input = event.target;
            let getFile = input.files[0];
            let storageRef = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.storage().ref(getFile.name);
            let task = storageRef.put(getFile);
            console.log(storageRef);
            let images = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.storage().ref(getFile.name).getDownloadURL();
            console.log(images);

            if (input.files && input.files[0]) {
                var reader = new FileReader();
                var vm = this;
                reader.onload = function (e) {
                    vm.imageSrc = e.target.result;
                    vm.imageData = input.files[0];
                    this.imageUrl = reader.result;
                };

                reader.readAsDataURL(input.files[0]);
            }
        },
        filesChange(fileList) {
            console.log('it works 2');
            if (!fileList.length) return;
            this.image = fileList[0];
            console.log(this.image);
        }
    }
});

/***/ }),

/***/ 125:
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vuex_store__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuefire__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuefire___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vuefire__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue_router__ = __webpack_require__(35);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.









__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

let config = {
    apiKey: "AIzaSyDg8yfERg5JR7lqrBUG5T5RW35dTNMB-io",
    authDomain: "vue1-51412.firebaseapp.com",
    databaseURL: "https://vue1-51412.firebaseio.com",
    projectId: "vue1-51412",
    storageBucket: "vue1-51412.appspot.com",
    messagingSenderId: "520496306287"

};

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_3_vuex__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_5_vuefire___default.a);

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
    el: '#app',
    router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
    store: __WEBPACK_IMPORTED_MODULE_4__vuex_store__["a" /* default */],
    template: '<App/>',
    components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ }),

/***/ 127:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 128:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 129:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 130:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 131:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 132:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 133:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 134:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/codematch.4273d93.png";

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(133)
}
var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(119),
  /* template */
  __webpack_require__(218),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-7556050a",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(130)
}
var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(120),
  /* template */
  __webpack_require__(215),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-422bfc1c",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(127)
}
var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(121),
  /* template */
  __webpack_require__(212),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-0abc6e3b",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(129)
}
var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(122),
  /* template */
  __webpack_require__(214),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-1fadc50c",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(131)
}
var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(123),
  /* template */
  __webpack_require__(216),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-4fad7475",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(134)
}
var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(124),
  /* template */
  __webpack_require__(219),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-8423998a",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(132)
}
var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(125),
  /* template */
  __webpack_require__(217),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-5bcee7a1",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 212:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._v("\n    " + _vm._s(_vm.user.input1) + "\n")])
},staticRenderFns: []}

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('img', {
    staticClass: "codematch",
    attrs: {
      "src": __webpack_require__(204)
    }
  }), _vm._v(" "), _c('router-view')], 1)
},staticRenderFns: []}

/***/ }),

/***/ 214:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('p', {
    staticClass: "title"
  }, [_vm._v("CodingDigger")]), _vm._v(" "), _c('p', [_c('span', {
    staticClass: "user_email"
  }, [_vm._v(_vm._s(_vm.user.email))]), _vm._v(", are you interested in any project? If not, feel free to \n    "), _c('button', {
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.AddProject($event)
      }
    }
  }, [_vm._v(" Add Project + ")]), _vm._v("\n    and see if anyone is interested!")]), _vm._v(" "), (_vm.Add) ? _c('div', [_c('p', [_c('label', [_vm._v("Project Name:")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.Project.projectname),
      expression: "Project.projectname"
    }],
    attrs: {
      "type": "text",
      "required": ""
    },
    domProps: {
      "value": (_vm.Project.projectname)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.Project.projectname = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('p', [_c('label', [_vm._v("What is this project about:")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.Project.projectstatement),
      expression: "Project.projectstatement"
    }],
    attrs: {
      "rows": "3",
      "cols": "40",
      "name": "comment",
      "form": "usrform",
      "required": ""
    },
    domProps: {
      "value": (_vm.Project.projectstatement)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.Project.projectstatement = $event.target.value
      }
    }
  }, [_vm._v(" Enter text here...")])]), _vm._v(" "), _c('p', [_c('label', [_vm._v("What skills you have for this project:")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.Project.skills),
      expression: "Project.skills"
    }],
    attrs: {
      "rows": "3",
      "cols": "40",
      "name": "comment",
      "form": "usrform",
      "required": ""
    },
    domProps: {
      "value": (_vm.Project.skills)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.Project.skills = $event.target.value
      }
    }
  }, [_vm._v(" Enter text here...")])]), _vm._v(" "), _c('p', [_c('label', [_vm._v("What are you look for: ")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.Project.skillsneed),
      expression: "Project.skillsneed"
    }],
    attrs: {
      "rows": "3",
      "cols": "40",
      "name": "comment",
      "form": "usrform",
      "required": ""
    },
    domProps: {
      "value": (_vm.Project.skillsneed)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.Project.skillsneed = $event.target.value
      }
    }
  }, [_vm._v(" Enter text here...")])]), _vm._v(" "), _c('p', [_c('label', [_vm._v("How would you like to be contacted:")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.Project.contactinfo),
      expression: "Project.contactinfo"
    }],
    attrs: {
      "rows": "3",
      "cols": "40",
      "name": "comment",
      "form": "usrform",
      "required": ""
    },
    domProps: {
      "value": (_vm.Project.contactinfo)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.Project.contactinfo = $event.target.value
      }
    }
  }, [_vm._v(" Enter text here...")])]), _vm._v(" "), _c('button', {
    attrs: {
      "type": "submit"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.NewProject($event)
      }
    }
  }, [_vm._v("Submmit")])]) : _vm._e(), _vm._v(" "), _c('small', [_vm._v("*You can click on 'Delete' button on the project(s) you created :) ")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.search),
      expression: "search"
    }],
    staticClass: "search_project",
    attrs: {
      "type": "text",
      "placeholder": "search here by project name..."
    },
    domProps: {
      "value": (_vm.search)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.search = $event.target.value
      }
    }
  }), _vm._v(" "), _c('table', [_vm._m(0), _vm._v(" "), _vm._l((_vm.filter), function(Project) {
    return _c('tr', [_c('th', [_vm._v("\n            " + _vm._s(Project.projectname) + "\n         ")]), _vm._v(" "), _c('th', [_vm._v("\n            " + _vm._s(Project.user) + "\n         ")]), _vm._v(" "), _c('th', [_vm._v("\n            " + _vm._s(Project.projectstatement) + "\n         ")]), _vm._v(" "), _c('th', [_vm._v(" " + _vm._s(Project.skills) + "\n         ")]), _vm._v(" "), _c('th', [_vm._v(" " + _vm._s(Project.skillsneed) + "\n         ")]), _vm._v(" "), _c('th', [_vm._v(_vm._s(Project.contactinfo) + "\n         ")]), _vm._v(" "), _c('th', [(Project.user === _vm.user.email) ? _c('div', [_c('button', {
      on: {
        "click": function($event) {
          $event.preventDefault();
          _vm.deleteProject(Project)
        }
      }
    }, [_c('i', {
      staticClass: "fa fa-trash-o",
      attrs: {
        "aria-hidden": "true"
      }
    })])]) : _c('div', [_c('p', [_vm._v("N/A")])])])])
  })], 2)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    staticClass: "table_title"
  }, [_vm._v("Project")]), _vm._v(" "), _c('th', {
    staticClass: "table_title"
  }, [_vm._v("Created by")]), _vm._v(" "), _c('th', {
    staticClass: "table_title"
  }, [_vm._v("Description for project")]), _vm._v(" "), _c('th', {
    staticClass: "table_title"
  }, [_vm._v("Skill(s) user has")]), _vm._v(" "), _c('th', {
    staticClass: "table_title"
  }, [_vm._v("Skill(s) user is looking for")]), _vm._v(" "), _c('th', {
    staticClass: "table_title"
  }, [_vm._v("Contact Information")]), _vm._v(" "), _c('th', {
    staticClass: "table_title"
  }, [_vm._v("Options")])])
}]}

/***/ }),

/***/ 215:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('p', {
    staticClass: "title"
  }, [_vm._v("Codedln")]), _vm._v(" "), _c('h3', {
    staticClass: "log_in"
  }, [_vm._v("Log In")]), _vm._v(" "), _c('p', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.email),
      expression: "email"
    }],
    attrs: {
      "type": "text",
      "placeholder": "Email"
    },
    domProps: {
      "value": (_vm.email)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.email = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('p', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.password),
      expression: "password"
    }],
    attrs: {
      "type": "password",
      "placeholder": "Password"
    },
    domProps: {
      "value": (_vm.password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.password = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.signIn
    }
  }, [_vm._v("Log In")])])
},staticRenderFns: []}

/***/ }),

/***/ 216:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('p', {
    staticClass: "title"
  }, [_vm._v("Codedln")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "sign_up_box"
  }, [_c('h3', {
    staticClass: "sign_up_header"
  }, [_vm._v("Sign Up Today!")]), _vm._v(" "), _c('p', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.email),
      expression: "email"
    }],
    attrs: {
      "type": "text",
      "placeholder": "Email"
    },
    domProps: {
      "value": (_vm.email)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.email = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('p', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.password),
      expression: "password"
    }],
    attrs: {
      "type": "password",
      "placeholder": "Password"
    },
    domProps: {
      "value": (_vm.password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.password = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('button', {
    staticClass: "sign_up_button",
    on: {
      "click": _vm.signUp
    }
  }, [_vm._v("SignUp")]), _vm._v(" "), _c('div', [_vm._v("\n    Have an account already? "), _c('router-link', {
    attrs: {
      "to": "/Login"
    }
  }, [_vm._v("Sign in")]), _vm._v(" here!\n    ")], 1)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "sign_up_intro"
  }, [_c('p', [_c('i', {
    staticClass: "fa fa-check-circle-o fa-2x",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "statement"
  }, [_vm._v("\n     Share great project ideas\n    ")])]), _vm._v(" "), _c('p', [_c('i', {
    staticClass: "fa fa-check-circle-o fa-2x",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "statement"
  }, [_vm._v("\n    Seep up the process to look for side-project partner(s)\n    ")])]), _vm._v(" "), _c('p', [_c('i', {
    staticClass: "fa fa-check-circle-o fa-2x",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "statement"
  }, [_vm._v("\n    Let other people know your skills\n    ")])]), _vm._v(" "), _c('br')])
}]}

/***/ }),

/***/ 217:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "con"
  }, [_c('div', {
    staticClass: "con-tooltip bottom"
  }, [_c('router-link', {
    staticStyle: {
      "text-decoration": "none",
      "color": "#FFFFFF"
    },
    attrs: {
      "to": "Project"
    }
  }, [_c('p', [_vm._v("Looking for Projects")])]), _vm._v(" "), _vm._m(0)], 1), _vm._v(" "), _c('div', {
    staticClass: "con-tooltip bottom"
  }, [_c('router-link', {
    staticStyle: {
      "text-decoration": "none",
      "color": "#FFFFFF"
    },
    attrs: {
      "to": "Users"
    }
  }, [_c('p', [_vm._v(" New Feature coming out")])]), _vm._v(" "), _vm._m(1)], 1), _vm._v(" "), _vm._m(2)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tooltip"
  }, [_c('p', [_vm._v("Check out what projects we have!")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tooltip "
  }, [_c('p', [_vm._v("See if there is anyone you can connect with!")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "con-tooltip bottom"
  }, [_c('p', [_vm._v("New Feature")]), _vm._v(" "), _c('div', {
    staticClass: "tooltip "
  }, [_c('p', [_vm._v("Description for new feature")])])])
}]}

/***/ }),

/***/ 218:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('p', {
    staticClass: "title"
  }, [_vm._v("CodingDigger")]), _vm._v(" "), _c('p', [_vm._v("Hey there! " + _vm._s(_vm.user.email) + ", tell us what you want.")]), _vm._v(" "), _c('v-wid')], 1)
},staticRenderFns: []}

/***/ }),

/***/ 219:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('input', {
    attrs: {
      "type": "file",
      "name": "image",
      "accept": "image/*"
    },
    on: {
      "change": [function($event) {
        _vm.filesChange($event.target.files)
      }, _vm.previewThumbnail]
    }
  }), _vm._v(" "), _c('img', {
    attrs: {
      "src": _vm.imageSrc
    }
  }), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.postPic
    }
  }, [_vm._v("Post imageSrc")])])
},staticRenderFns: []}

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(53);



__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

const state = {
    user: {
        Info: {
            input1: '',
            input2: ''
        },
        email: ''
    }
};
const mutations = {
    ShareInfo(state, user) {
        state.user.input1 = user.input1;
        state.user.email = user.email;
    }
};
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
    state,
    mutations
}));

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Landing__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Landing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_Landing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Preview__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Preview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_Preview__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Users__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Users___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_Users__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Login__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_Login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Project__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Project___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_Project__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Signup__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Signup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__components_Signup__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__vuex_store__ = __webpack_require__(52);











__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
    routes: [{
        path: '/landing',
        name: 'Landing',
        component: __WEBPACK_IMPORTED_MODULE_3__components_Landing___default.a
    }, {
        path: '/preview',
        name: 'Preview',
        component: __WEBPACK_IMPORTED_MODULE_4__components_Preview___default.a
    }, {
        path: '/login',
        name: 'Login',
        component: __WEBPACK_IMPORTED_MODULE_6__components_Login___default.a

    }, {
        path: '/',
        name: 'Signup',
        component: __WEBPACK_IMPORTED_MODULE_8__components_Signup___default.a

    }, {
        path: '/project',
        name: 'Project',
        component: __WEBPACK_IMPORTED_MODULE_7__components_Project___default.a

    }, {
        path: '/users',
        name: 'Users',
        component: __WEBPACK_IMPORTED_MODULE_5__components_Users___default.a
    }]
}));

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(128)
}
var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(118),
  /* template */
  __webpack_require__(213),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ })

},[126]);
//# sourceMappingURL=app.334507dd2acccadd5655.js.map