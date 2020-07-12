<template>
  <q-page>
    <div class="q-pa-md">
      <div class="row">

        <div class="col-md-4 col-xs-12 q-pa-md" v-for="(sepeda, i) in data" :key="i">
          <q-card flat class="bg-white text-blue-grey-14">
            <q-card-section>
              <div class="text-h6">
                {{ sepeda.kodeSepeda }}
              </div>
              <div>
                {{ sepeda.typeSepeda }}
              </div>
            </q-card-section>
            <div >
              <q-card-section class="row items-center justify-center">
                <q-img spinner-color="white" style="height: 100%; max-width: 100%" :src="baseUrl + sepeda.gambar"/>
              </q-card-section>
            </div>
            <q-card-section>
              <div>
                <table>
                  <tr>
                    <td>
                      Harga
                    </td>
                    <td>:</td>
                    <td>
                      Rp. {{ sepeda.hargaSepeda }}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Merk
                    </td>
                    <td>:</td>
                    <td>
                      {{ sepeda.merk }}
                    </td>
                  </tr>
                  <tr>
                  <tr>
                    <td>
                      Stok Barang
                    </td>
                    <td>:</td>
                    <td>
                      {{ sepeda.stok }}
                    </td>
                  </tr>
                  <tr>

                  </tr>
                </table>
              </div>
            </q-card-section>
            <q-card-section>
              <q-btn unelevated color="teal" icon="add_shopping_cart" no-caps label="Tambah Ke Keranjang"></q-btn>
            </q-card-section>
          </q-card>
        </div>

      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'DataBuku',
  data () {
    return {
      data: [],
      baseUrl: 'http://localhost:7575/gambar/'
    }
  },
  methods: {
    getDataSepeda () {
      this.$axios.get('/sepeda/datasepeda')
        .then((res) => {
          this.data = res.data.data
        })
    }
  },
  mounted () {
    this.getDataSepeda()
  }
}
</script>

<style scoped>

</style>
