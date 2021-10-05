<template>
  <div class="game">
    <div class="info">
      <div>
        Elapsed time: {{ secondsPassedAfterStart }}
      </div>
      <div v-if="topRankScore">
        Top rank time: {{ topRankScore }}
      </div>
    </div>

    <div class="square-adaptive-container field">
      <div class="square-adaptive-container__inside">
        <div class="field__grid">
          <template v-if="gameStarted" >
            <GameCard
              v-for="(card, index) in cards"
              :class="{ 'found-card': isFound(index) }"
              :key="card.value"
              :selected="isSelected(index)"
              @click="handleCardClick(index)"
            >
              <i v-if="isSelected(index) || isMemorizing" :class="card.value"></i>
            </GameCard>
          </template>

          <div
            v-else
            class="field__start-trigger"
            @click="handleStartClick"
          >
            Start
          </div>
        </div>
      </div>
    </div>

    <div class="messages">
      <div v-if="gameStarted && isMemorizing">
        Get ready!
      </div>
      <div v-else-if="gameStarted">
        Go!
      </div>
    </div>

    <teleport to=".modal-place">
      <AppDialog
        v-model:active="isGameOverDialogOpen"
        @update:active="handleGameOverDialogUpdate"
      >
        <GameOver :time="commonTime.value"></GameOver>
      </AppDialog>
    </teleport>
  </div>
</template>

<script lang="ts">
import {
  computed, defineComponent, ref, watch,
} from 'vue';
import { useStore } from '@/store';
import { Stopwatch } from '@/core/classes/Stopwatch';
import { Timer } from '@/core/classes/Timer';
import { shuffle } from '@/core/functions/shuffle';
import AppDialog from '@/core/components/AppDialog.vue';
import { ICONS } from '@/features/game/constants';
import GameCard from './GameCard.vue';
import GameOver from './GameOver.vue';

type TCard = { value: string }

export default defineComponent({
  name: 'Game',
  components: {
    AppDialog,
    GameCard,
    GameOver,
  },
  setup() {
    const store = useStore();

    const gameStarted = ref(false);
    const cards = ref([] as TCard[]);
    const foundCards = ref([] as number[]);
    const selectedTimer = ref(new Timer());
    const debounceTimer = ref(new Timer());
    const memorizeTimer = ref(new Timer());
    const commonTime = ref(new Stopwatch());
    const selectedCards = ref([] as number[]);
    const isGameOverDialogOpen = ref(false);

    const isMemorizing = computed(() => memorizeTimer.value.isStarted);
    const secondsPassedAfterStart = computed(() => commonTime.value.value);
    const topRankScore = computed(() => store.getters.topRankScore);

    watch(foundCards, val => {
      if (val.length === cards.value.length) {
        commonTime.value.stop();
        store.commit('newResult', {
          score: commonTime.value.value,
          date: Number(new Date()),
        });
        gameStarted.value = false;
        isGameOverDialogOpen.value = true;
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

    async function startGame() {
      cards.value = shuffle(ICONS.flatMap((x) => [{ value: x }, { value: x }]));
      gameStarted.value = true;
      await memorizeTimer.value.start(5);
      commonTime.value.start();
    }

    function handleStartClick() {
      startGame();
    }

    function handleGameOverDialogUpdate(value: boolean) {
      if (!value) {
        commonTime.value.clear();
      }
    }

    async function handleCardClick(cardIndex: number) {
      if (debounceTimer.value.isStarted || isMemorizing.value) {
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
      isGameOverDialogOpen,
      gameStarted,
      cards,
      foundCards,
      selectedTimer,
      debounceTimer,
      commonTime,
      selectedCards,
      secondsPassedAfterStart,
      isMemorizing,
      topRankScore,
      handleGameOverDialogUpdate,
      handleCardClick,
      handleStartClick,
      isFound,
      isSelected,
    };
  },
});
</script>

<style scoped lang="scss">
.game {
  width: 100%;
  max-width: 400px;
}

.info {
  display: flex;
  justify-content: space-between;
}

.field {
  margin-top: 8px;
  width: 100%;

  &__grid {
    height: 100%;
    display: grid;
    position: relative;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-gap: 4px;
  }

  &__start-trigger {
    background: rgba(0, 0, 0, 0.1);
    font-size: 34px;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }
  }
}

.messages {
  margin-top: 8px;
  font-size: 24px;
  text-align: center;
}

.found-card {
  visibility: hidden;
}
</style>
