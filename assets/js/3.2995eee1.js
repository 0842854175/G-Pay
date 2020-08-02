(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{151:function(e,t,a){e.exports=a.p+"assets/img/release-cycle-1.3c1cae02.png"},152:function(e,t,a){e.exports=a.p+"assets/img/release-cycle-2.51dae746.png"},153:function(e,t,a){e.exports=a.p+"assets/img/release-cycle-3.da4ffd44.png"},218:function(e,t,a){"use strict";a.r(t);var r=[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"release-cycle"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#release-cycle","aria-hidden":"true"}},[this._v("#")]),this._v(" Release Cycle")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"how-vue-storefront-versions-are-released"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-vue-storefront-versions-are-released","aria-hidden":"true"}},[this._v("#")]),this._v(" How Vue Storefront versions are released")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("strong",[this._v("Release Candidate phase (RC)")]),this._v(' also called "feature version". This version contains all the new features, improvements and additions to the API along with minor bugfixes. New features and additions are merged and released '),t("strong",[this._v("only")]),this._v(" during this phase. The API of features introduced during this phase may slightly change.")]),this._v(" "),t("li",[t("strong",[this._v("Stabilization phase")]),this._v(" is the one that ends up with production-ready version. During this phase we do only stabilization and bugfixing for previously introduced features. No new features and API additions are merged. PRs from RC version are tested and their API is simplified and/or adjusted according to feedback.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("v1.x-RC.y - unstable version with cutting-edge features ready to test and feedback")]),this._v(" "),t("li",[this._v("v1.x.y - stable version of the software "),t("strong",[this._v("ready for production use")]),this._v(".")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"how-new-features-are-merged"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-new-features-are-merged","aria-hidden":"true"}},[this._v("#")]),this._v(" How new features are merged")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("During RC features Pull Request with new features after feedback and acceptance are normally merged to "),a("code",[e._v("develop")]),e._v(" branch.\nAfter entering the Stabilization Phase we are tagging current develop branch, creating a "),a("code",[e._v("release/x")]),e._v(" (where "),a("code",[e._v("x")]),e._v(" is a number of current version) branch from it and working on stabilization there.\nDuring the stabilization phase new features are merged to develop branch and will be merged on next "),a("code",[e._v("RC")]),e._v(" phase.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"release-cycle-flow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#release-cycle-flow","aria-hidden":"true"}},[this._v("#")]),this._v(" Release cycle flow")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"_1-development-phase"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-development-phase","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. Development phase")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The first phase of cycle we're mostly focusing on features and improvements. Branches in that phase should be created from actual "),t("code",[this._v("develop")]),this._v(", also PRs should be pointed to this branch. Changes merged to "),t("code",[this._v("develop")]),this._v(" are available to test on https://test.storefrontcloud.io")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:a(151),alt:"Development phase"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"_2-release-candidate-phase"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-release-candidate-phase","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. Release Candidate phase")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("At some point, when milestone for next minor versions is completed, we're creating new branch from "),a("code",[e._v("develop")]),e._v(" called "),a("code",[e._v("release/vx.y")]),e._v(" (example: "),a("code",[e._v("release/v1.9")]),e._v(").\nAfter that new branch is tagged as first RC for version (example "),a("code",[e._v("v1.9.0-rc.1")]),e._v("). Then it's ready for testing by community.\nDuring tests, feedback and stabilization there could be multiple Release Candidate versions on this branch. When improvement is made on this phase, then branch should be created from actual "),a("code",[e._v("release/vx.y")]),e._v(" and should not contain features at this point - only improvements for current release.\nAfter merging a set of bugfixes and improvements into "),a("code",[e._v("release/*")]),e._v(" branch, it needs to be tagged as the next RC version and merged into the "),a("code",[e._v("develop")]),e._v(" branch, to update it.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:a(152),alt:"Release Candidate phase"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"_3-release-phase"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-release-phase","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. Release phase")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:a(153),alt:"Release phase"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"summary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#summary","aria-hidden":"true"}},[this._v("#")]),this._v(" Summary")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Important thing to notice is that this releasing cycle ensures stable and reliable Storefront releases. Phases are also not blocking new features - you can develop new features on any phase, but it should be merged only to "),t("code",[this._v("develop")]),this._v(" branch and go through whole cycle.")])}],s=a(0),n=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),a("p",[e._v("This document describes how Vue Storefront code versions are released. You'll learn how the release process looks like, what are the acceptance criteria, what is our git flow and which branch to use as a stable one.")]),e._v(" "),e._m(1),e._v(" "),a("p",[e._v("From version 1.9 we release each of VSF versions in two phases")]),e._v(" "),e._m(2),e._v(" "),a("p",[e._v("So assuming next version is 1.x the two-month cycle will look as following:")]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),a("p",[e._v("When RC version is stable, then release branch is merged into "),a("code",[e._v("master")]),e._v(" and tagged as next stable version (example "),a("code",[e._v("v1.9.0")]),e._v("). After that currently merged release branch is deleted and starts new development phase. If some critical bug is discovered on current stable version, then new hotfix (for example "),a("code",[e._v("hotfix/v1.9.1")]),e._v(", following "),a("a",{attrs:{href:"https://semver.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Semantic Versioning rules"),a("OutboundLink")],1),e._v(") branch should be created from actual "),a("code",[e._v("master")]),e._v(". After merging and testing hotfixes, this branch (like release branch before) is merged into "),a("code",[e._v("master")]),e._v(" and tagged following "),a("a",{attrs:{href:"https://semver.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Semantic Versioning rules"),a("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16)])},r,!1,null,null,null);n.options.__file="release-cycle.md";t.default=n.exports}}]);