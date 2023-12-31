# 👽 card-clash 👽

This app allows users to play an attribute-based game based on Top Trumps.

## Planning

We defined the following user stories:

As a user, I want to:

- See my card
- Submit an alien skill from my card
- View the computers response
- Receive feedback depending on scores
- Take a mininimum of 5 turns
- See the computer the computer taking their turn

## Wireframes

We created a basic wireframe to show the core design and functionality of our game

https://miro.com/app/board/uXjVM_4jUMg=/?share_link_id=120564150822


Currently, we have a limited version of the game running:

- On 'start game', the cards are shuffled and shared into user and computer decks

- The user can choose an attribute and battle the opponent's card

- The user receives feedback and the score is updated

- A new round is launched for the user to battle again

- Currently the game crashes after 5 rounds - a future iteration would include a restart button to deal again

## Installation

```terminal
git clone https://github.com/fac27/card-clash

npm install

npm run dev
```

And finally navigate to http://localhost:5173/ to see the site.

OR view our [deployed site](https://glittering-unicorn-3f8116.netlify.app/)



## Next steps

- Alien pictures 👽
- Add computer turns
- Create intro screen before game start and return to this screen at game end
- Add full Top Trumps deck functionality i.e. loser gives their card to winner's deck, game is won when all cards are held
- Score user scores in local storage
- Add other decks / themes for user to choose from
