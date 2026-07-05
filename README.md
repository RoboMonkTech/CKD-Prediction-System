# 🏥 Chronic Kidney Disease Prediction System

A web-based Chronic Kidney Disease (CKD) Prediction System developed using Machine Learning concepts and deployed as an interactive web application. The machine learning model was developed in Google Colab using the Random Forest Classifier, while the web application provides a simple demonstration for predicting CKD based on clinical parameters.

---

# 📌 Project Objective

The objective of this project is to predict whether a patient is at risk of Chronic Kidney Disease using clinical data. The system helps demonstrate how Machine Learning can assist healthcare professionals in disease prediction and early diagnosis.

---

# 📂 Dataset Information

**Dataset Name:** Chronic Kidney Disease Dataset

**Dataset Type:** CSV

**Domain:** Healthcare

The dataset contains clinical parameters such as:

- Age
- Blood Pressure
- Specific Gravity
- Albumin
- Sugar
- Blood Glucose Random
- Blood Urea
- Serum Creatinine
- Sodium
- Potassium
- Hemoglobin
- Packed Cell Volume
- White Blood Cell Count
- Red Blood Cell Count
- Hypertension
- Diabetes Mellitus
- Appetite
- Pedal Edema
- Anemia
- Classification (CKD / Not CKD)

---

# ⚙️ Machine Learning Workflow

The machine learning model was developed using the following steps:

1. Import Required Libraries
2. Load the Dataset
3. Explore the Dataset
4. Handle Missing Values
5. Encode Categorical Features
6. Split Dataset into Training and Testing Sets
7. Train the Random Forest Classifier
8. Predict Disease Classification
9. Evaluate Model Performance
10. Test the Model with New Patient Data

---

# 🤖 Algorithm Used

**Random Forest Classifier**

Random Forest is a supervised machine learning algorithm used for classification problems. It combines multiple decision trees to improve prediction accuracy and reduce overfitting, making it suitable for healthcare classification tasks.

---

# 🌐 Web Application

The web application provides an interactive dashboard where users can enter patient details and receive an instant prediction.

### Features

- Healthcare Dashboard
- Patient Information Form
- Disease Prediction
- Confidence Percentage
- Risk Level
- Responsive Design

---

# 📊 Technologies Used

## Machine Learning

- Python
- Google Colab
- Pandas
- NumPy
- Matplotlib
- Scikit-learn

## Web Development

- HTML5
- CSS3
- JavaScript
- Font Awesome
- Google Fonts

## Deployment

- GitHub
- Vercel

---

# 📝 Input Parameters

The web application accepts the following inputs:

- Patient Name
- Age
- Blood Pressure
- Blood Glucose
- Serum Creatinine
- Hemoglobin

---

# 🧠 Prediction Logic (Web Demo)

The current web application demonstrates CKD prediction using the following rules:

- Age > 50 years
- Blood Pressure > 140 mmHg
- Blood Glucose > 180 mg/dL
- Serum Creatinine > 1.5 mg/dL
- Hemoglobin < 12 g/dL

If these conditions are satisfied, the application predicts **CKD Detected**. Otherwise, it predicts **No CKD Detected**.

---

# 📈 Prediction Output

The application displays:

- CKD Detected / No CKD Detected
- Confidence Percentage
- Risk Level
- Personalized Patient Message

---

# 📂 Project Structure

```
CKD-Prediction-System/
│
├── index.html
├── style.css
├── script.js
├── README.md
├── CKD_Project.ipynb
├── kidney_disease.csv
└── screenshots/
```

---

# 📷 Screenshots

Include screenshots of:

- Home Page
- Patient Details Form
- CKD Prediction Result
- No CKD Prediction Result
- Google Colab Output

---

# 🌐 Live Demo

```
https://ckd-prediction-system-mu.vercel.app/```

---

# 🚀 Future Enhancements

- Integrate the trained Machine Learning model with the web application.
- Develop a backend using Flask or FastAPI.
- Store patient records in a database.
- Add user authentication.
- Build a healthcare analytics dashboard.

---

⭐ This project demonstrates the implementation of a Chronic Kidney Disease Prediction System using Machine Learning concepts together with an interactive web interface.
