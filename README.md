## Getting Started

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
