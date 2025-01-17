export const skillsData = [
  {
    id: 1,
    name: 'Pick and Place',
    difficulty: 'Easy',
    description: 'Basic pick and place operation',
    requirements: {
      camera: true,
      mobileBase: false,
      gripper: true,
      force: true,
    },
    icon: '🤖',
  },
  {
    id: 2,
    name: 'Fine Manipulation',
    difficulty: 'Hard',
    description: 'Precise object manipulation',
    requirements: {
      camera: true,
      mobileBase: false,
      gripper: true,
      force: true,
    },
    icon: '🎯',
  },
  {
    id: 3,
    name: 'Mobile Navigation',
    difficulty: 'Medium',
    description: 'Navigate while holding objects',
    requirements: {
      camera: true,
      mobileBase: true,
      gripper: true,
      force: false,
    },
    icon: '🚀',
  },
  {
    id: 4,
    name: 'Pancake Flipping',
    difficulty: 'Expert',
    description: 'Flip pancakes with precise timing and force control',
    requirements: {
      camera: true,
      gripper: true,
      force: true,
      spatula: true,
      timing: true,
    },
    icon: '🥞',
  },
  {
    id: 5,
    name: 'Egg Whisking',
    difficulty: 'Medium',
    description: 'Whisk eggs with controlled speed and motion',
    requirements: {
      gripper: true,
      force: true,
      rotary: true,
      speed: true,
    },
    icon: '🥚',
  },
  {
    id: 6,
    name: 'Laundry Hanging',
    difficulty: 'Hard',
    description: 'Hang clothes with proper grip and positioning',
    requirements: {
      camera: true,
      gripper: true,
      mobileBase: true,
      force: true,
      vision: true,
    },
    icon: '👕',
  },
  {
    id: 7,
    name: 'Precise Pouring',
    difficulty: 'Medium',
    description: 'Pour liquids with controlled flow and accuracy',
    requirements: {
      camera: true,
      gripper: true,
      force: true,
      flow: true,
    },
    icon: '🫗',
  },
  {
    id: 8,
    name: 'Fabric Folding',
    difficulty: 'Expert',
    description: 'Fold different types of fabrics with precision',
    requirements: {
      camera: true,
      gripper: true,
      force: true,
      vision: true,
      tactile: true,
    },
    icon: '🧺',
  },
  {
    id: 9,
    name: 'Drawer Opening',
    difficulty: 'Easy',
    description: 'Open and close drawers with force control',
    requirements: {
      camera: true,
      gripper: true,
      force: true,
    },
    icon: '🗄️',
  },
];

// Update the datasets to match the new skills
export const datasetsData = [
  {
    id: 1,
    name: 'Pick and Place Dataset 1',
    skillId: 1,
    samples: 1000,
    dateCreated: '2024-03-15',
    size: '2.3 GB',
  },
  {
    id: 2,
    name: 'Manipulation Dataset',
    skillId: 2,
    samples: 750,
    dateCreated: '2024-03-18',
    size: '1.8 GB',
  },
  {
    id: 3,
    name: 'Navigation Trajectories',
    skillId: 3,
    samples: 500,
    dateCreated: '2024-03-20',
    size: '1.5 GB',
  },
  {
    id: 4,
    name: 'Pancake Flipping Data',
    skillId: 4,
    samples: 300,
    dateCreated: '2024-03-21',
    size: '4.2 GB',
  },
  {
    id: 5,
    name: 'Egg Whisking Patterns',
    skillId: 5,
    samples: 450,
    dateCreated: '2024-03-22',
    size: '1.7 GB',
  },
  {
    id: 6,
    name: 'Laundry Operations',
    skillId: 6,
    samples: 600,
    dateCreated: '2024-03-23',
    size: '3.1 GB',
  },
];
