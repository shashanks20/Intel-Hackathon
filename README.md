[<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Intel_logo_%282020%2C_light_blue%29.svg/300px-Intel_logo_%282020%2C_light_blue%29.svg.png" width="50">](https://www.intel.com/)
[<img src="https://www.intel.com/content/dam/develop/public/us/en/images/admin/oneapi-logo-rev-4x3-rwd.png" width="50">](https://www.intel.com/)
[![React](https://img.shields.io/badge/React-%2300D8FF.svg?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![Jupyter Notebook](https://img.shields.io/badge/Jupyter%20Notebook-%23F37626.svg?style=flat&logo=jupyter&logoColor=white)](https://jupyter.org/)

# Predicting Power Grid Failure Risk with Machine Learning

Assessing the risk of power grid failure under various disturbances such as heat waves, wind events, and extreme weather phenomena is crucial for ensuring the reliability and resilience of the grid. This project aims to predict the risk of power grid failure using machine learning models trained on historical data and real-time weather information.

## Overview

This project utilizes machine learning techniques to assess the risk of power grid failure based on weather conditions and historical grid performance data. By analyzing past incidents and correlating them with weather patterns, the models can predict the likelihood of grid failure under different scenarios.

## Technologies Used

- **Python Libraries**: 
  - `scikit-learn` with Intel oneAPI extensions (`sklearnex`) for machine learning algorithms.
  - `pandas`, `numpy`, `matplotlib` for data preprocessing and visualization.
  - `requests` for accessing real-time weather data from the OpenWeather API.

- **Machine Learning Models**: 
  - Random Forest Classifier and Support Vector Classifier (SVC).
  - Model ensembling techniques for improved prediction accuracy.

- **Intel OneAPI**: Leveraging Intel's advanced hardware capabilities for optimized performance during model training and inference.

## Data Preprocessing

- Utilized `sklearnex` and `patch_sklearn` for seamless integration with Intel hardware.
- Applied standard scaling to normalize the data and improve model performance.

## Model Training and Evaluation

- Trained Random Forest and SVC models on historical grid performance data.
- Evaluated model performance using cross-validation and achieved an accuracy of 90.1%.

## Real-Time Weather Data Integration

- Integrated the OpenWeather API to access real-time weather data for predictive modeling.
- Utilized weather parameters such as temperature, humidity, and wind speed as features for model training.

## React Interface for Risk Assessment

- Developed a user-friendly interface using React to assess the risk of power grid failure.
- Integrated machine learning models to provide real-time risk predictions based on user input and weather conditions.

## Conclusion

This project demonstrates the use of machine learning and real-time weather data to predict the risk of power grid failure. By leveraging Intel's advanced hardware capabilities and optimized software stack, we achieve high accuracy in risk assessment, helping utilities and grid operators make informed decisions to ensure grid reliability and resilience.
