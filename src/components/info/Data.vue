<template>
  <div class="scroll-table">
    <table>
      <thead>
      <tr>
        <th>Block ID</th>
        <th>Baker</th>
        <th>Created</th>
        <th># of operations</th>
        <th>Volume</th>
        <th>Fees</th>
        <th>Endorsements</th>
      </tr>
      </thead>
    </table>
    <div class="scroll-table-body">
      <table>
        <tbody>
        <tr v-for="block of blockList" :key="block.level">
          <td>{{ block.level }}</td>
          <td>{{ block.baker ? block.baker : '-----'}}</td>
          <td>{{ block.timestamp }}</td>
          <td>{{ block.number_of_operations }}</td>
          <td>{{ block.volume / 1000000 }}</td>
          <td>{{ block.fees / 1000000 }}</td>
          <td>{{ block.endorsements / 1000000 }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { getBlocks } from '@/api/blocks';

export default {
  name: 'Data',

  data() {
    return {
      blockList: [],
    };
  },

  async mounted() {
    this.blockList = await getBlocks();
    this.blockList.forEach((item, index) => {
      const a = new Date(item.timestamp * 1000);
      const year = a.getFullYear();
      const month = a.getMonth() + 1;
      const date = a.getDate();
      const hour = a.getHours();
      const min = a.getMinutes();
      const sec = a.getSeconds();
      this.blockList[index].timestamp = `${date}.${month}.${year} ${hour}:${min}:${sec}`;
    });
  },
};
</script>

<style scoped lang="scss">
.scroll-table-body {
  width: 804px;
  height: 300px;
  overflow-x: auto;
  margin-top: 0;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;

  @media (max-width: 820px) {
    width: 100%;
    max-width: 804px;
    height: auto;
  }
}
.scroll-table table {
  border-spacing: 0;
  width: 798px;
  table-layout: fixed;
  border: none;

  @media (max-width: 820px) {
    width: 100%;
    max-width: 798px;
  }
}
.scroll-table thead th {
  width: 103px;
  font-weight: bold;
  text-align: center;
  border: none;
  padding: 10px 5px;
  background: #fff;
  font-size: 14px;
  border-bottom: 1px solid #ecf4ff;

  @media (max-width: 820px) {
    padding: 10px 0;
    max-width: 50px;
    width: 100%;
    font-size: 8px;
  }

  @media (max-width: 395px) {
    font-size: 5px;
  }
}
.scroll-table tbody td {
  box-sizing: border-box;
  width: 114px;
  text-align: center;
  border-bottom: 1px solid #ecf4ff;
  background: #fff;
  padding: 10px 15px;
  font-size: 14px;
  vertical-align: top;

  @media (max-width: 820px) {
    padding: 0;
    max-width: 50px;
    width: 100%;
    font-size: 8px;
  }

  @media (max-width: 395px) {
    font-size: 5px;
  }
}

::-webkit-scrollbar {
  width: 0;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}
::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}
</style>
