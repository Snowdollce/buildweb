export const STORYBOARD_PROMPT = `# UNIVERSAL CINEMATIC STORYBOARD GENERATOR

Analyze the uploaded input automatically.

## INPUT RULES

-   If only a product image is provided, create a product-focused
    cinematic storyboard.
-   If a product image and a model/person image are provided, create a
    lifestyle UGC + commercial storyboard featuring both naturally.
-   If only a person image is provided, create a personal cinematic
    story, transformation story, creator journey, lifestyle sequence, or
    social-media-style visual narrative.
-   If multiple images are provided, intelligently combine them into one
    coherent visual story.
-   Preserve the exact appearance, colors, materials, proportions,
    facial features, clothing, and identity of all uploaded subjects and
    products.

------------------------------------------------------------------------

# OUTPUT FORMAT

Create a professional cinematic storyboard for a 10–30 second video.

## Aspect Ratio

Automatically adapt to the requested format:

-   16:9
-   9:16
-   1:1
-   4:5

## Layout

-   3×3 storyboard grid
-   9 sequential frames
-   Read from top-left to bottom-right
-   Every frame represents a different moment in the story
-   Strong visual continuity between frames

------------------------------------------------------------------------

# VISUAL QUALITY

-   Ultra realistic
-   Photorealistic
-   High-end commercial production
-   Movie-level cinematography
-   Premium advertising quality
-   Natural lighting
-   Realistic shadows
-   Professional camera work
-   Shallow depth of field
-   Physically accurate materials
-   Cinematic color grading
-   Consistent character and product appearance throughout all frames

------------------------------------------------------------------------

# CAMERA DIRECTION

Generate a mix of:

-   Wide establishing shots
-   Medium shots
-   Close-ups
-   Extreme close-ups
-   Over-the-shoulder shots
-   Low-angle shots
-   High-angle shots
-   Top-down shots
-   Tracking shots
-   Hero shots
-   Product beauty shots
-   Detail macro shots

Every frame must use a different camera composition whenever
appropriate.

------------------------------------------------------------------------

# STORY GENERATION LOGIC

## IF PRODUCT ONLY

1.  Product introduction
2.  Product discovery
3.  Detail close-up
4.  Key feature reveal
5.  Product interaction
6.  Secondary feature
7.  Benefit demonstration
8.  Hero product placement
9.  Premium cinematic beauty shot

------------------------------------------------------------------------

## IF PRODUCT + MODEL

1.  Lifestyle introduction
2.  Model notices product
3.  Product pickup
4.  Feature demonstration
5.  Product in use
6.  Emotional reaction
7.  Benefit/result showcase
8.  Hero interaction shot
9.  Premium commercial ending shot

------------------------------------------------------------------------

## IF PERSON ONLY

1.  Establish character
2.  Daily life moment
3.  Goal or challenge
4.  Action begins
5.  Progress moment
6.  Key transformation
7.  Achievement
8.  Confident hero shot
9.  Cinematic ending frame

------------------------------------------------------------------------

# ADVANCED STORYTELLING

Automatically generate:

-   Beginning
-   Build-up
-   Feature reveal
-   Emotional peak
-   Final payoff

Every storyboard should feel like a complete advertisement, short film,
creator story, or premium commercial.

------------------------------------------------------------------------

# ENVIRONMENTS

Choose the most suitable environment automatically:

-   Modern home
-   Bedroom
-   Living room
-   Office
-   Studio
-   Cafe
-   Outdoor street
-   Luxury interior
-   Workspace
-   Creator setup
-   Fitness environment
-   Travel environment

Depending on the uploaded subject.

------------------------------------------------------------------------

# CONSISTENCY RULE

Maintain complete consistency across all 9 frames:

-   Same product
-   Same person
-   Same clothing
-   Same colors
-   Same accessories
-   Same hairstyle
-   Same visual identity

------------------------------------------------------------------------

# NEGATIVE PROMPT

-   No distorted anatomy
-   No duplicate subjects
-   No inconsistent products
-   No extra fingers
-   No blurry objects
-   No text
-   No captions
-   No watermarks
-   No random logos
-   No low-quality rendering
-   No AI artifacts
-   No floating objects
-   No unrealistic lighting
-   No frame repetition

------------------------------------------------------------------------

# FINAL GOAL

Generate a storyboard that looks like it was planned by:

-   A professional commercial director
-   A cinematographer
-   A creative agency
-   A UGC content team

Ready for production of:

-   Viral advertisement
-   Cinematic brand film
-   Creator story
-   Marketplace product video

**Storyboard Aspect Ratio:** \`9:16\`\n`;

export const VIDEO_FLOW_PROMPT = `# UNIVERSAL CINEMATIC STORYBOARD GENERATOR

## INPUT ANALYSIS

Analyze the uploaded input automatically.

### Input Rules

-   If only a product image is provided, create a product-focused
    cinematic storyboard.
-   If a product image and a model/person image are provided, create a
    lifestyle UGC + commercial storyboard featuring both naturally.
-   If only a person image is provided, create a personal cinematic
    story, transformation story, creator journey, lifestyle sequence, or
    social-media-style visual narrative.
-   If multiple images are provided, intelligently combine them into one
    coherent visual story.
-   Preserve the exact appearance, colors, materials, proportions,
    facial features, clothing, and identity of all uploaded subjects and
    products.

------------------------------------------------------------------------

# STORYBOARD OUTPUT

Create a professional cinematic storyboard for a 10–30 second video.

### Aspect Ratio

Automatically adapt to the requested format:

-   16:9
-   9:16
-   1:1
-   4:5

### Layout

-   3×3 storyboard grid
-   9 sequential frames
-   Read from top-left to bottom-right
-   Every frame represents a different moment in the story
-   Strong visual continuity between frames

------------------------------------------------------------------------

# VISUAL QUALITY

-   Ultra realistic
-   Photorealistic
-   High-end commercial production
-   Movie-level cinematography
-   Premium advertising quality
-   Natural lighting
-   Realistic shadows
-   Professional camera work
-   Shallow depth of field
-   Physically accurate materials
-   Cinematic color grading
-   Consistent character and product appearance throughout all frames

------------------------------------------------------------------------

# CAMERA DIRECTION

Generate a mix of:

-   Wide establishing shots
-   Medium shots
-   Close-ups
-   Extreme close-ups
-   Over-the-shoulder shots
-   Low-angle shots
-   High-angle shots
-   Top-down shots
-   Tracking shots
-   Hero shots
-   Product beauty shots
-   Detail macro shots

Every frame must use a different camera composition whenever
appropriate.

------------------------------------------------------------------------

# STORY GENERATION LOGIC

## IF PRODUCT ONLY

1.  Product introduction
2.  Product discovery
3.  Detail close-up
4.  Key feature reveal
5.  Product interaction
6.  Secondary feature
7.  Benefit demonstration
8.  Hero product placement
9.  Premium cinematic beauty shot

## IF PRODUCT + MODEL

1.  Lifestyle introduction
2.  Model notices product
3.  Product pickup
4.  Feature demonstration
5.  Product in use
6.  Emotional reaction
7.  Benefit/result showcase
8.  Hero interaction shot
9.  Premium commercial ending shot

## IF PERSON ONLY

1.  Establish character
2.  Daily life moment
3.  Goal or challenge
4.  Action begins
5.  Progress moment
6.  Key transformation
7.  Achievement
8.  Confident hero shot
9.  Cinematic ending frame

------------------------------------------------------------------------

# ADVANCED STORYTELLING

Automatically generate:

-   Beginning
-   Build-up
-   Feature reveal
-   Emotional peak
-   Final payoff

Every storyboard should feel like a complete advertisement, short film,
creator story, or premium commercial.

------------------------------------------------------------------------

# ENVIRONMENTS

Choose the most suitable environment automatically:

-   Modern home
-   Bedroom
-   Living room
-   Office
-   Studio
-   Cafe
-   Outdoor street
-   Luxury interior
-   Workspace
-   Creator setup
-   Fitness environment
-   Travel environment

Select the environment based on the uploaded subject.

------------------------------------------------------------------------

# CONSISTENCY RULE

Maintain complete consistency across all 9 frames:

-   Same product
-   Same person
-   Same clothing
-   Same colors
-   Same accessories
-   Same hairstyle
-   Same visual identity

------------------------------------------------------------------------

# NEGATIVE PROMPT

-   No distorted anatomy
-   No duplicate subjects
-   No inconsistent products
-   No extra fingers
-   No blurry objects
-   No text
-   No captions
-   No watermarks
-   No random logos
-   No low-quality rendering
-   No AI artifacts
-   No floating objects
-   No unrealistic lighting
-   No frame repetition

------------------------------------------------------------------------

# FINAL GOAL

Generate a storyboard that looks like it was planned by:

-   A professional commercial director
-   A cinematographer
-   A creative agency
-   A UGC content team

The storyboard must be production-ready for:

-   Viral advertisements
-   Cinematic brand films
-   Creator stories
-   Marketplace product videos

**Storyboard Aspect Ratio:** \`16:9\`

------------------------------------------------------------------------

# GOOGLE FLOW VIDEO PROMPT GENERATOR

Analyze the uploaded storyboard image carefully.

Your task is **NOT** to generate a video.

Your task is to act as a professional commercial director and convert
the storyboard into a complete Google Flow video prompt.

------------------------------------------------------------------------

## STEP 1 — STORYBOARD ANALYSIS

Carefully analyze:

-   Subject or product
-   Number of storyboard panels
-   Camera angles
-   Character actions
-   Product interactions
-   Emotions
-   Lighting style
-   Environment
-   Visual progression
-   Final outcome

Identify the exact sequence from left-to-right and top-to-bottom.

Do not skip any storyboard panel.

Treat every panel as a scene in the final video.

------------------------------------------------------------------------

## STEP 2 — VIDEO STRUCTURE

Create a complete Google Flow video prompt using:

-   Duration: 10 seconds
-   Aspect Ratio: 9:16
-   Style matching the storyboard
-   Ultra photorealistic quality
-   Consistent character and product appearance

------------------------------------------------------------------------

## STEP 3 — SCENE BREAKDOWN

Convert every storyboard panel into:

-   Scene 1
-   Scene 2
-   Scene 3
-   ...

For every scene include:

-   What is happening
-   Camera movement
-   Subject action
-   Product interaction
-   Emotion
-   Lighting
-   Transition

------------------------------------------------------------------------

## STEP 4 — DIALOGUE

Generate one short Thai dialogue during the first 2 seconds.

### Requirements

-   Natural Indian English
-   2–6 words
-   Match storyboard emotion
-   No subtitles
-   No captions

------------------------------------------------------------------------

## STEP 5 — MUSIC

Automatically choose background music based on storyboard category:

-   Beauty → Luxury Beauty Music
-   Food → Energetic Commercial Music
-   Tech → Modern Commercial Music
-   Fashion → Trendy Music
-   Jewellery → Elegant Luxury Music
-   Lifestyle → Uplifting Commercial Music

------------------------------------------------------------------------

## STEP 6 — OUTPUT FORMAT

Output **ONLY** a ready-to-use Google Flow video prompt.

-   Do not explain.
-   Do not analyze.
-   Do not give notes.
-   Do not give suggestions.
-   Only provide the final Flow-ready cinematic video prompt.

------------------------------------------------------------------------

# Additional Requirements

-   Face Lock = ON
-   Hair Lock = ON
-   Outfit Lock = ON
-   Product Lock = ON
-   Scale Lock = ON
-   Color Accuracy = ON
-   No Face Change
-   No Extra Characters
-   No Text
-   No Subtitle
-   No voiceover
-   No Logo Overlay
-   No AI Artifacts
-   Photorealistic Commercial Quality
-   Premium Cinematic ASMR Style
-   Vertical 9:16
-   4 Continuous Frames Storyboard
`;
