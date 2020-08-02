(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{160:function(t,s,e){t.exports=e.p+"assets/img/magento_1.0810f226.png"},161:function(t,s,e){t.exports=e.p+"assets/img/magento_2.08bdbe3f.png"},162:function(t,s,e){t.exports=e.p+"assets/img/magento_3.9526d699.png"},187:function(t,s,e){"use strict";e.r(s);var a=[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"integration-with-magento-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#integration-with-magento-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Integration with Magento 2")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The tool is using Magento2 API via OAuth authorization, so you need to prepare Magento Integration access at first. Go to your Magento2 admin panel and click: "),s("em",[this._v("System -> Integrations")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:e(160),alt:"Magento Admin Panel"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Then click "),s("em",[this._v("Add new integration")]),this._v(" and just fill:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[t._v("name (whatever)")]),t._v(" "),e("li",[t._v("your password to confirm the changes,")]),t._v(" "),e("li",[t._v("on API permissions tab check the following resources:\n"),e("ul",[e("li",[t._v("Catalog")]),t._v(" "),e("li",[t._v("Sales")]),t._v(" "),e("li",[t._v("My Account")]),t._v(" "),e("li",[t._v("Carts")]),t._v(" "),e("li",[t._v("Stores > Settings > Configuration > Inventory Section")]),t._v(" "),e("li",[t._v("Stores > Taxes")]),t._v(" "),e("li",[t._v("Stores > Attributes > Product")])])]),t._v(" "),e("li",[t._v("save")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:e(161),alt:"Magento API"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("In the result you’ll click "),s("em",[this._v("Activate")]),this._v(" and get some OAuth access tokens:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:e(162),alt:"Magento tokens"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"integrating-magento2-with-your-local-instance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#integrating-magento2-with-your-local-instance","aria-hidden":"true"}},[this._v("#")]),this._v(" Integrating Magento2 with your local instance")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"fast-integration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fast-integration","aria-hidden":"true"}},[this._v("#")]),this._v(" Fast integration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("After setting the "),s("code",[this._v("config.magento2.api")]),this._v(" section using yours Magento2 OAuth credentials:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"magento2"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://magento2.demo-1.xyz.com"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"imgUrl"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:8080/media/catalog/product"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"assetPath"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/../var/magento2-sample-data/pub/media"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"magentoUserName"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"magentoUserPassword"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"httpUserName"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"httpUserPassword"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"api"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://demo-magento2.vuestorefront.io/rest"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"consumerKey"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"byv3730rhoulpopcq64don8ukb8lf2gq"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"consumerSecret"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"u9q4fcobv7vfx9td80oupa6uhexc27rb"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"accessToken"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"040xx3qy7s0j28o3q0exrfop579cy20m"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"accessTokenSecret"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"7qunl3p505rubmr7u1ijt7odyialnih9"')]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("yarn mage2vs "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("import")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("... or in multistore setup you can run the same command with specified "),s("code",[this._v("store-code")]),this._v(" parameter")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v(" yarn mage2vs "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("import")]),this._v(" --store-code"),s("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),this._v("de\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"manual-integration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#manual-integration","aria-hidden":"true"}},[this._v("#")]),this._v(" Manual integration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" clone https://github.com/DivanteLtd/mage2vuestorefront.git mage2vs\n"),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("cd")]),this._v(" mage2vs/src\nyarn "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("install")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Now please edit the "),s("code",[this._v("src/config.js")]),this._v(" file in your "),s("code",[this._v("mage2vuestorefront")]),this._v(" directory to set the following section:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("magento"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  url"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" process"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MAGENTO_URL")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://your-magento-url.com/rest/"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" change to your Magento "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URL")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  consumerKey"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" process"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MAGENTO_CONSUMER_KEY")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'alva6h6hku9qxrpfe02c2jalopx7od1q'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  consumerSecret"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" process"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MAGENTO_CONSUMER_SECRET")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'9tgfpgoojlx9tfy21b8kw7ssfu2aynpm'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  accessToken"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" process"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MAGENTO_ACCESS_TOKEN")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rw5w0si9imbu45h3m9hkyrfr4gjina8q'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  accessTokenSecret"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" process"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MAGENTO_ACCESS_TOKEN_SECRET")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'00y9dl4vpxgcef3gn5mntbxtylowjcc9'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The rest of config.js entries points out to your "),s("code",[this._v("vue-storefront-api")]),this._v(" based Docker and Redis instances which are required by "),s("code",[this._v("mage2nosql")]),this._v(" to work.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("To make the full import, you should run the following commands (the sequence of commands is important  -  as for example "),s("code",[this._v("node cli.js categories")]),this._v(" populates Redis cache for the further use of "),s("code",[this._v("node cli.js")]),this._v(" products and so on)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("node cli.js taxrule\nnode cli.js attributes\nnode cli.js categories\nnode cli.js productcategories\nnode cli.js products\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("It’s safe to run these commands over and over as they’re doing "),s("code",[this._v("upsert")]),this._v(" operation  - so inserts or updates the existing records.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("cli.js")]),this._v(" has a lot of other modes to be run in. Dynamic changes, queue support etc. You may experiment with them, but remember  -  the basic sequence for syncing the whole Magento2 database is like just shown.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"synchronizing-orders-and-magento-images"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#synchronizing-orders-and-magento-images","aria-hidden":"true"}},[this._v("#")]),this._v(" Synchronizing orders and Magento images")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[e("code",[t._v("vue-storefront-api")]),t._v(" is responsible for this write access to Magento. You may want just edit your "),e("code",[t._v("conf/local.json")]),t._v(" within "),e("code",[t._v("vue-storefront-api")]),t._v(" directory to set the OAuth Magento API access ("),e("code",[t._v("magento2")]),t._v(" section):")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"magento2"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://your-magento-url.com"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"imgUrl"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://your-magento-url.com/media/catalog/product"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"assetPath"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/../var/magento2-sample-data/pub/media"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"api"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://your-magento-url.com/rest/"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"consumerKey"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"alva6h6hku9qxrpfe02c2jalopx7od1q"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"consumerSecret"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"9tgfpgoojlx9tfy21b8kw7ssfu2aynpm"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"accessToken"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rw5w0si9imbu45h3m9hkyrfr4gjina8q"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"accessTokenSecret"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"00y9dl4vpxgcef3gn5mntbxtylowjcc9"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("To allow "),e("code",[t._v("vue-storefront-api")]),t._v(" to resize your Magento’s images, please edit the "),e("code",[t._v("imgUrl")]),t._v(" property under "),e("code",[t._v("magento2")]),t._v(" section and add your Magento’s domain to "),e("code",[t._v("imageable")]),t._v(" -> "),e("code",[t._v("whitelist")]),t._v(".")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"imageable"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"namespace"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"maxListeners"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("512")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"imageSizeLimit"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timeouts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"convert"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("15000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"identify"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"download"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"whitelist"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"allowedHosts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('".*your-magento-url.com"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('".*divante.pl"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('".*vuestorefront.io"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"trustedHosts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('".*your-magento-url.com"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('".*divante.pl"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('".*vuestorefront.io"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("NOTE")]),this._v(" "),s("p",[this._v("After changing the config files you need to restart "),s("code",[this._v("yarn dev")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("yarn o2m\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("Starting from Vue Storefront v1.6 now we have a special switch in "),e("code",[t._v("vue-storefront-api")]),t._v(": "),e("code",[t._v("config.orders.useServerQueue")]),t._v(" which is set to "),e("code",[t._v("false")]),t._v(" by default. With this option disabled the "),e("code",[t._v("order_2_magento")]),t._v(" process is no longer needed as the incoming orders are directly send to Magento2. If it's set to "),e("code",[t._v("true")]),t._v(" then - the old behavior of server-based Redis queued used to stack the orders first is being used.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"synchronizing-shopping-carts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#synchronizing-shopping-carts","aria-hidden":"true"}},[this._v("#")]),this._v(" Synchronizing shopping carts")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("We have option for that! If you have Magento2 API configured within the "),s("code",[this._v("vue-storefront-api")]),this._v(" you just need to go to "),s("code",[this._v("vue-storefront/conf/local.json")]),this._v(" and add")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[this._v("synchronize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(":")]),this._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[this._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(";")]),this._v("\n")])])])}],n=e(0),r=Object(n.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),e("p",[t._v("Magento2 data import is now integrated into "),e("code",[t._v("vue-storefront-api")]),t._v(" for simplicity. It's still managed by the "),e("a",{attrs:{href:"https://github.com/DivanteLtd/mage2vuestorefront",target:"_blank",rel:"noopener noreferrer"}},[t._v("mage2vuestorefront"),e("OutboundLink")],1),t._v(" - added as a dependency to "),e("code",[t._v("vue-storefront-api")]),t._v(".")]),t._v(" "),t._m(10),t._v(" "),t._m(11),e("p",[t._v("You can run the following command to execute the full import of all the Products, Categories and other important stuff to your Elastic Search instance:")]),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),e("p",[t._v("As a first step, you need to install "),e("a",{attrs:{href:"https://github.com/DivanteLtd/mage2vuestorefront",target:"_blank",rel:"noopener noreferrer"}},[t._v("mage2vuestorefront "),e("OutboundLink")],1),t._v(":")]),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),e("p",[t._v("As you can see, you can override the defaults by ENV variables as well.")]),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),e("p",[t._v("As you should have the products and categories already synchronized you may want to send some orders back to Magento or synchronize the shopping carts in the real time.")]),t._v(" "),t._m(25),t._v(" "),t._m(26),t._m(27),t._v(" "),t._m(28),t._m(29),t._v(" "),e("p",[t._v("After setting up the Magento access you just need to run the Order2Magento worker which works on Redis based queue to process all the orders made by users:")]),t._v(" "),t._m(30),e("p",[t._v("The code of this script is "),e("a",{attrs:{href:"https://github.com/DivanteLtd/vue-storefront-api/blob/master/src/worker/order_to_magento2.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("located here"),e("OutboundLink")],1),t._v(" -  so you can easily check how it’s working.")]),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),e("p",[t._v("By default shopping carts are not synchronized in the real-time  -  just after the order is placed, Magento2 cart is created etc.")]),t._v(" "),e("p",[t._v("This was limiting behavior because you need to keep the user cart most current all the time to get Magento2 shopping cart promotion rules into the action .")]),t._v(" "),t._m(33),t._v(" "),t._m(34),e("p",[t._v("to "),e("code",[t._v("cart")]),t._v(" section. Please check the "),e("a",{attrs:{href:"https://github.com/DivanteLtd/vue-storefront/blob/193cf44a6e936136fc19e22b45fe8dbc4b33f844/config/default.json#L8",target:"_blank",rel:"noopener noreferrer"}},[t._v("default config for reference"),e("OutboundLink")],1),t._v(".")])])},a,!1,null,null,null);r.options.__file="magento.md";s.default=r.exports}}]);