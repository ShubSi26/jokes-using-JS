function fucn(){
let j = [
    {
      "joke": "Where do weirdos ride their bicycles? Psycho-paths."
    },
    {
      "joke": "I'll always remember what my uncle said before he passed on up... \"Flying houses? Talking dogs? That movie looks dumb.\""
    },
    {
      "joke": "Two atoms walk into a bar... One says, \"Oh no, I've lost an electron.\" The other asks, \"Are you sure?\" \"Yeah, I'm positive!\""
    },
    {
      "joke": "What did the picture say to the Judge? I WAS FRAMED! I just now made that up. I feel good about this one!"
    },
    {
      "joke": "What Did Delaware? A brand New Jersey!"
    },
    {
      "joke": "Noah wasn't much for civilized society . . . You could say he was an-arc-ist."
    },
    {
      "joke": "Why does a Bicycle have a kickstand? Because it's two tired."
    },
    {
      "joke": "So how's the shoestring game goin'? Right now, it's ALL TIED-UP!"
    },
    {
      "joke": "Why did the chicken cross the playground? To get to the other slide."
    },
    {
      "joke": "What does a Jedi say after a tragic loss of life? \"May my thoughts be with them\"."
    },
    {
      "joke": "I feed my cat lemons. He's a real sour puss."
    },
    {
      "joke": "What do you get when you cross Kansas with a vulture? Carrion my wayward son"
    },
    {
      "joke": "How did the prostitute get promoted? She slept her way to the top!"
    },
    {
      "joke": "Did ya hear about the magic tractor? It turned into a field"
    },
    {
      "joke": "How did the aquarium win the battle? Giant Fish Tanks."
    },
    {
      "joke": "You know why ancient Greek children were always getting lost from their parents? 'Cause they kept Roman around!"
    },
    {
      "joke": "If I ever fire someone who is a Taylor Swift fan I'll say \"I knew you were trouble when you clocked in.\""
    },
    {
      "joke": "What do you do to dead chemists? You barium."
    },
    {
      "joke": "Why do librarians like the wind? It says, \"Shhh!\" all day!"
    },
    {
      "joke": "How much does a truck full of bones weigh? A skeleTon"
    }
  ]
  let a = document.getElementById("jokebox");
  let idx = Math.floor(Math.random()*19);
  a.textContent = (j[idx].joke);
  
}
setInterval(fucn,4500);