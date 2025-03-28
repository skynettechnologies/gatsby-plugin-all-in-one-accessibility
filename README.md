# All in One Accessibility®: Gatsby Plugin

## Enhance Your Website's Accessibility with All in One Accessibility®

**Did you know?** Your website's accessibility can make or break your audience's experience. With the **All in One Accessibility AI Free Accessibility Widget**, you can instantly boost your site's inclusivity and support over **140+ languages**! Experience the power of **23 essential features** in our free version and take the first step towards creating a better web for everyone.

### Why All in One Accessibility®?

This lightweight and flexible widget is designed to improve your website’s compliance with international accessibility standards, including:

- **ADA (Americans with Disabilities Act)**
- **WCAG 2.0, 2.1, & 2.2**
- **Section 508 (U.S. Government Standard)**
- **California Unruh Act**
- **Australian DDA**
- **European EAA EN 301 549**
- **UK Equality Act (EA)**
- **Israel Standard 5568**
- **Ontario AODA**
- **Canada ACA**
- **UAE Disability Act**
- **Singapore DSS and SGDS**
- For more details on Accessibility Standards, Visit **[All in One Accessibility Supported Standards.](https://www.skynettechnologies.com/accessibility-standards)**

By implementing the widget, you’re not only enhancing user experience but also minimizing the risk of costly accessibility lawsuits. For more details, visit **[All in One Accessibility®.](https://www.skynettechnologies.com/all-in-one-accessibility)**

### Built for Excellence

- Adheres to **ISO 9001:2015** & **ISO 27001:2013** standards.
- Fully compliant with **GDPR** and **COPPA** regulations.
- Proud member of **W3C** and the **International Association of Accessibility Professionals (IAAP)**.

### Upgrade to Unlock Premium Features

**Why stop at 23 features?** Unlock over **70 advanced features** with our **paid subscription** and take your website’s accessibility to the next level. Compare the benefits of Free vs. Paid versions **[here](https://www.skynettechnologies.com/all-in-one-accessibility/features)**.

Checkout the steps for upgrading **[Free to Paid Widget](https://www.skynettechnologies.com/blog/upgrade-from-all-in-one-accessibility-free-widget-to-premium-version).**

### Start Your Accessibility Journey Today

Try it risk-free with our **10-day free trial**! Don’t wait, experience the benefits today. **[Click to get started](https://ada.skynettechnologies.us/trial-subscription?utm_source=all-in-one-accessibility&utm_medium=landing-page&utm_campaign=trial-subscription)** and join a growing community of forward-thinking businesses making the web accessible to everyone.

**Your website’s accessibility journey begins here. Make an impact.**

For more details, visit **[All in One Accessibility®](https://www.skynettechnologies.com/all-in-one-accessibility)** and transform your digital presence.

### Supported Languages (140+ Languages):

English (USA), English (UK), English (Australian), English (Canadian), English (South Africa), Español, Español (Mexicano), Deutsch, عربى, Português, Português (Brazil), 日本語, Français, Italiano, Polski, Pусский, 中文, 中文 (Traditional), עִברִית, Magyar, Slovenčina, Suomenkieli, Türkçe, Ελληνικά, Latinus, Български, Català, Čeština, Dansk, Nederlands, हिंदी, Bahasa Indonesia, 한국인, Lietuvių, Bahasa Melayu, Norsk, Română, Slovenščina, Svenska, แบบไทย, Українська, Việt Nam, বাঙালি, සිංහල, አማርኛ, Hmoob, မြန်မာ, Eesti keel, latviešu, Cрпски, Hrvatski, ქართული, ʻŌlelo Hawaiʻi, Cymraeg, Cebuano, Samoa, Kreyòl ayisyen, Føroyskt, Crnogorski, Azerbaijani, Euskara, Tagalog, Galego, Norsk Bokmål, فارسی, ਪੰਜਾਬੀ, shqiptare, Hայերեն, অসমীয়া, Aymara, Bamanankan, беларускі, bosanski, Corsu, ދިވެހި, Esperanto, Eʋegbe, Frisian, guarani, ગુજરાતી, Hausa, íslenskur, Igbo, Gaeilge, basa jawa, ಕನ್ನಡ, қазақ, ខ្មែរ, Kinyarwanda, Kurdî, Кыргызча, ພາສາລາວ, Lingala, Luganda, lëtzebuergesch, македонски, Malagasy, മലയാളം, Malti, Maori, मराठी, Монгол, नेपाली, Sea, ଓଡିଆ, Afaan Oromoo, پښتو, Runasimi, संस्कृत, Gàidhlig na h-Alba, Sesotho, Shona, سنڌي, Soomaali, basa Sunda, kiswahili, тоҷикӣ, தமிழ், Татар, తెలుగు, ትግሪኛ, Tsonga, Türkmenler, Ride, اردو, ئۇيغۇر, o'zbek, isiXhosa, יידיש, Yoruba, Zulu, भोजपुरी, डोगरी, कोंकणी, Kurdî, Krio, मैथिली, Meiteilon, Mizo tawng, Sepedi, Ilocano, دری.

## Installation

Checkout our **[How to install All in One Accessibility Extension on Gatsby Blog](https://www.skynettechnologies.com/blog/gatsby-web-accessibility-widget-installation)**

- NPM: `$ npm install --save gatsby-plugin-all-in-one-accessibility`
- YARN: `$ yarn add gatsby-plugin-all-in-one-accessibility`

### Configuration

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

## CORS Policy Configuration

To avoid CORS policy issues, ensure the following URLs are allowed in your website. These URLs should be added to your CORS configuration or trusted domains list.

| **Domain**                        | **Description**                              | **Usage**                        |
|-----------------------------------|----------------------------------------------|----------------------------------|
| `https://*.skynettechnologies.com` | Skynet Technologies (Global Domain)         | API access and resources        |
| `https://*.skynettechnologies.us` | Skynet Technologies (US Domain)             | API access and resources        |
| `https://*.googleapis.com`        | Google APIs                                 | Services like Fonts, Translation |
| `https://vlibras.gov.br`          | VLibras - Brazilian Sign Language Service   | Sign Language             |

## Instructions

1. Update your server's CORS configuration to include these URLs.
2. Ensure wildcard subdomains (`*`) are supported where necessary.
3. Verify the application functionality by testing requests to these domains.
4. If issues persist, consult the documentation for CORS configuration guidance.

## Configuration

To configure the widget, access the Admin Panel and head to the **All in One Accessibility** menu in the dashboard. From there, you can register **[here](https://ada.skynettechnologies.us/trial-subscription)** with 10 Days free trial.

## Documentation

- [Purchase Gatsby All in One Accessibility](https://www.skynettechnologies.com/gatsby-ada-compliant-widget)
- [How to install All in One Accessibility Extension on Gatsby](https://www.skynettechnologies.com/blog/gatsby-web-accessibility-widget-installation)
- [All in One Accessibility - Features Guide](https://www.skynettechnologies.com/sites/default/files/accessibility-widget-features-list.pdf)

## Submit a Support Request

Please visit our **[support page](https://www.skynettechnologies.com/report-accessibility-problem)** and fill out the form. Our team will get back to you as soon as possible.

## Send Us an Email

Alternatively, you can send an email to our support team:
**[hello@skynettechnologies.com](mailto:hello@skynettechnologies.com)**

## Accessibility Partnership Opportunities

### **[Agencies Partnership](https://www.skynettechnologies.com/agency-partners)**

Partner with us as an agency to provide comprehensive accessibility solutions to your clients. Get access to exclusive resources, training, and support to help you implement and manage accessibility features effectively.

### **[Affiliated Partnership](https://www.skynettechnologies.com/affiliate-partner)**

Join our affiliate program and earn commissions by promoting All in One Accessibility™. Share our Widget with your network and help businesses improve their website accessibility while generating revenue.

For more details, Please visit **[Partnership Opportunities Page](https://www.skynettechnologies.com/partner-program)**

## Screenshots

![App Screenshot](https://www.skynettechnologies.com/sites/default/files/screenshot-1-free.jpg?v=2)

![App Screenshot](https://www.skynettechnologies.com/sites/default/files/screenshot-2-free.jpg?v=2)

![App Screenshot](https://www.skynettechnologies.com/sites/default/files/screenshot-3-free.jpg?v=2)

![App Screenshot](https://www.skynettechnologies.com/sites/default/files/screenshot-4-free.jpg?v=2)

## Video

[![All in One Accessibility](https://img.youtube.com/vi/X70XtvGyvSs/0.jpg)](https://www.youtube.com/watch?v=X70XtvGyvSs)

## Credits

This addon is developed and maintained by [Skynet Technologies USA LLC](https://www.skynettechnologies.com)

## Current Maintainers

- [Skynet Technologies USA LLC](https://github.com/skynettechnologies)