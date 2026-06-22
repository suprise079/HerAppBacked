// YouTube video IDs are verified links to popular no-equipment workout channels.
// Unsplash photo IDs are direct CDN links — stable and no API key required.

const UNS = 'https://images.unsplash.com/photo-';

// Reusable Unsplash photo IDs grouped by exercise type
const IMG = {
  morningHero:     `${UNS}1517963879433-6ad2a51bec25?w=800&h=450&fit=crop&auto=format`,
  stretchHero:     `${UNS}1506126613408-eca07ce68773?w=800&h=450&fit=crop&auto=format`,
  strengthHero:    `${UNS}1534438327276-14e5300c3a48?w=800&h=450&fit=crop&auto=format`,
  coreHero:        `${UNS}1571019613454-1cb2f99b2d8b?w=800&h=450&fit=crop&auto=format`,
  cardioHero:      `${UNS}1552674605-db6ffd4facb5?w=800&h=450&fit=crop&auto=format`,

  // Workout thumbnails (square)
  jumpingJacks:    `${UNS}1544367567-0f2fcb009e0b?w=200&h=200&fit=crop&auto=format`,
  highKnees:       `${UNS}1552674605-db6ffd4facb5?w=200&h=200&fit=crop&auto=format`,
  pushups:         `${UNS}1581009137042-c552e485697a?w=200&h=200&fit=crop&auto=format`,
  squats:          `${UNS}1567598508481-65985588e295?w=200&h=200&fit=crop&auto=format`,
  plank:           `${UNS}1599058917765-a780eda07a3e?w=200&h=200&fit=crop&auto=format`,
  burpees:         `${UNS}1549476464-37392f717541?w=200&h=200&fit=crop&auto=format`,
  stretch:         `${UNS}1576678927484-cc907957088c?w=200&h=200&fit=crop&auto=format`,
  coreExercise:    `${UNS}1518611012118-696072aa579a?w=200&h=200&fit=crop&auto=format`,
  lunge:           `${UNS}1571731956672-f2b94d7dd0cb?w=200&h=200&fit=crop&auto=format`,
  gluteBridge:     `${UNS}1517836357463-d25dfeac3438?w=200&h=200&fit=crop&auto=format`,
  cardioMove:      `${UNS}1538805060514-97d9cc17730c?w=200&h=200&fit=crop&auto=format`,

  // Full-height illustrations used as PlayExercise background (portrait)
  jumpingJacksIll: `${UNS}1544367567-0f2fcb009e0b?w=600&h=900&fit=crop&auto=format`,
  highKneesIll:    `${UNS}1552674605-db6ffd4facb5?w=600&h=900&fit=crop&auto=format`,
  pushupsIll:      `${UNS}1581009137042-c552e485697a?w=600&h=900&fit=crop&auto=format`,
  squatsIll:       `${UNS}1567598508481-65985588e295?w=600&h=900&fit=crop&auto=format`,
  plankIll:        `${UNS}1599058917765-a780eda07a3e?w=600&h=900&fit=crop&auto=format`,
  burpeesIll:      `${UNS}1549476464-37392f717541?w=600&h=900&fit=crop&auto=format`,
  stretchIll:      `${UNS}1576678927484-cc907957088c?w=600&h=900&fit=crop&auto=format`,
  coreIll:         `${UNS}1518611012118-696072aa579a?w=600&h=900&fit=crop&auto=format`,
  lungeIll:        `${UNS}1571731956672-f2b94d7dd0cb?w=600&h=900&fit=crop&auto=format`,
  glueIll:         `${UNS}1517836357463-d25dfeac3438?w=600&h=900&fit=crop&auto=format`,
  cardioIll:       `${UNS}1538805060514-97d9cc17730c?w=600&h=900&fit=crop&auto=format`,
  morningIll:      `${UNS}1517963879433-6ad2a51bec25?w=600&h=900&fit=crop&auto=format`,
  strengthIll:     `${UNS}1534438327276-14e5300c3a48?w=600&h=900&fit=crop&auto=format`,
};

const exercisePrograms = [
  {
    name: 'Morning Energy Boost',
    image: IMG.morningHero,
    // Pamela Reif — 20 MIN FULL BODY WORKOUT (Beginner, No Equipment)
    videoLink: 'UItWltVZZmE',
    time: 15,
    description: 'A quick 15-minute morning routine to wake up your body, raise your heart rate, and set a positive tone for the day ahead. No equipment needed.',
    workouts: [
      {
        name: 'Jumping Jacks',
        image: IMG.jumpingJacks,
        illustration: IMG.jumpingJacksIll,
        time: '60',
        description: 'Full-body warm-up that raises your heart rate quickly and activates major muscle groups.',
        instructions: [
          'Stand upright with your feet together and arms at your sides.',
          'Jump and simultaneously spread your feet shoulder-width apart while raising both arms overhead.',
          'Jump back to the starting position.',
          'Repeat at a steady, comfortable pace for the full duration.',
          'Keep your core engaged and land softly on the balls of your feet.'
        ]
      },
      {
        name: 'High Knees',
        image: IMG.highKnees,
        illustration: IMG.highKneesIll,
        time: '45',
        description: 'Cardio move that engages your core and hip flexors while elevating your heart rate.',
        instructions: [
          'Stand with feet hip-width apart.',
          'Run in place, driving each knee as high as possible toward your chest.',
          'Pump your arms in opposition to your legs.',
          'Keep your chest up and back straight throughout.',
          'Aim for a brisk pace — do not sacrifice form for speed.'
        ]
      },
      {
        name: 'Push-ups',
        image: IMG.pushups,
        illustration: IMG.pushupsIll,
        time: '60',
        description: 'Upper-body strength builder targeting your chest, shoulders, and triceps.',
        instructions: [
          'Start in a high plank position with hands slightly wider than shoulder-width.',
          'Keep your body in a straight line from head to heels — do not let your hips sag.',
          'Lower your chest toward the floor, bending your elbows at roughly a 45-degree angle.',
          'Push back up to the starting position, fully extending your arms.',
          'If full push-ups are too difficult, drop to your knees and maintain good form.'
        ]
      },
      {
        name: 'Bodyweight Squats',
        image: IMG.squats,
        illustration: IMG.squatsIll,
        time: '60',
        description: 'Lower-body compound movement targeting your quads, glutes, and hamstrings.',
        instructions: [
          'Stand with feet shoulder-width apart, toes pointed slightly outward.',
          'Brace your core and keep your chest tall.',
          'Lower your hips as if sitting back into a chair, until your thighs are parallel to the floor.',
          'Drive through your heels to return to standing.',
          'Keep your knees tracking over your toes and avoid rounding your back.'
        ]
      },
      {
        name: 'Plank Hold',
        image: IMG.plank,
        illustration: IMG.plankIll,
        time: '45',
        description: 'Core stabilisation exercise that strengthens your entire midsection and improves posture.',
        instructions: [
          'Start in a forearm plank: elbows directly under your shoulders, forearms flat on the floor.',
          'Extend your legs behind you, resting on the balls of your feet.',
          'Keep your body in a straight line — do not let your hips drop or pike upward.',
          'Squeeze your glutes and brace your core throughout the hold.',
          'Breathe steadily. If form breaks, take a short rest and try again.'
        ]
      },
      {
        name: 'Burpees',
        image: IMG.burpees,
        illustration: IMG.burpeesIll,
        time: '45',
        description: 'Full-body conditioning move that builds strength and cardiovascular endurance simultaneously.',
        instructions: [
          'Stand with feet shoulder-width apart.',
          'Drop into a squat and place your hands on the floor in front of you.',
          'Jump your feet back so you are in a push-up position.',
          'Perform one push-up (optional for beginners).',
          'Jump your feet back toward your hands.',
          'Explosively jump upward, reaching your arms overhead.',
          'Land softly and go straight into the next repetition.'
        ]
      }
    ]
  },

  {
    name: 'Study Break Stretch',
    image: IMG.stretchHero,
    // 10-Minute Stretch Routine for Office Workers, Students & Desk Workers
    videoLink: 'WyBoVV3LHs0',
    time: 10,
    description: 'A gentle 10-minute stretching routine designed for students who have been sitting for long periods. Relieves tension in the neck, shoulders, back, and hips.',
    workouts: [
      {
        name: 'Neck Rolls',
        image: IMG.stretch,
        illustration: IMG.stretchIll,
        time: '60',
        description: 'Gentle neck mobility exercise to release tension from long study sessions.',
        instructions: [
          'Sit or stand upright with your shoulders relaxed.',
          'Slowly drop your right ear toward your right shoulder. Hold for 5 seconds.',
          'Gently roll your head forward, chin toward your chest. Hold for 5 seconds.',
          'Continue to the left side. Hold for 5 seconds.',
          'Slowly roll back to center.',
          'Never roll your head backward as this can strain the neck.',
          'Repeat the sequence 3–4 times, moving slowly and without forcing the stretch.'
        ]
      },
      {
        name: 'Shoulder & Chest Opener',
        image: IMG.stretch,
        illustration: IMG.stretchIll,
        time: '45',
        description: 'Counteracts the forward hunch of sitting at a desk by opening the chest and stretching the shoulder muscles.',
        instructions: [
          'Stand upright or sit at the edge of your chair.',
          'Interlace your fingers behind your back, palms facing inward.',
          'Straighten your arms and gently lift them away from your body.',
          'At the same time, open your chest and draw your shoulder blades together.',
          'Hold for 20–30 seconds, breathing deeply.',
          'Release slowly and repeat twice.'
        ]
      },
      {
        name: 'Seated Spinal Twist',
        image: IMG.stretch,
        illustration: IMG.stretchIll,
        time: '60',
        description: 'Releases tension along the spine and lower back, which often tightens during extended sitting.',
        instructions: [
          'Sit up tall in your chair with both feet flat on the floor.',
          'Place your right hand on the outside of your left knee.',
          'Place your left hand on the back of the chair or your left hip.',
          'Inhale to lengthen your spine, then exhale and gently twist to the left.',
          'Hold for 20–30 seconds, looking over your left shoulder.',
          'Return to center and repeat on the other side.'
        ]
      },
      {
        name: 'Hip Flexor Stretch',
        image: IMG.lunge,
        illustration: IMG.lungeIll,
        time: '60',
        description: 'Targets the hip flexors that shorten and tighten when you sit for prolonged periods.',
        instructions: [
          'Step forward into a lunge position with your right foot forward.',
          'Lower your left knee to the floor (use a mat or folded towel for comfort).',
          'Keep your right knee directly above your right ankle.',
          'Gently push your hips forward until you feel a stretch in the front of your left hip.',
          'Hold for 30 seconds, then switch sides.',
          'Keep your upper body upright throughout — do not lean forward.'
        ]
      },
      {
        name: 'Wrist & Forearm Release',
        image: IMG.stretch,
        illustration: IMG.stretchIll,
        time: '30',
        description: 'Relieves tension from typing and writing — essential for students who spend hours at a keyboard.',
        instructions: [
          'Extend your right arm in front of you with your palm facing up.',
          'Use your left hand to gently pull your fingers downward (toward the floor).',
          'Hold for 15 seconds.',
          'Flip your hand so the palm faces down and gently pull the fingers upward.',
          'Hold for 15 seconds.',
          'Repeat on the left arm.',
          'Finish with 10 slow wrist circles in each direction.'
        ]
      },
      {
        name: 'Standing Forward Fold',
        image: IMG.stretch,
        illustration: IMG.stretchIll,
        time: '45',
        description: 'Decompresses the lower back, stretches the hamstrings and calves, and helps reset your posture.',
        instructions: [
          'Stand with your feet hip-width apart.',
          'Inhale and lengthen your spine. On the exhale, hinge at your hips and fold forward.',
          'Let your arms hang down toward the floor.',
          'Bend your knees slightly if you feel tightness in the backs of your legs.',
          'Let your head hang heavy and relax your neck completely.',
          'Hold for 30–45 seconds, breathing slowly.',
          'To come up, bend your knees slightly and slowly roll back up, vertebra by vertebra.'
        ]
      }
    ]
  },

  {
    name: 'Full Body Strength',
    image: IMG.strengthHero,
    // 20 Minute Bodyweight Strength Workout — Full Body, No Equipment
    videoLink: 'UjwKKl157hw',
    time: 22,
    description: 'A complete strength training session using only your bodyweight. Targets all major muscle groups and builds functional strength that supports everyday movement.',
    workouts: [
      {
        name: 'Warm-Up: Arm Circles & Leg Swings',
        image: IMG.stretch,
        illustration: IMG.stretchIll,
        time: '90',
        description: 'Prepares your joints and muscles for the workout ahead, reducing injury risk.',
        instructions: [
          'Start with 20 forward arm circles (small, then gradually bigger).',
          'Reverse direction for 20 more arm circles.',
          'Hold onto a wall for balance and swing each leg forward and back 15 times.',
          'Then swing each leg side to side 15 times.',
          'Finish with 10 hip circles in each direction, hands on hips.'
        ]
      },
      {
        name: 'Diamond Push-ups',
        image: IMG.pushups,
        illustration: IMG.pushupsIll,
        time: '60',
        description: 'Emphasises the triceps and inner chest for a complete upper-body push pattern.',
        instructions: [
          'Start in a high plank position.',
          'Bring your hands together under your chest, forming a diamond shape with your index fingers and thumbs.',
          'Lower your chest toward your hands, keeping your elbows close to your body.',
          'Push back up to the starting position.',
          'If too difficult, perform from your knees or switch to regular push-ups.'
        ]
      },
      {
        name: 'Reverse Lunges',
        image: IMG.lunge,
        illustration: IMG.lungeIll,
        time: '90',
        description: 'A safer lunge variation that minimises knee strain while targeting quads, glutes, and hamstrings.',
        instructions: [
          'Stand upright with feet hip-width apart.',
          'Step your right foot backward and lower your right knee toward the floor.',
          'Your left knee should be at roughly 90 degrees, directly above your left ankle.',
          'Push through your left heel to return to standing.',
          'Alternate legs with each repetition.',
          'Keep your torso upright and core braced throughout.'
        ]
      },
      {
        name: 'Glute Bridges',
        image: IMG.gluteBridge,
        illustration: IMG.glueIll,
        time: '60',
        description: 'Activates and strengthens the glutes and lower back — muscles that weaken from prolonged sitting.',
        instructions: [
          'Lie on your back with your knees bent and feet flat on the floor, hip-width apart.',
          'Arms are at your sides, palms facing down.',
          'Press your feet into the floor and squeeze your glutes as you lift your hips toward the ceiling.',
          'At the top, your body should form a straight line from shoulders to knees.',
          'Hold for 2 seconds, then slowly lower back down.',
          'Do not let your knees fall inward — keep them hip-width throughout.'
        ]
      },
      {
        name: 'Tricep Dips',
        image: IMG.coreExercise,
        illustration: IMG.coreIll,
        time: '45',
        description: 'Isolates the triceps using only a chair or stable surface — no gym needed.',
        instructions: [
          'Sit on the edge of a sturdy chair with your hands gripping the edge, fingers pointing forward.',
          'Slide your hips off the edge and walk your feet out slightly.',
          'Bend your elbows to lower your body toward the floor, keeping your back close to the chair.',
          'Stop when your elbows are at roughly 90 degrees.',
          'Push back up to the starting position.',
          'For more difficulty, extend your legs further. For less, keep your feet flat and close.'
        ]
      },
      {
        name: 'Wall Sit',
        image: IMG.squats,
        illustration: IMG.squatsIll,
        time: '45',
        description: 'Builds quad and glute endurance through isometric contraction.',
        instructions: [
          'Stand with your back flat against a wall.',
          'Walk your feet forward and slide your back down the wall until your thighs are parallel to the floor.',
          'Your knees should be directly above your ankles, not pushed past your toes.',
          'Keep your back flat against the wall and your arms at your sides.',
          'Hold the position for the full duration, breathing steadily.',
          'If 45 seconds is too long, start with 20 seconds and build up over time.'
        ]
      },
      {
        name: 'Cool-Down: Standing Quad Stretch',
        image: IMG.stretch,
        illustration: IMG.stretchIll,
        time: '60',
        description: 'Stretches the quadriceps after the workout to reduce soreness and improve flexibility.',
        instructions: [
          'Stand on your left foot. Use a wall for balance if needed.',
          'Bend your right knee and bring your right heel toward your right glute.',
          'Hold your right ankle with your right hand.',
          'Stand tall and squeeze your glutes to intensify the stretch.',
          'Hold for 25–30 seconds, then switch to the left leg.',
          'Close your eyes and focus on slow, deep breaths during the stretch.'
        ]
      }
    ]
  },

  {
    name: 'Core Power',
    image: IMG.coreHero,
    // Pamela Reif — 10 MIN AB WORKOUT (No Equipment)
    videoLink: 'AnYl6Nk9GOA',
    time: 14,
    description: 'A focused core session that builds abdominal strength, improves posture, and reduces lower back pain — all common concerns for students who sit for long periods.',
    workouts: [
      {
        name: 'Crunches',
        image: IMG.coreExercise,
        illustration: IMG.coreIll,
        time: '60',
        description: 'Classic abdominal exercise targeting the upper rectus abdominis.',
        instructions: [
          'Lie on your back with knees bent and feet flat on the floor, hip-width apart.',
          'Place your hands lightly behind your head — do not pull on your neck.',
          'Brace your core and lift your shoulder blades off the floor using your abdominal muscles.',
          'Exhale as you crunch up; inhale as you lower back down.',
          'Do not pull your head forward with your hands — the movement should come from your abs.',
          'Keep a slight gap between your chin and your chest throughout.'
        ]
      },
      {
        name: 'Leg Raises',
        image: IMG.coreExercise,
        illustration: IMG.coreIll,
        time: '60',
        description: 'Targets the lower abdominals — often the weakest and most neglected part of the core.',
        instructions: [
          'Lie flat on your back with your legs straight and arms at your sides, palms facing down.',
          'Press your lower back into the floor and brace your core.',
          'With your legs together, slowly lift them to a 90-degree angle.',
          'Lower them back down slowly — stop just before they touch the floor.',
          'The slower the lowering phase, the more effective the exercise.',
          'If your lower back arches off the floor, only lower your legs halfway.'
        ]
      },
      {
        name: 'Russian Twists',
        image: IMG.coreExercise,
        illustration: IMG.coreIll,
        time: '60',
        description: 'Rotational core exercise that targets the obliques and improves spinal mobility.',
        instructions: [
          'Sit on the floor with your knees bent and feet flat (or elevated for more challenge).',
          'Lean back slightly, keeping your back straight at about a 45-degree angle.',
          'Clasp your hands together in front of your chest.',
          'Rotate your torso to the right, bringing your hands toward the floor beside your hip.',
          'Rotate to the left side. That is one repetition.',
          'Move with control — do not rush the movement or let your back round.'
        ]
      },
      {
        name: 'Dead Bug',
        image: IMG.coreExercise,
        illustration: IMG.coreIll,
        time: '60',
        description: 'A highly effective core stability exercise that trains anti-rotation and protects the lower back.',
        instructions: [
          'Lie on your back with your arms extended straight up toward the ceiling.',
          'Lift your legs so your hips and knees are both at 90 degrees (tabletop position).',
          'Take a deep breath in. As you exhale, slowly extend your right leg straight out while lowering your left arm overhead.',
          'Keep your lower back pressed firmly against the floor throughout.',
          'Return to the starting position and repeat on the opposite side.',
          'Move slowly and controlled — speed is the enemy of this exercise.'
        ]
      },
      {
        name: 'Side Plank',
        image: IMG.plank,
        illustration: IMG.plankIll,
        time: '60',
        description: 'Targets the lateral core muscles essential for spinal stability.',
        instructions: [
          'Lie on your right side with your right elbow directly below your right shoulder.',
          'Stack your feet on top of each other (or stagger them for more stability).',
          'Lift your hips off the floor, creating a straight line from head to feet.',
          'Keep your hips stacked — do not let them sag toward the floor.',
          'Hold for 20–25 seconds, then switch to the left side.',
          'For a modification, rest on your bottom knee instead of your foot.'
        ]
      },
      {
        name: 'Superman Hold',
        image: IMG.coreExercise,
        illustration: IMG.coreIll,
        time: '45',
        description: 'Strengthens the lower back and posterior chain — equally important for core health.',
        instructions: [
          'Lie face down on the floor with your arms extended overhead and legs straight.',
          'Simultaneously lift your arms, chest, and legs off the floor.',
          'Squeeze your glutes and back muscles at the top.',
          'Hold the position for 2–3 seconds, then slowly lower back down.',
          'Keep your neck in a neutral position — do not strain to lift your head higher.',
          'Breathe steadily throughout and avoid holding your breath.'
        ]
      }
    ]
  },

  {
    name: 'Cardio Blast',
    image: IMG.cardioHero,
    // SELF — 30-Minute HIIT Cardio Workout with Warm Up, No Equipment
    videoLink: 'ml6cT4AZdqI',
    time: 12,
    description: 'A high-energy cardio session that burns calories, boosts mood, and improves cardiovascular fitness. Perfect for days when you need to blow off steam after a tough lecture.',
    workouts: [
      {
        name: 'Star Jumps',
        image: IMG.jumpingJacks,
        illustration: IMG.jumpingJacksIll,
        time: '45',
        description: 'An explosive full-body warm-up that immediately raises your heart rate and body temperature.',
        instructions: [
          'Start standing upright with feet together and arms at your sides.',
          'Jump up, simultaneously spreading your legs wide and raising both arms above your head in a star shape.',
          'Land softly with your knees slightly bent to absorb the impact.',
          'Immediately jump back to the starting position.',
          'Maintain a steady rhythm and keep your core engaged throughout.'
        ]
      },
      {
        name: 'Mountain Climbers',
        image: IMG.cardioMove,
        illustration: IMG.cardioIll,
        time: '45',
        description: 'A compound cardio move that targets your core, shoulders, and legs simultaneously.',
        instructions: [
          'Start in a high plank position with your hands directly under your shoulders.',
          'Keep your core braced and body in a straight line.',
          'Drive your right knee toward your chest, then quickly switch legs.',
          'Continue alternating legs at a rapid pace, as if running from the plank position.',
          'Keep your hips level — do not let them rise above your shoulders.',
          'Breathe rhythmically and maintain controlled speed.'
        ]
      },
      {
        name: 'Jump Squats',
        image: IMG.squats,
        illustration: IMG.squatsIll,
        time: '45',
        description: 'An explosive lower-body power movement that builds athleticism and fires up your metabolism.',
        instructions: [
          'Stand with feet shoulder-width apart.',
          'Lower into a squat, sending your hips back and bending your knees.',
          'Drive explosively through your heels and jump as high as you can.',
          'Extend your arms downward as you jump for momentum.',
          'Land softly with your knees bent and immediately lower into the next squat.',
          'Keep your chest tall and avoid your knees caving inward on the landing.'
        ]
      },
      {
        name: 'Speed Skaters',
        image: IMG.cardioMove,
        illustration: IMG.cardioIll,
        time: '45',
        description: 'Lateral movement that improves agility, balance, and inner-thigh strength.',
        instructions: [
          'Stand on your left foot with a slight bend in your knee.',
          'Leap to the right, landing on your right foot and swinging your left leg behind you.',
          'Let your left arm swing across your body for balance, as if you are skating.',
          'Leap back to the left, landing on your left foot.',
          'Continue alternating sides with a fluid, controlled skating motion.',
          'Land softly each time and maintain balance before pushing off again.'
        ]
      },
      {
        name: 'Lateral Shuffles',
        image: IMG.cardioMove,
        illustration: IMG.cardioIll,
        time: '45',
        description: 'Low-impact lateral movement that improves coordination and keeps cardio going without joint stress.',
        instructions: [
          'Start in an athletic stance: feet shoulder-width apart, knees slightly bent, core engaged.',
          'Shuffle 4–5 steps to your right by stepping your right foot out and bringing your left foot to meet it.',
          'Do not let your feet cross.',
          'Immediately shuffle back to your left for 4–5 steps.',
          'Stay low and light on your feet throughout.',
          'Increase speed as the movement becomes comfortable.'
        ]
      },
      {
        name: 'Burpee Finish',
        image: IMG.burpees,
        illustration: IMG.burpeesIll,
        time: '60',
        description: 'The ultimate full-body finisher — maximum calorie burn and conditioning in minimum time.',
        instructions: [
          'Stand with feet shoulder-width apart.',
          'Squat down and place your hands on the floor.',
          'Jump your feet back into a plank position.',
          'Perform a push-up (or skip if needed).',
          'Jump your feet back to your hands.',
          'Stand and jump explosively, reaching your arms overhead.',
          'Land softly and go straight into the next rep.',
          'Maintain form even when tired — quality over quantity.'
        ]
      }
    ]
  }
];

module.exports = exercisePrograms;
