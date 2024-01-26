
# Rohitfolio

Welcome to 'Rohitfolio'! Built with Next.js, Tailwind CSS, Sanity CMS, and animated with GSAP, this portfolio template is designed to be elegant, responsive, and easy to customize. Whether you're a developer, designer, or creative professional, this template will help you showcase your work in the best light.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Customization](#customization)
  - [Tailwind CSS](#tailwind-css)
  - [Fonts](#fonts)
  - [Sanity CMS](#sanity-cms)
  - [Environment Variables](#environment-variables)
  - [React Resend](#react-resend)
  - [Email Template](#email-template)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)


## Features

- Responsive design
- Next.js for blazing fast performance
- Tailwind CSS for styling
- Sanity CMS for easy content management
- GSAP for smooth animations
- Fully customizable theme
- 100/100 Score in Page Speed Insights for Performance, Best Practices and SEO

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- [Sanity CLI](https://www.sanity.io/docs/getting-started-with-sanity-cli) (for managing content with Sanity CMS)

### Installation

1. Fork the repo
2. Clone the repo:
```bash
   git clone https://github.com/{your-username}/rohitfolio.git
```
3. Navigate to the repo:
```bash
	cd rohitfolio
```
4. Start the development server:
	- Yarn:
		```bash
		yarn dev
		 ```
	- NPM:
		```bash
		npm dev
		 ```
5. Add your personal flare to the portfolio and make it yours 🤝

## Customization

### Tailwind CSS:
Please refer to the [Official Tailwind Documentation](https://tailwindcss.com/docs) for reference

The color palletes can be changed from the <u>tailwind.config.js</u>:
```js
theme: {
	extend: {
		colors: {
			primary:  "#FFFCF2",
			secondary:  "#CCC5B9",
			tertiary:  "#403D39",
			primary_dark:  "#252422",
			accent:  "#EB5E28",
		},
},
```
---
### Fonts:
- Please refer to the Next.js official [documentation](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) for fonts
- If you wish to change the fonts, it can be changed within the file <u>./public/utils/FontLoader.tsx</u>
- Default configuration of the project
	```typescript
	import localFont from  "next/font/local";
	export  const  generalSans  =  localFont({
		src:"../assets/fonts/GeneralSans.ttf",
		display:"swap",
		variable:"--font-generalSans"
	});
	
	export  const  clashGrotesk  =  localFont({
		src:'../assets/fonts/ClashGrotesk.ttf',
		display:"swap",
		variable:"--font-clashGrotesk"
	}); 
	```
- The assets for static fonts can be configured in the path <u>./public/assets/fonts/</u>
---
### Sanity CMS:
- The schema that is used to create posts on the backend is defined in the file <u>/sanity/schemas/post.ts</u>
- Feel free to customise the schema and deploy the sanity backend and use it for dynamic content management.
---
### Environment Variables:
- Create an account on sanity and use the API key to initialise the sanity CMS for the project
- Sign up for an account on React Resend and use the API key to initialise the contact form section email function.
- Create a <u>.env.local</u> file inside the root directory of the repository and use these environment variables to get the project up and running.
```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=""
NEXT_PUBLIC_SANITY_DATASET=""
RESEND_API_KEY=""
```
---
### React Resend:
- Sign up for an account at [React Resend](https://resend.com/)
- Set up a project and copy the API key and paste the value in the environment variables.
---
### Email Template:
- Refer to the documentation of [React Email](https://react.email/) for templates and how to configure it
- The default template of the project is located at <u>./lib/EmailTemplate.tsx</u>
## Contributing

Your contributions make the community an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would improve this project, please fork the repo and create a pull request. You can also simply open an issue with the relevant tag. Don't forget to give the project a star! Thanks again 🫡
## License

This project is licensed under the MIT License - see the **LICENSE** file for details.
## Contact
For any questions or suggestions regarding this project or if you want to collaborate on a project, please feel free to reach out!

**Rohit Manivel**   
GitHub: [@rohit-iwnl](https://github.com/rohit-iwnl)  
LinkedIn: [My LinkedIn](https://www.linkedin.com/in/rohit-manivel)

