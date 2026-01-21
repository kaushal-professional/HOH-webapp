# Login Screen - Next.js

This is a complete login screen implementation for Next.js with the same UI and functionality as the React Native version.

## 📁 Files Created

1. **Context Providers**
   - `context/ThemeContext.tsx` - Dark/Light mode theme management
   - `context/AuthContext.tsx` - Authentication state and login logic

2. **Components**
   - `components/login-screen.tsx` - Main login screen component

3. **Pages**
   - `app/login/page.tsx` - Login page route

4. **API Routes**
   - `app/api/auth/login/route.ts` - Mock authentication API endpoint

## 🚀 Features

✅ **Responsive Design** - Adapts to all screen sizes (mobile, tablet, desktop)
✅ **Dark/Light Mode** - Full theme support with persistent storage
✅ **Password Visibility Toggle** - Eye icon to show/hide password
✅ **Form Validation** - Client-side validation for email and password
✅ **Error Handling** - User-friendly error messages
✅ **Loading States** - Visual feedback during login process
✅ **Accessible** - Proper labels, ARIA attributes, and keyboard navigation
✅ **Type-Safe** - Full TypeScript support

## 📝 Setup Instructions

### 1. Add Logo Image

Place your `logo.jpg` file in the `public` folder:
```
public/
  logo.jpg  <-- Add your logo here
```

### 2. Test the Login Page

Navigate to: `http://localhost:3000/login`

**Demo Credentials:**
- Email: `demo@example.com`
- Password: `password123`

### 3. Connect to Your Backend API

Replace the mock API in `app/api/auth/login/route.ts` with your actual backend:

```typescript
// Example: Call your real API
const response = await fetch('https://your-api.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, password }),
});
```

Or modify `context/AuthContext.tsx` to call your backend directly.

## 🎨 Styling

The component uses:
- **Tailwind CSS** for styling
- **Responsive classes** (sm:, md:, lg:)
- **Dark mode classes** (dark:)
- Custom color schemes matching your theme

## 🔧 Customization

### Change Colors

Update the button color in `components/login-screen.tsx`:
```tsx
className="bg-blue-500 hover:bg-blue-600"  // Change to your brand color
```

### Modify Validation

Edit the validation logic in the `handleLogin` function:
```tsx
if (email.trim() === '' || password.trim() === '') {
  setError('Please enter both email and password');
  return;
}
```

### Add Features

- Password reset link
- Remember me checkbox
- Social login buttons
- Two-factor authentication

## 📱 Responsive Breakpoints

- **Small screens** (< 360px): Mobile phones
- **Medium screens** (360px - 768px): Tablets
- **Large screens** (≥ 768px): Desktops

## 🔐 Security Notes

1. Never store passwords in plain text
2. Use HTTPS in production
3. Implement rate limiting
4. Add CSRF protection
5. Validate inputs on both client and server
6. Use secure HTTP-only cookies for tokens

## 🎯 Usage Example

```tsx
import LoginScreen from '@/components/login-screen';

export default function MyPage() {
  return <LoginScreen onLogin={() => router.push('/dashboard')} />;
}
```

## 🤝 Integration

To use the providers globally (optional), wrap your root layout:

```tsx
// app/layout.tsx
import { ThemeProvider } from '@/context/ThemeContext';
import { AuthProvider } from '@/context/AuthContext';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ThemeProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
```

---

**Ready to use!** Visit `/login` to see your new login screen. 🎉
