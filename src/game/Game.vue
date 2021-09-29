<template>
  <div class="main">
    <div class="timers">
      <span>{{ secondsPassedAfterStart }}</span>
    </div>
    <div class="field">
      <template v-if="gameStarted" >
        <GameCard
          v-for="(card, index) in cards"
          :class="{ 'found-card': isFound(index) }"
          :key="card.value"
          :selected="isSelected(index)"
          @click="handleCardClick(index)"
        >
          <span v-if="isSelected(index)">{{ card.value }}</span>
        </GameCard>
      </template>

      <div
        v-else
        class="field__start-trigger"
        @click="handleStartClick"
      >
        Старт
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Stopwatch } from '@/core/classes/Stopwatch';
import { Timer } from '@/core/classes/Timer';
import { shuffle } from '@/core/functions/shuffle';
import GameCard from '@/game/GameCard.vue';

type TCard = { value: number }

const LABELS = Array.from({ length: 18 }).map((_, i) => i);

@Options({
  components: { GameCard },
  watch: {
    foundCards(val: number[]) {
      if (val.length === this.cards.length * 2) {
        this.gameStarted = false;
        this.commonTime.stop();
        this.commonTime.clear();
        this.foundCards = [];
      }
    },
  },
  computed: {
    secondsPassedAfterStart() {
      return this.commonTime.value;
    },
  },
})
export default class Game extends Vue {
  gameStarted = false
  cards: TCard[] = []
  foundCards: number[] = []
  selectedTimer = new Timer()
  debounceTimer = new Timer()
  commonTime = new Stopwatch()
  selectedCards: Array<number> = []

  isSelected(index: number) {
    return this.selectedCards.includes(index);
  }

  isFound(index: number) {
    return this.foundCards.includes(index);
  }

  selectCard(index: number) {
    this.selectedCards = [...this.selectedCards, index];
  }

  resetSelection() {
    this.selectedCards = [];
  }

  startGame() {
    this.gameStarted = true;
    this.commonTime.start();
    this.cards = shuffle(LABELS.flatMap((x) => [{ value: x }, { value: x }]));
  }

  handleStartClick() {
    this.startGame();
  }

  async handleCardClick(cardIndex: number) {
    if (this.debounceTimer.isStarted) {
      return;
    }

    if (!this.selectedCards.length) {
      this.selectCard(cardIndex);
      await this.selectedTimer.start(5);
      this.resetSelection();

      return;
    }

    const firstCardIndex = this.selectedCards[0];

    if (firstCardIndex === cardIndex) {
      this.selectedTimer.stop();
      this.resetSelection();

      return;
    }

    if (this.cards[cardIndex].value === this.cards[firstCardIndex].value) {
      this.foundCards = [...this.foundCards, cardIndex, firstCardIndex];
    } else {
      this.selectCard(cardIndex);
      await this.debounceTimer.start({ ms: 500 });
    }

    this.resetSelection();
    this.selectedTimer.stop();
  }
}
</script>

<style scoped lang="scss">
.main {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}

.timers {
  display: flex;
  justify-content: space-between;
}

.field {
  position: relative;
  display: grid;
  width: 400px;
  height: 400px;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 4px;

  &__start-trigger {
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.found-card {
  visibility: hidden;
}
</style>
