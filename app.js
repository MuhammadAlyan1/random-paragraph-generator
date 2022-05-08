let paragraphLength = document.querySelector("#paragraph-length");
let generateBtn = document.querySelector("#generate");
let paragraphDiv = document.querySelector(".paragraph-div");

paragraphDiv.innerHTML;

let paragraphs = [
  "Patrick didn't want to go. The fact that she was insisting they must go made him want to go even less. He had no desire to make small talk with strangers he would never again see just to be polite. But she insisted that Patrick go, and she would soon find out that this would be the biggest mistake she could make in their relationship.",

  "'Begin today!' That's all the note said. There was no indication from where it came or who may have written it. Had it been meant for someone else? Meghan looked around the room, but nobody made eye contact back. For a brief moment, she thought it might be a message for her to follow her dreams, but ultimately decided it was easier to ignore it as she crumpled it up and threw it away.",

  "He stepped away from the mic. This was the best take he had done so far, but something seemed missing. Then it struck him all at once. Visuals ran in front of his eyes and music rang in his ears. His eager fingers went to work in an attempt to capture his thoughts hoping the results would produce something that was at least half their glory.",

  "There was little doubt that the bridge was unsafe. All one had to do was look at it to know that with certainty. Yet Bob didn't see another option. He may have been able to work one out if he had a bit of time to think things through, but time was something he didn't have. A choice needed to be made, and it needed to be made quickly.",

  "The paper was blank. It shouldn't have been. There should have been writing on the paper, at least a paragraph if not more. The fact that the writing wasn't there was frustrating. Actually, it was even more than frustrating. It was downright distressing.",

  "I'm so confused by your ridiculous meltdown that I must insist on some sort of explanation for your behavior towards me. It just doesn't make any sense. There's no way that I deserved the treatment you gave me without an explanation or an apology for how out of line you have been.",

  "There was something in the sky. What exactly was up there wasn't immediately clear. But there was definitely something in the sky and it was getting bigger and bigger.",

  "He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it. Nobody seemed to fully understand the beauty of this accomplishment except for the new worker who watched in amazement.",

  "The thing that's great about this job is the time sourcing the items involves no traveling. I just look online to buy it. It's really as simple as that. While everyone else is searching for what they can sell, I sit in front of my computer and buy better stuff for less money and spend a fraction of the time doing it.",

  "It was that terrifying feeling you have as you tightly hold the covers over you with the knowledge that there is something hiding under your bed. You want to look, but you don't at the same time. You're frozen with fear and unable to act. That's where she found herself and she didn't know what to do next",

  "Although Scott said it didn't matter to him, he knew deep inside that it did. They had been friends as long as he could remember and not once had he had to protest that something Joe apologized for doing didn't really matter. Scott stuck to his lie and insisted again and again that everything was fine as Joe continued to apologize. Scott already knew that despite his words accepting the apologies that their friendship would never be the same.",

  "It all started with the computer. Had he known what was to follow, he would have never logged on that day. But the truth was there was no way to know what was about to happen. So Dave pressed the start button, the computer booted up, the screen came alive, and everything Dave knew to be true no longer was.",

  "The robot clicked disapprovingly, gurgled briefly inside its cubical interior and extruded a pony glass of brownish liquid. 'Sir, you will undoubtedly end up in a drunkard's grave, dead of hepatic cirrhosis,' it informed me virtuously as it returned my ID card. I glared as I pushed the glass across the table.",
];

console.log(paragraphs.length);

generateBtn.addEventListener("click", () => {
  paragraphDiv.innerHTML = "";

  if (paragraphLength.value <= 0) {
    return;
  }

  if (paragraphLength.value == 1) {
    paragraphDiv.innerHTML = `<p>${
      paragraphs[Math.floor(Math.random() * paragraphs.length)]
    }</p>`;
  } else if (paragraphLength.value <= paragraphs.length) {
    for (let i = 0; i < paragraphLength.value; i++) {
      paragraphDiv.innerHTML += `<p>${paragraphs[i]}</p>`;
    }
  } else {
    for (let i = 0; i < paragraphLength.value; i++) {
      paragraphDiv.innerHTML += `<p>${
        paragraphs[Math.floor(Math.random() * paragraphs.length)]
      }</p>`;
    }
  }
});
