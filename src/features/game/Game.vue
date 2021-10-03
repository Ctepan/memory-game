<template>
  <div>
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
import { computed, ref, watch } from 'vue';
import { Stopwatch } from '@/core/classes/Stopwatch';
import { Timer } from '@/core/classes/Timer';
import { shuffle } from '@/core/functions/shuffle';
import GameCard from './GameCard.vue';

type TCard = { value: number }

const LABELS = Array.from({ length: 18 }).map((_, i) => i);

export default {
  name: 'Game',
  components: { GameCard },
  setup() {
    const gameStarted = ref(false);
    const cards = ref([] as TCard[]);
    const foundCards = ref([] as number[]);
    const selectedTimer = ref(new Timer());
    const debounceTimer = ref(new Timer());
    const commonTime = ref(new Stopwatch());
    const selectedCards = ref([] as number[]);

    const secondsPassedAfterStart = computed(() => commonTime.value.value);

    watch(foundCards, val => {
      if (val.length === cards.value.length * 2) {
        gameStarted.value = false;
        commonTime.value.stop();
        commonTime.value.clear();
        foundCards.value = [];
      }
    });

    function isSelected(index: number) {
      return selectedCards.value.includes(index);
    }

    function isFound(index: number) {
      return foundCards.value.includes(index);
    }

    function selectCard(index: number) {
      selectedCards.value = [...selectedCards.value, index];
    }

    function resetSelection() {
      selectedCards.value = [];
    }

    function startGame() {
      gameStarted.value = true;
      commonTime.value.start();
      cards.value = shuffle(LABELS.flatMap((x) => [{ value: x }, { value: x }]));
    }

    function handleStartClick() {
      startGame();
    }

    async function handleCardClick(cardIndex: number) {
      if (debounceTimer.value.isStarted) {
        return;
      }

      if (!selectedCards.value.length) {
        selectCard(cardIndex);
        await selectedTimer.value.start(5);
        resetSelection();

        return;
      }

      const firstCardIndex = selectedCards.value[0];

      if (firstCardIndex === cardIndex) {
        selectedTimer.value.stop();
        resetSelection();

        return;
      }

      if (cards.value[cardIndex].value === cards.value[firstCardIndex].value) {
        foundCards.value = [...foundCards.value, cardIndex, firstCardIndex];
      } else {
        selectCard(cardIndex);
        await debounceTimer.value.start({ ms: 500 });
      }

      resetSelection();
      selectedTimer.value.stop();
    }

    return {
      gameStarted,
      cards,
      foundCards,
      selectedTimer,
      debounceTimer,
      commonTime,
      selectedCards,
      secondsPassedAfterStart,
      handleCardClick,
      handleStartClick,
      isFound,
      isSelected,
    };
  },
};
</script>

<style scoped lang="scss">
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
