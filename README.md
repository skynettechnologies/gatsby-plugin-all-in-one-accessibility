# gatsby-plugin-all-in-one-accessibility

A lightweight & feature-rich Gatsby plugin to easily add [All in One Accessibility](https://www.skynettechnologies.com/all-in-one-accessibility)
to your site.

## Features
#### Skip Links
- Skip to Menu
- Skip to Footer
- Skip to Navigation
- Open Accessibility Toolbar

#### Content Adjustments
- Content Scaling
- Readable Fonts
- Highlight Title
- Highlight Links
- Text Magnifier
- Adjust Font Sizing
- Adjust Line Height
- Adjust Letter Spacing
- Align Center
- Align Left
- Align Right

#### Color and Contrast Adjustments
- High Contrast

#### Orientation Adjustments
- Hide Images (Text Only)
  Miscellaneous
- Accessibility Statement
- Dynamic Application Color
- Choose Application Trigger Button Position
- Choose Application Position
- Multi Language

#### Supports 40 languages
- English
- Spanish
- German
- Arabic
- Slovak
- Portuguese
- French
- Italian
- Polish
- Turkish
- Japanese
- Finnish
- Russian
- Hungarian
- Latin
- Greek
- Hebrew
- Bulgarian
- Catalan
- Chinese
- Czech
- Danish
- Dutch
- Hindi
- Indonesian
- Korean
- Lithuanian
- Malay
- Norwegian
- Romanian
- Slovenian
- Swedish
- Thai
- Ukrainian
- Vietnamese
- Bengali
- Sinhala
- Amharic
- Hmong
- Myanmar (Burmese)
## Install

- NPM: `$ npm install --save gatsby-plugin-all-in-one-accessibility`
- YARN: `$ yarn add gatsby-plugin-all-in-one-accessibility`

## How to use

### Setup

In your gatsby-config.js file:

```javascript
plugins: [
  {
      resolve: `gatsby-plugin-all-in-one-accessibility`,
      options: {
          //Check for license key from https://www.skynettechnologies.com/all-in-one-accessibility
          licenseKey: ``,
          //Enter the color code as per the template/theme used in your website
          colorcode :"cccccc",
          //Enter the position of widget into in your website
          //"top_left" => "Top Left", "top_center" => "Top Center", "top_right" => "Top Right", "middel_left" => "Middle Left", "middel_center" => "Middle Center", "middel_right" => "Middle Right", "bottom_left" => "Bottom Left", "bottom_center" => "Bottom Center", "bottom_right" => "Bottom Right"
          position : "bottom_left",
          //Enter the Icon type
          //aioa-icon-type-1=>"Accessbility Icon", aioa-icon-type-2=>Wheel Chair Icon, aioa-icon-type-3=>"Blind eyes icon
          iconType : "aioa-icon-type-2",
          //Enter the Icon Size
          //aioa-big-icon=>"Big", aioa-medium-icon=>"Medium", aioa-default-icon=>"Default",aioa-small-icon=>"Small",aioa-extra-small-icon=>"Extra Small"
          iconSize : "aioa-default-icon",
      }
  }
];
```
