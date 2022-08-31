import "./card.styles.scss";

const BLANK_CARD = require("../../assets/CardImages/png/blank.png");

const ACE_HEART = require("../../assets/CardImages/png/1h.png");
const ACE_DIAMOND = require("../../assets/CardImages/png/1d.png");
const ACE_SPADE = require("../../assets/CardImages/png/1s.png");
const ACE_CLUB = require("../../assets/CardImages/png/1c.png");

const KING_HEART = require("../../assets/CardImages/png/kh.png");
const KING_DIAMOND = require("../../assets/CardImages/png/kd.png");
const KING_SPADE = require("../../assets/CardImages/png/ks.png");
const KING_CLUB = require("../../assets/CardImages/png/kc.png");

const QUEEN_HEART = require("../../assets/CardImages/png/qh.png");
const QUEEN_DIAMOND = require("../../assets/CardImages/png/qd.png");
const QUEEN_SPADE = require("../../assets/CardImages/png/qs.png");
const QUEEN_CLUB = require("../../assets/CardImages/png/qc.png");

const JACK_HEART = require("../../assets/CardImages/png/jh.png");
const JACK_DIAMOND = require("../../assets/CardImages/png/jd.png");
const JACK_SPADE = require("../../assets/CardImages/png/js.png");
const JACK_CLUB = require("../../assets/CardImages/png/jc.png");

const TEN_HEART = require("../../assets/CardImages/png/10h.png");
const TEN_DIAMOND = require("../../assets/CardImages/png/10d.png");
const TEN_SPADE = require("../../assets/CardImages/png/10s.png");
const TEN_CLUB = require("../../assets/CardImages/png/10c.png");

const NINE_HEART = require("../../assets/CardImages/png/9h.png");
const NINE_DIAMOND = require("../../assets/CardImages/png/9d.png");
const NINE_SPADE = require("../../assets/CardImages/png/9s.png");
const NINE_CLUB = require("../../assets/CardImages/png/9c.png");

const EIGHT_HEART = require("../../assets/CardImages/png/8h.png");
const EIGHT_DIAMOND = require("../../assets/CardImages/png/8d.png");
const EIGHT_SPADE = require("../../assets/CardImages/png/8s.png");
const EIGHT_CLUB = require("../../assets/CardImages/png/8c.png");

const SEVEN_HEART = require("../../assets/CardImages/png/7h.png");
const SEVEN_DIAMOND = require("../../assets/CardImages/png/7d.png");
const SEVEN_SPADE = require("../../assets/CardImages/png/7s.png");
const SEVEN_CLUB = require("../../assets/CardImages/png/7c.png");

const SIX_HEART = require("../../assets/CardImages/png/6h.png");
const SIX_DIAMOND = require("../../assets/CardImages/png/6d.png");
const SIX_SPADE = require("../../assets/CardImages/png/6s.png");
const SIX_CLUB = require("../../assets/CardImages/png/6c.png");

const FIVE_HEART = require("../../assets/CardImages/png/5h.png");
const FIVE_DIAMOND = require("../../assets/CardImages/png/5d.png");
const FIVE_SPADE = require("../../assets/CardImages/png/5s.png");
const FIVE_CLUB = require("../../assets/CardImages/png/5c.png");

const FOUR_HEART = require("../../assets/CardImages/png/4h.png");
const FOUR_DIAMOND = require("../../assets/CardImages/png/4d.png");
const FOUR_SPADE = require("../../assets/CardImages/png/4s.png");
const FOUR_CLUB = require("../../assets/CardImages/png/4c.png");

const THREE_HEART = require("../../assets/CardImages/png/3h.png");
const THREE_DIAMOND = require("../../assets/CardImages/png/3d.png");
const THREE_SPADE = require("../../assets/CardImages/png/3s.png");
const THREE_CLUB = require("../../assets/CardImages/png/3c.png");

const TWO_HEART = require("../../assets/CardImages/png/2h.png");
const TWO_DIAMOND = require("../../assets/CardImages/png/2d.png");
const TWO_SPADE = require("../../assets/CardImages/png/2s.png");
const TWO_CLUB = require("../../assets/CardImages/png/2c.png");

const Card = ({ card, onCardClick, index }) => {
  const handleClick = (event) => {
    onCardClick(card, index);
  };
  let c;

  if (!card) {
    c = BLANK_CARD;
  } else if (card.suit == "Diamond") {
    switch (card.value) {
      case "A":
        c = ACE_DIAMOND;
        break;
      case "K":
        c = KING_DIAMOND;
        break;
      case "Q":
        c = QUEEN_DIAMOND;
        break;
      case "J":
        c = JACK_DIAMOND;
        break;
      case "10":
        c = TEN_DIAMOND;
        break;
      case "9":
        c = NINE_DIAMOND;
        break;
      case "8":
        c = EIGHT_DIAMOND;
        break;
      case "7":
        c = SEVEN_DIAMOND;
        break;
      case "6":
        c = SIX_DIAMOND;
        break;
      case "5":
        c = FIVE_DIAMOND;
        break;
      case "4":
        c = FOUR_DIAMOND;
        break;
      case "3":
        c = THREE_DIAMOND;
        break;
      case "2":
        c = TWO_DIAMOND;
        break;
    }
  } else if (card.suit == "Heart") {
    switch (card.value) {
      case "A":
        c = ACE_HEART;
        break;
      case "K":
        c = KING_HEART;
        break;
      case "Q":
        c = QUEEN_HEART;
        break;
      case "J":
        c = JACK_HEART;
        break;
      case "10":
        c = TEN_HEART;
        break;
      case "9":
        c = NINE_HEART;
        break;
      case "8":
        c = EIGHT_HEART;
        break;
      case "7":
        c = SEVEN_HEART;
        break;
      case "6":
        c = SIX_HEART;
        break;
      case "5":
        c = FIVE_HEART;
        break;
      case "4":
        c = FOUR_HEART;
        break;
      case "3":
        c = THREE_HEART;
        break;
      case "2":
        c = TWO_HEART;
        break;
    }
  } else if (card.suit == "Club") {
    switch (card.value) {
      case "A":
        c = ACE_CLUB;
        break;
      case "K":
        c = KING_CLUB;
        break;
      case "Q":
        c = QUEEN_CLUB;
        break;
      case "J":
        c = JACK_CLUB;
        break;
      case "10":
        c = TEN_CLUB;
        break;
      case "9":
        c = NINE_CLUB;
        break;
      case "8":
        c = EIGHT_CLUB;
        break;
      case "7":
        c = SEVEN_CLUB;
        break;
      case "6":
        c = SIX_CLUB;
        break;
      case "5":
        c = FIVE_CLUB;
        break;
      case "4":
        c = FOUR_CLUB;
        break;
      case "3":
        c = THREE_CLUB;
        break;
      case "2":
        c = TWO_CLUB;
        break;
    }
  } else if (card.suit == "Spade") {
    switch (card.value) {
      case "A":
        c = ACE_SPADE;
        break;
      case "K":
        c = KING_SPADE;
        break;
      case "Q":
        c = QUEEN_SPADE;
        break;
      case "J":
        c = JACK_SPADE;
        break;
      case "10":
        c = TEN_SPADE;
        break;
      case "9":
        c = NINE_SPADE;
        break;
      case "8":
        c = EIGHT_SPADE;
        break;
      case "7":
        c = SEVEN_SPADE;
        break;
      case "6":
        c = SIX_SPADE;
        break;
      case "5":
        c = FIVE_SPADE;
        break;
      case "4":
        c = FOUR_SPADE;
        break;
      case "3":
        c = THREE_SPADE;
        break;
      case "2":
        c = TWO_SPADE;
        break;
    }
  }
  return (
    <div onClick={handleClick} value={card} className="individual-card">
      <img src={c} />
    </div>
  );
};

export default Card;
