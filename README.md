# 📡 MQTT Simulation System  

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)  
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)  
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)  
![MQTT](https://img.shields.io/badge/MQTT-660066?style=for-the-badge&logo=mqtt&logoColor=white)  

A **custom MQTT-like system** implemented in Node.js, simulating the core components of a messaging architecture:  

- 🟢 **Broker** – Handles topics & routes messages  
- 📤 **Publisher** – Sends messages to a topic  
- 📥 **Subscriber** – Listens for messages from a topic  

---

## 🚀 Features  

✅ Simulates **Publisher-Subscriber architecture**  
✅ Custom **broker** implementation  
✅ Configurable topics & messages  
✅ Lightweight & easy to run  

---

## 📂 Project Structure  

```
mqtt/
├── app.js                # Main entry point
├── broker/
│   └── index.js          # Broker logic
├── clients/
│   ├── publisher/
│   │   └── publisher.js  # Publisher client
│   └── subscriber/
│       └── subscriber.js # Subscriber client
├── config/
│   └── mqttConfig.js     # Configuration
├── package.json          # Dependencies & scripts
└── README.md             # Documentation
```

---

## ⚡ Installation  

Clone the repo and install dependencies:  

```bash
git clone https://github.com/yourusername/mqtt.git
cd mqtt
npm install
```

---

## ▶️ Usage  

### 1️⃣ Start the Broker  
```bash
node broker/index.js
```

### 2️⃣ Run a Publisher  
```bash
node clients/publisher/publisher.js
```

### 3️⃣ Run a Subscriber  
```bash
node clients/subscriber/subscriber.js
```

---

## 🛠️ Configuration  

You can configure topics, ports, and broker details inside:  
```
config/mqttConfig.js
```

---

## 📌 Example  

**Publisher sends**:  
```bash
Message: "Hello IoT!"
Topic: "home/livingroom"
```

**Subscriber receives**:  
```bash
[home/livingroom] Hello IoT!
```

---