const currentDay = document.querySelector('.current-day')
const funFact = document.querySelector('.fun-fact')

const facts = [
  'Krokodyl nie potrafi wystawić języka.',
  'Każdy człowiek spędził około pół godziny jako pojedyncza komórka.',
  'Dźwięk przemieszcza się 15 razy szybciej przez stal niż przez powietrze.',
  'Leniwce potrzebują dwóch tygodni na strawienie jedzenia.',
  'Goryle śpią nawet czternaście godzin dziennie.',
  'Język kameleona jest dwukrotnie dłuższy od jego ciała.',
  'Chińczycy w ciągu roku zużywają około 80 miliardów pałeczek.',
  'Żeby wejść na Wieżę Eiffla trzeba pokonać aż 1710 stopni.',
]

const dayNames = {
  0: 'niedziela',
  1: 'poniedziałek',
  2: 'wtorek',
  3: 'środa',
  4: 'czwartek',
  5: 'piątek',
  6: 'sobota',
}

const today = new Date()
const day = today.getDate()
const dayName = dayNames[today.getDay()]

currentDay.textContent = dayName

const showRandomFact = () => {
  const number = Math.floor(Math.random() * (facts.length - 1))

  funFact.textContent = facts[number]
}

showRandomFact()
