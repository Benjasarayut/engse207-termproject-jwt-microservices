# 🔐 ENGSE207 - Term Project: JWT Microservices

โปรเจกต์นี้เป็นส่วนหนึ่งของรายวิชา ENGSE207  
พัฒนาโดยใช้แนวคิด **Microservices Architecture** ร่วมกับ **JWT Authentication**  
เพื่อสร้างระบบ Backend ที่มีความปลอดภัย และสามารถขยายระบบได้ง่าย

---

## 📌 แนวคิดของระบบ

ระบบนี้ใช้ **Microservices Architecture** ซึ่งเป็นการออกแบบให้ระบบถูกแยกออกเป็นหลาย service ที่ทำงานอิสระต่อกัน  [oai_citation:0‡GitHub](https://github.com/oussamabasry/microservices-jwt-spring-security-from-scratch?utm_source=chatgpt.com)  

และใช้ **JWT (JSON Web Token)** สำหรับ Authentication  
เพื่อให้สามารถยืนยันตัวตนผู้ใช้งานได้อย่างปลอดภัย โดย token จะถูกส่งไปกับทุก request  [oai_citation:1‡GitHub](https://github.com/murraco/spring-boot-jwt?utm_source=chatgpt.com)  

---

## 🧱 Architecture Overview

ระบบประกอบด้วย service หลัก เช่น:

- 🔑 Auth Service (จัดการ Login / Register / JWT)
- 🌐 API Gateway (เป็นทางเข้าหลักของระบบ)
- 📦 Microservices อื่น ๆ (เช่น User / Product / Service ต่าง ๆ)
- 🗄️ Database (แยกตามแต่ละ service)

👉 แต่ละ service สามารถ deploy แยกกันได้ (Independent Deployment)

---

## ⚙️ Features

- 🔐 Authentication ด้วย JWT
- 👤 ระบบสมัครสมาชิก / เข้าสู่ระบบ
- 🛡️ Authorization (Role-based)
- 🔗 API Gateway สำหรับรวม service
- 📡 REST API Communication ระหว่าง services
- 🐳 รองรับ Docker (ถ้ามีในโปรเจกต์)

---

## 👥 สมาชิกในทีม

- นายเบญจครายุทธ น้อยอุบล  
- นายชนะสรณ์ บุตรถา  
- นายธาวัน ทิพคุณ  
- นายอดิ โรจน์ กุหลั่น  

---

## 🚀 วิธีใช้งานโปรเจกต์

### 1. Clone Repository
```bash
git clone https://github.com/Benjasarayut/engse207-termproject-jwt-microservices.git
```

### 2. เข้าไปที่โฟลเดอร์
```bash
cd engse207-termproject-jwt-microservices
```

### 3. รันระบบ

#### ▶️ แบบปกติ (Spring Boot)
```bash
mvn clean install
mvn spring-boot:run
```

#### ▶️ หรือใช้ Docker (ถ้ามี)
```bash
docker-compose up --build
```

---

## 🔑 ตัวอย่าง API

### Register
```
POST /auth/register
```

### Login
```
POST /auth/login
```

👉 เมื่อ login สำเร็จจะได้รับ **JWT Token**  
ใช้ส่งใน Header:
```
Authorization: Bearer <token>
```

---

## 🛠️ เทคโนโลยีที่ใช้

- Java ☕
- Spring Boot
- Spring Security
- JWT (JSON Web Token)
- Maven
- Docker (ถ้ามี)
- REST API

---

## 📦 จุดเด่นของโปรเจกต์

- แยก service ชัดเจน (Microservices)
- ระบบมีความปลอดภัยด้วย JWT
- รองรับการขยายระบบ (Scalable)
- ลดการผูกกันของระบบ (Loose Coupling)

---

## 📖 สิ่งที่ได้เรียนรู้

- การออกแบบระบบแบบ Microservices
- การใช้ JWT สำหรับ Authentication
- การทำ API Gateway
- การเชื่อมต่อระหว่างหลาย Service
- การ Deploy ระบบแบบแยกส่วน

---

## 📎 Repository
https://github.com/Benjasarayut/engse207-termproject-jwt-microservices.git
