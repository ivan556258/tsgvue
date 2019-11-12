<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="score"
    class="elevation-1"
  >
  <template v-slot:item.score="{ item } ">
      <v-chip :color="getColor(item.score)" dark>{{ item.score }}</v-chip>
  </template>
  <template v-slot:item.dialogx="{ item }">


    <v-dialog v-model="dialogx" max-width="550" min-width="250" >
      <template v-slot:activator="{ on }">
      <v-icon  small class="mr-2" v-on="on">
        create
      </v-icon>
      <v-icon small class="mr-2">money</v-icon>
      </template>
      <v-card>
      <v-col cols="12">
        <v-select v-model="variant" :items="items" clearable label="Веберите вариант" light > </v-select>
      </v-col>
      <v-col cols="12">
          <v-text-field v-model="scoresum" label="Сумма"></v-text-field>
      </v-col>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="savesum"
          >
            Сохранить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

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
                    <v-menu
                      ref="menu"
                      v-model="menu"
                      :close-on-content-click="false"
                      transition="scale-transition"
                      offset-y
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="date"
                          label="Дата рождения"
                          readonly
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        ref="picker"
                        v-model="date"
                        :max="new Date().toISOString().substr(0, 10)"
                        min="1950-01-01"
                      ></v-date-picker>
                    </v-menu>
                  </v-col>

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
                    <v-text-field v-model="editedItem.email" label="Емайл"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.phone" label="Номер телефона"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.number_telegram" label="Телеграм аккаунт"></v-text-field>
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
      dialogx: false,
      menu: '',
      date: '',
      picker: '',
      headers: [
        {
          text: 'Улица д. кв.',
          align: 'left',
          sortable: false,
          value: 'address',
        },
        { text: 'ФИО', value: 'initials'},
        { text: 'Телефон', value: 'phone' },
        { text: 'Емайл', value: 'email' },
        { text: 'Счёт', value: 'score' },
        { text: 'Действия', value: 'dialogx', dialogx: false },
        { text: 'Действия', value: 'action', sortable: false },
      ],
      desserts: [],
      inset: false,
      items: [
        'Должен оплатить',
        'Оплата',
      ],
      scoresum: 0,
      variant: 'default',
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
      menu (val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      }
    },
    created () {
      this.initialize()
    },
    methods: {
      initialize () {
        this.desserts = [
          {
            address: 'Frozen Yogurt',
            initials: 6.0,
            phone: 24,
            email: 4.0,
            score: 2,
          },
          {
            address: 'Frozen Yogurt',
            initials: 6.0,
            phone: 24,
            email: 4.0,
            score: -200,
          },
        ]
      },
      getColor (score) {
        if (score < 0) return 'red'
        else if(score === 0) return 'gray'
        else return 'green'
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
          alert(this.editedItem.score)
          if(this.editedItem.score == undefined) this.editedItem.score = 0
          this.editedItem.initials = this.editedItem.last_name + ' ' + this.editedItem.first_name.substring(0, 1) + '.' + this.editedItem.old_name.substring(0, 1)
          this.editedItem.address = this.editedItem.street + ' ' + this.editedItem.number_home + '.' + this.editedItem.number_appartament
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          if(this.editedItem.score == undefined) this.editedItem.score = 0
          if(this.editedItem.last_name == undefined) this.editedItem.last_name = ''
          if(this.editedItem.first_name == undefined) this.editedItem.first_name = ''
          if(this.editedItem.old_name == undefined) this.editedItem.old_name = ''
          if(this.editedItem.street == undefined) this.editedItem.street = ''
          if(this.editedItem.number_home == undefined) this.editedItem.number_home = ''
          if(this.editedItem.number_appartament == undefined) this.editedItem.number_appartament = ''
          this.editedItem.initials = this.editedItem.last_name + ' ' + this.editedItem.first_name.substring(0, 1) + '.' + this.editedItem.old_name.substring(0, 1)
          this.editedItem.address = this.editedItem.street + ' ' + this.editedItem.number_home + '.' + this.editedItem.number_appartament
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
      savesum () {
        this.dialogx = false
      }
    },
  }
</script>