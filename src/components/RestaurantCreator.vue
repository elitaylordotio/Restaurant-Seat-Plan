<template>
  <div>
    <ul>
      <li
      v-for="table in getTables()" 
      v-bind:key="table"
      >
        {{table}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { RestaurantBuilder } from '../typescript/RestaurantBuilder';

@Component
export default class RestaurantCreator extends Vue {
  private restaurant: any;

  constructor() {
    super();
    this.restaurant = new RestaurantBuilder();
  }

  public createNewTable(newTable: string) {
    this.restaurant.addTable(newTable);
  }

  public getTables() {
    return this.restaurant.getTables();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
// <style scoped lang="less">
// h3 {
//   margin: 40px 0 0;
// }
// ul {
//   list-style-type: none;
//   padding: 0;
// }
// li {
//   display: inline-block;
//   margin: 0 10px;
// }
// a {
//   color: #42b983;
// }
// </style>
