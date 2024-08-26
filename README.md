# Next.js + Lucia Authentication Example

**Based on this [tutorial](https://www.youtube.com/watch?v=t-JJgTRf3Ms)** 

## Getting Started

### Installation
1. Clone the repository:
   ```bash
   git clone [https://github.com/Narathip99/next-lucia-auth.git](https://github.com/Narathip99/next-lucia-auth.git)
   ```   
2. Install dependencies:
   ```bash
   bun install
   ```
3. Generate Prisma schema:
   ```bash
   bunx prisma generate
   ```
4. Create a .env file at the root of your project and add the following environment variables:
    ```bash
   DATABASE_URL="http://localhost:3000"
   GOOGLE_CLIENT_ID="from google api service"
   GOOGLE_CLIENT_SECRET="from google api service"
   ```
5. Run Project
   ```bash
   bun dev
   ```
