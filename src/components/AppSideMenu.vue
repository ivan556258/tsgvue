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
        <template>
          <v-list-item v-for="item in items" :key="item.i">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content >
              <v-list-item-title class="grey--text">
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-content>
    
 
          
            
        
     
     
    </v-content>
  </v-app>
</template>

<script>


  export default {
    name: 'AppBaseSrtucture',
    props: {
      source: String,
    },

    data: () => ({
      drawer: null,
      items: [
        { icon: '', text: 'Notes' },
        { icon: '', text: 'Reminders' },
   
        { heading: '' },
        { icon: '', text: 'Create new label' },

        { icon: '', text: 'Archive' },
        { icon: '', text: 'Trash' },

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