# gatsby-plugin-all-in-one-accessibility

[All in One Accessibility](https://www.skynettechnologies.com/all-in-one-accessibility) widget improves Gatsby website ADA compliance and browser experience for ADA, WCAG 2.1 & 2.2, Section 508, Australian DDA, European EAA EN 301 549, UK Equality Act (EA), Israeli Standard 5568, California Unruh, Ontario AODA, Canada ACA, German BITV, France RGAA, Brazilian Inclusion Law (LBI 13.146/2015), Spain UNE 139803:2012, JIS X 8341 (Japan), Italian Stanca Act and Switzerland DDA Standards.

It uses the accessibility interface which handles UI and design related adjustments. All in One Accessibility app enhances your Gatsby website accessibility to people with hearing or vision impairments, motor impaired, color blind, dyslexia, cognitive & learning impairments, seizure and epileptic, and ADHD problems.

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

#### Supports 65 languages- English
- Italian
- French
- German
- Russian
- Spanish
- Finnish
- Portuguese
- Arab
- Polish
- Hungarian
- Slovak
- Japanese
- Turkish
- Greek
- Latin
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
- Malay
- Norwegian
- Romanian
- Slovenian
- Swedish
- Thai
- Ukrainian
- Vietnamese
- Bengali
- Lithuanian
- Sinhala
- Amharic
- Hmong
- Burmese
- Latvian
- Estonian
- Serbian
- Portuguese (Brazil)
- Chinese Traditional
- Croatian
- Georgian
- Hawaiian
- Welsh
- Cebuano
- Samoan
- Haitian Creole
- Faroese
- Montenegrin
- Australian
- Azeri
- Basque
- Canada
- Filipino
- Galician
- Norwegian
- Persian
- Punjabi
- Spanish (Mexico)
- United Kingdom


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
