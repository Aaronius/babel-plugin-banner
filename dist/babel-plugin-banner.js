/*! @comandeer/babel-plugin-banner v2.0.2 | (c) 2018 Comandeer | MIT license (see LICENSE) */
'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var oneLineRegex=/^\/\/(.*?)\n?$/,multiLineRegex=/^\/\*([\s\S]*?)\*\/$/;function isComment(a){return!!(oneLineRegex.test(a)||multiLineRegex.test(a))}function getCommentContent(a){return oneLineRegex.test(a)?a.replace(/^\/\//,''):a.replace(/^\/\*/,'').replace(/\*\/$/,'')}function babelPlugin(a){var b=a.types,c=b.noop;return{visitor:{Program:function(a,b){var d=b.opts,e=d.banner,f=d.newLine;if('string'!=typeof e||!isComment(e))throw new TypeError('Banner must be a valid comment.');(!(f!==void 0)||f)&&a.unshiftContainer('body',c()),a.addComment('leading',getCommentContent(e))}}}}exports.default=babelPlugin,exports.isComment=isComment,exports.getCommentContent=getCommentContent;
//# sourceMappingURL=babel-plugin-banner.js.map