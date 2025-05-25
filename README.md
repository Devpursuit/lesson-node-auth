# 🔐 Authentication with bcrypt and JWT

Let’s keep your app secure with password hashing and JSON Web Tokens!

## 🔧 What You’ll Do

- Hash passwords with bcrypt.
- Sign and verify JWTs.

## ✅ Activity Instructions

1. Install dependencies:
```
npm install bcryptjs jsonwebtoken
```

2. In your registration route:

```
const bcrypt = require('bcryptjs');
const hashed = await bcrypt.hash(password, 10);
```

3. On login, compare password and return a token:

```
const jwt = require('jsonwebtoken');
const token = jwt.sign({ userId: user._id }, 'secretKey');
```

## 🎯 Success Criteria 

* You hashed passwords before saving.

* You created and returned tokens.

* You verified tokens in protected routes.

## ⚠️ Tip
Never hardcode your secret key. Use environment variables!
