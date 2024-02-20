# All in One Accessibility™: Gatsby Plugin

[All in One Accessibility](https://www.skynettechnologies.com/all-in-one-accessibility) AI Widget Supports 140 Languages, Screen Reader, Voice Navigation, Dictionary, Virtual Keyboard, Accessibility Profiles, Sign language Libras (Brazilian Portuguese) Custom Widget Color, Icon size, Position, GA4 Tracking and custom accessibility statement link are some of the top features. 


Our AI automatically remediates images Alternative text and uses the accessibility interface which handles UI and design related adjustments. All in One Accessibility app enhances your  Gatsby website accessibility to people with hearing or vision impairments, motor impaired, color blind, dyslexia, cognitive & learning impairments, seizure and epileptic, and ADHD problems. 


It improves Gatsby website ADA compliance and browser experience for ADA, WCAG 2.1 & 2.2, Section 508, California Unruh Act, Australian DDA, European EAA EN 301 549, UK Equality Act (EA), Israeli Standard 5568, Ontario AODA, Canada ACA, German BITV, France RGAA, Brazilian Inclusion Law (LBI 13.146/2015), Spain UNE 139803:2012, JIS X 8341 (Japan), Italian Stanca Act and Switzerland DDA Standards. 


Follows the best industry security, SEO practices and standards ISO 9001:2015 & ISO 27001:2013 and complies with GDPR, COPPA regulations. Member of W3C and International Association of Accessibility Professionals (IAAP). It is a flexible & lightweight widget that can be changed according to law and reduces the risk of time-consuming accessibility lawsuits. 


Following features can be added as an addon  
-    White Label service  
-    Custom Branding  
-    Live Site translates  
-    Customize Accessibility Menu/widget  
-    Accessibility Monitoring  
-    PDF / Word Document Remediation 


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
- Miscellaneous
- Accessibility Statement
- Dynamic Application Color
- Choose Application Trigger Button Position
- Choose Application Position
- Multi Language

#### Supports 140+ languages
- English(US)
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
- English(United Kingdom)

## Install


- NPM: `$ npm install --save gatsby-plugin-all-in-one-accessibility`
- YARN: `$ yarn add gatsby-plugin-all-in-one-accessibility`


### Setup

In your gatsby-config.js file:

```
Admin > Configuration >Local Plugin > All in One Accessibility
```

```javascript
plugins: [
  {
      resolve: `gatsby-plugin-all-in-one-accessibility`,
      options: {
          //Check for license key from https://ada.skynettechnologies.us/trial-subscription
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



## Screenshots

![App Screenshot](https://raw.githubusercontent.com/skynettechnologies/gatsby-plugin-all-in-one-accessibility/main/Screenshot-3.jpg)

![App Screenshot](https://raw.githubusercontent.com/skynettechnologies/gatsby-plugin-all-in-one-accessibility/main/Screenshot-1.jpg)

![App Screenshot](https://raw.githubusercontent.com/skynettechnologies/gatsby-plugin-all-in-one-accessibility/main/Screenshot-2.jpg)

![App Screenshot](https://raw.githubusercontent.com/skynettechnologies/gatsby-plugin-all-in-one-accessibility/main/Screenshot-4.jpg)


## Acknowledgements

- [Gatsby All in One Accessibility](https://www.skynettechnologies.com/gatsby-ada-compliant-widget)
- [Gatsby All in One Accessibility Extension installation steps blog](https://www.skynettechnologies.com/blog/gatsby-web-accessibility-widget-installation)

## Documentation

[All in One Accessibility - User Guide](https://www.skynettechnologies.com/sites/default/files/accessibility-widget-features-list.pdf)

## Support
For any kind of queries/support please Email us at [Skynet Technologies Support](mailto:hello@skynettechnologies.com)
