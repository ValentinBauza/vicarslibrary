/**
 * Authentication utilities
 * Uses SHA-256 hashing to obfuscate password comparison
 */

/**
 * Hash a string using SHA-256
 */
async function hashString(input: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(input);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

/**
 * Verify password against stored hash
 * The hash is stored in environment variable to keep it out of the main code
 */
export async function verifyPassword(input: string): Promise<boolean> {
  const inputHash = await hashString(input);

  // Get expected hash from environment variable
  // Fallback to a default hash if env var is not set (for development)
  const expectedHash = import.meta.env.VITE_PASSWORD_HASH ||
    'a8c84a98f20c3e3d8c2b5f5e8d1a9c7b6e4f2a1d9b8c7e6f5a4d3c2b1e0f9a8b';

  return inputHash === expectedHash;
}

/**
 * Generate hash for a new password (development utility)
 * Use this function in browser console to generate hash for new passwords
 */
export async function generatePasswordHash(password: string): Promise<string> {
  return await hashString(password);
}
