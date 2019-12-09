<template>
  <v-app id="keep">
    <v-app-bar
      app
      clipped-left
      color="amber"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <span class="title ml-3 mr-5">Компания&nbsp;<span class="font-weight-light">"ООО "АВТО ДРАЙВ"</span></span>
      <v-text-field
        solo-inverted
        flat
        hide-details
        label="Поиск по CRM"
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
        <template >

          <v-list-item v-for="item in items" :key="item.i" router :to="item.route">
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
      <router-view></router-view>
    </v-content>
  </v-app>
</template>



<script>

 
  export default {
    name: 'App',
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      items: [
  {
    route: '/admin/main',
    text: 'Главная',
    icon: 'waves'
  },
  {
    route: '/admin/Vehicle/all',
    text: 'Автомобили',
    icon: 'waves'
  },
  {
    route: '/admin/VehicleMaintenance/all',
    text: 'Техобслуживание',
    icon: 'waves'
  },
  {
    route: '/admin/VehicleSms/all',
    text: 'Двигатель',
    icon: 'waves'
  },
  {
    route: '/admin/VehicleOwner/all',
    text: 'Владельцы',
    icon: 'waves'
  },
  {
    route: '/admin/UserDriverProfile/all',
    text: 'Клиенты',
    icon: 'waves'
  },
  {
    route: '/admin/UserProfile/all',
    text: 'Сотрудники',
    icon: 'waves'
  },
  {
    route: '/admin/UserComment/all',
    text: 'Комментарии',
    icon: 'waves'
  },
  {
    route: '/admin/UserSms/all',
    text: 'История SMS',
    icon: 'waves'
  },
  {
    route: '/admin/Account/all',
    text: 'Счета',
    icon: 'waves'
  },
  {
    route: '/admin/AccountBill/all',
    text: 'Приход-расход',
    icon: 'waves'
  },
  {
    route: '/admin/AccountBillItem/all',
    text: 'Статьи',
    icon: 'waves'
  },
  {
    route: '/admin/Bill/all',
    text: 'Транзакции',
    icon: 'waves'
  },
  {
    route: '/admin/FineBillGrid/all',
    text: 'Неоплаченые штрафы',
    icon: 'waves'
  },
  {
    route: '/admin/BillItem/RentBillItemGrid/all',
    text: 'Тарифы',
    icon: 'waves'
  },
  {
    route: '/admin/Stock/all',
    text: 'Номенклатура',
    icon: 'waves'
  },
  {
    route: '/admin/StockSupplier/all',
    text: 'Контрагенты',
    icon: 'waves'
  },
  {
    route: '/admin/StockInvoice/PurchaseInvoiceGrid/all',
    text: 'Накладные приходные',
    icon: 'waves'
  },
  {
    route: '/admin/StockInvoice/SalesInvoiceGrid/all',
    text: 'Накладные расходные',
    icon: 'waves'
  },
  {
    route: '/admin/reports/MainReport',
    text: 'Отчёт общий',
    icon: 'waves'
  },
  {
    route: '/admin/reports/VehicleDriverReport',
    text: 'Отчет по выручке в разрезе по водителям',
    icon: 'waves'
  },
  {
    route: '/admin/reports/VehicleReport',
    text: 'Отчет по автомобилям',
    icon: 'waves'
  },
  {
    route: '/admin/reports/DriverReport',
    text: 'Отчет по водителям',
    icon: 'waves'
  },
  {
    route: '/admin/reports/StockReport',
    text: 'Отчёт по складу',
    icon: 'waves'
  },
  {
    route: '/admin/reports/accountReport',
    text: 'По кассовым счетам',
    icon: 'waves'
  },
  {
    route: '/admin/gps_map',
    text: 'Карта',
    icon: 'waves'
  },
  {
    route: '/admin/UserCompanyBill/all',
    text: 'Платежи',
    icon: 'waves'
  },
  {
    route: '/admin/UserCompany/',
    text: 'Настройки',
    icon: 'waves'
  },
  {
    route: '/admin/content/support',
    text: 'Поддержка',
    icon: 'waves'
  }
      ]
    })
  }
</script>
<style scoped>
#keep .v-navigation-drawer__border {
  display: none
}
</style>

