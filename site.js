const studies = [
  { title: 'Study 01', label: 'OBSERVED MOTION', description: 'An observed interaction and its motion.', video: '' },
  { title: 'Study 02', label: 'NEW INTERACTION', description: 'The same object in a different setting.', video: '' },
  { title: 'Study 03', label: 'MATERIAL RESPONSE', description: 'A comparison of motion under a changed condition.', video: '' },
  { title: 'Study 04', label: 'ADDITIONAL VIEW', description: 'A closer view or another example.', video: '' },
];

const grid = document.getElementById('demo-grid');
studies.forEach((study, index) => {
  const card = document.createElement('article');
  card.className = 'demo-card';
  const visual = document.createElement('div');
  visual.className = 'demo-visual';
  const tag = document.createElement('span');
  tag.className = 'media-tag';
  tag.textContent = study.label;
  visual.appendChild(tag);
  if (study.video) {
    const video = document.createElement('video');
    video.controls = true;
    video.preload = 'metadata';
    video.playsInline = true;
    video.src = study.video;
    video.setAttribute('aria-label', study.title);
    visual.appendChild(video);
  } else {
    const placeholder = document.createElement('span');
    placeholder.className = 'media-placeholder';
    placeholder.textContent = 'VIDEO SPACE  /  MATERIAL COMING SOON';
    visual.appendChild(placeholder);
  }
  const info = document.createElement('div');
  info.className = 'demo-info';
  const number = document.createElement('span');
  number.className = 'number';
  number.textContent = String(index + 1).padStart(2, '0') + ' / 04';
  const heading = document.createElement('h3');
  heading.textContent = study.title;
  const description = document.createElement('p');
  description.textContent = study.description;
  info.append(number, heading, description);
  card.append(visual, info);
  grid.appendChild(card);
});
