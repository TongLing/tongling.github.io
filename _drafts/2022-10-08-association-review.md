# Literature review of Association of demographics, physical activity and elderly falls


## 1. Association of Leisure Time Physical Activity Types and Risks of All-Cause, Cardiovascular, and Cancer Mortality Among Older Adults
https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2795598

### Some important points mentioned: 
- Objective: to investigate the asscoiation between physical activity and mortality risk.
  
### The listed study have mentioned:
- Higher amounts of physical activity are associated with increased longevity.
- Even in same activity MET hours, activity type might shows different benefit to the reduction of mortality risk. The author mentioned elite swimmers have better pulmonary function, resulting in lower risk of cardiovascular mortality. 

### Implications: 
- some activities like marathon participants are getting older. Although marathon is associated with lower CVD-disease mortality among young population. The older adults' association is unknown. 

### Data source:
- Very good size data set. The data was pretty complete and includes rich info.

### Methodology: 
(Predictor Variable) Different aspects of physical activity have been studied, such as:
- Activity type, swimming, biking, walking, etc.
- Length of Activity (MET hours), in range-based variables.

(Independent Variable) The mortality risk includes: 
- cardiovascular mortality, cancer mortality, all-cause mortality.

#### Stat analysis:

Cox proportional hazard regression model was used. 

Sensitivity analyses was conducted.

Sub-group analysis looks great, especially for exploring the sex, and other demographic factors.

Demographic variables were adjusted to exclude the confounding effects.
For large group, use p<0.01 for a more conservative estimate for the number of statistical tests, because some experts may question this for bonferroni correction. The bonferroni correction is a method of controlling the family-wise error rate when performing multiple comparisons. This is a good method to adjust for the error when we did too much analysis. However, it can be too conservative, and it is not recommended for large groups.

### Results:
The result doesn't look too significant. the association is not really strong. 

I would question the MET hours variable: the range designing can be tricky, or deceiving, if the author make a hypothesis that too much activities are not good for health, and they can design a threshold to fit the hypothesis

The analysis for sub-group, especially for charts, is a good thing to learn. 

### What else can be studied:
Future study suggestions (use accelerometers, follow-up survey) doesnt look too practical. The limitations also mentioned it is not generalizable to all populations. So focusing on the discrepancy between race and socioeconomics might be a good idea. 


## 2. Physical Activity and Different Concepts of Fall Risk Estimation in Older People–Results of the ActiFE-Ulm Study
https://pubmed.ncbi.nlm.nih.gov/26058056/

This study checked the association of fall risk and physical activity in older city-dwelling adults. The 1-year follow up is a a good thing to learn. 

Conclusion: Falls per hours walked is a useful and precise outcome measure to quantify risk of falls in community-dwelling older people. It might also help to guide development of more personalized fall prevention programs. 

- This study did not find significant associations, however, a clear relationship was observed between another risk measure taking exposure time, physical activity, into account, namely falls per 100 hours walked. 

- Those who were low active (walked less than one hour per day) had significantly more falls per hours walked compared to high active individuals. 

-  The highest rate of falls per 100 hours walked was seen in low active persons with slow walking speed. 

-  This additional measure may give further insight into the complex relationship between PA and falls. It also may help to quantify the changes in falls risk related to specific activity interventions.

The measurement of physical activity have been reported in this study's references. This piece of data I believe is a bit difficult to retrieve from FH. Need to check what kind of data are available, but not investigated yet. 

## 3. Incident Fall Risk and Physical Activity and Physical Performance among Older Men 
https://pubmed.ncbi.nlm.nih.gov/17194749/

An early study. The study shows that active physical exercie sows a greater risk of falling. Men with great leg power (measured using meters) are have lower risk of falling. 

This study prospectively examined the relation among physical activity, physical  performance, and incident falls in a large population of older adult men. It also examined if all risk was differentially associated with certain types of ctivities and whether activity and performance  modified the effect on fall risk on each other.

The study meet the expectation of the hypothesis -- the more physical activity, the higher risk of falling. 

## Other Studies:

Recent evidence showed that exercise can reduce the fall rate by 23% in the older adults, and significantly reduce the risk of fall injuries, including fractures, head injuries, soft tissue injuries, and all other injuries requiring hospitalization.

Experts recommend strength, balance, and gait training under the guidance of medical professional, as it was shown that progressive muscle strengthening, balance training, and gait planning programs can effectively reduce the incidence of falls. 

1. Exercise intervention for the risk of falls in older adults: A protocol for systematic review and meta-analysis, https://doi.org/10.1097/MD.0000000000024548 

2. Physical Activity Reduces Your Risk For Falls, https://www.healthinaging.org/blog/physical-activity-reduces-your-risk-for-falls/

> ... Researchers have shown that higher levels of physical activity can reduce your risk for a fall ...

3. Evidence on physical activity and falls prevention for people aged 65+ years: systematic review to inform the WHO guidelines on physical activity and sedentary behaviour,  https://ijbnpa.biomedcentral.com/articles/10.1186/s12966-020-01041-3

Given the strength of this evidence, effective exercise programs should now be implemented at scale.

Summary:

Based on these studies, the direction could be: 

(1) Sub-group analysis on patient demographics and fall risk -- bascially, a refined analysis to answer the question *which sub-group of patients faces the maximum falling risk? which sub-group may face the most severe results after falling?*. 

Example: [Association between demographic characteristics, lower limb range of motion, functional performance, ability to dual task, quality of life and risk of falls in older adults of the United Arab Emirates - A cross-sectional study
](https://www.sciencedirect.com/science/article/pii/S2405844022001578)
A lot of things can be improved from this study. e.g. larger data set, conducted in United States data set. 

Example: [Socio-demographic, health-related and psychosocial correlates of fear of falling and avoidance of activity in community-living older persons who avoid activity due to fear of falling
](https://bmcpublichealth.biomedcentral.com/articles/10.1186/1471-2458-9-170),  This study was pretty detailed in their reported variables. 

Example: [Medication and fall injury in the elderly population; do individual demographics, health status and lifestyle matter?
](https://bmcgeriatr.biomedcentral.com/articles/10.1186/1471-2318-14-92) 

After the review, I believe there are lack of severe fall outcome-based studies. The fall could be further developed into some severe outcomes, such as fractures, and mortality. This involves some playings with variables. I believe fall-based fracture severity and fracture type would have a good interaction with the demographic variables. 

## Updated Abstracts:

Note: Some modifications after considering the existing studies:

- Stop using 'physical activity', because it has been completely studied.
- Stop using 'fall', because this topic is too broad and relatively difficult to be defined in a study
- Use 'fracture' and all related variables. This is the target variable we are going to investigate. 
  - Split `fracture` variable into `fracture type`, `fracture severity`. 
  - For demographic variables, the `physical activity` can also be added, but this variable can be dropped if no data is available, or no any significant association is found.
  - Consider socioeconomic variables relatively unimportant. The reason is that a fracture usually should be a severe event, people of all socioeconomic status should have equally the same adoption -- once fracture happens, they should all go to the hospital.

## Title: A Gap analysis: Association between patient demographics and fall-caused fracture type and fracture severity

```
Question: What demographic and of the older adult population are associated with risk of each type of fracture, and severe fracture outcomes after falling?

Findings: We investigated the fall-and-fracture risk for each demographic and socioeconomic variables compared to general population. We investigated the type of fractures. We also checked the hospitalization rate and mortality rate. we finally confirmed the association between demographic variables and fracture rate, hospitalization rate and mortality rate. 

Significance: Demographic variables affect the fracture risk, and the severity of the fracture. The demographic variables is an important predicting factor to consider and to predict the fracture risk, and the severity of the fracture. 
```

Next steps: Collect variables and build an initial notebook, as discussed above. 