# 🍔 Kupa Food Delivery App

A modern React Native food delivery application built using Expo and React Navigation.

This project demonstrates:
- Stack Navigation
- Bottom Tab Navigation
- Drawer Navigation
- Nested Navigators
- Authentication Flow
- Deep Linking
- Programmatic Navigation
- Modern UI/UX

---

# 📱 Features

## ✅ Authentication Flow
- Onboarding Screens
- Login Screen
- Persistent Auth Flow
- Redirect after login

---

## ✅ Stack Navigation
- Onboarding → Login → Main App flow
- Restaurant Detail navigation
- Cart navigation
- Header customization
- Back navigation support

---

## ✅ Bottom Tabs
- Home
- Search
- Orders
- Profile

Includes:
- Icons
- Active tab colors
- Nested restaurant stack
- Orders badge support

---

## ✅ Drawer Navigation
Accessible from Profile screen.

Includes:
- User avatar
- User name
- Drawer items
- Logout functionality

---

## ✅ Deep Linking
Supports direct navigation using:

```bash
foodapp://restaurant/123
```

Example:
- Opens Restaurant Detail screen directly

---

## ✅ Programmatic Navigation
Uses:
- `navigate()`
- `goBack()`
- `replace()`
- `reset()`

Navigation behavior works properly across the app.

---

# 🧠 Navigation Architecture

```txt
NavigationContainer
│
├── Auth Stack
│   ├── Onboarding1
│   ├── Onboarding2
│   └── Login
│
└── Main Drawer
    │
    ├── Tabs
    │   ├── Home Stack
    │   │   ├── Home
    │   │   ├── Restaurant Detail
    │   │   └── Cart
    │   │
    │   ├── Search
    │   ├── Orders
    │   └── Profile
    │
    └── Logout
```

---

# 📂 Folder Structure

```txt
src
│
├── assets
│
├── components
│
├── navigation
│   ├── AppNavigator.tsx
│   ├── AuthStack.tsx
│   ├── BottomTabs.tsx
│   ├── DrawerNavigator.tsx
│   └── HomeStack.tsx
│
├── screens
│   ├── auth
│   ├── home
│   ├── profile
│   ├── orders
│   └── search
│
├── context
│
├── hooks
│
└── utils
```

---

# 🚀 Tech Stack

- React Native
- Expo
- TypeScript
- React Navigation
- Expo Vector Icons

---

# 📦 Installation

## 1. Clone Repository

```bash
git clone https://github.com/your-username/kupa-food-app.git
```

---

## 2. Install Dependencies

Using Bun:

```bash
bun install
```

OR using npm:

```bash
npm install
```

---

## 3. Start Expo

```bash
npx expo start
```

---

# 📚 Navigation Libraries Used

```bash
@react-navigation/native
@react-navigation/native-stack
@react-navigation/bottom-tabs
@react-navigation/drawer
react-native-screens
react-native-safe-area-context
react-native-gesture-handler
react-native-reanimated
@expo/vector-icons
```

---

# 🔗 Deep Linking Setup

Example linking config:

```tsx
const linking = {
  prefixes: ['foodapp://'],
  config: {
    screens: {
      RestaurantDetail: 'restaurant/:id',
    },
  },
}
```

---

# 🛠 Example Navigation Usage

## Navigate

```tsx
navigation.navigate('RestaurantDetail')
```

---

## Replace

```tsx
navigation.replace('MainTabs')
```

---

## Go Back

```tsx
navigation.goBack()
```

---

## Reset Navigation

```tsx
navigation.reset({
  index: 0,
  routes: [{ name: 'Home' }],
})
```

---

# 🎨 UI Highlights

- Smooth navigation transitions
- Responsive layouts
- Modern food delivery UI
- Bottom sheet notifications
- Clean onboarding screens

---

# 🎥 Demo Video

Demo covers:
- Auth Flow
- Stack Navigation
- Drawer Navigation
- Bottom Tabs
- Deep Linking
- Cart & Orders Flow

---

# 🧠 Learning Outcomes

This project helped in understanding:
- Nested navigators
- App architecture
- Navigation flow decisions
- Authentication handling
- Navigation state management
- Deep linking concepts

---

# 👨‍💻 Author

Rohan Kumar

---

# ⭐ Future Improvements

- Backend Integration
- Firebase Auth
- API Integration
- Real Payment Gateway
- Animations
- Dark Mode
- Push Notifications
