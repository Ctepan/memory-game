<template>
  <table class="leaderboard">
    <thead>
      <tr>
        <th>Time spent</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="result in leadersList"
        :key="result.date"
        >
        <td>{{ result.score }}</td>
        <td>{{ result.date }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { computed } from 'vue';
import { format } from 'date-fns';
import { useStore } from '@/store';

export default {
  name: 'Leaderboard',
  setup() {
    const store = useStore();
    const formatResultDate = result => ({
      score: result.score,
      date: format(new Date(result.date), 'dd.MM.yyyy HH:mm'),
    });

    const leadersList = computed(() => store.state.resultsList
      .map(formatResultDate)
      .sort((a, b) => a.score - b.score));

    return {
      leadersList,
    };
  },
};
</script>

<style scoped lang="scss">
.leaderboard {
  width: 100%;

  & th {
    background: aliceblue;
  }

  & tr:nth-child(2n) td {
    background: aliceblue;
  }
}
</style>
