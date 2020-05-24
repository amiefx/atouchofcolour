<template>
  <div>
      <ShareNetwork
    v-for="network in networks"
    :network="network.network"
    :key="network.key"
    :url="sharing.url"
    :title="sharing.title"
    :description="sharing.description"
    :quote="sharing.quote"
    :hashtags="sharing.hashtags"
    :twitterUser="sharing.twitterUser"
  >
    <v-btn icon fab small dark>
        <v-icon :color="network.color"> {{ network.icon }}</v-icon>
    </v-btn>

  </ShareNetwork>
  </div>
</template>

<script>
export default {
    props: {
        sharing: {
        required: true,
        type: Object
        }
    },
  data () {
    return {
      networks: [
        { network: 'facebook', name: 'Facebook', icon: 'mdi-facebook', color: '#1877f2' },
        { network: 'twitter', name: 'Twitter', icon: 'mdi-twitter', color: '#1da1f2' },
        { network: 'whatsapp', name: 'Whatsapp', icon: 'mdi-whatsapp', color: '#25d366' },
        { network: 'telegram', name: 'Telegram', icon: 'mdi-telegram', color: '#0088cc' },
        { network: 'skype', name: 'Skype', icon: 'mdi-skype', color: '#00aff0' },
        { network: 'linkedin', name: 'LinkedIn', icon: 'mdi-linkedin', color: '#007bb5' },
        { network: 'pinterest', name: 'Pinterest', icon: 'mdi-pinterest', color: '#bd081c' },
      ]
    }
  }
}
</script>
