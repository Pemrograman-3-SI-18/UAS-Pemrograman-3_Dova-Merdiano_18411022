<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-page padding class="items-center-justify-center bg-grey-3">
    <q-card flat class="bg-white q-pa-md">
      <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-blue-grey-14">Tambah Data Sepeda</span>
      </span>
      <div class="q-pa-md">
        <q-form
          @submit="onSubmit"
          class="q-gutter-md"
        >
          <q-input
            label="Kode Sepeda"
            lazy-rules
            color="teal"
            v-model="form.kodeSepeda"
            :rules="[
           val => val !== null && val !== '' || 'Kode Sepeda Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="dns"/>
            </template>
          </q-input>

          <q-input
            label="Type Sepeda"
            lazy-rules
            color="teal"
            v-model="form.typeSepeda"
            :rules="[
           val => val !== null && val !== '' || 'Judul Sepeda Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="title"/>
            </template>
          </q-input>

          <q-input
            label="Merk"
            lazy-rules
            color="teal"
            v-model="form.merk"
            :rules="[
           val => val !== null && val !== '' || 'Merk Sepeda Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="menu_book"/>
            </template>
          </q-input>

          <q-input
            label="Stok Barang"
            lazy-rules
            color="teal"
            v-model="form.stok"
            :rules="[
           val => val !== null && val !== '' || 'Stok Barang Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="person"/>
            </template>
          </q-input>

          <q-input
            label="Harga Sepeda"
            lazy-rules
            color="teal"
            v-model="form.hargaSepeda"
            :rules="[
           val => val !== null && val !== '' || 'Harga Sepeda Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="attach_money"/>
            </template>
          </q-input>

          <q-input
            lazy-rules
            hint="Pilih gambar"
            type="file"
            ref="file"
            @input="selectFile()"
            color="teal"
            :rules="[
           val => val !== null && val !== '' || 'Gambar Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="add_photo_alternate"/>
            </template>
          </q-input>

          <div>
            <q-btn
              unelevated
              icon="add"
              label="Tambah Data Sepeda"
              style="height: 50px"
              type="submit"
              color="teal-6"/>
          </div>

        </q-form>
      </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      form: {
        kodeSepeda: null,
        typeSepeda: null,
        merk: null,
        stok: null,
        hargaSepeda: null
      },
      gambar: null
    }
  },
  methods: {
    selectFile () {
      this.gambar = this.$refs.file.$refs.input.files[0]
    },
    onSubmit () {
      const formData = new FormData()
      formData.append('gambar', this.gambar)
      formData.append('kodeSepeda', this.form.kodeSepeda)
      formData.append('typeSepeda', this.form.typeSepeda)
      formData.append('merk', this.form.merk)
      formData.append('stok', this.form.stok)
      formData.append('hargaSepeda', this.form.hargaSepeda)
      this.$axios.post('/sepeda/input', formData)
        .then((res) => {
          if (res.data.error) {
            this.$q.notify({
              color: 'negative',
              message: res.data.msg,
              icon: 'ion-close'
            })
          } else {
            this.$q.notify({
              color: 'positive',
              message: res.data.msg,
              icon: 'ion-close'
            })
            this.$router.push('/')
          }
        })
    }
  }
}
</script>

<style scoped>

</style>
