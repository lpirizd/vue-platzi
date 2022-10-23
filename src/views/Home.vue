<template>
  <div>
    <scale-loader :loading="cargando" :color="'#68d391'" :size="100" />
    <px-assets-table v-if="!cargando" :assets="assets" />
  </div>
</template>

<script>
import api from "@/api";
import PxAssetsTable from "@/components/PxAssetsTable";

export default {
  name: "Home",
  components: { PxAssetsTable },
  data() {
    return {
      cargando: false,
      assets: [],
    };
  },

  created() {
    this.cargando = true;
    api
      .getAssets()
      .then((assets) => (this.assets = assets))
      .finally(() => (this.cargando = false));
  },
};
</script>
