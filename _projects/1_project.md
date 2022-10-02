---
layout: page
title: Machine learning is going real-time
description: a project with a background image
img: assets/img/1.jpg
importance: 1
category: research
---

These topics are not related to healthcare or medicine. However, the timestamp is really a special field in EHR. when we process data no matter in any format, it always has to convert to other formats. Sometimes its an DOB to age conversion, sometime is a chronological order, linking of one diagnosis event time happens before another diagnosis, then use a cohort study method to process them in statistical ways. 

I've been thinking about how to apply real-time prediction on many related events in healthcare, especially those events that must use multiple rows of timestamps.

For example, thinking about a electrocardiogram (ECG) graph. Some papers (Cardiologist-Level Arrhythmia Detection With Convolutional Neural Networks) have proposed to use static panel data to predict Arrhythmia Detection (see paper above), but the clinical application does not work like this. In clinical scenario, the ECG graph is not a panel data. Each patient may equip with a monitoring system. The system will generate real-time data at every moment. The ML prediction model will be much more useful if they can process real-time data. Imagine a AI-equipped ECG monitoring device, when there is an emergency, the device can alarm which type of heart abnormality is detected in real-time.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/project/Google-Monarch.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Google Monarch's Database system
</div>

This time-series form can not only work on heart rate, but also can work on other types of vital signs data. Other types of data may include blood pressure, respiration rate, SpO2, body Temperature.  As long as there is a real-time data stream, and the data stream have a identifiable pattern, it is possible to develop an AI application to empower the ability to identify patients' abnormal signs in real time. I believe no one have generated such results by far. How to implement such a monitoring system? There is a blog post Real-time machine learning: challenges and solutions have explained real-time prediction in great details. (Stage 2). I found the online prediction with batch features can be an feasible option. We can train model in one time using high-quality data, and then apply to real-time monitoring data events. For Stage 3 and after, the implementation seems really complicated.  As for continual learning, they are not necessary because we can choose not to learn from patient's real-time data stream. 

The last link shows an implementation of machine learning services for real-time prediction just like an API. The implementation is not related to healthcare anyway.  When we input the data, the ML-model-based service can generate a label for specific tasks. It has really great potentials - when we find a scenario that really needs such services. 

All of the discussions are based on traditional data frame. However, Google uploaded a brand new type of time series database. It is really new, so they may not possible to use. After reading Google's new DB structure, I believe this structure will be implemented on other Machine learning tasks requiring real-time pattern recognition, but not on healthcare domain. It may be on the far future.. but we can see (or contribute) something on this real-time event prediction topic.

## References
[Machine learning is going real-time](https://huyenchip.com/2020/12/27/real-time-machine-learning.html)
[Real-time machine learning: challenges and solutions](https://huyenchip.com/2022/01/02/real-time-machine-learning-challenges-and-solutions.html)
[Monarch: Google's planet-scale in-memory time series database](https://www.vldb.org/pvldb/vol13/p3181-adams.pdf)
[Cardiologist-Level Arrhythmia Detection With Convolutional Neural Networks](https://stanfordmlgroup.github.io/projects/ecg/)
[Machine Learning Service for Real-Time Prediction](https://towardsdatascience.com/machine-learning-service-for-real-time-prediction-9f18d585a5e0)