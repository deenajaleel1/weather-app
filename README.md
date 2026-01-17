# 🌦️ Weather App

A clean and responsive **Weather Application** built using **Node.js, Express, EJS, and OpenWeather API**. Users can search for any city or country to get real-time weather information with custom icons and a modern UI.

---

## 🚀 Features

* 🌍 Search weather by **city or country name**
* 🌡️ Displays **temperature, condition, humidity, and wind speed**
* 🎨 **Custom weather icons** (not default OpenWeather icons)
* 📱 Fully **responsive design** using CSS media queries
* ⚠️ User-friendly **error handling** for invalid locations

---

## 🛠️ Tech Stack

* **Frontend:** HTML, CSS, EJS
* **Backend:** Node.js, Express
* **API:** OpenWeather API
* **HTTP Client:** Axios
* **Environment Variables:** dotenv

---

## 📂 Project Structure

```
weather-app/
│
├── public/
│   ├── styles/
│   │   └── main.css
│   └── icons/
│       └── (custom weather SVG icons)
│
├── views/
│   └── index.ejs
│
├── index.js
├── package.json
├── package-lock.json
├── .env (not pushed to GitHub)
└── README.md
```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory and add:

```
OPENWEATHER_API_KEY=your_api_key_here
```

> ⚠️ Do not upload `.env` to GitHub

---

## ▶️ How to Run Locally

1. Clone the repository

```bash
git clone https://github.com/deenajaleel1/weather-app.git
```

2. Navigate into the project

```bash
cd weather-app
```

3. Install dependencies

```bash
npm install
```

4. Start the server

```bash
node index.js
```

5. Open your browser and visit

```
http://localhost:3000
```

---

## 📌 Future Improvements

* 🌙 Dark mode support
* 📍 Auto-detect user location
* 📅 7-day weather forecast
* 🚀 Deploy the app online

---

## 👩‍💻 Author

**Deena Jaleel**
Aspiring Web Developer

---

## ⭐ Acknowledgements

* OpenWeather API
* Meteocons for weather icons
* Google Fonts (Jaro)

---

If you like this project, please ⭐ the repository!

