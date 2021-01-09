<template>
    <div class="advert-space">
        <resource-category-list />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import resourceCategoryList from './components/List.vue'

export default Vue.extend({
  name: 'AdvertSpaceIndex',
  components: {
    resourceCategoryList
  }
})
</script>

<style lang="scss" scoped></style>
