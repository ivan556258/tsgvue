<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="score"
    class="elevation-1"
  >
  <template v-slot:item.kitchenCould="{ item } ">
      <v-chip color="blue" dark>{{ item.kitchenCould }}</v-chip>
  </template>
  <template v-slot:item.bathroomCould="{ item } ">
      <v-chip color="blue" dark>{{ item.bathroomCould }}</v-chip>
  </template>
  <template v-slot:item.bathroomHot="{ item } ">
      <v-chip color="orange" dark>{{ item.bathroomHot }}</v-chip>
  </template>
    <template v-slot:item.kitchenHot="{ item } ">
      <v-chip color="orange" dark>{{ item.kitchenHot }}</v-chip>
  </template>
  <template v-slot:item.editscore="{ item }">


    <v-dialog max-width="550" min-width="250" >
      <template v-slot:activator="{ on }">
      <v-icon small class="mr-2" v-on="on">
        create
      </v-icon>
      <v-icon small class="mr-2">money</v-icon>
      </template>
      <v-card>
       <v-form ref="form" v-model="valid" lazy-validation>
      <v-col cols="12">
        <v-select v-model="variant" :items="items" required :rules="[v => !!v || 'Вариант не выбран']" clearable label="Веберите вариант" light > </v-select>
      </v-col>
      <v-col cols="12">
          <v-text-field v-model="scoresum" required :rules="[v => !!v || 'Укажите сумму']" clearable label="Сумма"></v-text-field>
      </v-col>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            :disabled="!valid"
            color="primary"
            text
            @click="savesum(item)"
          >
          Сохранить
          </v-btn>
        </v-card-actions>
         </v-form>
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
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.last_name" clearable label="Фамилия"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.first_name" clearable label="Имя"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.old_name" clearable label="Отчество"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.street" clearable label="Улица"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.number_home" clearable label="Номер дома"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.number_appartament" clearable label="Номер квартиры"></v-text-field>
                  </v-col>
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
                          clearable
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
                    <v-text-field v-model="editedItem.email" clearable label="Емайл"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.phone" clearable label="Номер телефона"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.number_telegram" clearable label="Телеграм аккаунт"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.number_viber" clearable label="Номер вайбер"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.number_whatsapp" clearable label="Номер ватсап"></v-text-field>
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
      editscore: false,
      score: '',
      menu: '',
      date: '',
      picker: '',
      valid: '',
      headers: [
        {
          text: 'Улица д. кв.',
          align: 'left',
          sortable: false,
          value: 'address',
        },
        { text: 'ФИО ответсвенного', value: 'initials'},
        { text: 'Кухня ХВС', value: 'kitchenCould' },
        { text: 'Ванная ХВС', value: 'bathroomCould' },
        { text: 'Ванная ГВС', value: 'bathroomHot' },
        { text: 'Кухня ГВС', value: 'kitchenHot' },
        { text: 'Действия', value: 'action', sortable: false },
      ],
      desserts: [],
      inset: false,
      scoresum: 0,
      variant: 'default',
      editedIndex: -1,
      editedItem: { 
      },
      defaultItem: {
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
            address: 'Большая горная д.357 кв.136',
            initials: 'Иванов Иван Иванович',
            kitchenCould: 24,
            bathroomCould: 4.0,
            bathroomHot: 45,
            kitchenHot: 45
          },
          {
            address: 'Большая горная д.357 кв.1',
            initials: 'Васильев Василий Васильевич',
            kitchenCould: 24757,
            bathroomCould: 45857.0,
            bathroomHot: 200,
            kitchenHot: 200
          },
        ]
      },
      savesum (item) {

        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)

        if(this.variant == 'Оплата')
        this.editedItem.score = parseFloat(this.editedItem.score) + parseFloat(this.scoresum)

        if (this.variant == 'Должен оплатить') 
        this.editedItem.score = parseFloat(this.editedItem.score) - parseFloat(this.scoresum)

        Object.assign(this.desserts[this.editedIndex], this.editedItem)
        console.log(this.editedItem.score)
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
 
          if(this.editedItem.score == undefined) this.editedItem.score = 0
          if(this.editedItem.last_name == undefined) this.editedItem.last_name = ''
          if(this.editedItem.first_name == undefined) this.editedItem.first_name = ''
          if(this.editedItem.old_name == undefined) this.editedItem.old_name = ''
          if(this.editedItem.street == undefined) this.editedItem.street = ''
          if(this.editedItem.number_home == undefined) this.editedItem.number_home = ''
          if(this.editedItem.number_appartament == undefined) this.editedItem.number_appartament = ''
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
          this.editedItem.editscore = this.editedItem.score
          this.desserts.push(this.editedItem)
        }
        this.close()
      }
    }
  }
</script>