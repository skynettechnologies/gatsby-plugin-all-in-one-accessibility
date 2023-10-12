// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
import React from "react";

export function onRenderBody({ setHeadComponents }, pluginOptions) {
  const {
    licenseKey="",
    host = "https://www.skynettechnologies.com",
    colorcode = "cba123",
    position = "bottom_right",
    iconType = "aioa-icon-type-1",
    // This is ONLY for the Browser side code
    // trackPageOnRouteUpdate = true,
    // trackPageOnRouteUpdateDelay = 50,
    iconSize="aioa-big-icon",

  } = pluginOptions;



  const gatsbyAllInOneAccessibilityLoadStuff = `  let aioa_script_tag = document.createElement("script");
            aioa_script_tag.src = "${host}/accessibility/js/all-in-one-accessibility-js-widget-minify.js?colorcode=#${colorcode}&token=${licenseKey}&position=${position}.${iconType}.${iconSize}";
            aioa_script_tag.id = "aioa-adawidget";
            document.getElementsByTagName("head")[0].appendChild(aioa_script_tag);;
  `

  // if `delayLoad` option is true, use the delayed loader
  const pluginCode = `
(function () {
  ${gatsbyAllInOneAccessibilityLoadStuff}
})();`;

  // only render snippet if write key exists

    setHeadComponents([
      <script
        key="plugin-segment"
        dangerouslySetInnerHTML={{ __html: pluginCode }}
      />,
    ]);

}
