# Password Authentication

This application uses a password gate to restrict access. The password is obfuscated using SHA-256 hashing.

## Important Security Notice

⚠️ **This is NOT true security** - This is client-side obfuscation only. A determined person can still bypass it by:
- Setting `localStorage.setItem('dc20-authenticated', 'true')` in browser console
- Decompiling the JavaScript bundle
- Finding the hash and attempting to reverse it (difficult but not impossible)

This is meant to be a **simple barrier** to prevent casual access, not enterprise-grade security.

## Current Setup

- Password hash is stored in `.env` file (not committed to git)
- Hash is loaded via Vite environment variables
- The actual password is never stored in the code

## Changing the Password

1. **Generate a new hash:**
   ```bash
   node -e "console.log(require('crypto').createHash('sha256').update('YOUR_NEW_PASSWORD').digest('hex'))"
   ```

2. **Update `.env` file:**
   ```
   VITE_PASSWORD_HASH=<your-new-hash>
   ```

3. **Rebuild the application:**
   ```bash
   npm run build
   ```

## For New Developers

1. Copy `.env.example` to `.env`
2. Ask the project owner for the password hash
3. Add it to your `.env` file

## How It Works

1. User enters password on the gate page
2. Password is hashed using SHA-256 (browser's Web Crypto API)
3. Hash is compared with the stored hash from environment variable
4. If match → access granted, authentication stored in localStorage
5. If no match → error message shown

## Files

- `.env` - Contains the password hash (gitignored, not committed)
- `.env.example` - Template for environment variables (committed to git)
- `src/utils/auth.ts` - Password hashing and verification logic
- `src/components/PasswordGate.tsx` - Login UI component
