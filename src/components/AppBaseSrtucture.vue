<template>
  <v-app id="keep">
    <v-app-bar
      app
      clipped-left
      color="amber"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <span class="title ml-3 mr-5">ТСЖ&nbsp;<span class="font-weight-light">БЕСПЛАТНОЕ</span></span>
      <v-text-field
        solo-inverted
        flat
        hide-details
        label="Search"
        prepend-inner-icon=""
      />

      <v-spacer />
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      color="grey lighten-4"
    >
      <v-list
        dense
        class="grey lighten-4"
      >
        <template v-for="(item, i) in items">
          <v-row
            v-if="item.heading"
            :key="i"
            align="center"
          >
            <v-col cols="6">
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-col>
            <v-col
              cols="6"
              class="text-right"
            >
              <v-btn
                small
                text
              >edit</v-btn>
            </v-col>
          </v-row>
          <v-divider
            v-else-if="item.divider"
            :key="i"
            dark
            class="my-4"
          />
          <v-list-item
            v-else
            :key="i"
            link
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="grey--text">
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-content>
    
 
          
            
            <AppTableInhabitans/>
     
     
    </v-content>
  </v-app>
</template>

<script>
import AppTableInhabitans from './tables/AppTableInhabitans.vue'

  export default {
    name: 'AppBaseSrtucture',
    props: {
      source: String,
    },
    components:{
        AppTableInhabitans
    },
    data: () => ({
      drawer: null,
      items: [
        { icon: '', text: 'Notes' },
        { icon: '', text: 'Reminders' },
        { divider: true },
        { heading: '' },
        { icon: '', text: 'Create new label' },
        { divider: true },
        { icon: '', text: 'Archive' },
        { icon: '', text: 'Trash' },
        { divider: true },
        { icon: '', text: 'Settings' },
        { icon: '', text: 'Trash' },
        { icon: '', text: 'Help' },
        { icon: '', text: 'App downloads' },
        { icon: '', text: 'Keyboard shortcuts' },
      ],
    }),
  }
</script>
<style scoped>
#keep .v-navigation-drawer__border {
  display: none
}
</style>