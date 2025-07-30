# # שלב 1: שימוש בתמונה בסיסית של Node
# FROM node:18

# # שלב 2: הגדרת תיקיית עבודה בתוך הקונטיינר
# WORKDIR /app

# # שלב 3: העתקת קבצי package.json
# COPY package*.json ./

# # שלב 4: התקנת תלויות
# RUN npm install

# # שלב 5: העתקת שאר הקבצים
# COPY . .

# # שלב 6: פתיחת פורט (Render יקצה פורט משלו)
# EXPOSE 3000

# # שלב 7: הפעלת השרת
# CMD ["npm", "start"]


# Use official Node.js runtime as base image
FROM node:18-alpine

# Set working directory in container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application code
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["node", "index.js"]
