<template>
  <div>
    <div v-for="value in data['data']" :key="value.id">
      <p v-if="value[0].type === 'paragraph'">{{ value[0].text }}</p>
      <h1 v-if="value[0].type === 'heading1'">{{ value[0].text }}</h1>
      <h2 v-if="value[0].type === 'heading2'">{{ value[0].text }}</h2>
      <h3 v-if="value[0].type === 'heading3'">{{ value[0].text }}</h3>
      <h4 v-if="value[0].type === 'heading4'">{{ value[0].text }}</h4>
      <h5 v-if="value[0].type === 'heading5'">{{ value[0].text }}</h5>
      <h6 v-if="value[0].type === 'heading6'">{{ value[0].text }}</h6>
    </div>
    <h4 v-show="loading">
      Loading content...
    </h4>
  </div>
</template>

<script>
import config from 'config'

export default {
  name: 'CmsPrismic',
  beforeMount () {
    this.$store.dispatch(
      'cms/loadPrismicPage',
      {
        type: this.type,
        orderings: this.orderings
      }
    )
  },
  props: {
    type: {
      type: String,
      default: null,
      required: true
    },
    orderings: {
      type: String,
      default: null,
      required: true
    }
  },
  computed: {
    data () {
      let res = this.$store.getters['cms/getPrismicPage'](this.type)
      if (res) {
        this.hideLoading()
      }
      return res
    }
  },
  data () {
    return {
      loading: true,
      cms: null
    }
  },
  methods: {
    getEndpointPath () {
      return config.cms.prismic
    },
    hideLoading () {
      this.loading = false
    }
  }
}
</script>
