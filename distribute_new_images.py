import os
import glob
import re
import random

BLOG_DIR = "src/content/blog"

# Valid Image Pool
images = {
    # BATCH 3 (10 - NEW)
    "vegetable_chopping": "/images/blog/blog_vegetable_chopping_1770429018287.png",
    "meal_prep_containers": "/images/blog/blog_meal_prep_containers_1770429029168.png",
    "chia_pudding": "/images/blog/blog_chia_pudding_1770429041023.png",
    "black_coffee": "/images/blog/blog_black_coffee_1770429053230.png",
    "dark_chocolate": "/images/blog/blog_dark_chocolate_1770429064831.png",
    "kettlebell_swing": "/images/blog/blog_kettlebell_swing_1770429076780.png", 
    "box_jump": "/images/blog/blog_box_jump_1770429088867.png",
    "trx_training": "/images/blog/blog_trx_training_1770429100954.png",
    "foam_rolling": "/images/blog/blog_foam_rolling_1770429114901.png",
    "boxing_bag": "/images/blog/blog_boxing_bag_1770429127510.png",
    "medicine_ball": "/images/blog/blog_medicine_ball_1770662409018.png",

    # BATCH 2 (Recovered & New)
    "hard_boiled_eggs": "/images/blog/blog_hard_boiled_eggs_1770394703757.png",
    "protein_shaker": "/images/blog/blog_protein_shaker_1770394724895.png", # Fixed previous failure
    "alarm_clock": "/images/blog/blog_alarm_clock_1770394531654.png",
    "goal_setting": "/images/blog/blog_goal_setting_1770394545928.png",
    "nature_walk": "/images/blog/blog_nature_walk_1770394559199.png",
    "meditation_indoors": "/images/blog/blog_meditation_indoors_1770394571681.png",
    "scale_tape": "/images/blog/blog_scale_tape_measure_1770394585571.png",
    "greek_yogurt": "/images/blog/blog_greek_yogurt_parfait_1770394607542.png",
    "tofu_stir_fry": "/images/blog/blog_tofu_stir_fry_1770394619960.png",
    "sweet_potato_fries": "/images/blog/blog_sweet_potato_fries_1770394632528.png",

    # BATCH 1 (15)
    "avocado_toast": "/images/blog/blog_avocado_toast_1770342100825.png",
    "dumbbell_row": "/images/blog/blog_dumbbell_row_1770342065458.png",
    "fruit_platter": "/images/blog/blog_fresh_fruit_platter_1770342130993.png",
    "grilled_chicken": "/images/blog/blog_grilled_chicken_salad_1770342114405.png",
    "hamstring_stretch": "/images/blog/blog_hamstring_stretch_1770342221568.png",
    "healthy_snacks": "/images/blog/blog_healthy_snacks_1770342052534.png",
    "hydration": "/images/blog/blog_hydration_1770342039072.png",
    "jump_rope": "/images/blog/blog_jump_rope_1770342200549.png",
    "morning_routine": "/images/blog/blog_morning_routine_1770342248479.png",
    "plank": "/images/blog/blog_plank_variation_1770342187455.png",
    "protein_pancakes": "/images/blog/blog_protein_pancakes_1770342147430.png",
    "running_shoes": "/images/blog/blog_running_shoes_1770342175041.png",
    "spin_class": "/images/blog/blog_spin_class_1770342237110.png",
    "squat_rack": "/images/blog/blog_squat_rack_1770342078284.png",
    "yoga_tree": "/images/blog/blog_yoga_tree_pose_1770342159663.png",
}

keyword_map = {
    # FOOD
    "recipe": ["meal_prep_containers", "vegetable_chopping", "tofu_stir_fry", "sweet_potato_fries", "greek_yogurt", "salmon", "oatmeal", "chickpea", "grilled_chicken"],
    "meal prep": ["meal_prep_containers", "vegetable_chopping", "prep"],
    "cooking": ["vegetable_chopping", "tofu_stir_fry"],
    "breakfast": ["chia_pudding", "black_coffee", "hard_boiled_eggs", "protein_pancakes", "greek_yogurt", "avocado_toast", "morning_routine"],
    "coffee": ["black_coffee", "morning_routine"],
    "dessert": ["dark_chocolate", "chia_pudding", "healthy_snacks"],
    "snack": ["dark_chocolate", "hard_boiled_eggs", "healthy_snacks", "fruit_platter", "greek_yogurt"],
    "chocolate": ["dark_chocolate"],
    "vegetable": ["vegetable_chopping", "salad", "tofu_stir_fry"],
    
    # FITNESS
    "kettlebell": ["kettlebell_swing", "gym", "strength"],
    "swing": ["kettlebell_swing"],
    "jump": ["box_jump", "jump_rope"],
    "box": ["box_jump"],
    "plyometric": ["box_jump"],
    "trx": ["trx_training", "gym"],
    "suspension": ["trx_training"],
    "foam roll": ["foam_rolling", "stretch", "recovery"],
    "recovery": ["foam_rolling", "hamstring_stretch", "yoga_tree"],
    "boxing": ["boxing_bag", "cardio", "gym"],
    "punch": ["boxing_bag"],
    "kick": ["boxing_bag"],
    "cardio": ["boxing_bag", "jump_rope", "run", "spin_class", "box_jump"],
    "strength": ["kettlebell_swing", "deadlift", "dumbbell_row", "squat_rack", "trx_training"],
    
    # GENERAL
    "gym": ["gym", "squat_rack", "dumbbell_row", "protein_shaker", "boxing_bag", "trx_training"],
    "morning": ["morning_routine", "alarm_clock", "black_coffee"],
    "routine": ["morning_routine", "goal_setting", "meal_prep_containers"],
    "goal": ["goal_setting", "scale_tape"],
    "weight loss": ["scale_tape", "meal_prep_containers", "boxing_bag"],
}

default_pool = list(images.values())

def get_best_image(title, category):
    text = (title + " " + category).lower()
    matches = []
    for kw, img_keys in keyword_map.items():
        if kw in text:
            for key in img_keys:
                if key in images:
                    matches.append(images[key])
    if matches: return random.choice(matches)
    return random.choice(default_pool)

def process_file(filepath):
    with open(filepath, 'r') as f:
        file_content = f.read()
            
    parts = file_content.split('---', 2)
    if len(parts) < 3: return
    
    frontmatter = parts[1]
    body = parts[2]
    
    # Check if image is already one of our new ones to avoid thrashing, 
    # but since we want to distribute NEW images, we might overwrite.
    # For now, let's aggressively update to get the new variety in.
    
    title_match = re.search(r'title: "(.*?)"', frontmatter)
    title = title_match.group(1) if title_match else ""
    cat_match = re.search(r'category: "(.*?)"', frontmatter)
    category = cat_match.group(1) if cat_match else ""
    
    new_image = get_best_image(title, category)
    
    if 'image:' in frontmatter:
        frontmatter = re.sub(r'image: ".*?"', f'image: "{new_image}"', frontmatter)
    else:
        frontmatter += f'\nimage: "{new_image}"'

    new_content = f"---{frontmatter}---\n{body}"
    
    with open(filepath, 'w') as f:
        f.write(new_content)
    print(f"Updated: {os.path.basename(filepath)} -> {os.path.basename(new_image)}")

files = glob.glob(os.path.join(BLOG_DIR, "*.md"))
for f in files:
    process_file(f)
