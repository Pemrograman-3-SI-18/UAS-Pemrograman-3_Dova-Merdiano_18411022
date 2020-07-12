<template>
  <q-page >
    <div class="q-pa-md">
      <q-table
        title="Treats"
        :data="data"
        :columns="columns"
        row-key="id"
        :filter="filter"
        :loading="loading"
      >

        <template v-slot:top>
          <q-btn color="teal" :disable="loading" label="Tambah Data Sepeda" to="/inputdata" />
          <!-- <q-btn class="q-ml-sm" color="primary" :disable="loading" label="Remove row" @click="removeRow" /> -->
          <q-space />
          <q-input borderless dense debounce="300" color="primary" v-model="filter">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>

        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="kodeSepeda" :props="props">
              {{ props.row.kodeSepeda }}
            </q-td>
            <q-td key="typeSepeda" :props="props">{{ props.row.typeSepeda }}</q-td>
            <q-td key="merk" :props="props">{{ props.row.merk }}</q-td>
            <q-td key="stok" :props="props">{{ props.row.stok }}</q-td>
            <q-td key="hargaSepeda" :props="props">{{ props.row.hargaSepeda }}</q-td>
            <q-td key="gambar" :props="props">
              <q-img :src="baseUrl + props.row.gambar" style="width: 50px; height: 50px"/>
            </q-td>
            <q-td key="action" :props="props">
              <div class="justify-center q-gutter-x-xs">
                <q-btn color="teal"
                       dense size="sm"
                       class="q-px-xs"
                       icon="edit"
                       @click="edit(props.row.kodeSepeda)"
                       label="Edit"></q-btn>
                <q-btn
                  color="red"
                  dense
                  size="sm"
                  @click="hapusDataSepeda(props.row._id)"
                  class="q-px-xs"
                  icon="delete"
                  label="Hapus"></q-btn>
              </div>
            </q-td>
          </q-tr>
        </template>

      </q-table>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      baseUrl: 'http://localhost:7575/gambar/',
      loading: false,
      filter: '',
      rowCount: 10,
      columns: [
        {
          name: 'kodeSepeda',
          required: true,
          label: 'Kode Sepeda',
          align: 'left',
          field: row => row.kodeSepeda,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'typeSepeda', align: 'center', label: 'Type Sepeda', field: 'typeSepeda', sortable: true },
        { name: 'merk', align: 'center', label: 'Merk Sepeda', field: 'merk', sortable: true },
        { name: 'stok', label: 'Stok Barang', align: 'center', field: 'stok' },
        { name: 'hargaSepeda', label: 'Harga Sepeda', align: 'center', field: 'hargaSepeda' },
        { name: 'gambar', label: 'Gambar', align: 'center', field: 'gambar' },
        { name: 'action', align: 'center', label: 'Action', field: 'action', sortable: true }
      ],

      data: []
    }
  },

  methods: {
    // emulate fetching data from server
    getDataSepeda () {
      this.$axios.get('/sepeda/datasepeda')
        .then((res) => {
          this.data = res.data.data
        })
    },
    hapusDataSepeda (_id) {
      this.$axios.delete('/sepeda/hapus/' + _id)
        .then((res) => {
          this.$q.notify({
            color: 'positive',
            message: 'Barhasil Menghapus Data'
          })
          this.getDataSepeda()
        })
    },
    edit (kodeSepeda) {
      this.$router.push('/editdata/' + kodeSepeda)
    }
  },
  mounted () {
    this.getDataSepeda()
  }
}
</script>
