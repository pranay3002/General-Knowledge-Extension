fetch('https://the-trivia-api.com/v2/questions')
   .then(data=>data.json())
   .then(gkData => {
       const gkText = gkData.data[0].questionText;
       const gkElement = document.getElementById('gkElement');
       gkElement.innerHTML=gkText;
   })