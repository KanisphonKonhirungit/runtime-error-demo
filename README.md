# Runtime Error Demo

This project is a simple React 19 application using Tailwind CSS. The project is designed to compile successfully but will throw a runtime error when interacting with the UI.

### 📌 Features

React 19 with functional components and hooks
Tailwind CSS for styling
A simple button to change a message
Intentional runtime error when clicking the button

### 🚀 Installation & Setup

1. Clone the repository:
```
git clone https://github.com/your-repo/runtime-error-demo.git
cd runtime-error-demo
```

2. Install dependencies:
```
npm install
```

3. Start the development server:
```
npm start
```


### ⚠️ Runtime Error Explanation

The app initially displays a message. When clicking the "Change Message" button, the state message is set to null. This causes a TypeError when React tries to execute:
```
{message.toUpperCase()}
```
Error message:
```
TypeError: Cannot read properties of null (reading 'toUpperCase')
```
### 🛠️ How to Fix the Error

If you want to fix this issue, update the code in App.js like this:
```
<h1 className="text-3xl font-bold text-blue-600 mb-4">
  {message ? message.toUpperCase() : 'No message'}
</h1>
```

This will prevent `null.toUpperCase()` from being executed.

### 📜 License

This project is for educational purposes. Feel free to modify and use it as needed!
