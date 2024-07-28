## Getting Started

####          * First, create a .env file:

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
```

####          * Then run the following in terminal:

```bash
npm i && npm run dev

npx prisma generate

npx prisma db push

node scripts/seed.ts  (to add seeds to db)

Control + C ===> npm run dev   (restart server) 
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
