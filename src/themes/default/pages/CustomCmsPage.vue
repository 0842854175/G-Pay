<template>
  <div class="container">
    <h1>Hi, Prismic content down below</h1>
    <cms-prismic :type="'page1'" :orderings="'tag1'"/>
  </div>
</template>

<script>
import CmsPrismic from 'src/extensions/cms/components/CmsPrismic'

export default {
  components: {
    CmsPrismic
  }
}
</script>

<style lang="scss">
@import '~theme/css/variables/colors';
@import '~theme/css/helpers/functions/color';
$color-secondary: color(secondary);

.cms-content {
  & * {
    font-size: 18px;
  }

  a {
    color: $color-secondary;
    text-decoration: underline;
  }

}
</style>
