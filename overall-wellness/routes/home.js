const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', {
    title: 'Overall Wellness',
    sections: [
      {
        heading: 'Physical Wellness',
        description: 'Track workouts, hydration, and sleep quality with daily goals.'
      },
      {
        heading: 'Mental Wellness',
        description: 'Log mood, practice mindfulness, and build healthy reflection habits.'
      },
      {
        heading: 'Nutrition Wellness',
        description: 'Plan balanced meals and monitor nutrition progress each week.'
      }
    ]
  });
});

module.exports = router;
