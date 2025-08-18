const knowledgeBase = {
    knowledge_base : {
        'questions': {
            'fitness': {
                'question': "What is your primary fitness goal?",
                'options': {
                    'MuscleGain': 'current_weight',
                    'FatLoss': 'current_weight',
                    'LeanBulk': 'current_weight',
                },            
            },
            'current_weight': {
                'question': "What is your current weight?",
                'options': {
                    'MoreThan40': 'age_group',
                    'MoreThan50': 'age_group',
                    'MoreThan60': 'age_group',
                    'MoreThan70': 'age_group',
                    'MoreThan80': 'age_group',
                    'MoreThan90': 'age_group',
                    'MoreThan100': 'age_group',
                },
            },
            'age_group': {
                'question': "What is your age group?",
                'options': {
                    '30': 'exercise_frequency',
                    '40': 'exercise_frequency',
                    '50': 'exercise_frequency',
                    '60': 'exercise_frequency',
                },
            },
            'exercise_frequency': {
                'question': "How often do you exercise?",
                'options': {
                    'Rarely': 'training_type',
                    'Occasionally': 'training_type',
                    'Frequently': 'training_type',
                    'Daily': 'training_type',
                },
            },
            'training_type': {
                'question': "What type of training do you primarily engage in?",
                'options': {
                    'StrengthTraining': 'supplements',
                    'Cardio': 'supplements',
                    'HighIntensityIntervalTraining': 'supplements',
                    'Mixed': 'supplements',
                    'Sports': 'supplements',
                },
            },
            'supplements': {
                'question': "Are you currently using any supplements?",
                'options': {
                    'Yes': 'sleep_duration',
                    'No': 'sleep_duration',
                },
            },
           
            'sleep_duration': {
                'question': "How much sleep do you get on average per night?",
                'options': {
                    'LessThan5Hours': 'protein_brand',
                    '5hours': 'protein_brand',
                    '6hours': 'protein_brand',
                    '7hours': 'protein_brand',
                    'More than 8 hours': 'protein_brand',
                },
            },
            'protein_brand': {
            'question': "Select your favorite protein brand:",
            'options': {
                'OptimumNutrition': 'lactose_tolerance',
                'MuscleBlaze': 'lactose_tolerance',
                'Avvatar': 'lactose_tolerance',
                'Beastlife': 'lactose_tolerance',
                'MyProtein': 'lactose_tolerance',
                'Asitis': 'lactose_tolerance',
            },
        },
        'lactose_tolerance': {
            'question': "Select the option that best suits your lactose tolerance:",
            'options': {
                'LactoseTolerant': 'protein_type',
                'LactoseIntolerant': 'protein_type',
            },
        },
        'protein_type': {
            'question': "Type of protein:",
            'options': {
                'WheyProtein': 'whey_protein_type',
                'PlantProtein': 'whey_protein_type',
            },
        },
        'whey_protein_type': {
            'question': "Type of whey protein:",
            'options': {
                'WheyProteinConcentrate': 'plant_protein_type',
                'WheyProteinIsolate': 'plant_protein_type',
                'WheyProteinHydrolysate': 'plant_protein_type',
                'None': 'plant_protein_type',
            },
        },
        'plant_protein_type': {
            'question': "Type of plant protein:",
            'options': {
                'PeaProtein': 'protein_flavor',
                'BrownRiceProtein': 'protein_flavor',
            },
        },
        'protein_flavor': {
            'question': "Your preferred flavor of protein powder:",
            'options': {
                'Unflavored': 'protein_serving_size',
                'Vanilla': 'protein_serving_size',
                'Strawberry': 'protein_serving_size',
                'Banana': 'protein_serving_size',
                'Chocolate Brownie': 'protein_serving_size',
                'Cookies and Cream': 'protein_serving_size',
                'Mango': 'protein_serving_size',
                'FruitPunch': 'protein_serving_size',
            },
        },
        'protein_serving_size': {
            'question': "Serving size:",
            'options': {
                '25g': 'digestion_issues',
                '30g': 'digestion_issues',
                '35g': 'digestion_issues',
            },
        },
        'digestion_issues': {
            'question': "Any digestion issues?",
            'options': {
                'Yes': 'protein_goal',
                'No': 'protein_goal',
            },
        },
        'protein_goal': {
            'question': "What is your primary goal for taking protein supplements?",
            'options': {
                'MuscleGain': 'protein_frequency',
                'FatLoss': 'protein_frequency',
                'MaintenanceRecovery': 'protein_frequency',
                'ImproveEndurance': 'protein_frequency',
                'GeneralHealth': 'protein_frequency',
            },
        },
        'protein_frequency': {
            'question': "How often do you consume protein supplements?",
            'options': {
                'Daily': 'diet_plan',
                '3TimesAWeek': 'diet_plan',
                '1TimesAWeek': 'diet_plan',
                'Occasionally': 'diet_plan',
            },
        },
        'diet_plan': {
            'question': "Are you following any specific dietary plan?",
            'options': {
                'Keto': 'protein_mixer',
                'LowCarb': 'protein_mixer',
                'HighProtein': 'protein_mixer',
                'Vegetarian': 'protein_mixer',
                'NoSpecificDiet': 'protein_mixer',
            },
        },
        'protein_mixer': {
            'question': "Do you mix your protein powder with:",
            'options': {
                'Water': 'creatine_brand',
                'Milk': 'creatine_brand',
                'AlmondMilk': 'creatine_brand',
                'CoconutMilk': 'creatine_brand',
                'Juice': 'creatine_brand',
                'Other': 'creatine_brand',
            },
        },
        'creatine_brand': {
            'question': "Select your favorite creatine brand:",
            'options': {
                'MuscleBlaze': 'health_issues',
                'Atom': 'health_issues',
                'Nakpro': 'health_issues',
                'Beastlife': 'health_issues',
                'MyProtein': 'health_issues',
                'Asitis': 'health_issues',
            },
        },
        'health_issues': {
            'question': "Select any health issues (if applicable):",
            'options': {
                'KidneyDisease': 'creatine_type',
                'HighBloodPressure': 'creatine_type',
                'LiverDisease': 'creatine_type',
                'None': 'creatine_type',
            },
        },
        'creatine_type': {
            'question': "Select your preferred type of creatine:",
            'options': {
                'CreatineMonohydrate': 'creatine_flavor',
                'CreatineHydrochloride': 'creatine_flavor',
                'CreatineEthylEster': 'creatine_flavor',
                'BufferedCreatine': 'creatine_flavor',
                'CreatineMagnesiumChelate': 'creatine_flavor',
                'LiquidCreatine': 'creatine_flavor',
            },
        },
        'creatine_flavor': {
            'question': "Select your preferred flavor of creatine powder:",
            'options': {
                'Unflavored': 'creatine_serving_size',
                'CoffeeFusion': 'creatine_serving_size',
                'DarkChocolate': 'creatine_serving_size',
                'TropicalTango': 'creatine_serving_size',
                'CitrusBlast': 'creatine_serving_size',
                'TangyOrange': 'creatine_serving_size',
                'FruitPunch': 'creatine_serving_size',
            },
        },
        'creatine_serving_size': {
            'question': "Select serving size:",
            'options': {
                '2g': 'creatine_time',
                '3g': 'creatine_time',
                '5g': 'creatine_time',
            },
        },
        'creatine_time': {
            'question': "Preferred time to consume creatine:",
            'options': {
                'PreWorkout': 'creatine_frequency',
                'PostWorkout': 'creatine_frequency',
                'BeforeBed': 'creatine_frequency',
                'Anytime': 'creatine_frequency',
            },
        },
        'creatine_frequency': {
            'question': "How often do you consume creatine supplements?",
            'options': {
                'Daily': 'creatine_duration',
                '3TimesAWeek': 'creatine_duration',
                '1TimesAweek': 'creatine_duration',
                'Occasionally': 'creatine_duration',
            },
        },
        'creatine_duration': {
            'question': "How long have you been using creatine supplements?",
            'options': {
                'LessThan1Month': 'preworkout_brand',
                '1months': 'preworkout_brand',
                '3months': 'preworkout_brand',
                'Over6Months': 'preworkout_brand',
            },
        },
        'preworkout_brand': {
            'question': "Select your favorite pre-workout brand:",
            'options': {
                'OptimumNutrition': 'preworkout_health_issues',
                'MuscleBlaze': 'preworkout_health_issues',
                'Ultimate Nutrition': 'preworkout_health_issues',
                'Avvatar': 'preworkout_health_issues',
                'Beastlife': 'preworkout_health_issues',
                'MyProtein': 'preworkout_health_issues',
                'Asitis': 'preworkout_health_issues',
            },
        },
        'preworkout_health_issues': {
            'question': "Select any health issues (if applicable):",
            'options': {
                'HeartDisease': 'preworkout_type',
                'HighBloodPressure': 'preworkout_type',
                'Diabetes': 'preworkout_type',
                'None': 'preworkout_type',
            },
        },
        'preworkout_type': {
            'question': "Select your preferred type of pre-workout:",
            'options': {
                'StimulantBased': 'preworkout_flavor',
                'Stimulantfree': 'preworkout_flavor',
                'PreWorkoutWithAddedCreatine': 'preworkout_flavor',
                'PreWorkoutWithAddedBCAAs': 'preworkout_flavor',
            },
        },
        'preworkout_flavor': {
            'question': "Select your preferred flavor of pre-workout powder:",
            'options': {
                'Unflavored': 'preworkout_serving_size',
                'FruitPunch': 'preworkout_serving_size',
                'BlueRaspberry': 'preworkout_serving_size',
                'Watermelon': 'preworkout_serving_size',
                'LemonLime': 'preworkout_serving_size',
                'Grape': 'preworkout_serving_size',
                'TropicalMango': 'preworkout_serving_size',
                'BerryBlast': 'preworkout_serving_size',
            },
        },
        'preworkout_serving_size': {
            'question': "Select serving size:",
            'options': {
                '5g': 'preworkout_timing',
                '10g': 'preworkout_timing',
                '15g': 'preworkout_timing',
                '20g': 'preworkout_timing',
            },
        },
        'preworkout_timing': {
            'question': "When do you prefer to take your pre-workout?",
            'options': {
                '15MinutesBeforeWorkout': 'preworkout_additives',
                '30MinutesBeforeWorkout': 'preworkout_additives',
                'ImmediatelyBeforeWorkout': 'preworkout_additives',
                'DuringWorkout': 'preworkout_additives',
                'Chewables': 'preworkout_additives',
            },
        },
        'preworkout_additives': {
            'question': "Do you prefer a pre-workout with additional ingredients?",
            'options': {
                'BetaAlanine': 'preworkout_effects',
                'NitricOxide Boosters': 'preworkout_effects',
                'Creatine': 'preworkout_effects',
                'WithBCAAs': 'preworkout_effects',
                'WithElectrolytes': 'preworkout_effects',
                'WithVitamins': 'preworkout_effects',
                'PlainPre-Workout': 'preworkout_effects',
            },
        },
        'preworkout_effects': {
            'question': "What are your desired effects from your pre-workout supplement?",
            'options': {
                'IncreasedEnergy': 'preworkout_frequency',
                'EnhancedFocus': 'preworkout_frequency',
                'ImprovedEndurance': 'preworkout_frequency',
                'BetterPump': 'preworkout_frequency',
                'FasterRecovery': 'preworkout_frequency',
                'MuscleGrowth': 'preworkout_frequency',
            },
        },
        'preworkout_frequency': {
            'question': "How often do you consume pre-workout supplements?",
            'options': {
                'Daily': 'bcaa_brand',
                '3TimesAWeek': 'bcaa_brand',
                '1TimesAWeek': 'bcaa_brand',
                'Occasionally': 'bcaa_brand',
            },
        },
        'bcaa_brand': {
            'question': "Select your favorite BCAA brand:",
            'options': {
                'OptimumNutrition': 'bcaa_health_issues',
                'MuscleBlaze': 'bcaa_health_issues',
                'Ultimate Nutrition': 'bcaa_health_issues',
                'Beastlife': 'bcaa_health_issues',
                'MyProtein': 'bcaa_health_issues',
                'Asitis': 'bcaa_health_issues',
            },
        },
        'bcaa_health_issues': {
            'question': "Select any health issues (if applicable):",
            'options': {
                'KidneyDisease': 'bcaa_ratio',
                'LiverDisease': 'bcaa_ratio',
                'HighBloodPressure': 'bcaa_ratio',
                'None': 'bcaa_ratio',
            },
        },
        'bcaa_ratio': {
            'question': "Select your preferred BCAA ratio:",
            'options': {
                'Standard': 'bcaa_flavor',
                'HigherLeucine': 'bcaa_flavor',
                'MaxLeucine': 'bcaa_flavor',
                'UltraLeucine': 'bcaa_flavor',
            },
        },
        'bcaa_flavor': {
            'question': "Select your preferred flavor of BCAA powder:",
            'options': {
                'Unflavored': 'bcaa_serving_size',
                'FruitPunch': 'bcaa_serving_size',
                'Watermelon': 'bcaa_serving_size',
                'BlueRaspberry': 'bcaa_serving_size',
                'GreenApple': 'bcaa_serving_size',
                'LemonLime': 'bcaa_serving_size',
                'OrangeBurst': 'bcaa_serving_size',
                'TropicalFusion': 'bcaa_serving_size',
            },
        },
        'bcaa_serving_size': {
            'question': "Select serving size:",
            'options': {
                '5g': 'bcaa_timing',
                '7g': 'bcaa_timing',
                '10g': 'bcaa_timing',
            },
        },
        'bcaa_timing': {
            'question': "Preferred time to consume BCAAs:",
            'options': {
                'PreWorkout': 'bcaa_frequency',
                'IntraWorkout (During)': 'bcaa_frequency',
                'PostWorkout': 'bcaa_frequency',
                'Anytime': 'bcaa_frequency',
            },
        },
        'bcaa_frequency': {
            'question': "How often do you consume BCAAs?",
            'options': {
                'Daily': 'bcaa_additives',
                '3TimesAWeek': 'bcaa_additives',
                '1TimesAWeek': 'bcaa_additives',
                'Occasionally': 'bcaa_additives',
            },
        },
        'bcaa_additives': {
            'question': "Do you prefer your BCAAs with any additional ingredients?",
            'options': {
                'WithElectrolytes': 'bcaa_effects',
                'WithGlutamine': 'bcaa_effects',
                'WithBetaAlanine': 'bcaa_effects',
                'WithCreatine': 'bcaa_effects',
                'WithVitamins': 'bcaa_effects',
                'PlainBCAAs': 'bcaa_effects',
            },
        },
        'bcaa_effects': {
            'question': "Desired effects from your BCAA supplement:",
            'options': {
                'MuscleRecovery': 'multivitamin_brand',
                'ImprovedEndurance': 'multivitamin_brand',
                'ReducedMuscleSoreness': 'multivitamin_brand',
                'EnhancedMuscleGrowth': 'multivitamin_brand',
                'IncreasedEnergy': 'multivitamin_brand',
                'HydrationSupport': 'multivitamin_brand',
            },
        },
        'multivitamin_brand': {
            'question': "Select your favorite multivitamin brand:",
            'options': {
                'MuscleBlaze': 'multivitamin_type',
                'TrueBasics': 'multivitamin_type',
                'HealthKart': 'multivitamin_type',
            },
        },
        'multivitamin_type': {
            'question': "Select your preferred type of multivitamin:",
            'options': {
                'GeneralMultivitamin': 'multivitamin_form',
                'SportsMultivitamin': 'multivitamin_form',
                'GenderSpecificMultivitamin': 'multivitamin_form',
                'AgeSpecificMultivitamin': 'multivitamin_form',
                'VeganVegetarianMultivitamin': 'multivitamin_form',
                'PrenatalMultivitamin': 'multivitamin_form',
            },
        },
        'multivitamin_form': {
            'question': "Select your preferred form of multivitamin:",
            'options': {
                'Tablets': 'multivitamin_serving_size',
                'Capsules': 'multivitamin_serving_size',
                'Powder': 'multivitamin_serving_size',
                'Gummies': 'multivitamin_serving_size',
            },
        },
        'multivitamin_serving_size': {
            'question': "Select serving size:",
            'options': {
                '1Tablet': 'multivitamin_goal',
                '2Tablets': 'multivitamin_goal',
                '3orMore': 'multivitamin_goal',
            },
        },
        'multivitamin_goal': {
            'question': "What is your primary goal for taking a multivitamin?",
            'options': {
                'FillNutrientGaps': 'multivitamin_frequency',
                'BoostImmuneSystem': 'multivitamin_frequency',
                'IncreaseEnergyLevels': 'multivitamin_frequency',
                'SupportMuscleRecovery': 'multivitamin_frequency',
                'ImproveJointHealth': 'multivitamin_frequency',
                'ImproveSkinandHairHealth': 'multivitamin_frequency',
            },
        },
        'multivitamin_frequency': {
            'question': "How often do you take multivitamin supplements?",
            'options': {
                'Daily': 'fishoil_brand',
                '3TimesAWeek': 'fishoil_brand',
                'Occasionally': 'fishoil_brand',
            },
        },
        'fishoil_brand': {
            'question': "Select your favorite fish oil brand:",
            'options': {
                'TrueBasics': 'fishoil_type',
                'MuscleBlaze': 'fishoil_type',
                'NordicNaturals': 'fishoil_type',
            },
        },
        'fishoil_type': {
            'question': "Select your preferred type of fish oil:",
            'options': {
                'Omega3': 'fishoil_form',
                'Omega369': 'fishoil_form',
                'KrillOil': 'fishoil_form',
                'CodLiverOil': 'fishoil_form',
                'FlaxseedOil': 'fishoil_form',
            },
        },
        'fishoil_form': {
            'question': "Select your preferred form of fish oil supplement:",
            'options': {
                'Softgels': 'fishoil_ratio',
                'Liquid': 'fishoil_ratio',
                'Capsules': 'fishoil_ratio',
            },
        },
        'fishoil_ratio': {
            'question': "Select your preferred Omega-3 ratio (EPA:DHA):",
            'options': {
                '180mgEPA120mgDHA': 'fishoil_serving_size',
                '220mgEPA180mgDHA': 'fishoil_serving_size',
                '500mgEPA250mgDHA': 'fishoil_serving_size',
            },
        },
        'fishoil_serving_size': {
            'question': "Select your preferred serving size:",
            'options': {
                '1Softgel': 'fishoil_goal',
                '2Softgels': 'fishoil_goal',
                '3Softgels': 'fishoil_goal',
            },
        },
        'fishoil_goal': {
            'question': "What is your primary goal for taking fish oil?",
            'options': {
                'HeartHealth': 'fishoil_frequency',
                'JointSupport': 'fishoil_frequency',
                'BrainFunction': 'fishoil_frequency',
                'ReduceInflammation': 'fishoil_frequency',
                'GeneralHealth': 'fishoil_frequency',
            },
        },
        'fishoil_frequency': {
            'question': "How often do you consume fish oil supplements?",
            'options': {
                'Daily': 'final_recommendation',
                '3TimesAWeek': 'final_recommendation',
                'Occasionally': 'final_recommendation',
            },
        },
   
              final_recommendation : {
    recommendations: {
        "MuscleGain_MoreThan40_30_Rarely_StrengthTraining_Yes_LessThan5Hours_OptimumNutrition_LactoseTolerant_WheyProtein_WheyProteinConcentrate_PeaProtein_Unflavored_25g_Yes_MuscleGain_Daily_Keto_Water_MuscleBlaze_None_CreatineMonohydrate_Unflavored_2g_PreWorkout_Daily_LessThan1Month_OptimumNutrition_None_StimulantBased_Unflavored_5g_15MinutesBeforeWorkout_BetaAlanine_IncreasedEnergy_Daily_OptimumNutrition_KidneyDisease_Standard_Unflavored_5g_PreWorkout_Daily_WithElectrolytes_MuscleRecovery_MuscleBlaze_GeneralMultivitamin_Tablets_1Tablet_FillNutrientGaps_Daily_TrueBasics_Omega3_Softgels_180mgEPA120mgDHA_1Softgel_HeartHealth_Daily": {
            name: "Beginner",
        },
        "FatLoss_MoreThan70_30_Occasionally_StrengthTraining_Yes_6Hours_OptimumNutrition_LactoseTolerant_WheyProtein_WheyProteinConcentrate_PeaProtein_Unflavored_30g_Yes_MuscleGain_Daily_Keto_Water_MuscleBlaze_None_CreatineMonohydrate_Unflavored_3g_PreWorkout_Daily_LessThan1Month_OptimumNutrition_None_StimulantBased_Unflavored_15g_15MinutesBeforeWorkout_BetaAlanine_IncreasedEnergy_Daily_OptimumNutrition_KidneyDisease_Standard_Unflavored_5g_PreWorkout_Daily_WithElectrolytes_MuscleRecovery_MuscleBlaze_GeneralMultivitamin_Tablets_1Tablet_FillNutrientGaps_Daily_TrueBasics_Omega3_Softgels_220mgEPA180mgDHA_1Softgel_HeartHealth_Daily": {
            name: "Intermediate",
        },
        "MuscleGain_MoreThan40_30_Daily_StrengthTraining_Yes_7Hours_OptimumNutrition_LactoseTolerant_WheyProtein_WheyProteinConcentrate_PeaProtein_Unflavored_35g_Yes_MuscleGain_Daily_Keto_Water_MuscleBlaze_None_CreatineMonohydrate_TangyOrange_5g_PreWorkout_Daily_LessThan1Month_OptimumNutrition_None_StimulantBased_Unflavored_2og_15MinutesBeforeWorkout_BetaAlanine_IncreasedEnergy_Daily_OptimumNutrition_KidneyDisease_Standard_Unflavored_5g_PreWorkout_Daily_WithElectrolytes_MuscleRecovery_MuscleBlaze_GeneralMultivitamin_Tablets_1Tablet_FillNutrientGaps_Daily_TrueBasics_Omega3_Softgels_500mgEPA250mgDHA_1Softgel_HeartHealth_Occasionally": {
            name: "Advanced",
        }

}

}

    }
}
}

   

let currentStep = 'fitness';
let answers = [];

function displayQuestion() {
    const questionData = knowledgeBase.knowledge_base.questions[currentStep];
    document.getElementById('question').textContent = questionData.question;
    const optionsDiv = document.getElementById('options');
   
   

    optionsDiv.innerHTML = '';

    // Set background color
    if (questionData.backgroundColor) {
        document.getElementById('questionContainer').style.backgroundColor = questionData.backgroundColor;
    } else {
        document.getElementById('questionContainer').style.backgroundColor = '';
    }

    for (const option in questionData.options) {
        const label = document.createElement('label');
        label.htmlFor = option;
        label.textContent = option.charAt(0).toUpperCase() + option.slice(1);

        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'option';
        radio.value = option;
        radio.id = option;

        optionsDiv.appendChild(label);
        optionsDiv.appendChild(radio);
        optionsDiv.appendChild(document.createElement('br'));
    }
}



function debugKeyMatch() {
    const recommendationKey = answers.join('_');  // Adjust as necessary
    console.log("Generated Key: ", recommendationKey);

    const recommendations = knowledgeBase.knowledge_base.questions.final_recommendation.recommendations;
    const availableKeys = Object.keys(recommendations);
    console.log("Available Keys: ", availableKeys);

    let keyFound = false;
    availableKeys.forEach(key => {
        if (key === recommendationKey) {
            keyFound = true;
            console.log("Match found for key: ", recommendationKey);
        }
    });

    if (!keyFound) {
        console.log("Key not found in recommendations.");
    }
}

function getRecommendation() {
    const recommendationKey = answers.join('_');  // Adjust as necessary
    debugKeyMatch();  // Call the debug function

    const recommendation = knowledgeBase.knowledge_base.questions.final_recommendation.recommendations[recommendationKey];

    const recommendationDiv = document.getElementById('recommendation');
    if (recommendation) {
        recommendationDiv.innerHTML = `
            <h3>We recommend: ${recommendation.name}</h3>
            <img src="${recommendation.image}" alt="${recommendation.name}" style="width: 50%; height: auto; max-height: 300px;">
            <p>${recommendation.info}</p>
        `;
    } else {
        recommendationDiv.textContent = 'Sorry, no costume matches your preferences.';
    }
}

document.getElementById('questionForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const answer = selectedOption.value;
        answers.push(answer);
        const nextStep = knowledgeBase.knowledge_base.questions[currentStep].options[answer];

        if (nextStep === 'final_recommendation') {
            // Get recommendation and save it to localStorage or another storage method
            getRecommendation();
            // Navigate to recommendation.html
            window.location.href = 'recommendation.html';
        } else {
            currentStep = nextStep;
            displayQuestion();
        }
    } else {
        alert('Please select an option');
    }
});



window.onload = function() {
    if (window.location.pathname.includes('questions.html')) {
        displayQuestion();
    }
};

