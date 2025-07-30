# שלב 1: שימוש בתמונה בסיסית של Node
FROM node:18

# שלב 2: הגדרת תיקיית עבודה בתוך הקונטיינר
WORKDIR /app

# שלב 3: העתקת קבצי package.json
COPY package*.json ./

# שלב 4: התקנת תלויות
RUN npm install

# שלב 5: העתקת שאר הקבצים
COPY . .

# שלב 6: פתיחת פורט (Render יקצה פורט משלו)
EXPOSE 3000

# שלב 7: הפעלת השרת
CMD ["npm", "start"]
