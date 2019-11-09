<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="score"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Жители</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="100%">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on"><v-icon>add_circle_outline</v-icon> </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.last_name" label="Фамилия"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.first_name" label="Имя"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.old_name" label="Отчество"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.street" label="Улица"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.number_home" label="Номер дома"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.number_appartament" label="Номер квартиры"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.last_name" label="Емайл"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.phone" label="Номер телефона"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.number_telegram" label="Телеграм аккаунт"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.email" label="Емайл"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.number_viber" label="Номер вайбер"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.number_whatsapp" label="Номер ватсап"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Отмена</v-btn>
              <v-btn color="blue darken-1" text @click="save">Сохранить</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >create
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >clear
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
</template>

<script>
  export default {
    name: 'AppTableInhabitans',
    data: () => ({
      dialog: false,
      headers: [
        {
          text: 'Улица д. кв.',
          align: 'left',
          sortable: false,
          value: 'name',
        },
        { text: 'ФИО', value: 'last_name' },
        { text: 'Телефон', value: 'phone' },
        { text: 'Емайл', value: 'email' },
        { text: 'Счёт', value: 'score' },
        { text: 'Действия', value: 'action', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        phone: +7
      },
      defaultItem: {
        phone: +7
      },
    }),
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Создать' : 'Редактировать'
      },
    },
    watch: {
      dialog (val) {
        val || this.close()
      },
    },
    created () {
      this.initialize()
    },
    methods: {
      initialize () {
        this.desserts = [
          {
            name: 'Frozen Yogurt',
            score: 159,
            initials: 6.0,
            phone: 24,
            email: 4.0,
            id: 0,
          },
          {
            name: 'Ice cream sandwich',
            score: 237,
            initials: 9.0,
            phone: 37,
            email: 4.3,
            id: 1,
          },
          {
            name: 'Eclair',
            score: 262,
            initials: 16.0,
            phone: 23,
            email: 6.0,
            id: 2,
          },
          {
            name: 'Cupcake',
            score: 305,
            initials: 3.7,
            phone: 67,
            email: 4.3,
            id: 3,
          },
          {
            name: 'Gingerbread',
            score: 356,
            initials: 16.0,
            phone: 49,
            email: 3.9,
            id: 4,
          },
          {
            name: 'Jelly bean',
            score: 375,
            initials: 0.0,
            phone: 94,
            email: 0.0,
            id: 5,
          },
          {
            name: 'Lollipop',
            score: 392,
            initials: 0.2,
            phone: 98,
            email: 0,
            id: 6,
          },
          {
            name: 'Honeycomb',
            score: 408,
            initials: 3.2,
            phone: 87,
            email: 6.5,
            id: 7,
          },
          {
            name: 'Donut',
            score: 452,
            initials: 25.0,
            phone: 51,
            email: 4.9,
            id: 8,
          },
          {
            name: 'KitKat',
            score: 518,
            initials: 26.0,
            phone: 65,
            email: 7,
            id: 9,
          },
        ]
      },
      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
      deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Вы уверены, что хотите удалить жильца?') && this.desserts.splice(index, 1)
      },
      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },
      save () {
        if (this.editedIndex > -1) {
          console.log('when editing')
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          console.log('when additing')
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>