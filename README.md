# 📖 &middot; [Coursi LMS Nextjs Prisma](https://github.com/mohammadnedaei/Coursi-LMS-Nextjs-Prisma) &middot;

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/mohammadnedaei/Coursi-LMS-Nextjs-Prisma/blob/main/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/mohammadnedaei/Coursi-LMS-Nextjs-Prisma/pulls)

## 🔎 Overview

`Coursi-LMS-Nextjs-Prisma` is a refreshed reboot and clone of `Coursera`. Front-End is created with
`React` and modern UI libraries. There is a `dashboard` for users and teachers. Back-End is working with a `Nextjs` server connected to a `MySQL` database using `Prisma` ORM.

### This app looks like this:

#### Screenshots may change in the future because of UI/UX changes.

### 🖥️ Desktop view:
![Coursi - Learn Anytime_ Anywhere with Expert-Led Online Courses · 11 36am · 12-11](https://github.com/user-attachments/assets/3213a60e-3132-41de-9537-08b98274cd3d)

![Coursi - Learn Anytime_ Anywhere with Expert-Led Online Courses · 11 37am · 12-11](https://github.com/user-attachments/assets/b96636dd-eec8-42db-a875-b6a731227851)
![Coursi - Learn Anytime_ Anywhere with Expert-Led Online Courses](https://github.com/user-attachments/assets/56e4067f-7d6c-4aea-afcb-bff269e5fc49)
![Screenshot 2024-12-11 at 11 39 08 AM](https://github.com/user-attachments/assets/5b79f2a8-dbd3-4e60-aadc-e8fb7453da27)
![Screenshot 2024-12-11 at 11 41 03 AM](https://github.com/user-attachments/assets/eeb811e6-8bf3-4e23-a4bc-82beeee2bdc4)
![Screenshot 2024-12-11 at 11 42 38 AM](https://github.com/user-attachments/assets/4204ba37-182c-4798-b605-dd872d84ad17)
![Screenshot 2024-12-11 at 11 42 23 AM](https://github.com/user-attachments/assets/3cde2f43-e86a-4d01-9b0d-eb774fea2ca3)
![Screenshot 2024-12-11 at 11 42 11 AM](https://github.com/user-attachments/assets/183219c5-01f6-496f-8aec-fe85c8c80f0d)
![Screenshot 2024-12-11 at 11 40 42 AM](https://github.com/user-attachments/assets/541420e1-38b2-4553-b572-d3cdf97cd4da)


## 🚀 Usage
####                           * First, create a .env file:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY
NEXT_PUBLIC_CLERK_SIGN_IN_URL
NEXT_PUBLIC_CLERK_SIGN_UP_URL
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL
DATABASE_URL
UPLOADTHING_SECRET
UPLOADTHING_APP_ID
MUX_TOKEN_ID
MUX_TOKEN_SECRET
STRIPE_API_KEY
NEXT_PUBLIC_APP_URL
```

####                           * Then run the following in terminal:

```bash
npm i && npm run dev

npx prisma generate

npx prisma db push

node scripts/seed.ts  (to add seeds to db)

Control + C ===> npm run dev   (restart server) (KEEP IT RUNNING)
```

####                * Create account in Stripe and do the following steps:

* Install Stripe on your windows / mac / linux
* run the following respectively:

```bash
stripe login
```

* Then open browser and allow in stripe dashboard

```bash
stripe login
```

```bash
stripe listen --forward-to localhost:3000/api/webhook (KEEP IT RUNNING)
```

* Then just place the generated webhook secret in the .env file
* IMPORTANT: Stripe success trigger credit card:

    * Card information: 4242 4242 4242 4242
    * CVC: 555
    * MM / YY: 05/55
    * Name: A
    * Country: Croatia,...
    *

#### To reset the entire database run this:

```bash
npx prisma migrate reset
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### ✈️ Business Plan

The app also contains a business plan. download from [here]()

### 🔧 Contributing

Feel free to fork this repo and make pull requests.
You can learn more about `React` [here](https://reactjs.org/)

### 🎯 TODO

🚧 Code factor & code quality tools improvements \
🔃 Add Shortcuts in manifest \

### 💚 Support

<a href="https://sociabuzz.com/mohammadnedaei/donate" target="_blank"><img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" height="32px" alt="Sociabuzz"></a>

### ✍🏻 Author

     Mohammad Nedaei

### 📞 Contact

    Discord: Mohammad81#3277


